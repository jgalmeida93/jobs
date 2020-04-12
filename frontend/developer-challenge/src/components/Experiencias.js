import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

import "../styles/gallery.css";
import "../styles/App.css";

const Experiencias = () => {
  const [color, setColor] = useState({
    purple: "purple",
    yellow: "yellow",
    grey: "grey",
  });

  function handleClick(e) {
    if (e.target.text === "All") {
      return setColor({ yellow: "yellow", grey: "grey", purple: "purple" });
    } else if (e.target.text === "Purple") {
      return setColor({ yellow: "", grey: "", purple: "purple" });
    } else if (e.target.text === "Yellow") {
      return setColor({ yellow: "yellow", grey: "", purple: "" });
    } else {
      return setColor({ yellow: "", grey: "grey", purple: "" });
    }
  }

  return (
    <Container className="text-center margin-top">
      <Row className="margin-bot">
        <Col>
          <h2 className="sabionRoxo fontNormalItalic f-4x">
            Criamos <span className="bold">experiências</span>
          </h2>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={6} md={3} lg={3} xl={3}>
          <a
            href="#all"
            className="btn-sabion filter-button"
            data-filter="all"
            role="button"
            onClick={handleClick}
          >
            All
          </a>
        </Col>
        <Col sm={6} md={3} lg={3} xl={3}>
          <a
            href="#purple"
            className="btn-sabion filter-button"
            data-filter="purple"
            role="button"
            onClick={handleClick}
          >
            Purple
          </a>
        </Col>
        <Col sm={6} md={3} lg={3} xl={3}>
          <a
            href="#purple"
            className="btn-sabion filter-button"
            data-filter="yellow"
            role="button"
            onClick={handleClick}
          >
            Yellow
          </a>
        </Col>
        <Col sm={6} md={3} lg={3} xl={3}>
          {" "}
          <a
            href="#purple"
            className="btn-sabion filter-button"
            data-filter="grey"
            role="button"
            onClick={handleClick}
          >
            Grey
          </a>
        </Col>
      </Row>
      <div className="header">
        <div className="row">
          <div className="column">
            <div className={color.purple}></div>
            <div className={color.yellow}></div>
            <div className={color.grey}></div>
          </div>
          <div className="column">
            <div className={color.yellow}></div>
            <div className={color.grey}></div>
            <div className={color.purple}></div>
          </div>
          <div className="column">
            <div className={color.purple}></div>
            <div className={color.purple}></div>
            <div className={color.grey}></div>
          </div>
          <div className="column">
            <div className={color.grey}></div>
            <div className={color.yellow}></div>
            <div className={color.purple}></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Experiencias;
