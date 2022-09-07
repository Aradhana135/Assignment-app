import { useState } from "react";
import "antd/dist/antd.css";
import { Button, Input, Form } from "antd";
import "../styles.css";
import { useNavigate } from "react-router-dom";
const EditDetails = (props) => {
  const navigate = useNavigate();
  const [dataSource, setDataSource] = useState(props.data || {});
  const [editingStudent, setEditingStudent] = useState(null);
  // console.log("data", dataSource);

  // console.log("www", props.data);

  const onFinish = (values) => {
    props.handleAppData(values);
    // console.log("Success:", values);
    setDataSource(values);

    navigate("/home");
  };
  const handleCancel = () => {
    navigate("/home");
  };
  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
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
      initialValues={{
        name: dataSource.name,
        email: dataSource.email,
        address: dataSource.address,
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
        onChange={(e) => {
          setDataSource((pre) => {
            return { ...pre, name: e.target.value };
          });
        }}
      >
        <Input allowClear placeholder="Name" className="input-css" />
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
        value={editingStudent?.email}
        onChange={(e) => {
          setEditingStudent((pre) => {
            return { ...pre, email: e.target.value };
          });
        }}
      >
        <Input allowClear className="input-css" placeholder="Email" />
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
        value={editingStudent?.address}
        onChange={(e) => {
          setEditingStudent((pre) => {
            return { ...pre, address: e.target.value };
          });
        }}
      >
        <Input allowClear className="input-css" placeholder="Address" />
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
        <Button
          type="primary"
          htmlType="submit"
          onClick={handleCancel}
          className="Button-css"
        >
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditDetails;
