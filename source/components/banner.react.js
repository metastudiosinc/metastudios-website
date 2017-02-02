import React from 'react';
import Row from "react-bootstrap/lib/Row"
import Col from "react-bootstrap/lib/Col"



var bannerImgSrc = "/img/bannerImage.png"

const banner = ({}) => (
  <Row>
    <Col xs={12}>
      <img src={bannerImgSrc} />
    </Col>
  </Row>
);

banner.propTypes = {
  title: React.PropTypes.String
};

export default banner;
