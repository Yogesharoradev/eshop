import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { MailOutlined, LockOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const SignUpPage = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // Add sign-up logic here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-purple-600 ">
      {/* Sign Up Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform transition duration-300 hover:shadow-xl hover:scale-105 border border-gray-200">
        {/* App Logo and Name */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <img
            src="/images/png-clipart-green-shopping-bag-illustration-shopify-logo-icons-logos-emojis-tech-companies-thumbnail.png"
            alt="Shopify Logo"
            className="h-16 w-16"
          />
          <Title level={2} className="text-gray-800 font-bold m-0">Shopify</Title>
        </div>

        {/* Sign Up Heading */}
        <Title level={3} className="text-start text-gray-700 font-bold mb-6">Sign Up</Title>

        {/* Sign Up Form */}
        <Form
          name="signup"
          layout="vertical"
          onFinish={onFinish}
        >
          {/* Name Input */}
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your Name!',
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Name" />
          </Form.Item>

          {/* Email Input */}
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>

          {/* Phone Number Input */}
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: 'Please input your Phone Number!',
              },
            ]}
          >
            <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
          </Form.Item>

          {/* Password Input */}
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          {/* Sign Up Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" block className="rounded-full bg-purple-900">
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        {/* Already Registered? Sign In Link */}
        <div className="text-center mt-4">
          <Text>Already registered?</Text>{' '}
          <Link to="/signin">
            <Text type="primary">Sign in</Text>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
