var React = require('react');
var Header = require('./Header.react');
import Banner from "./BannerDynamic.react.js"
import skills from "./skills.react.js"
import connect from "./connect2.react.js"
import weAre from "./weAre.react.js"
import footer from "./footer.react.js"
import Dimensions from 'react-dimensions'

var Application = React.createClass({

  //default API
  //getDefaultProps: function(){
  //    return null;
  //},
  //getInitialState: function() {
  //
  //},
  //
  //componentWillMount: function(){
  //
  //},
  //
  //componentDidMount: function(){
  //
  //},
  //
  //componentWillReceiveProps: function(){
  //
  //},
  //
  //shouldComponentUpdate: function(){
  //
  //},
  //
  //componentWillUpdate: function(){
  //
  //},

  render: function() {
    return (
      <div className="container-fluid" style={{margin:'0px',padding:'0px', height:"100%"}}>
        <Banner
          containerWidth={this.props.containerWidth}
          containerHeight={this.props.containerHeight}
          style={{height:"100%"}}/>

        {weAre()}

        {connect()}


        {skills(this.props.containerWidth, this.props.containerHeight)}

        {footer()}
      </div>
    );

  }

  //,

  //componentDidUpdate: function(){
  //
  //},
  //
  //componentWillUnmount: function(){
  //
  //}

});

module.exports = Dimensions()(Application);
