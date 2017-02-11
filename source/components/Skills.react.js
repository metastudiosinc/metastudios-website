var React = require('react');
import Row from "react-bootstrap/lib/Row"
import Col from "react-bootstrap/lib/Col"
import SVGgraph from "./SVGgraph.react.js"
import Dimensions from 'react-dimensions'


const textStyle ={
  width:"100%",
  height:"auto",
  textAlight:"right",
  direction: 'rtl',
  margin:'8px'
}

const flexed = {
  display:'inline-flex'
}

const imgStyle={
  height:"100px",
  margin:"10px"
}


var Skills = React.createClass({

  //default API ----------------

  //getDefaultProps: function(){
  //    return null;
  //},

  //getInitialState: function() {},
  //
  //componentWillMount: function(){},
  //
  //componentDidMount: function(){},
  //
  //componentWillReceiveProps: function(){},

  //shouldComponentUpdate: function(){},

  //componentWillUpdate: function(){},

  render: function() {
    return (
      <div>
        <Row>
        <Col xs={10} xsOffset={1} lgHidden mdHidden>

          <Col xs={10} xsOffset={1}>
            <center>
              <h2>Meta Studios Inc</h2>
            </center>
          </Col>
          <div style={textStyle}>
            <Col xs={10} xsOffset={1} style={flexed}><h3>combining new tech, clever strategy, and intuitive UI <br /><strong>We are creators</strong></h3></Col>
            <Col xs={10} xsOffset={1} style={flexed}><h3>building unique data visualization software solutions<br /> <strong>We are developers</strong></h3></Col>
            <Col xs={10} xsOffset={1} style={flexed}> <h3>transforming data into insights <br /><strong>We are storytellers</strong></h3></Col>
            <Col xs={10} xsOffset={1} style={flexed}><h3>putting the cookies on the bottom shelf <br /><strong>We are rebels and scruffy looking nerf herders</strong></h3></Col>
          </div>
          </Col>
        </Row>

        <Row>
          <Col xs={10} xsOffset={1} lgHidden mdHidden>
          <div>
            <center><h2>We Love</h2></center>

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

        <Row>
          <Col xs={10} xsOffset={1} lgHidden mdHidden>
            <center>
          <h2>Tech We Use</h2>
          <h4>explore with us</h4>
          </center>

            <Col md={3} xs={6}><center><a href="http://spark.apache.org/" ><img src='./img/spark.png' style={imgStyle}/></a></center></Col>
            <Col md={3} xs={6}><center><a href="https://facebook.github.io/react/" ><img src='./img/react.png' style={imgStyle}/></a></center></Col>
            <Col md={3} xs={6}><center><a href="https://nodejs.org/en/" ><img src='./img/nodejs.png' style={imgStyle}/></a></center></Col>
            <Col md={3} xs={6}><center><a href="https://slack.com/" ><img src='./img/slack.png' style={imgStyle}/></a></center></Col>


        </Col>


      </Row>

      <Row>
        <Col md={12} smHidden xsHidden>
          <center>
          <h2>Things we love</h2>
          <SVGgraph
              containerWidth={this.props.containerWidth}
              containerHeight={this.props.containerHeight}
            />
          </center>
        </Col>
      </Row>
    </div>




    );

  }

  //,

  //componentDidUpdate: function(){},
  //
  //componentWillUnmount: function(){}

});

module.exports = Dimensions()(Skills);
