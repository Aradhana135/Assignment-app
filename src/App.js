import React, { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logins from "./Components/LogIn/Logins";
import Page404 from "./Components/Page404/Page404";
import Forms from "./Components/SignUp/Form";
import Home from "./Components/Home/Home";
import Edit from "./Components/Home/Edit";
import Add from "./Components/Home/Add";
import axios from "axios";

const App = () => {
  const [appData, setAppData] = useState([]);
  const [data, setData] = useState({});

  const handleData = (dataSource) => {
    setData(dataSource);
  };

  const fetchPost = async () => {
    const response = await axios(
      "https://630f5ca737925634188dc240.mockapi.io/crud/Users"
    );
    setAppData(response.data);
  };
  useEffect(() => {
    fetchPost();
  }, []);

  const handleAppData = (item) => {
    console.log("aaa", item);
    const newData = appData.map((value) =>
      data.id === value.id ? { ...item, id: data.id } : value
    );

    console.log(data.id);

    setAppData(newData, data.id);
  };

  const handleAdd = (values) => {
    const newValue = {
      ...values,
      id: appData.length + 1,
    };
    setAppData([...appData, newValue]);
  };

  const handleDelete = (record) => {
    setAppData((pre) => pre.filter((rec) => rec.id !== record.id));
  };

  return (
    <>
      <div style={{ color: "blue", marginBottom: 20, marginTop: 40 }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Forms />} />
            <Route path="/login" element={<Logins />} />
            <Route
              path="/home"
              element={
                <Home
                  handleData={handleData}
                  appData={appData}
                  handleDelete={handleDelete}
                />
              }
            />
            <Route
              path="/edit"
              element={<Edit data={data} handleAppData={handleAppData} />}
            />
            <Route
              path="/add"
              element={<Add data={data} handleAdd={handleAdd} />}
            />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
