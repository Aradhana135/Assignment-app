//Form for add and edit user
import React from "react";
import { Button, Input, Form } from "antd";
import '../styles.css';
function MyForm(props) {
  return (
    <div className="div-cls">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={props.onFinish}
        autoComplete="off"
        initialValues={{
          name: props.dataSource ? props.dataSource.name : "",
          email: props.dataSource ? props.dataSource.email : "",
          address: props.dataSource ? props.dataSource.address : "",
        }}
      >
        <Form.Item
          // label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input allowClear className="input-css" placeholder="Name" />
        </Form.Item>

        <Form.Item
          // label="Email"
          type="email"
          name="email"
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
          <Input Input allowClear className="input-css" placeholder="Email" />
        </Form.Item>
        <Form.Item
          // label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your address!",
            },
          ]}
        >
          <Input Input allowClear className="input-css" placeholder="Address" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 0,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="primary" onClick={props.cancel} className="Button-css">
            Cancel
          </Button>
        </Form.Item>
      </Form>
      </div>
  );
}

export default MyForm;
