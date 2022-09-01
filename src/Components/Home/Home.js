import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { Button, Table, Modal,  Typography } from "antd";
// import Logins from "../LogIn/Logins";
function Home(props) {
  const navigate = useNavigate()
  
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [viewData, setViewData] = useState({});
  
  const [dataSource, setDataSource] = useState(props.appData);
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
            <EyeOutlined
              onClick={() =>  
                showModal(record)
              
        }
              style={{ color: "blue", marginRight: 10 }}
            />
           
            <EditOutlined
              onClick={(e) => {
                e.preventDefault()
                props.handleData(record)
                navigate('/edit')
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
          onClick={(e) => {
            e.preventDefault()
            // props.handleData(record)
            navigate('/add')}}
          style={{ color: "blue", marginBottom: 10, marginTop: 5 }}
        >
          Add
        </Button>

        <Button type='primary'
          onClick={(e) => {
            e.preventDefault()
            // props.handleData(record)
            navigate('/login')}}
          style={{ color: "blue", marginBottom: 10, marginTop: 80,marginLeft:1150 }}
        >
          Logout
        </Button>
        <Table columns={columns} dataSource={dataSource} ></Table>
        {/* <Modal
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
        > */}
          {/* <Typography.Paragraph >Name
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
        </Modal> */}
        <Modal
          visible={visible}
          title="View"
          onOk={handleOk}
          loading={loading}
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
        {/* <Modal
          visible={isAdd}
          title="Add Student"
          onOk={onAddStudent}
          onCancel={() => setIsAdd(false)}
        >
          <Input size="large" placeholder="ID" prefix={<UserOutlined />} onChange={(e) => setId( e.target.value )}/>
          <Input size="large" placeholder="Name" prefix={<UserOutlined />} onChange={(e) => setName( e.target.value )}/>
          <Input size="large" placeholder="Email" prefix={<UserOutlined />} onChange={(e) => setEmail( e.target.value )}/>
          <Input size="large" placeholder="Address" prefix={<UserOutlined />} onChange={(e) => setAddress( e.target.value )}/>
        
        </Modal> */}
      </header>
    </div>
  );
}

export default Home;
