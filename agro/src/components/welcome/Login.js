import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Alert,
  Button,
} from "react-bootstrap";
import { REGISTER, DASHBOARD } from "../../routes/router";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (email || password === "") {
        setErrorMessage("Please fill in all fields");
      } else {
        console.log(email, password);
        return props.history.replace(DASHBOARD);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h5 className="mt-4">Login</h5>
          <hr />
          <Form onSubmit={handleSubmit}>
            {errorMessage ? (
              <Alert variant="warning">{errorMessage}</Alert>
            ) : null}
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
            <Button
              type="submit"
              size="md"
              style={styles.btn}
              variant="success"
              block
            >
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
    color: "green",
  },
  btn: {
    fontWeight: "500",
  },
};

export default withRouter(Login);
