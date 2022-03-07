import { object, number, string, TypeOf } from "zod"

const userCreationInputValidation = {
  body: object({
    _id: string({}),
    name: string({
      required_error: "name is required",
    }),
    email: string({
      required_error: "email is required",
    }).email({
      message: "Invalidate email",
    }),
    dob: string({}),
    phone: number({}),
  }),
}

const userCreationInputValidationSchema = object({
  ...userCreationInputValidation,
})
export type UserCreationInput = TypeOf<typeof userCreationInputValidationSchema>
