import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Protected = ({ children }) => {
  const navigate = useNavigate();

  
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) navigate("/login");
  });

  return <><Outlet/></>;
};

export default Protected;


