import React from 'react';
import { Col, Card, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ColumnLayout(props) {
	return (
		<Col
				sm={12}
				md={4}
				lg={4}
				style={{ margin: "10px 0"}}
				>
			  <Card id='card'>
					<Card.Body>
					  <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
					    <img src={props.logo} alt='agro-network' id='logo' fluid="true" />
					    <Link to="#" style={{ textDecoration: 'none' }}>
					      <p style={{ fontWeight: "bold", fontSize: "1rem" , color:'#218738'}}>
					        {props.data.networkName}
					      </p>
					    </Link>
					    <span style={{ fontSize: "0.75rem",color:'grey' }}>
					      {props.data.timeStamp}
					    </span>
					  </Row>
					  <p style={{ 
					      fontSize: "0.9rem",
					      textAlign: 'center',
					      textTransform: 'capitalize' 
					    }}>{props.data.description}</p>
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
	);
}