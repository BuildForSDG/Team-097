/*
  TODO:Edit by Kehinde Faleye
  NOTE:Let's stick to functional Components for fairly large component for debugging reasons
  NOTE:I suggest we stick to our logo colors which are: Black(a shade of black #2c2c2c), white, green(#218738)
  NOTE:Except contended, i think 4 divs per row seemed congested. I reduced it to three
  NOTE:Let's keep strings to '', eslint would flag a "" 
  NOTE:I know it's a sample data but loading the logo is expensive. Let's discuss and alternative to the image
  NOTE:I suggest the link should be the heading only, it reduces the nodes on the link object and offers better flexibility 
  NOTE:We should try this out with the api
*/
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import agroNetworkData from "./agroNetworkMockData";

// Import our css file
import './AgroNetwork.css';

function AgroNetwork(props) {
  return (
    <Container className='content' style={{paddingLeft:'12%',paddingRight:'12%'}} fluid>
      <Row>
        {agroNetworkData.map((data) => (
          <Col
            sm={12}
            md={4}
            lg={4}
            key={data.networkName}
            style={{ margin: "10px 0"}}
          >
          <Card id='card'>
            <Card.Body>
              <Row
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <i
                  style={{ fontSize: "1.5rem" }}
                  className="fas fa-user-circle"
                ></i>
                <Link to="#" style={{ textDecoration: 'none' }}>
                  <p style={{ fontWeight: "bold", fontSize: "1rem" , color:'#218738'}}>
                    {data.networkName}
                  </p>
                </Link>
                <span style={{ fontSize: "0.75rem",color:'grey' }}>
                  {data.timeStamp}
                </span>
              </Row>
              <p style={{ 
                  fontSize: "0.9rem",
                  textAlign: 'center',
                  textTransform: 'capitalize' 
                }}>{data.description}</p>
              <Row style={{ margin: '10px 5px 0 0', justifyContent:'space-between' }}>
                  <div style={{ marginRight: '15px'}}>
                        <i className="fas fa-heart"></i>
                        <span style={{ fontSize: '0.8rem', marginLeft: '3px' }}>233</span>
                  </div>
                  <div>
                    <i className="fas fa-comment"></i>
                    <span style={{ fontSize: '0.8rem', marginLeft: '3px' }}>332</span>
                  </div>
              </Row>
            </Card.Body>
          </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AgroNetwork;
