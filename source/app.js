
import "babel-polyfill"
var React = require('react');
var ReactDOM = require('react-dom');

var Application = require('./components/Application.react');


ReactDOM.render(<Application />, document.getElementById('test-application'));
