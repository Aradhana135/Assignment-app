import React, { useState } from "react";
import { Alert, Menu } from "antd";
import "../styles.css";
import { useNavigate } from "react-router-dom";

const MenuList = [
  {
    key: "/add",
    label: "AddUser",
  },
  {
    key: "/profile",
    label: "Profile",
  },
  {
    key: "/login",
    label: "logout",
  },
];
const Navbar = () => {
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();
  const handelMenu = (menuItem) => {
    if (menuItem.key === "/login") {
      localStorage.removeItem("login");
      setFlag(true);
    }

    navigate(menuItem.key);
  };

  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["/1"]}
        items={MenuList}
        onClick={handelMenu}
      ></Menu>

      {flag && <Alert message="logout successfull" showIcon />}
    </>
  );
};

export default Navbar;
