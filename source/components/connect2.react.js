import React from 'react';
import Row from "react-bootstrap/lib/Row"
import Col from "react-bootstrap/lib/Col"
import { Parallax } from 'react-parallax';

const imgStyle={
  height:"60px",
  margin:"10px"
}

const flexed = {
  backgroundColor:'rgba(250, 250, 250, 1)',
  paddingRight:"50px",
  height:"inherit",
  padding:"32px"
}

const textPop ={
  color:"#389DBE",
  fontSize:"1.5em",
}

const screenStyle ={
  minHeight:'500px',
  padding:"0px",
}

const connect = () => (

  <Row style={{marginBottom:"20px", height:"auto"}}>
    <Parallax  bgImage="img/desk2.jpeg" strength={300} bgStyle={{minHeight:"600px"}}>
    <Col  md={6} smHidden xsHidden className="pull-right" style={screenStyle}>
      <img src="img/BarFilter.png" style={{minHeight:"inherit",height:"inherit",  minWidth:"100%"}}/>

    </Col>

    <Col xs={12} sm={7} md={6} className="pull-left" style={flexed}>

      <Row><Col xs={3} ><center><img style={imgStyle} src="/img/facebook.png" /></center></Col></Row>
      <Row><Col xs={3} xsOffset={3} ><center><img style={imgStyle} src="/img/twitter.png" /></center></Col></Row>
      <Row><Col xs={3} xsOffset={6} ><center><img style={imgStyle} src="/img/linkedin.png" /></center></Col></Row>
      <Row><Col xs={3} xsOffset={9} ><center><img style={imgStyle} src="/img/email.png" /></center></Col></Row>

    </Col>
  </Parallax>

  </Row>

);


export default connect;
