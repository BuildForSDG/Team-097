/*
  TODO: Edit by Kehinde Faleye
  Done Here
*/
import React from "react";
import { Container, Row } from "react-bootstrap";

function Footer(props) {

    return (
      <footer className={"footer" + (props.default ? " footer-default" : "")} >
        <Container fluid={props.fluid ? true : false}>
          <Row>
            <div className="credits ml-auto">
              <div className="copyright">
                &copy; {1900 + new Date().getYear()}, BuildForSDG
                <i className="fa fa-heart heart" /> by Team 097
              </div>
            </div>
          </Row>
        </Container>
      </footer>
    );
}
export default Footer;
