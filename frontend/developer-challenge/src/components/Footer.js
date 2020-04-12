import React from "react";
import { Container } from "react-bootstrap";
import sabionLogo from "../assets/material/sabion_simbolo.png";

const Footer = () => {
  return (
    <Container className="margin-top text-center mb-5 footerSabion">
      <img
        src={sabionLogo}
        className="img-fluid sabionLogoFooter"
        alt="Logo Sabion Digital"
      />
      <h4 className="mt-4 headerFont sabionRoxo mt-3">
        {`<`}front-end{`>`}
      </h4>
      <h6 className="fontBoldItalic mt-3 f-1x">
        <span className="sabionRoxo">developer</span>
        <span className="sabionRoxo">challenge</span>
      </h6>
    </Container>
  );
};

export default Footer;
