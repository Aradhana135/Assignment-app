import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import "antd/dist/antd.min.css";
import { Button, Table, Modal, Typography } from "antd";
import Navbar from "./Navbar";
function Users(props) {
  const navigate = useNavigate();
  //for adding loading icon while loading the data into the table
  const [loadingData, setLoadingData] = useState(true);
  //flag for visible data of view component
  const [visible, setVisible] = useState(false);
  //storing data that to be visible
  const [viewData, setViewData] = useState({});
  
  useEffect(() => {
    setTimeout(() => {
      setLoadingData(false);
    }, 1000);
  });
  //coloms of table
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
            {/* rendering EyeOutlined component for view  */}
            <EyeOutlined
              onClick={() => showModal(record)}
              className={"eyeOutline"}
            />
            {/* rendering EditOutlined component for edit  */}
            <EditOutlined
              className="editOutlined-css"
              onClick={(e) => {
                e.preventDefault();
                props.handleData(record);
                navigate("/edit");
              }}
            />
            {/* rendering DeleteOutlined component for view  */}
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
  //model for delete
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

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
       <Navbar/>
      

      <h1 className="text-tittle">Student Details</h1>

      <Table
        columns={columns}
        dataSource={props.appData}
        pagination={true}
        loading={loadingData}
        key={props.appData.id}
      ></Table>

      {/* Model for view */}
      <Modal
        visible={visible}
        title="View Details"
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
        ]}
      >
        {/* rendering view data through the Model */}
        <div>
          <Typography.Paragraph> ID: {viewData.id} </Typography.Paragraph>
          <Typography.Paragraph> Name: {viewData.name}</Typography.Paragraph>
          <Typography.Paragraph> Email: {viewData.email}</Typography.Paragraph>
          <Typography.Paragraph>
            Address: {viewData.address}
          </Typography.Paragraph>
        </div>
      </Modal>
    </div>
  );
}

export default Users;
