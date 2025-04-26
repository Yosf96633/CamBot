import { Schema, model, models, Document } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  role: "student" | "faculty";
}

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  role: {
    type: String,
    required: false,
    enum: ["student", "faculty"],
  },

  password: {
    type: String,
    required: false,
  },
});

export const userModel = models.User || model("User", UserSchema);
