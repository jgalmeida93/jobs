import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import ia from "../assets/material/ia.png";
import uxui from "../assets/material/uxui.png";
import dev from "../assets/material/dev.png";
import link from "../assets/material/link.png";
import seo from "../assets/material/seo.png";
import web from "../assets/material/web.png";
import app from "../assets/material/app.png";
import campanha from "../assets/material/campanha.png";
import social from "../assets/material/social.png";

const Especialidades = () => {
  return (
    <Container className="margin-top">
      <Row className="text-center">
        <Col>
          <h5 className="sabionRoxo fontBold">SOMOS 360º</h5>
          <div className="horizontalDecorator mx-auto"></div>
        </Col>
      </Row>
      <Row className="text-center my-5">
        <Col sm={12} md={4} lg={4} xl={4}>
          <img src={ia} alt="Inteligência Artificial" />
          <h5 className="mt-2 text-uppercase fontBold">
            Inteligência Artificial
          </h5>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <img src={uxui} alt="UX/UI Design" />
          <h5 className="mt-2 text-uppercase fontBold">UX/UI Design</h5>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <img src={dev} alt="Desenvolvimento" />
          <h5 className="mt-2 text-uppercase fontBold">Desenvolvimento</h5>
        </Col>
      </Row>
      <Row className="text-center my-5">
        <Col sm={12} md={4} lg={4} xl={4}>
          <img src={link} alt="Links patrocinados" />
          <h5 className="mt-2 text-uppercase fontBold">Links patrocinados</h5>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <img src={seo} alt="SEO" />
          <h5 className="mt-2 text-uppercase fontBold">SEO</h5>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <img src={web} alt="Web Analytics / B.I." />
          <h5 className="mt-2 text-uppercase fontBold">Web Analytics / B.I.</h5>
        </Col>
      </Row>
      <Row className="text-center my-5">
        <Col sm={12} md={4} lg={4} xl={4}>
          <img src={app} alt="Criação de APPS" />
          <h5 className="mt-2 text-uppercase fontBold">Criação de APPS</h5>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <img src={campanha} alt="Campanhas" />
          <h5 className="mt-2 text-uppercase fontBold">Campanhas</h5>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <img src={social} alt="Redes sociais" />
          <h5 className="mt-2 text-uppercase fontBold">Redes sociais</h5>
        </Col>
      </Row>
      <div className="horizontalDecorator d-block mx-auto"></div>
    </Container>
  );
};

export default Especialidades;
