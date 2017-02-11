import React from 'react';
import Row from "react-bootstrap/lib/Row"
import Col from "react-bootstrap/lib/Col"

const imgStyle={
  height:"60px",
  margin:"10px"
}


const connect = () => (
  <Row style={{marginTop:"10px", marginBottom:"20px"}}>
    <Col xs={10} xsOffset={1}>
      <center><h2>Connect with us</h2></center>
      <Col md={3} xs={6}><center><img style={imgStyle} src="/img/facebook.png" /></center></Col>
      <Col md={3} xs={6}><center><img style={imgStyle} src="/img/twitter.png" /></center></Col>
      <Col md={3} xs={6}><center><img style={imgStyle} src="/img/linkedin.png" /></center></Col>
      <Col md={3} xs={6}><center><img style={imgStyle} src="/img/email.png" /></center></Col>
    </Col>
  </Row>
);


export default connect;
