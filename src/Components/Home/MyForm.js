import React, { useState } from "react";
import { Button, Input, Form } from "antd";

function MyForm(props) {
  const [, setName] = useState("");
  const [, setEmail] = useState("");
  const [, setAddress] = useState("");

  return (
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
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
        onChange={(e) => setName(e.target.value)}
      >
        <Input allowClear className="input-css" placeholder="Name" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
        onChange={(e) => setEmail(e.target.value)}
      >
        <Input Input allowClear className="input-css" placeholder="Email" />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: "Please input your address!",
          },
        ]}
        onChange={(e) => setAddress(e.target.value)}
      >
        <Input Input allowClear className="input-css" placeholder="Address" />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
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
  );
}

export default MyForm;
