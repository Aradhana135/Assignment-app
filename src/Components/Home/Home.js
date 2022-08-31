import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  EditOutlined,
  DeleteOutlined,
  FolderViewOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { UserOutlined } from '@ant-design/icons';
import { Button, Table, Modal, Input, Typography } from "antd";
import Logins from "../LogIn/Logins";
function Home(props) {
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false);

  const [editingStudent, setEditingStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [viewData, setViewData] = useState({});
  const [isAdd, setIsAdd] = useState(false);
  const[id,setId]=useState('')
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[address,setAddress]=useState('')

  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "John",
      email: "john@gmail.com",
      address: "John Address",
    },
    {
      id: 2,
      name: "David",
      email: "david@gmail.com",
      address: "David Address",
    },
    {
      id: 3,
      name: "James",
      email: "james@gmail.com",
      address: "James Address",
    },
    {
      id: 4,
      name: "Sam",
      email: "sam@gmail.com",
      address: "Sam Address",
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Address",
      dataIndex: "address",
    },
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <FolderViewOutlined
              onClick={() =>  
                showModal(record)
              
        }
              style={{ color: "blue", marginRight: 10 }}
            />
            {/* <Button onClick={(e) => {
              e.preventDefault()
              props.handleData(record)
              navigate('/edit')
            }}>Edit</Button> */}
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onAddStudent = () => {
    const newStudent = {
      id: id,
      name: name,
      email: email,
      address: address,
    };
    setDataSource((pre) => {
      return [...pre, newStudent];
    });
  };
  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };

  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };

  const showModal = (record) => {
    setVisible(true);
    setViewData(record);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button
          onClick={() => setIsAdd(true)}
          style={{ color: "blue", marginBottom: 10, marginTop: 20 }}
        >
          Add a new Student
        </Button>
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit Student"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((student) => {
                if (student.id === editingStudent.id) {
                  return editingStudent;
                } else {
                  return student;
                }
              });
            });
            resetEditing();
          }}
        >
          <Typography.Paragraph >Name
          <Input
            value={editingStudent?.name}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          /></Typography.Paragraph>
          <Typography.Paragraph >Email
          <Input
            value={editingStudent?.email}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          /></Typography.Paragraph>
          <Typography.Paragraph > Address
          <Input
            value={editingStudent?.address}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, address: e.target.value };
              });
            }}
          /></Typography.Paragraph>
        </Modal>
        <Modal
          visible={visible}
          title="View"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Return
            </Button>,
          ]}
        >
        < Typography.Paragraph> ID: {viewData.id} </Typography.Paragraph>
        < Typography.Paragraph> Name: {viewData.name}</Typography.Paragraph>
        < Typography.Paragraph> Email: {viewData.email}</Typography.Paragraph>
        < Typography.Paragraph> Address: {viewData.address}</Typography.Paragraph>
        </Modal>
        <Modal
          visible={isAdd}
          title="Add Student"
          onOk={onAddStudent}
          onCancel={() => setIsAdd(false)}
        >
          <Input size="large" placeholder="ID" prefix={<UserOutlined />} onChange={(e) => setId( e.target.value )}/>
          <Input size="large" placeholder="Name" prefix={<UserOutlined />} onChange={(e) => setName( e.target.value )}/>
          <Input size="large" placeholder="Email" prefix={<UserOutlined />} onChange={(e) => setEmail( e.target.value )}/>
          <Input size="large" placeholder="Address" prefix={<UserOutlined />} onChange={(e) => setAddress( e.target.value )}/>
        
        </Modal>
      </header>
    </div>
  );
}

export default Home;
