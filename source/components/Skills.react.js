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

const imgStyle = {
  maxWidth:"20%",
  margin:"10px",
  maxHeight:"100px"
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
        <Col xs={12} lgHidden mdHidden>

          <Col xs={12} className="pull-right"><h2 className="pull-right">Meta Studios Inc</h2></Col>
          <div style={textStyle}>
            <Col xs={11} className="pull-right"  style={flexed}><h3>combining new tech, clever strategy, and intuitive UI <br /><strong>We are creators</strong></h3></Col>
            <Col xs={11} className="pull-right" style={flexed}><h3>building unique data visualization software solutions<br /> <strong>We are developers</strong></h3></Col>
            <Col xs={11} className="pull-right" style={flexed}> <h3>transforming data into insights <br /><strong>We are storytellers</strong></h3></Col>
            <Col xs={11} className="pull-right" style={flexed}><h3>putting the cookies on the bottom shelf <br /><strong>We are rebels and scruffy looking nerf herders</strong></h3></Col>
          </div>
          </Col>
        </Row>

        <Row>
          <Col md={12} lgHidden mdHidden>
          <div>
            We Love

              Visualization

              Cloud Computing

              Analysis

              Brand Coaching

          </div>
        </Col>
        </Row>

        <Row>
          <Col md={12} lgHidden mdHidden>
          <h2>Tech We Use</h2>
          <h4>explore with us</h4>
          <div style={{diplay:'inline-flex'}}>

            <a href="http://spark.apache.org/" ><img src='./img/spark.png' style={imgStyle}/></a>
            <a href="https://facebook.github.io/react/" ><img src='./img/react.png' style={imgStyle}/></a>
            <a href="https://nodejs.org/en/" ><img src='./img/nodejs.png' style={imgStyle}/></a>
            <a href="https://slack.com/" ><img src='./img/slack.png' style={imgStyle}/></a>

          </div>
        </Col>


      </Row>

      <Row>
        <Col md={12} smHidden xsHidden>
          <SVGgraph
              containerWidth={this.props.containerWidth}
              containerHeight={this.props.containerHeight}
            />
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
