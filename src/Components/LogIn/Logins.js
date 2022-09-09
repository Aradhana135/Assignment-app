import React from "react";
import { Button, Form, Input, Alert ,Card} from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Logins = (props) => {
  const navigate = useNavigate();
  //for all the required input field
  const [flag, setFlag] = useState(false);
  //validating email and password of local storage and entered by the user
  const [validation, setValidation] = useState(false);
  const onFinish = (values) => {
    //getting form data from local storage
    // let olddata = localStorage.getItem("formdata");
    // let oldArr = JSON.parse(olddata);
    // comparing login's email & password with local storage email & password
    const x = props.localOldArr.filter(
      (arr) => arr.email === values.email && arr.password === values.password
    );

    if (x.length === 0) {
      setFlag(true);
    } else {
      //validation is true then navigate to home page after 1 sec.
      setValidation(true);
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
  };
  return (
    <Card>
      {/* login form layout */}
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
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
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Login
          </Button>

          <Button
            type="text"
            href="/"
            className="signup-btn-css"
            htmlType="submit"
          >
            Need an account ? SignUp
          </Button>
        </Form.Item>
      </Form>
      {/* if flag is true , then login successfull */}
      {flag && (
        <Alert
          message="Error!! Try again with correct credentials "
          type="error"
          showIcon
        />
      )}
      {/* if validation is true , then login successfull */}
      {validation && <Alert message="login successfull" showIcon />}
      
      </Card>
  );
};

export default Logins;
