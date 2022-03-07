import React from "react"
import { Formik } from "formik"
import { object, required, string, date, number, bool, max, min, email } from "yup"
import { isDate, parse } from "date-fns"
import { Form, Button, Row, Col, InputGroup, Spinner } from "react-bootstrap"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import axios from "axios"
import { host } from "../../Utls/constants"

// Validation

const parseDateString = (passedValue) => {
  const parseDate = isDate(passedValue) ? passedValue : parse(passedValue, "yyyy-MM-dd", new Date())

  return parseDate
}

const today = new Date() // You cannot born after today

const schema = object().shape({
  name: string().required(),
  email: string().email().required(),
  dob: date().transform(parseDateString).max(today),
  phone: number(),
  terms: bool().required().oneOf([true], "Terms must be accepted"),
})
//

export const CreateUserForm = ({ open, setOpen }) => {
  const dispatch = useDispatch()

  const CreateUserHandler = (user, setSubmitting, resetForm) => {
    const url = `${host}/users`

    setTimeout(async () => {
      //delayed for simulate the true condition

      const response = await axios.post(url, user)
      if (response.status === 409) {
        console.log(response)
        alert("Duplicated user Email")
      }
      console.log("User Created")
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
          CreateUserHandler(values, setSubmitting, resetForm)
        }}
        initialValues={{
          name: "",
          email: "",
          dob: "",
          phone: "",
          terms: false,
        }}>
        {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, isSubmitting }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Col className="mb-3">
              <Form.Group as={Col} md="12" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  placeholder="Name"
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

              <Form.Group as={Col} md="12" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder="JohnDoe@example.com"
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.email && !errors.email}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="dob">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control placeholder="yyyy-mm-dd" type="text" name="dob" value={values.dob} onChange={handleChange} onBlur={handleBlur} isValid={!errors.dob} isInValid={!!errors.dob} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">{errors.dob}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" name="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} isValid={!errors.phone} isInValid={!!errors.phone} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Form.Group className="mb-3">
              <Form.Check
                required
                name="terms"
                label="Please make sure all required fills filed, and data all valid"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="inValid"
                id="validationFormik"
              />
            </Form.Group>
            <Button type="submit">
              {isSubmitting ? <Spinner as="span" animation="grow" size="sm" role="status" /> : null}
              {isSubmitting ? "Submitting Data" : "Create User"}
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
