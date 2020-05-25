import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Logo from "../../assets/logos/AGreen_white.png";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <Image src={Logo} alt="agro-network" fluid />
          <h4
            style={{
              fontSize: "2.5rem",
              marginTop: "-20px",
              fontWeight: "700",
              color: "#218838",
            }}
          >
            Agro Network
          </h4>
          <h5 style={{ fontSize: "2rem", fontWeight: "500", color: "#218838" }}>
            Nigeria's Premium Agro Network
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
