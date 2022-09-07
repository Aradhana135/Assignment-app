import "antd/dist/antd.css";
import { Button, Input, Form } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles.css";
const AddDetails = (props) => {
  const navigate = useNavigate();

  const [dataSource, setDataSource] = useState(props.data || {});

  const [, setName] = useState("");
  const [, setEmail] = useState("");
  const [, setAddress] = useState("");

  const onFinish = (values) => {
    props.handleAdd(values);

    setDataSource(values);

    navigate("/home");
  };
  const cancel = () => {
    navigate("/home");
  };
  const onFinishFailed = (errorInfo) => {};
  return (
    <div>
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
          <Button type="primary" onClick={cancel} className="Button-css">
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AddDetails;
