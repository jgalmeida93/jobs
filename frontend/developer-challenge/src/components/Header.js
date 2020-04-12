import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import sabionLogo from "../assets/material/sabion.png";

const Header = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col sm={12} md={12} lg={12} xl={12}>
          <img
            src={sabionLogo}
            className="img-fluid mt-5 logoHeaderSabion"
            width="10%"
            alt="sabionLogo"
          />
          <h1 className="mt-4 headerFont sabionRoxo f-2x">
            {`<`}front-end{`>`}
          </h1>
          <h2 className="fontBoldItalic mt-3 f-3x developerText">
            <span className="sabionAmarelo">developer</span>
            <span className="sabionRoxo">challenge</span>
          </h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
