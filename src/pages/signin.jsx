import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import AppLayout from './applayout';

const { Title, Text } = Typography;

const SignInPage = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // Add sign-in logic here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-purple-800">
      {/* Sign In Form */}
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

        {/* Sign In Heading */}
        <Title level={3} className="text-start text-gray-700 font-bold mb-6">Sign In</Title>

        {/* Sign In Form */}
        <Form
          name="signin"
          layout="vertical"
          onFinish={onFinish}
        >
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

          {/* Forgot Password Link */}
          <Form.Item>
            <Link to="/forgot-password">
              <Text type="secondary">Forgot password?</Text>
            </Link>
          </Form.Item>

          {/* Sign In Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" block className="rounded-full bg-purple-800">
              Sign In
            </Button>
          </Form.Item>
        </Form>

        {/* Not Registered? Sign Up Link */}
        <div className="text-center mt-4">
          <Text>Not registered?</Text>{' '}
          <Link to="/signup">
            <Text type="primary">Sign up</Text>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
