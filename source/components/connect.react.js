import React from 'react';
import Row from "react-bootstrap/lib/Row"
import Col from "react-bootstrap/lib/Col"

const imgStyle={
  height:"60px",
  margin:"10px"
}

const bar={
  width:"100%",
  height:"auto",
  backgroundColor:"#024873",
  color:"#FAFAFA",
  marginBottom:"0px",
  padding:"10px"
}


const connect = () => (
<div>
  <center><h2><br /></h2></center>
  <Row style={{marginBottom:"20px", height:"auto"}}>
    <Col xs={10} xsOffset={1}>
      <Col md={3} xs={6}><center><img style={imgStyle} src="/img/facebook.png" /></center></Col>
      <Col md={3} xs={6}><center><img style={imgStyle} src="/img/twitter.png" /></center></Col>
      <Col md={3} xs={6}><center><img style={imgStyle} src="/img/linkedin.png" /></center></Col>
      <Col md={3} xs={6}><center><img style={imgStyle} src="/img/email.png" /></center></Col>
    </Col>
  </Row>
  <center><h2 style={bar}>Connect with us</h2></center>
</div>

);


export default connect;
