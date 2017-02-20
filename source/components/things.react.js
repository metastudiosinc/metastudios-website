import React from 'react';
import Row from "react-bootstrap/lib/Row"
import Col from "react-bootstrap/lib/Col"


const things = () => (

          <Row>
            <center><h2 style={bar} >Things we love</h2></center>
            <Col xs={10} xsOffset={1} lgHidden mdHidden>
            <div>


                <Col md={3} xs={6}>
                  <center>
                    <img src='./img/logo.svg' style={imgStyle}/>
                    <h4>Visualization</h4>
                  </center>
                </Col>
                <Col md={3} xs={6}>
                  <center>
                    <img src='./img/logo.svg' style={imgStyle}/>
                    <h4>Cloud Computing</h4>
                  </center>
                </Col>
                <Col md={3} xs={6}>
                  <center>
                    <img src='./img/logo.svg' style={imgStyle}/>
                    <h4>Analysis</h4>
                  </center>
                </Col>
                <Col md={3} xs={6}>
                  <center>
                    <img src='./img/logo.svg' style={imgStyle}/>
                    <h4>Brand Coaching</h4>
                  </center>
                </Col>

            </div>
          </Col>
          </Row>
);

// things.propTypes = {
//   : React.PropTypes.
// };

export default things;
