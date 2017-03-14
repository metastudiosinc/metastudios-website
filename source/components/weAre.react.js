import React from 'react';
import Row from "react-bootstrap/lib/Row"
import Col from "react-bootstrap/lib/Col"
import { Parallax } from 'react-parallax';

const flexed = {
  backgroundColor:'#FAFAFA',
  height:"100%",
  paddingTop:"70px",
  paddingRight:"70px",
  paddingLeft:"40px",
  paddingBottom:"70px"
}

const textStyle ={
  width:"100%",
  height:"auto",
  textAlight:"right",
  direction: 'rtl',
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

const smallScreenStyle ={
  minHeight:'200px',
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


const weAre = (containerWidth) => (
  <div>
  <Row style={{marginTop:"0px"}}>
  <div style={textStyle}>
    <Parallax  bgImage="img/desk.jpg" strength={300} bgHeight="650px" bgWidth="auto">
      <Col  md={6} smHidden xsHidden  className="pull-left" style={screenStyle}>
        <img src="img/pieFilter.png" style={{height:"auto",  minHeight:"90%", maxHeight:"800px", width:"100%"}}/>
        <div style={{height:"150px", width:"100%", backgroundColor:"#FAFAFA"}}><br /><br /></div>

      </Col>

      <Col xs={12} sm={12} md={6} className="pull-right" style={flexed}>

        <h2 style={containerWidth<= 992 ? largeHeader : smallHeader}>...We are</h2>


      <Row >
        <h4 style={containerWidth<= 992 ? largeContent: smallContent}>combining new tech, clever strategy, and intuitive UI <br /> <span style={textPop}>creators</span></h4>
      </Row>

      <Row >
          <h4 style={containerWidth<= 992 ? largeContent: smallContent}>transforming data into insights <br /><span style={textPop}> storytellers</span></h4>
      </Row>

      <Row>
        <h4 style={containerWidth<= 992 ? largeContent: smallContent}>building unique data visualization software solutions <br /><span style={textPop}>developers</span></h4>
      </Row>

      <Row>
          <h4 style={containerWidth<= 992 ? largeContent: smallContent}>putting the cookies on the bottom shelf <br /><span style={textPop}>rebels and scruffy looking nerf herders</span></h4>
      </Row>


    </Col>



    </Parallax>
  </div>



</Row>
<Row>
  <Col xs={12}  mdHidden lgHidden >
    <img src="/img/AkbarMobile.jpg" style={{width:"100%", height:"auto"}} />
  </Col>
</Row>


</div>
);

export default weAre;
