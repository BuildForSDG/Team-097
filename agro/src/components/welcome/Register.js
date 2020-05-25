/*
  TODO: Edit by Kehinde Faleye
  Use refs to access input values instead of states to reduce re-renders -- done
*/
import React, { useState, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Row, Col, Form, Alert, Button } from "react-bootstrap";
import Layout from "./Layout";

function Register(props) {
  // const [username, setUserName] = useState(""); // Using refsf instead
  const username = useRef(null);
  // const [email, setEmail] = useState(""); // Using refs instead
  const email = useRef(null);
  // const [password, setPassword] = useState(""); // Using refs instead
  const password = useRef(null);
  // const [preference, setPreference] = useState(""); // Also Using refs
  const preference = useRef(null);
  const [errorMessage, setErrorMessage] = useState(""); // Dont use Null for a posible string value

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Wrong use of the OR attribute. This would default to true if a property is set
      /*if (username.current.value || email.current.value || password.current.value || preference.current.value === "") {
        setErrorMessage("Please fill in all fields");
      }*/
      if(!username.current.value || !email.current.value || !password.current.value || !preference.current.value ){
        setErrorMessage("Please fill in all fields");
      } else {
        console.log(username.current.value, email.current.value, password.current.value, preference.current.value);
        return props.history.push('/');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Layout>
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <h5 className='mt-3'>Register</h5>
            <hr />
            <Form onSubmit={handleSubmit}>
              {
                errorMessage ? 
                (
                <Alert variant="warning">{errorMessage}</Alert>
                ) 
                : 
                null
              }
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  ref={username}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  ref={email}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={password}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Preference</Form.Label>
                <Form.Control
                  as="select"
                  ref={preference}
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
              <Link to='/' style={styles.link}>
                Login here.
              </Link>
            </p>
            <div>
              <Link to='/about' style={{float:'left'}} className='link' >
                About Us
              </Link>
              <Link to='/policy' style={{float:'right'}} className='link' >
                Privacy Policy
              </Link>
            </div>
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
    fontWeight: "500",
  },
};

export default withRouter(Register);
