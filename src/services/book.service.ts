import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose"
import { BookModel, IBookCreationDocument, IBookDocument } from "../models/book.model"

export const BookCreationService = async (input: IBookCreationDocument) => {
  try {
    return await BookModel.create(input)
  } catch (error: any) {
    throw new Error(error)
  }
}

export const BookQueryService = async (query: FilterQuery<IBookDocument>, options: QueryOptions = { lean: true }) => {
  try {
    return await BookModel.findOne(query, {}, options)
  } catch (error: any) {
    throw new Error(error)
  }
}

export const BookGetAllService = async () => {
  try {
    return await BookModel.find()
  } catch (error: any) {
    throw new Error(error)
  }
}

export const BookGetOneService = async (input: string) => {
  try {
    return await BookModel.findById(input)
  } catch (error: any) {
    throw new Error(error)
  }
}

export const BookEditService = async (query: FilterQuery<IBookDocument>, payload: UpdateQuery<IBookDocument>, tag: { new: boolean }) => {
  try {
    return await BookModel.findOneAndUpdate(query, payload, tag)
  } catch (error: any) {
    throw new Error(error)
  }
}

export const BookDeleteService = async (query: FilterQuery<IBookDocument>) => {
  try {
    return await BookModel.deleteOne(query)
  } catch (error: any) {
    throw new Error(error)
  }
}
