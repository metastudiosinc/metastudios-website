import React from 'react';
import Row from "react-bootstrap/lib/Row"
import Col from "react-bootstrap/lib/Col"
import SVGgraph from "./SVGgraph.react.js"
import { Parallax } from 'react-parallax';


const skills = (containerWidth, containerHeight) => (
  <Row>
    <Parallax  bgImage="img/gree.jpg" strength={300} bgStyle={{minHeight:containerHeight}}>

    <Col md={12} smHidden xsHidden style={{paddingBottom:"30%", paddingRight:"25%"}}>
      <SVGgraph
          containerWidth={containerWidth * .7}
          containerHeight={containerHeight * .7}
        />
    </Col>
  </Parallax>
  </Row>
);

// skills.propTypes = {
//   : React.PropTypes.
// };

export default (skills);
