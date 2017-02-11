var React = require('react');
import Row from "react-bootstrap/lib/Row"
import Col from "react-bootstrap/lib/Col"
var data =require("../../private/data.json")
const PHI = 1.618033988749895 // golden ratio


var centers = {}



function xPointOnEllipse(xrad, angle) {
  return xrad * Math.cos((angle * Math.PI)/180)
}

function yPointOnEllipse(yrad, angle) {
  return yrad * Math.sin((angle * Math.PI)/180)
}

function calcLinks(w,h,data) {


  var links;

  links = data.map(function(val, idx) {
    console.log(val);

    var from = centers[val.from.toString()]
    var to = centers[val.to.toString()]

    var yoffset = -100
    if (to['y'] > from['y'] ){
      yoffset = 100
    }

    var xoffset = -100
    if (to['x'] > from['x']) {
      xoffset = 100
    }

    var curvePath = ("M" + from['x'].toString() + " " + from['y'].toString() +
                     "Q " + (from['x']+ xoffset).toString() + " " + (from['y'] + yoffset).toString() +
                     " " + to['x'].toString() + " " + to['y'].toString() );
    console.log(curvePath);
    return (
      <path key={idx} d={curvePath} stroke="#024873" fill="transparent" strokeWidth="0.2em" opacity="0.5"/>
    )

  })



  return links
}


function innerRing(w, h, data) {
  var ring;
  const ringDist = 120;
  // console.log(w, h, data);
  ring = data.nodes.map(function(val, idx) {
    var angle = (360/data.nodes.length) * idx + 30

    var x = w/2 + xPointOnEllipse(ringDist,angle)
    var y = h/2 + yPointOnEllipse(ringDist/PHI,angle)
    var rad = 70
    centers[val.id.toString()] = {"x":x, "y":y}

    return (
      <g key={idx}>
      <ellipse cx={x} cy={y} rx={rad} ry={rad/PHI} fill={val.color} stroke={val.color} strokeWidth={1}/>
      <text x={x} y={y} dy="0.3em" textAnchor="middle" fill="#FAFAFA" stroke="none" fontSize="2em">
            {val.text}
      </text>
    </g>

    )

  })

  return (<g>{ring}</g>);

}

function middleRing(w,h, data) {
  // var target = (<g><ellipse cx={w/2} cy={h/2} rx={w*0.35 - 50} ry={h*0.35 -50} fill="none" stroke='grey' strokeWidth={1}/></g>)

  var ring;
  // console.log(w, h, data);
  const shapewidth = 140
  const shapeHeight = 40

  ring = data.nodes.map(function(val, idx) {
    var angle = (360/data.nodes.length) * idx - 50


    var x = w/2 + xPointOnEllipse(w*0.35 -50,angle)
    var y = h/2 + yPointOnEllipse(h*0.35 -50,angle)
    centers[val.id.toString()] = {"x":x, "y":y}

    return (
      <g key={idx}>
        <rect  width={shapewidth}
               height={shapeHeight}
               x={x - shapewidth/2 }
               y={y - shapeHeight/2}
               rx={15}
               ry={15}
               fill={val.color} stroke={val.color} strokeWidth={1}/>

        <text x={x}
              y={y}
              dy="0.3em"
              textAnchor="middle" fill="#FAFAFA" stroke="none" fontSize="1em">
              {val.text}
        </text>
    </g>

    )

  })

  return (<g>{ring}</g>);
}

function outerRing(w,h, data) {
  // var target = (<g><ellipse cx={w/2} cy={h/2} rx={w/2 -50} ry={h/2 -50} fill="none" stroke='black' strokeWidth={1}/></g>)

  var ring;
  const rad = 40

  ring = data.nodes.map(function(val, idx) {
    var angle = (360/data.nodes.length) * idx -55

    var x = w/2 + xPointOnEllipse(w/2 -50 ,angle)
    var y = h/2 + yPointOnEllipse(h/2 -50 ,angle)

    centers[val.id.toString()] = {"x":x, "y":y}


    return (
      <g key={idx}>
        <circle
               cx={x}
               cy={y}
               r={rad}
               fill={val.color} stroke={val.color} strokeWidth={1}/>

        <text x={x}
              y={y}
              dy="0.2em"
              textAnchor="middle" fill="#FAFAFA" stroke="none" fontSize=".8em">
              {val.text}
        </text>
    </g>

    )

  })

  return (<g>{ring}</g>);
}

var Graphic = React.createClass({

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
    var w = this.props.containerWidth
    if (w > 1200){
      w = 1200
    }
    var h = w / PHI

    var nodes = (<g>
      {outerRing(w,h,data.nodes["2"])}
      {middleRing(w,h,data.nodes["1"])}
      {innerRing(w,h,data.nodes["0"])}
    </g>)

    var links = (
      <g>
        {calcLinks(w,h,data.links)}

      </g>
    )

    return (
      <div><center>
      <svg height={h} width={w}>
        {links}
        {nodes}
      </svg>
    </center></div>
    );

  }

  //,

  //componentDidUpdate: function(){},
  //
  //componentWillUnmount: function(){}

});

module.exports = Graphic;
