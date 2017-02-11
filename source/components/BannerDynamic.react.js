var React = require('react');
import Row from "react-bootstrap/lib/Row"
import Col from "react-bootstrap/lib/Col"
import Waypoint from 'react-waypoint'
import {VelocityTransitionGroup} from 'velocity-react'
var ReactFitText = require('react-fittext');
var Scroll  = require('react-scroll');

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;


const imgStyle ={
  width:'100%',
}

const bannerStyleLeft = {
  backgroundColor:"#389DBE",
  height:"100%",
  minHeight:"1200px",
  maxHeight:"1800px",
  paddingTop:"20%",
  color:"#FAFAFA",
  textAlign: 'right'
}

const headerStyle ={
  position:"fixed",
  top:0,
  left:0,
  width:"100%",
  height:"70px",
  backgroundColor:"#389DBE",
}


var Banner = React.createClass({

  _handleWaypointEnter:function() {
    this.setState({
      fullSize:true
    })
  },

  _handleWaypointLeave:function() {

    this.setState({
      fullSize:false
    })


  },



  //default API ----------------

  //getDefaultProps: function(){
  //    return null;
  //},

  getInitialState: function() {
    return({
      fullSize:true,
    })
  },
  //
  //componentWillMount: function(){},
  //
  componentDidMount: function(){
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  },
  //
  //componentWillReceiveProps: function(){},

  //shouldComponentUpdate: function(){},

  //componentWillUpdate: function(){},

  render: function() {

    return (
      <div>


        <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp", duration:1500}}>

          {this.state.fullSize ?
            <Row style={{margin:'0px',padding:'0px'}}>
              <Waypoint
                onLeave={this._handleWaypointLeave}
              />

            <Col xs={12} style={{margin:'0px',padding:'0px'}}>
              <Col xs={7} style={bannerStyleLeft}>

                <ReactFitText compressor={0.6}>
                  <h2>Explore.</h2>
                </ReactFitText>
                <ReactFitText compressor={0.6}>
                  <h2>Transform.</h2>
                </ReactFitText>
                <ReactFitText compressor={0.6}>
                  <h2>Be Epic.</h2>
                </ReactFitText>




              </Col>
            </Col>

            </Row>

            : undefined}
        </VelocityTransitionGroup>

        <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
          {!this.state.fullSize ?


              <Row style={headerStyle}>
                <Col xs={12} style={{margin:'0px',padding:'0px',height:"70px",color:"#FAFAFA"}}>
                  <ReactFitText compressor={2}><center><h1>Meta Studios Inc</h1></center></ReactFitText>
                </Col>
              </Row>





            : undefined}
        </VelocityTransitionGroup>
      </div>

    );

  },

  // componentDidUpdate: function(){},
  //
  //componentWillUnmount: function(){}

});

module.exports = Banner;
