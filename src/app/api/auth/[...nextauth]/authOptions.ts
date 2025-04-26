import { connectDB } from "@/lib/connectDB";
import { userModel } from "@/models/user.model";
import bcrypt from "bcryptjs";
import { NextAuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          placeholder: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          placeholder: "Password",
          type: "password",
        },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ): Promise<User | null> {
        try {
          if (!credentials || !credentials?.email || !credentials?.password) {
            throw new Error(`Please enter all credentials`);
          }
          const { email, password: Cpassword } = credentials;
          const user = await userModel.findOne({ email: email });
          if (!user) {
            throw new Error(`Invalid credentials`);
          }
          const { password, name, role, _id } = user;
          const isMatch = await bcrypt.compare(Cpassword, password);
          if (!isMatch) {
            throw new Error(`Invalid credentials`);
          }
          return {
            _id : _id.toString(),
            role,
            name,
            email,
          };
        } catch (error) {
          console.log(`Error during sign in -> ${error}`);
          return null;
        }
      },
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ profile, account, user }) {
      console.log("Account -> " , account)
      console.log("User -> " , user)
      console.log("Profile -> " , profile)
      await connectDB();
    
      if (account?.provider === "google") {
        const existingUser = await userModel.findOne({ email: profile?.email });
    
        if (!existingUser) {
          const newUser = await userModel.create({
            name: profile?.name,
            email: profile?.email,
          });
          user._id = newUser._id.toString()
        } else {
          user._id = existingUser._id.toString();
        }
    
        user.image = profile?.picture;
      }
      console.log("User -> " , user)
      return true;
    },
    
    async jwt({ user, token }) {
      if (user) {
        (token._id = user._id),
          (token.name = user.name),
          (token.email = user.email),
          (token.image = user.image);
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        (session.user._id = token._id),
          (session.user.name = token.name),
          (session.user.email = token.email),
          (session.user.image = token.image);
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
};
