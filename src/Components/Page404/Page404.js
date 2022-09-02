import React from "react";
import Button from "antd/lib/button";
const Page404 = () => {
  return (
    <div>
      <h1 style={{ color: "red" }}> Page404 error !! </h1>
      <Button type="link" href="/Login">
        Click to the login portal
      </Button>
    </div>
  );
};

export default Page404;
