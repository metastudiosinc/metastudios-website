import React from 'react';
import Row from "react-bootstrap/lib/Row"
import Col from "react-bootstrap/lib/Col"

const imgStyle = {
  width:"100%"
}
const banner = (title) => (
  <Row style={{margin:'0px',padding:'0px'}}>
    <Col xs={12} style={{margin:'0px',padding:'0px'}}>
      <img src="/img/bannerImage.png" style={imgStyle}/>
    </Col>
  </Row>
);

banner.propTypes = {
  title: React.PropTypes.String
};

export default banner;
