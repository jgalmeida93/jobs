import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import astronauta from "../assets/material/astronaut.png";

const Sobre = () => {
  return (
    <Container className="margin-top">
      <Row>
        <Col sm={12} md={12} lg={8} xl={8}>
          <h6 className="fontBold sabionRoxo">A SABION</h6>
          <div className="horizontalDecorator"></div>
          <h1 className="sabionRoxo fontNormalItalic f-4x mt-5 header-text">
            "Tornamos o <span className="bold">digital</span> mais{" "}
            <span className="bold">humano.</span>"
          </h1>

          <p className="sabionRoxo fontNormalItalic mt-5 header-subText">
            A <span className="bold">Sabion</span> é uma Agência Digital{" "}
            <span className="bold">full service</span> <br /> especialista em
            tecnologia e inovação
          </p>
        </Col>

        <Col sm={12} md={12} lg={4} xl={4}>
          <img
            src={astronauta}
            className="img-fluid img-header"
            alt="astronauta"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Sobre;
