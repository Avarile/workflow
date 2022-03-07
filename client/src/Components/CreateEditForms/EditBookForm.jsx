import React from "react"
import { Formik } from "formik"
import { object, required, string, date, number, bool, max, min, email, mixed } from "yup"
import { Form, Col, Button, Spinner } from "react-bootstrap"
import styled from "styled-components"
import { useSelector } from "react-redux"
import axios from "axios"
import { host } from "../../Utls/constants"

// Validation

const schema = object().shape({
  user: string().required(),
  name: string().required(),
  auther: string().required(),
  category: mixed().required().oneOf[("Horror", "Drama", "Fiction")],
  terms: bool().required().oneOf([true], "Terms must be accepted"),
})
//

export const EditBookForm = ({ open, setOpen }) => {
  const users = useSelector((state) => state.allUsers.users)
  const book = useSelector((state) => state.selectedBook.setSelectedBook)

  console.log(book)

  const EditBookHandler = (book, setSubmitting, resetForm) => {
    const url = `${host}/books/${book._id}`

    setTimeout(async () => {
      //delayed for simulate the true condition
      const response = await axios.put(url, book)
      if (response.status === 409) {
        alert("Cannot have the Same Book name/auther Combination!")
      }
      setSubmitting(false)
      resetForm()
      window.location.reload()
    }, 3000)
  }

  return (
    <RootContainer>
      <Formik
        validationSchema={schema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true)
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2))
          //   resetForm()
          //   setSubmitting(false)
          // }, 5000)
          EditBookHandler(values, setSubmitting, resetForm)
        }}
        initialValues={{
          user: book.user,
          name: book.name,
          auther: book.auther,
          category: book.category,
          terms: false,
        }}>
        {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, isSubmitting }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Col className="mb-3">
              <Form.Group as={Col} md="12" controlId="user">
                <Form.Label>User Who belonged to </Form.Label>

                <Form.Select
                  placeholder="User"
                  type="text"
                  name="user"
                  value={values.user}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.user && !errors.user}
                  isInvalid={!!errors.user}>
                  <option value="">Please Select User</option>
                  {users.map((user) => {
                    return <option value={user.email}>{user.name}</option>
                  })}
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  placeholder="name"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.name && !errors.name}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="auther">
                <Form.Label>Auther</Form.Label>
                <Form.Control
                  placeholder="auther name"
                  type="text"
                  name="auther"
                  value={values.auther}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.auther && !errors.auther}
                  isInvalid={!!errors.auther}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">{errors.auther}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="category">
                <Form.Label>Genre Pick one from Horror, Drama, and Fiction </Form.Label>
                <Form.Select value={values.category} onChange={handleChange} onBlue={handleBlur} isValid={touched.category && !errors.category} isInvalid={!!errors.category}>
                  <option value="">Please Selecte Genre</option>
                  <option value="Drama"> Drama</option>
                  <option value="Horror"> Horror</option>
                  <option value="Fiction"> Fiction</option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">{errors.auther}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Form.Group className="mb-3">
              <Form.Check
                required
                name="terms"
                label="Please make sure all required field is filled properly"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="inValid"
                id="validationFormik"
              />
            </Form.Group>
            <Button type="submit">
              {isSubmitting ? <Spinner as="span" animation="grow" size="sm" role="status" /> : null}
              {isSubmitting ? "Submitting Data" : "Edit Book"}
            </Button>
          </Form>
        )}
      </Formik>
    </RootContainer>
  )
}

const RootContainer = styled.div`
  margin: auto;
  width: 100%;
  padding: 20px;
`
