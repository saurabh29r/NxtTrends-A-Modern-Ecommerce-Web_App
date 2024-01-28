import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbars from "../Components/Navbars";
function Products() {
  return (
    <>
      <Navbars />

      <Container>
        <Row>
          <Col>
            <div>
              <p> This is Products page </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Products;
