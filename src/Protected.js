
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const Protected = ({ children }) => {
    // useEffect(() => {
    //     navigate('/login')
    //   });

  const navigate = useNavigate();

    let login = localStorage.getItem("login");

  return (
    login ? children : navigate("/login" )
  );
};

export default Protected;
