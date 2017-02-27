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

      <Row >
        <h4>combining new tech, clever strategy, and intuitive UI <br /> <span style={textPop}>We are creators</span></h4>
      </Row>

      <Row >
          <h4>transforming data into insights <br /><span style={textPop}> We are storytellers</span></h4>
      </Row>

      <Row>
        <h4>building unique data visualization software solutions <br /><span style={textPop}>We are developers</span></h4>
      </Row>

      <Row>
          <h4>putting the cookies on the bottom shelf <br /><span style={textPop}>We are rebels and scruffy looking nerf herders</span></h4>
      </Row>


    </Col>
  </Parallax>

  </Row>

);


export default connect;
