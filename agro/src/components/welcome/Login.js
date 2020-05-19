import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { REGISTER } from "../../routes/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h5>Login</h5>
          <hr />
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Login
            </Button>
          </Form>

          <p style={styles.text}>
            Not yet a member?{" "}
            <Link to={REGISTER} style={styles.link}>
              Register here.
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  text: {
    marginTop: "20px",
  },
  link: {
    textDecoration: "none",
  },
};

export default Login;
