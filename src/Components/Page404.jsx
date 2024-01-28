import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Page404() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="text-center mt-2 ">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
              alt="page not found"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Page404;
