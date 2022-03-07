import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose"
import { IUserCreationDocument, IUserDocument, UserModel } from "../models/user.model"

export const UserCreationService = async (input: IUserCreationDocument) => {
  try {
    return await UserModel.create(input)
  } catch (error: any) {
    throw new Error(error)
  }
}

export const UserDeleteService = async (query: FilterQuery<IUserDocument>) => {
  try {
    await UserModel.deleteOne(query)
  } catch (error: any) {
    throw new Error(error)
  }
}

export const UserGetAllService = async () => {
  try {
    return await UserModel.find()
  } catch (error: any) {
    throw new Error(error)
  }
}

export const UserGetOneService = async (query: FilterQuery<IUserDocument>, options: QueryOptions = { lean: true }) => {
  try {
    return await UserModel.findOne(query, {}, options)
  } catch (error: any) {
    throw new Error(error)
  }
}

export const UserEditService = async (query: FilterQuery<IUserDocument>, payload: UpdateQuery<IUserDocument>, tag: { new: boolean }) => {
  try {
    return await UserModel.findOneAndUpdate(query, payload, tag)
  } catch (error: any) {
    throw new Error(error)
  }
}
