import React from "react";
import { Button, Checkbox, Form, Input } from 'antd';




const LoginForm = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const setProfile = props.setProfile;
  const dummyUser = props.dummyUser;
  

  const onFinish = (values) => {
    console.log('Success:', values);
    dummyUser.username = values.username;
    setIsLoggedIn(true);
    setProfile(dummyUser);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 300,
        marginTop: '10px',
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"

    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          LogIn
        </Button>
      </Form.Item>
    </Form>
    );
};


export default LoginForm;