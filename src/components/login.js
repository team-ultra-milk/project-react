import React from "react";
import "./Login.css";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";

class Login extends React.Component {
  render() {
    return (
      <Form className="login-form d-flex flex-column justify-content-center align-items-center">
        <h1>
          <span className="font-weight-bold">rental</span>
        </h1>
        <FormGroup className="w-100">
          <label>Email</label>
          <Input type="email" placeholder="email" />
        </FormGroup>
        <FormGroup className="w-100">
          <label>Password</label>
          <Input type="password" placeholder="password" />
        </FormGroup>
        <Button className="btn-lg btn-dark w-100">Log in</Button>
        <div className="text-center pt-3">
          or continue with your social account
        </div>
        <FacebookLoginButton className="mt-3 mb-3 w-100" />
        <div className="text-center">
          <a href="/sign-up">Sign up</a>
          <span className="p-2">|</span>
          <a href="/forgot password">Forgot Password</a>
        </div>
      </Form>
    );
  }
}

export default Login;
