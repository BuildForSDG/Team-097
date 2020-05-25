/* TODO: Edit By Kehinde Faleye
  Use Refs instead of states for getting values to reduce re-renders -- done
  Move styles to css -- done
  Add the about us link under Register link -- done
*/
import React, { useState, useRef, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Row, Col, Form, Alert, Button } from "react-bootstrap";
import Navigation from './Navbar';
import './css/Login.css';

const Login = (props) => {
  // const [email, setEmail] = useState(''); // Use refs instead 
  const email = useRef(null);
  // const [password, setPassword] = useState(''); // Use Refs instead
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (email.current.value || password.current.value === "") {
        setErrorMessage("Please fill in all fields");
      } else {
        console.log(email.current.value, password.current.value);
        //return props.history.replace(DASHBOARD);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Fragment>
      <Navigation />
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h5 id='h5' className='mt-4'>Login</h5>
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
              <Button type="submit" size='md' id='btn' variant="success" block>
                Login
              </Button>
            </Form>
            <p id='text' >
              Not yet a member ?
              {" "}
              <Link to='/register' className='link' >
                Register here.
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
    </Fragment>
  );
};

/* Moved to css file Login.css 
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
*/

export default withRouter(Login);
