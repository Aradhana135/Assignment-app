import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  PoweroffOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { Button, Table, Modal, Typography, Alert } from "antd";
const { Text } = Typography;
function Home(props) {
  const navigate = useNavigate();
  const [loadingData, setLoadingData] = useState(true);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [viewData, setViewData] = useState({});
  const [LogoutValidation, setLogoutValidation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingData(false);
    }, 1000);
  });

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
              onClick={() => showModal(record)}
              style={{ color: "blue", marginRight: 10 }}
            />

            <EditOutlined
              onClick={(e) => {
                e.preventDefault();
                props.handleData(record);
                navigate("/edit");
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
        props.handleDelete(record);
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
          type="primary"
          onClick={(e) => {
            e.preventDefault();

            navigate("/add");
          }}
          style={{ color: "blue", marginBottom: 10, marginTop: 5 }}
          icon={<UserAddOutlined />}
        >
          Add
        </Button>

        <Button
        type='primary'
          onClick={(e) => {
            e.preventDefault();
            setLogoutValidation(true);
            setTimeout(() => {
              navigate("/login");
            }, 1000);
          }}
          style={{ color: "blue", marginTop: 10, marginLeft: 1250 }}
          icon={<PoweroffOutlined />}
        >
          Logout
        </Button>

        {LogoutValidation && (
          <Alert message="Logout Successfull" type="success" />
        )}
        {console.log("logout", LogoutValidation)}
        <div>
          <center>
            {" "}
            <h1>
              <Text strong style={{ color: "orange" ,fontFamily:'sans-serif'}}>
                Student Details{" "}
              </Text>
            </h1>
          </center>
          <Table
            columns={columns}
            dataSource={props.appData}
            pagination={true}
            loading={loadingData}
          ></Table>
        </div>
        {console.log("loading", loadingData)}
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
          <Typography.Paragraph> ID: {viewData.id} </Typography.Paragraph>
          <Typography.Paragraph> Name: {viewData.name}</Typography.Paragraph>
          <Typography.Paragraph> Email: {viewData.email}</Typography.Paragraph>
          <Typography.Paragraph>
            {" "}
            Address: {viewData.address}
          </Typography.Paragraph>
        </Modal>
      </header>
    </div>
  );
}

export default Home;
