import React from "react"
import { Formik } from "formik"
import { object, required, string, date, number, bool, max, min, email } from "yup"
import { isDate, parse } from "date-fns"
import { Form, Button, Row, Col, InputGroup, Spinner } from "react-bootstrap"
import styled from "styled-components"
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

export const EditUserForm = ({ open, setOpen, user }) => {
  // Global Data access

  console.log(user)

  const EditUserHandler = async (user, setSubmitting, resetForm) => {
    const url = `${host}/users/${user._id}`

    const bodyPayload = {
      name: user.name,
      email: user.email,
      dob: user.dob,
      phone: user.phone,
    }
    // so we dont include the term value given by formik

    setTimeout(() => {
      //delayed for simulate the true condition
      try {
        const response = axios.put(url, bodyPayload)
        // body data type must match "Content-Type" header
        console.log(response)
        setSubmitting(false)
        resetForm()
        window.location.reload()
      } catch (error) {
        console.error("User Creation went wrong :", error)
        resetForm()
      }
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
          EditUserHandler(values, setSubmitting, resetForm)
        }}
        initialValues={{
          name: user.name,
          email: user.email,
          dob: user.dob,
          phone: user.phone,
          terms: false,
        }}>
        {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, isSubmitting }) => (
          <Form noValidate onSubmit={handleSubmit}>
            {console.log(values)}
            <Col className="mb-3">
              <Form.Group as={Col} md="12" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="JohnDoe" type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} isValid={!errors.name} isInvalid={!!errors.name} />
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
                <Form.Label>Date of Birth(yyyy-mm-dd)</Form.Label>
                <Form.Control
                  placeholder="yyyy-mm-dd"
                  type="text"
                  name="dob"
                  value={values.dob}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.dob && !errors.dob}
                  isInvalid={!!errors.dob}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">{errors.dob}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" name="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} isValid={!errors.phone} isInvalid={!!errors.phone} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Form.Group className="mb-3">
              <Form.Check
                required
                name="terms"
                label="EVERYTHING NEEDS TO BE LOOK GOOD OR YOU MAY MISSED SOMETHING OR SOMETHING NOT VALID"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="inValid"
                id="validationFormik"
              />
            </Form.Group>
            <Button type="submit">
              {isSubmitting ? <Spinner as="span" animation="grow" size="sm" role="status" /> : null}
              {isSubmitting ? "Submitting Data" : "Edit User"}
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
