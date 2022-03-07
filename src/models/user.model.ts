import { Schema, model, Document } from "mongoose"

export interface IUserCreationDocument extends Document {
  name: string
  email: string
  dob: string
  phone: number
}

export interface IUserDocument extends IUserCreationDocument, Document {
  createDate: Date
  updateDate: Date
}

const UserSchema = new Schema(
  {
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
    dob: {
      type: String,
    },
    phone: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
)

export const UserModel = model<IUserCreationDocument>("User", UserSchema)
