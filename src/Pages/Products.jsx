import { Col, Container, Row } from "react-bootstrap";
import Navbars from "../Components/Navbars";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    try {
      const jwtToken = Cookies.get("jwt_token");

      const apiUrl = "https://apis.ccbp.in/products";

      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: "GET",
      };

      const response = await fetch(apiUrl, options);
      const data = await response.json();

      setProducts(data.products);

      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Navbars />

      <Container fluid>
        <Row>
          <Col>
            <div className="p3-5 prods">
              {products.map((item, index) => {
                const { brand, image_url, price, rating, title } = item;

                return (
                  <div key={index.id} className="product-container">
                    <div className="image-container">
                      <img src={image_url} alt="" />
                    </div>
                    <div className="image-container">
                      <p>{brand}</p>
                    </div>
                    <div className="image-container">
                      <p>{price}</p>
                    </div>
                    <div className="image-container">
                      <p>{rating}</p>
                    </div>
                    <div className="image-container">
                      <p>{title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Products;
