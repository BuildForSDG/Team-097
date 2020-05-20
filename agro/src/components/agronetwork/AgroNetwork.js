import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { agroNetworkData } from "./agroNetworkMockData";

const AgroNetwork = () => {
  return (
    <Container fluid>
      <Row>
        {agroNetworkData.map((data) => (
          <Col
            sm={12}
            md={4}
            lg={3}
            key={data.networkName}
            style={{ margin: "10px 0" }}
          >
            <Link to="#" style={{ textDecoration: 'none' }}>
              <Card>
                <Card.Body>
                  <Row
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <i
                      style={{ fontSize: "1.5rem" }}
                      className="fas fa-user-circle"
                    ></i>
                    <p style={{ fontWeight: "bold", fontSize: "1rem" }}>
                      {data.networkName}
                    </p>
                    <span style={{ fontSize: "0.75rem" }}>
                      {data.timeStamp}
                    </span>
                  </Row>
                  <p style={{ fontSize: "0.9rem" }}>{data.description}</p>
                  <Image
                    style={{ background: "lightblue" }}
                    src={data.networkImg}
                    alt={data.networkName}
                    fluid
                  />
                  <Row style={{ margin: '10px 5px 0 0' }}>
                      <div style={{ marginRight: '15px' }}>
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
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AgroNetwork;
