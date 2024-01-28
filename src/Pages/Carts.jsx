import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbars from "../Components/Navbars";

function Carts() {
  return (
    <>
      <Navbars />

      <Container>
        <Row>
          <Col>
            <div>
              <p> This is Cart page </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Carts;
