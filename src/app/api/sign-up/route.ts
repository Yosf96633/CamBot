import { NextRequest, NextResponse } from "next/server";
import { SignUpSchema } from "@/zodSchemas/signUp";
import { connectDB } from "@/lib/connectDB";
import { userModel } from "@/models/user.model";
import bcrypt from "bcryptjs";
export const POST = async (req: NextRequest) => {
  try {
    await connectDB()
    const body = await req.json()
    const result = SignUpSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { sucess: false, message: `Enter valid credentials` },
        { status: 400 }
      );
    }
    const { name, email, password, role } = result.data;
    const isExist = await userModel.findOne({ email: email });
    if (isExist) {
      return NextResponse.json(
        { sucess: false, message: `${email} already exist` },
        { status: 400 }
      );
    }
    const hashPassword = await bcrypt.hash(password, 12);

    const user = await userModel.create({
      name: name,
      email: email,
      password: hashPassword,
      role: role,
    });
    if (!user) {
      return NextResponse.json(
        { sucess: false, message: `Error while sign up user` },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { sucess: true, message: `Sign up successfull` },
      { status: 200 }
    );
  } catch (error) {
    console.log(`Error at sign-up POST route -> ${error}`);
    return NextResponse.json(
      { sucess: false, message: `Internal server error` },
      { status: 500 }
    );
  }
};
