/* TODO:
  Use Refs instead of states for getting values to reduce re-renders -- done
  Move styles to css -- done
  Add the about us link under Register link -- done
  Secure Loggin into DashBoard Feature #13
*/
import React, { useState, useRef, Fragment, useContext } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { Container, Row, Col, Form, Alert, Button } from "react-bootstrap";
import Navigation from './Navbar';
// Import the css file
import './css/Login.css';
// Import the context a.k.a the global state
import { Context } from '../../configs/ContextProvider';

function Login(props){
  // Ref for the email input
  const email = useRef(null);
  // Ref for the password
  const password = useRef(null);
  // To set any error message
  const [errorMessage, setErrorMessage] = useState(null);
  // Let's create out reducer
  let { state, dispatch } = useContext(Context);
  // This is the payload that we send to the reducer
  let payload = {state, username:'', email:'', isLoggedIn:false};

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!email.current.value || !password.current.value ) {
        setErrorMessage("Please fill in all fields");
      } else {
        // Let's set the session data to persist login
        localStorage.setItem('email',email.current.value);
        localStorage.setItem('username','Kehinde');
        localStorage.setItem('isLoggedIn',true);
        // console.log(email.current.value, password.current.value);
        // return props.history.replace(DASHBOARD);
        // Let's set the username, email and logged in status in the global state
        // Modify the payload to send
        payload.email = email.current.value;
        payload.isLoggedIn = true;
        dispatch({type:'setUserStatus',payload});
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    !state.isLoggedIn ?
      <Fragment>
        <Navigation />
        <Container>
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <h5 className='mt-4'>Login</h5>
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
    :
      <Redirect to={{pathname:'/dashboard'}} />
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
