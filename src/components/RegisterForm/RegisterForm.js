import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class RegisterForm extends Component {
  state = {
    userName: "",
    email: "",
    password: "",
  };

  handleInputChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  handleSabmit = (e) => {
    e.preventDefault();

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ email: "", password: "" });
  };

  render() {
    const { userName, email, password } = this.state;
    return (
      <Form onSubmit={this.handleSabmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={userName}
            name="userName"
            onChange={this.handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            name="email"
            onChange={this.handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            name="password"
            onChange={this.handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    );
  }
}

export default RegisterForm;
