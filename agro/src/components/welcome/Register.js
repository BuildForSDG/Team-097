import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Row, Col, Form, Alert, Button } from "react-bootstrap";
import { LOGIN } from "../../routes/router";
import Layout from "./Layout";

const Register = (props) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [preference, setPreference] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (username || email || password || preference === "") {
        setErrorMessage("Please fill in all fields");
      } else {
        console.log(username, email, password, preference);
        return props.history.push(LOGIN);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Layout>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h5 className='mt-3'>Register</h5>
            <hr />
            <Form onSubmit={handleSubmit}>
              {errorMessage ? (
                <Alert variant="warning">{errorMessage}</Alert>
              ) : null}
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
                  <option value="farmer">Farmer</option>
                  <option value="buyer">Buyer</option>
                  <option value="distributor">Distributor</option>
                  <option value="agroEnthusiast">Agro-Enthusiast</option>
                  <option value="agency">Agency</option>
                  <option value="consultant">Consultant</option>
                  <option value="researcher">Researcher</option>
                </Form.Control>
              </Form.Group>
              <Button type="submit" variant="success" block size='md' style={styles.btn}>
                Register
              </Button>
            </Form>
            <p style={styles.text}>
              Have an account?{" "}
              <Link to={LOGIN} style={styles.link}>
                Login here.
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
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
    fontWeight: '500',
  }
};

export default withRouter(Register);
