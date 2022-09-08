import "antd/dist/antd.min.css";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import MyForm from "./AddEditForm";
const AddDetails = (props) => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    //passing added value
    props.handleAdd(values);
    //on successfull addition navigate to home page
    navigate("/home");
  };
  //on cancel navigate to home page
  const cancel = () => {
    navigate("/home");
  };

  return (
    <div>
      <MyForm onFinish={onFinish} cancel={cancel} />
    </div>
  );
};
export default AddDetails;
