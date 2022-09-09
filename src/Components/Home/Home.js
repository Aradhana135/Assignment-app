import React from "react";
import { Layout, Menu } from "antd";
import "../styles.css";
import { useNavigate } from "react-router-dom";
const {  Content } = Layout;
const MenuList=[{
key:'/signup',
label:'SignUp'
},
{
    key:'/login',
    label:'Login'
    },
    // {
    //     key:'/users',
    //     label:'UserDetails'
    //     },
]
const Home = () => {
    const navigate=useNavigate();
    const handelMenu=(menuItem)=>{
       navigate(menuItem.key) 
    }
  return (
    <Layout className="layout">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["/1"]}
      items={MenuList}
      onClick={handelMenu}
      >
        {/* <Menu.Item key="1" href='/signup' >
          SignUp
        </Menu.Item>
        <Menu.Item key="2">Login</Menu.Item>
        <Menu.Item key="3" >Users Details</Menu.Item> */}
      </Menu>
      {/* <Header>
        Header
      </Header> */}
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Sign-Up</Breadcrumb.Item>
          <Breadcrumb.Item>Login</Breadcrumb.Item>
          <Breadcrumb.Item>Users</Breadcrumb.Item>
        </Breadcrumb> */}
        <div className="site-layout-content"> content</div>
      </Content>
      {/* <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer> */}
    </Layout>
  );
};

export default Home;
