var React = require('react');
var Header = require('./Header.react');
import banner from "./banner.react.js"
import Skills from "./Skills.react.js"
import connect from "./connect.react.js"
import footer from "./footer.react.js"

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
      <div className="container-fluid" style={{margin:'0px',padding:'0px'}}>
        {banner()}
        {connect()}
        <Skills />
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

module.exports = Application;
