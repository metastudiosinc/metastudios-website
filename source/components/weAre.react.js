import React from 'react';
import Row from "react-bootstrap/lib/Row"
import Col from "react-bootstrap/lib/Col"
import { Parallax } from 'react-parallax';

const flexed = {
  backgroundColor:'#FAFAFA',
  paddingRight:"50px",
  height:"inherit",
  paddingTop:"15%"
}

const textStyle ={
  width:"100%",
  height:"auto",
  minHeight:"400px",
  textAlight:"right",
  direction: 'rtl',
}

const textPop ={
  color:"#535485",
  fontSize:"1.5em",
}

const screenStyle ={
  minHeight:'500px',
  padding:"0px",
}

const smallScreenStyle ={
  minHeight:'200px',
  padding:"0px",
}


const weAre = () => (
  <Row style={{marginTop:"0px"}}>
  <div style={textStyle}>
    <Parallax  bgImage="img/desk.jpg" strength={300} bgStyle={{minHeight:"600px"}}>
      <Col  md={6} smHidden xsHidden className="pull-left" style={screenStyle}>
        <img src="img/PieFilter.png" style={{minHeight:"inherit",height:"inherit",  minWidth:"100%"}}/>

      </Col>

      <Col xs={12} sm={7} md={6} className="pull-right" style={flexed}>

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
