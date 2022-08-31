import { useState } from "react";

import { Link } from "react-router-dom";
import {
  EditOutlined,
  DeleteOutlined,
  FolderViewOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { UserOutlined } from '@ant-design/icons';
import { Button, Table, Modal, Input, Typography,Form } from "antd";
import Home from './Home'
const Edit = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [dataSource, setDataSource] = useState(props.data || {})
    const [editingStudent, setEditingStudent] = useState(null);
    console.log('data',dataSource)
    const [isAdd, setIsAdd] = useState(false);
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[address,setAddress]=useState('')
  console.log('www', props.data)

  const onEditStudent = (record) => {

    setEditingStudent({ ...record });
  };
      const onFinish = (values) => {
        console.log('Success:', values);
        setDataSource(values)
        localStorage.setItem(values.email, JSON.stringify(values))
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
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
        address: dataSource.address
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
            message: 'Please input your name!',
          },
        ]}
    
        onChange={(e) => {
              setDataSource((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
        value={editingStudent?.email}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: 'Please input your address!',
          },
        ]}
        value={editingStudent?.address}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, address: e.target.value };
              });
            }}
      >
        <Input />
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
  )
}

export default Edit