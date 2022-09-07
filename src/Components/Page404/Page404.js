import React from "react";
import Button from "antd/lib/button";
import "../styles.css";
const Page404 = () => {
  return (
    <div>
      <h1 className="page-error"> Page404 error !! </h1>
      <Button type="link" href="/Login">
        Click to the login portal
      </Button>
    </div>
  );
};

export default Page404;
