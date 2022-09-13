import React, { useState } from "react";
import { Card } from "antd";
import {
  AutoComplete,
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  Alert,
} from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const Forms = (props) => {
  const navigate = useNavigate();
  //for all the required input field
  const [flag, setFlag] = useState(false);
  const [alreadyLoginUser, setAlreadyLoginUser] = useState(false);
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
    if (props.localOldArr === null) {
      setAlreadyLoginUser(false);

      setTimeout(() => {
        navigate("/login");
      }, 1000);
      setFlag(true);
    } else {
      const alreadyUser = props.localOldArr.filter(
        (arr) => arr.email === values.email
      );
      if (alreadyUser.length === 0) {
        setAlreadyLoginUser(false);
        setFlag(true);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        setAlreadyLoginUser(true);
        setFlag(false);
      }
      console.log(alreadyLoginUser);
      console.log(flag);
      console.log(alreadyUser);
    }
  };

  const prefixSelector = (
    //prefix for select tag country code
    <Form.Item name="prefix" noStyle>
      <Select className="selectPrefix">
        <Option value="91">+91</Option>
        <Option value="87">+87</Option>
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
    // label: website,
    value: website,
  }));
  return (
    <div>
      <div className="form-cls">
        <Card>
          <Form
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 8,
            }}
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
              // label="E-mail"
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
              <Input placeholder="Enter Email" />
            </Form.Item>

            <Form.Item
              name="password"
              // label="Password"
              type="password"
              rules={[
                {
                  required: true,

                  message: " Please enter the password!",
                },
                {
                  pattern:
                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$",
                  message:
                    " Password must be in between 8-16 character with altleast one uppercase,lower case,numeric & special charcater!",
                },
              ]}
            >
              <Input.Password placeholder="Enter Password" allowClear />
            </Form.Item>

            <Form.Item
              name="confirm"
              // label="Confirm Password"
              dependencies={["password"]}
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
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm Password" allowClear />
            </Form.Item>

            <Form.Item
              name="Fullname"
              // label="Fullname"
              rules={[
                {
                  required: true,
                  message: "Please input your Fullname!",
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder="Enter FullName" />
            </Form.Item>
            <Form.Item
              name="nickname"
              // label="Nickname"
              tooltip="What do you want others to call you?"
              rules={[
                {
                  required: true,
                  message: "Please input your nickname!",
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder="Enter Nickname" />
            </Form.Item>

            <Form.Item
              name="phone"
              // label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
                {
                  max: 10,
                  message: "Maximum length should be 10",
                },
              ]}
            >
              <Input
                type="number"
                addonBefore={prefixSelector}
                className="input-prefixSelector"
                placeholder="Enter Phone Number"
              />
            </Form.Item>

            <Form.Item
              name="website"
              // label="Website"
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
                placeholder="Website"
              >
                <Input />
              </AutoComplete>
            </Form.Item>

            <Form.Item
              name="gender"
              // label="Gender"
              rules={[
                {
                  required: true,
                  message: "Please select gender!",
                },
              ]}
            >
              <Select placeholder="Select your gender">
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
            >
              <Checkbox>I have read the agreement</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Signup
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                type="text"
                href="/login"
                htmlType="handleClick"
                className="signup-btn"
                block
              >
                Already a user ? Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
      <div className="alert-msg-cls">
        {flag && (
          <Alert message="sign- Up successfull " type="success" showIcon />
        )}
        {alreadyLoginUser && (
          <Alert message="User already exist! " type="error" showIcon />
        )}
      </div>
    </div>
  );
};

export default Forms;
