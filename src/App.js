import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Logins from "./Components/LogIn/Logins";
import Page404 from "./Components/Page404/Page404";
import Forms from "./Components/SignUp/SignUp";
import Users from "./Components/Home/Users";
import axios from "axios";
import AddDetails from "./Components/Home/AddUser";
import EditDetails from "./Components/Home/EditUser";

import Profile from "./Components/Home/Profile";
import Protected from "./Protected";

const App = () => {
  //API response data
  const [appData, setAppData] = useState([]);
  const [data, setData] = useState({});
  // handling existing data
  const handleData = (dataSource) => {
    setData(dataSource);
  };
  //Fetching data of an API
  const fetchPost = async () => {
    const response = await axios(
      "https://630f5ca737925634188dc240.mockapi.io/crud/Users"
    );
    setAppData(response.data);
  };
  useEffect(() => {
    fetchPost();
  }, []);
  // Editing existing records
  const handleEditData = (item) => {
    const newData = appData.map((value) =>
      data.id === value.id ? { ...item, id: data.id } : value
    );

    setAppData(newData, data.id);
  };
  //Adding new records
  const handleAdd = (values) => {
    const newValue = {
      ...values,
      id: appData.length + 1,
    };
    setAppData([...appData, newValue]);
  };
  //Deleting existing records
  const handleDelete = (record) => {
    setAppData((pre) => pre.filter((rec) => rec.id !== record.id));
  };
  //getting form data from local storage
  let olddata = localStorage.getItem("formdata");
  let localOldArr = JSON.parse(olddata);

  return (
    <>
    <div>
     
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Forms localOldArr={localOldArr} />} />

            <Route
              path="/login"
              element={<Logins localOldArr={localOldArr} />}
            />


            <Route element={<Protected />}>
            
              <Route
                path="/users"
                element={
                  <Users
                    handleData={handleData}
                    appData={appData}
                    handleDelete={handleDelete}
                  />
                }
              />
               
              <Route
                path="/edit"
                element={
                  <EditDetails data={data} handleEditData={handleEditData} />
                }
              />
              <Route
                path="/add"
                element={<AddDetails data={data} handleAdd={handleAdd} />}
              />
            </Route>
            

            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          
        </BrowserRouter>
        </div>
       
      
    </>
  );
};

export default App;
