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
  height:"inherit",
  padding:"50px",
  color:"#7f7d87",
}

const textPop ={
  color:"#27264f",
  fontSize:"1.3em",
}

const screenStyle ={
  minHeight:'500px',
  padding:"0px",
}

const smallHeader ={

  color:"#edb528",
  fontWeight:"heavy",
  fontSize:"2.5em",

}

const largeHeader ={

  color:"#edb528",
  fontWeight:"heavy",
  fontSize:"3.5em",

}

const smallContent={
  fontSize:"1.8em"
}

const largeContent={
  fontSize:"3em"
}

const connect = (containerWidth) => (

  <Row style={{marginBottom:"20px", height:"auto"}}>
    <Parallax  bgImage="img/desk2.jpg" strength={300} >
    <Col  md={6} smHidden xsHidden className="pull-right" style={screenStyle}>
      <img src="img/BarFilter.png" style={{minHeight:"inherit",height:"inherit",  minWidth:"100%"}}/>

    </Col>

    <Col xs={12} sm={12} md={6} className="pull-left" style={flexed}>
      <h2 style={containerWidth<= 992 ? largeHeader : smallHeader}>Our divisions</h2>

      <Row >
        <Col xs={12}>
          <h4 style={containerWidth<= 992 ? largeContent: smallContent}><span style={textPop}>Professional Services</span><br />
        providing full time on site support for Software Development + User Experience
      </h4>
        </Col>
      </Row>

      <Row >
        <Col xs={12}>
          <h4 style={containerWidth<= 992 ? largeContent: smallContent}><span style={textPop}>Brand Hacking + Design Thinking</span><br />
        epic brand coaching + nerdy wisdom through workshops
        <a href="http://yourtruetribes.com" style={{color:'#edb528'}}> <br /> check out Your True Tribes </a></h4>
      </Col>

      </Row>

      <Row>
        <Col xs={12}>
          <h4 style={containerWidth<= 992 ? largeContent: smallContent}><span style={textPop}>Technical Instruction</span><br />
        series of courses on node.js, react, python, + spark
        <a href="https://metastudiosinc.ticketleap.com/" style={{color:'#edb528'}}> <br /> explore the THINK workshops </a></h4>
      </Col>

      </Row>

      <Row>
        <Col xs={12}>
          <h4 style={containerWidth<= 992 ? largeContent: smallContent}><span style={textPop}>Product Research + Design</span><br />
            filling the gaps most don&#39;t even see + discovering new solutions
          </h4>
      </Col>

      </Row>


    </Col>
  </Parallax>

  </Row>

);


export default connect;
