import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbars from "../Components/Navbars";
import { useState } from "react";
import Cookies from "js-cookie";
import Corusels from "../Components/Corusels";
import "./Products.css";

function Products() {
  const [prod, setProd] = useState([]);

  const getProduct = async () => {
    try {
      const apiUrl = "https://apis.ccbp.in/products";
      const jwtTokens = Cookies.get("jwt_token");

      const options = {
        headers: {
          Authorization: `Bearer ${jwtTokens}`,
        },
        method: "GET",
      };

      const response = await fetch(apiUrl, options);
      const productData = response.json();
      setProd(productData.prod);
      console.log(productData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Navbars />

      <Container fluid>
        <Row className="rows">
          <Col lg={12} className="pb-2">
            <Corusels />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="p3-5 prods">
              <h1> Products </h1>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Products;
