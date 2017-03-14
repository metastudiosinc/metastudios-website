import React from 'react';
import Row from "react-bootstrap/lib/Row"
import Col from "react-bootstrap/lib/Col"
import { Parallax } from 'react-parallax';

const imgStyle={
  height:"90px",
  margin:"10px"
}

const padded={
  paddingTop:"40px",
  paddingBottom:"40px",
}


const connect = () => (

  <Row style={{marginBottom:"20px", height:"auto"}}>
    <Col xs={10} xsOffset={1} style={padded}>
      <Col md={3} xs={6}><center>
      <a href="https://www.facebook.com/MetaStudiosInc/" target="_blank">
        <img style={imgStyle} src="/img/facebook.png" />
        </a>
      </center></Col>
      <Col md={3} xs={6}><center>
       <a href="https://twitter.com/metastudiosinc" target="_blank"> 
        <img style={imgStyle} src="/img/twitter.png" />
        </a>
      </center></Col>
      <Col md={3} xs={6}><center>
        <a href="https://www.linkedin.com/company/meta-studios-inc-?trk=top_nav_home" target="_blank">
        <img style={imgStyle} src="/img/linkedin.png" /></a>
      </center></Col>

      <Col md={3} xs={6}><center>
        <a href="mailto:theteam@metastudiosinc.com">
          <img style={imgStyle} src="/img/email.png" />
          </a>
        </center></Col>
    </Col>
  </Row>

);


export default connect;
