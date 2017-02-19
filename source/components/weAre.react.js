import React from 'react';
import Row from "react-bootstrap/lib/Row"
import Col from "react-bootstrap/lib/Col"
import { Parallax } from 'react-parallax';

const flexed = {
  backgroundColor:'rgba(250, 250, 250, 1)',
  paddingRight:"50px",
  minHeight:'500px',
  paddingTop:"15%"
}

const textStyle ={
  width:"100%",
  height:"auto",
  textAlight:"right",
  direction: 'rtl',
}

const textPop ={
  color:"#389DBE",
  fontSize:"1.5em",
}

const screenStyle ={
  minHeight:'500px',
  padding:"0px",
}


const weAre = () => (
  <Row style={{marginTop:"0px"}}>
  <div style={textStyle}>
    <Parallax  bgImage="img/desk.jpg" strength={300} >
      <Col xs={5} className="pull-left" style={screenStyle}>
        <img src="img/filter1.png" style={{height:"100%",width:"110%"}}/>

      </Col>

      <Col xs={7} className="pull-right" style={flexed}>

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
  </div>
</Row>
);

export default weAre;
