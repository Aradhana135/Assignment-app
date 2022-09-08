import React, { useState } from "react";
import {
  AutoComplete,
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Select,
  Alert,
} from "antd";
import { useNavigate } from "react-router-dom";
import { formItemLayout, tailFormItemLayout } from "./FormLayout";
const { Option } = Select;

const Forms = () => {
  const navigate = useNavigate();
  //for all the required input field
  const [flag, setFlag] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    //storing form data in local storage
    let olddata = localStorage.getItem("formdata");
    if (olddata == null) {
      olddata = [];
      olddata.push(values);
      localStorage.setItem("formdata", JSON.stringify(olddata));
    } else {
      let oldArr = JSON.parse(olddata);
      oldArr.push(values);
      localStorage.setItem("formdata", JSON.stringify(oldArr));
      
    }

    setFlag(false);

    if (!flag) {
      //if all the input field is filled correctly navigate to login page
      navigate("/login");
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select className="selectPrefix">
        <Option value="91">+91</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select className="selectSuffix">
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <div>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: "91",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="Fullname"
          label="Fullname"
          rules={[
            {
              required: true,
              message: "Please input your Fullname!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="nickname"
          label="Nickname"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your nickname!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            className="input-prefixSelector"
            maxLength={10}
          />
        </Form.Item>

        <Form.Item
          name="donation"
          label="Donation"
          rules={[
            {
              required: true,
              message: "Please input donation amount!",
            },
          ]}
        >
          <InputNumber
            addonAfter={suffixSelector}
            className="input-prefixSelector"
          />
        </Form.Item>

        <Form.Item
          name="website"
          label="Website"
          rules={[
            {
              required: true,
              message: "Please input website!",
            },
          ]}
        >
          <AutoComplete
            options={websiteOptions}
            onChange={onWebsiteChange}
            placeholder="website"
          >
            <Input />
          </AutoComplete>
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: "Please select gender!",
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>I have read the agreement</Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Signup
          </Button>
          <Button
            type="primary"
            href="/login"
            htmlType="handleClick"
            className="signup-btn"
          >
            Login
          </Button>
        </Form.Item>

        {flag && <Alert message="Error!! " type="error" showIcon />}
      </Form>
    </div>
  );
};

export default Forms;
