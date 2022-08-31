import React from 'react';
import { Button, Checkbox, Form, Input ,Alert} from 'antd';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Demo2 from '../Home/Home';
import Home from '../Home/Home';
const Logins = () => {

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

const [validation,setValidation]=useState(false);
  const onFinish = (values) => {
    console.log('Success:', values);
    // console.log(values.email)
    // console.log(values.Password)
    // values.preventDefault();
    let pass = localStorage
      .getItem("Password")
      .replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");

  
    
console.log(mail)
console.log(pass)
console.log(values.email)
 console.log(values.Password)
    if (mail!=values.email || pass!=values.Password) {
      setFlag(true);
      console.log("EMPTY");

    } else {
      setHome(false);
      setFlag(false);
      setValidation(true)
    }
  }


  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  
   
  return (

    <div >
       
    {home ? (
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
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]} 
      >
      
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
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
      </Form.Item>
      {flag && (
            <Alert message="Error!! Try again with correct credentials " type="error" showIcon />
          )}

{validation  && (
  <Alert message="login successfull " showIcon />
          )}
        </Form>
      ) : (
        <NavLink to='/home'><Home/></NavLink>
      )}
     </div>
  );
};

export default Logins;