import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  PoweroffOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.min.css";
import { Button, Table, Modal, Typography, Alert } from "antd";
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
              className={"eyeOutline"}
            />

            <EditOutlined
              className="editOutlined-css"
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
              className="deleteOutlined-css"
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
    <div>
      <Button
        type="primary"
        onClick={(e) => {
          e.preventDefault();

          navigate("/add");
        }}
        className="add-button-css"
        icon={<UserAddOutlined />}
      >
        Add
      </Button>

      <Button
        type="primary"
        onClick={(e) => {
          e.preventDefault();
          setLogoutValidation(true);
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        }}
        className="button-logout"
        icon={<PoweroffOutlined />}
      >
        Logout
      </Button>

      {LogoutValidation && (
        <Alert message="Logout Successfull" type="success" />
      )}

      <div>
        <h1 className="text-tittle">Student Details</h1>

        <Table
          columns={columns}
          dataSource={props.appData}
          pagination={true}
          loading={loadingData}
          key={props.appData.id}
        ></Table>
      </div>

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
    </div>
  );
}

export default Home;
