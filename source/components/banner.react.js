import React from 'react';
import Row from "react-bootstrap/lib/Row"
import Col from "react-bootstrap/lib/Col"

const imgStyle = {
  width:"100%"
}
const banner = (title) => (
  <Row>
    <Col xs={12}>
      <img src="/img/bannerImage.png" style={imgStyle}/>
    </Col>
  </Row>
);

banner.propTypes = {
  title: React.PropTypes.String
};

export default banner;
