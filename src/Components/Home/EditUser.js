import { useState } from "react";
import "antd/dist/antd.min.css";
import "../styles.css";
import { useNavigate } from "react-router-dom";
import MyForm from "./AddEditForm";
const EditDetails = (props) => {
  const navigate = useNavigate();
  //fetched user data
  const [dataSource, setDataSource] = useState(props.data || {});

  const onFinish = (values) => {
    //passing edited value
    props.handleEditData(values);
    //datasource will be new edited data
    setDataSource(values);
    //on successfull edition navigate to home page
    navigate("/users");
  };
  const handleCancel = () => {
    //on cancel navigate to home page
    navigate("/users");
  };

  return (
    <>
      <MyForm
        onFinish={onFinish}
        cancel={handleCancel}
        dataSource={dataSource}
        formFor="edit"
      />
    </>
  );
};

export default EditDetails;
