import mongoose from "mongoose"
import { Schema, model, Document } from "mongoose"
import { IUserCreationDocument } from "./user.model"
import { customAlphabet } from "nanoid"

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz01234567890", 16)

export interface IBookCreationDocument extends Document {
  user: IUserCreationDocument["email"]
  name: string
  auther: string
  category: string
}

export interface IBookDocument extends IBookCreationDocument, Document {
  createDate: Date
  updateDate: Date
}

const BookSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    auther: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: ["Horror", "Drama", "Fiction"],
      required: true,
    },
    bookId: {
      type: String,
      required: true,
      unique: true,
      default: () => `book_${nanoid()}`,
    },
  },
  {
    timestamps: true,
  }
)

BookSchema.index(
  {
    name: 1,
    auther: 1,
  },
  { unique: true }
)

export const BookModel = model<IBookCreationDocument>("Book", BookSchema)
