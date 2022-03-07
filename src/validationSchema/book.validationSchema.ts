import { object, number, string, TypeOf } from "zod"

const bookCreationInput = {
  body: object({
    user: string({
      required_error: "user is required",
    }).email({
      message: "Invalid email address",
    }),
    name: string({
      required_error: "Please provide a book name",
    }),
    auther: string({
      required_error: "Please provide a auther name",
    }),
    category: string({}),
  }),
}

const params = {
  params: object({
    bookId: string({
      required_error: "bookId is required for query-params",
    }),
  }),
}

const bookCreationValidationSchema = object({
  ...bookCreationInput,
})

const bookEditValidationSchema = object({
  ...bookCreationInput,
  ...params,
})

export type BookCreateInput = TypeOf<typeof bookCreationValidationSchema>

export type BookEditInput = TypeOf<typeof bookEditValidationSchema>
