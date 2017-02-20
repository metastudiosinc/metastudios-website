import React from 'react';
import Row from "react-bootstrap/lib/Row"
import Col from "react-bootstrap/lib/Col"

const tech = () => (
  <Row>
    <Col xs={12} lgHidden mdHidden> <center><h2 style={bar2} >Tech We Use</h2></center></Col>
    <Col xs={10} xsOffset={1} lgHidden mdHidden>

      <Col md={3} xs={6}><center><a href="http://spark.apache.org/" ><img src='./img/spark.png' style={imgStyle}/></a></center></Col>
      <Col md={3} xs={6}><center><a href="https://facebook.github.io/react/" ><img src='./img/react.png' style={imgStyle}/></a></center></Col>
      <Col md={3} xs={6}><center><a href="https://nodejs.org/en/" ><img src='./img/nodejs.png' style={imgStyle}/></a></center></Col>
      <Col md={3} xs={6}><center><a href="https://slack.com/" ><img src='./img/slack.png' style={imgStyle}/></a></center></Col>


  </Col>


</Row>
);

// tech.propTypes = {
//   : React.PropTypes.
// };

export default tech;
