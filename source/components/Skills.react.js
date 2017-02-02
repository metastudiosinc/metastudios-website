var React = require('react');
import Row from "react-bootstrap/lib/Row"
import Col from "react-bootstrap/lib/Col"


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
          <div>
            We Love

              Visualization

              Cloud Computing

              Analysis

              Brand Coaching

          </div>
        </Row>

        <Row>
          <div>
            Tech We Use
            explore with us

          </div>


      </Row>

      <Row>
        <Col md={12} smHidden xsHidden>
          Larger Screen data visualization
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

module.exports = Skills;
