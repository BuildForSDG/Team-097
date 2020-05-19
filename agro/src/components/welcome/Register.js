import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { LOGIN } from "../../routes/router";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [preference, setPreference] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, password, preference);
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h5>Register</h5>
          <hr />
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>

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

            <Form.Group>
              <Form.Label>Preference</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setPreference(e.target.value)}
              >
                <option>--Select--</option>
                <option value="farmer">Farmer</option>
                <option value="buyer">Buyer</option>
                <option value="distributor">Distributor</option>
                <option value="agro-enthusiast">Agro-Enthusiast</option>
                <option value="agency">Agency</option>
                <option value="consultant">Consultant</option>
                <option value="researcher">Researcher</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Register
            </Button>
          </Form>
          <p style={styles.text}>
            Have an account?{" "}
            <Link to={LOGIN} style={styles.link}>
              Login here
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

export default Register;
