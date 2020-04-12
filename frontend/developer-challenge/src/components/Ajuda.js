import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const Ajuda = () => {
  return (
    <div className=" background-sabion margin-top">
      <Container>
        <Row className="align-items-center">
          <Col sm={12} md={12} lg={6} xl={6} className="float-right">
            <h1 className="sabionAmarelo fontBoldItalic f-4x text-help">
              Como podemos te ajudar?
            </h1>
            <h6 className="subText-help text-white fontNormalItalic">
              Entre em contato com um de
              <br /> nossos especialistas para que
              <br /> encontremos uma solução
            </h6>
          </Col>
          <Col sm={12} md={12} lg={6} xl={6}>
            <div className="bg-white shadow formSabion">
              <div className="background-form  mt-5">
                <Form>
                  <Form.Group controlId="formSabionName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Seu nome" />
                  </Form.Group>
                  <Form.Group controlId="formSabionEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Seu e-mail" />
                  </Form.Group>
                  <Form.Group controlId="formSabionTextAre">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="4"
                      placeholder="Sua mensagem"
                    />
                  </Form.Group>
                  <button type="submit" className="sabionRoxoBtn">
                    Enviar
                  </button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Ajuda;
