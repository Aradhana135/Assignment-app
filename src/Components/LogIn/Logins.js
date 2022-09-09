import React from "react";
import { Button, Form, Input, Alert, Card } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
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
      localStorage.setItem("login", true);
      setValidation(true);
      setFlag(false);
      setTimeout(() => {
        navigate("/users");
      }, 1000);
    }
  };
  return (
    <div>
   <div className="form-cls">
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
          // label="E-mail"
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
          <Input prefix={<UserOutlined  />}placeholder='Enter Email'/>
        </Form.Item>

        <Form.Item
          // label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined/>} placeholder='Enter password' />
        </Form.Item>

        <Form.Item
        // wrapperCol={{
        //   offset: 8,
        //   span: 16,
        // }}
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
      </Card>
      </div>
      <div className="alert-msg-cls">
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
      </div>
      </div>
  );
};

export default Logins;
