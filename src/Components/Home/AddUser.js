import "antd/dist/antd.min.css";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import MyForm from "./MyForm";
const AddDetails = (props) => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    props.handleAdd(values);

    navigate("/home");
  };
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
