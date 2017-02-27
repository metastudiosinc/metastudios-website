import React from 'react';
import Row from "react-bootstrap/lib/Row"
import Col from "react-bootstrap/lib/Col"
import { Parallax } from 'react-parallax';

const imgStyle={
  height:"500px",
  width:"auto",
  margin:"10px",
  opacity:0.3,
}

const flexed = {
  backgroundColor:'rgba(250, 250, 250, 1)',
  paddingRight:"50px",
  height:"inherit",
  padding:"50px",
  color:"#7f7d87"
}

const textPop ={
  color:"#27264f",
  fontSize:"1.5em",
}

const screenStyle ={
  minHeight:'500px',
  padding:"0px",
}

const connect = () => (

  <Row style={{marginBottom:"20px", height:"auto"}}>
    <Parallax  bgImage="img/desk2.jpeg" strength={300} >
    <Col  md={6} smHidden xsHidden className="pull-right" style={screenStyle}>
      <img src="img/BarFilter.png" style={{minHeight:"inherit",height:"inherit",  minWidth:"100%"}}/>

    </Col>

    <Col xs={12} sm={12} md={6} className="pull-left" style={flexed}>
      <h2 style={{color:"#edb528", fontWeight:"heavy"}}>Our divisions</h2>

      <Row >
        <Col xs={12}>
          <h4 ><span style={textPop}>Professional Services</span><br />
        providing full time onsight support for Software Development and User Experience support on federal contract
      </h4>
        </Col>
      </Row>

      <Row >
        <Col xs={12}>
          <h4><span style={textPop}>Your True Tribes</span><br />
        epic brand coaching and nerdy wisdom
        <a href="http://yourtruetribes.com" style={{color:'#edb528'}}> <br /> learn more </a></h4>
      </Col>

      </Row>

      <Row>
        <Col xs={12}>
          <h4><span style={textPop}>Technical Instruction</span><br />
        "Think..." series of courses on Node.js, React, Python, and Spark
        <a style={{color:'#edb528'}}> <br /> see the current offerings </a></h4>
      </Col>

      </Row>

      <Row>
        <Col xs={12}>
          <h4><span style={textPop}>Product Reseach and Design</span><br />
        filling the gaps most dont even see</h4>
      </Col>

      </Row>


    </Col>
  </Parallax>

  </Row>

);


export default connect;
