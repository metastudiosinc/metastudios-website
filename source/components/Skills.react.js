var React = require('react');
import Row from "react-bootstrap/lib/Row"
import Col from "react-bootstrap/lib/Col"
import SVGgraph from "./SVGgraph.react.js"
import Dimensions from 'react-dimensions'
import { Parallax } from 'react-parallax';
var ReactFitText = require('react-fittext');



const textStyle ={
  width:"100%",
  height:"auto",
  textAlight:"right",
  direction: 'rtl',
}

const flexed = {
  display:'inline-flex',
  backgroundColor:'rgba(250, 250, 250, 0.6)',
  paddingRight:"50px"
}

const imgStyle={
  height:"100px",
  margin:"10px",
  maxWidth:"150px",
}

const textPop ={
  color:"#389DBE",
  fontSize:"1.5em"
}

const bar={
  width:"100%",
  height:"auto",
  backgroundColor:"#00A79D",
  color:"#FAFAFA",
  margin:"0px",
  padding:"10px"
}

const bar2={
  width:"100%",
  height:"auto",
  backgroundColor:"#65D1E4",
  color:"#FAFAFA",
  margin:"0px",
  padding:"10px"
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
      <div >
        <Row style={{marginTop:"0px"}}>
          <div style={textStyle}>
            <Parallax bgImage="img/bowtie.jpg" strength={100} bgStyle={{minHeight:"110%", minWidth:'100%'}} blur={1}>

              <Col xs={12} style={flexed}>
                <h4>combining new tech, clever strategy, and intuitive UI <br /> <span style={textPop}>We are creators</span></h4>
              </Col>

              <Col xs={12} style={flexed}>
                  <h4>transforming data into insights <br /><span style={textPop}> We are storytellers</span></h4>
              </Col>

              <Col xs={12} style={flexed}>
                <h4>building unique data visualization software solutions <br /><span style={textPop}>We are developers</span></h4>
              </Col>

              <Col xs={12} style={flexed}>
                  <h4>putting the cookies on the bottom shelf <br /><span style={textPop}>We are rebels and scruffy looking nerf herders</span></h4>
              </Col>

            </Parallax>
          </div>
        </Row>

        <Row>
          <center><h2 style={bar} lgHidden mdHidden>Things we love</h2></center>
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

        <Row>
          <Col xs={12} lgHidden mdHidden> <center><h2 style={bar2} >Tech We Use</h2></center></Col>
          <Col xs={10} xsOffset={1} lgHidden mdHidden>

            <Col md={3} xs={6}><center><a href="http://spark.apache.org/" ><img src='./img/spark.png' style={imgStyle}/></a></center></Col>
            <Col md={3} xs={6}><center><a href="https://facebook.github.io/react/" ><img src='./img/react.png' style={imgStyle}/></a></center></Col>
            <Col md={3} xs={6}><center><a href="https://nodejs.org/en/" ><img src='./img/nodejs.png' style={imgStyle}/></a></center></Col>
            <Col md={3} xs={6}><center><a href="https://slack.com/" ><img src='./img/slack.png' style={imgStyle}/></a></center></Col>


        </Col>


      </Row>

      <Row>
        <Col md={12} smHidden xsHidden>
          <center>
          <SVGgraph
              containerWidth={this.props.containerWidth -10}
              containerHeight={this.props.containerHeight -10}
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
