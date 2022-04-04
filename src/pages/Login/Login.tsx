import React from "react"
import "antd/dist/antd.css"
import { Form, Input, Button, Checkbox } from "antd"
import Storage from "../../data/dataStore/cache"
import Notification from "../../common/notifications/notification"

const Login = () => {
  //Fake login api
  const fakeLoginApi = (values: { username: string; password: string }) => {
    setTimeout(() => {
      if (values.username === "Avarile" && values.password === "Avarile19840123") {
        Storage.setCacheData("TOKEN", "AvarileToken")
        Notification({ type: "success", message: "Login Success!" })
        return true
      } else {
        Notification({ type: "error", message: "Wrong username or password!" })
      }
    }, 3000)
  }

  const onFinish = (values: any) => {
    fakeLoginApi(values)
  }

  const onFinishFailed = (errorInfo: any) => {
    Notification({ type: "error", message: "Wrong username or password!" })
  }

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#ccccc" }}>
      <Form
        name="Login"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{
          minWidth: "20rem",
          maxWidth: "60rem",
        }}>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
