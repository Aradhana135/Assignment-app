import { useState } from "react";

import "antd/dist/antd.css";
import { Button, Input, Form } from "antd";
import { useNavigate } from "react-router-dom";
const Add = (props) => {
  const navigate = useNavigate();

  const [dataSource, setDataSource] = useState(props.data || {});

  console.log("data", dataSource);

  const [, setName] = useState("");
  const [, setEmail] = useState("");
  const [, setAddress] = useState("");
  console.log("www", props.data);

  const onFinish = (values) => {
    props.handleAdd(values);

    console.log("Success:", values);
    setDataSource(values);

    navigate("/home");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
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
        <Input allowClear style={{ width: 400 }} placeholder="Name" />
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
        <Input Input allowClear style={{ width: 400 }} placeholder="Email" />
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
        <Input Input allowClear style={{ width: 400 }} placeholder="Address" />
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
      </Form.Item>
    </Form>
  );
};

export default Add;
