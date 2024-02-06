import { Col, Container, Row } from "react-bootstrap";
import Navbars from "../Components/Navbars";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./Products.css";
import { ShoppingCart } from "lucide-react";

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
                  <div key={index} className="product-container">
                    <img src={image_url} alt="" className="map-image" />
                    <div className="card-body">
                      <h2 className="card-title text-center">
                        {brand.substr(0, 14)}
                      </h2>
                      <p className="card-text text-center">{title}</p>

                      <p className="text-center price">{`₹ ${price}`}</p>

                      <p className="ratings text-center">{`⭐  ${rating}`}</p>
                      <div className="btns text-center">
                        <button className="btns">
                          Add to Cart{<ShoppingCart />}{" "}
                        </button>
                      </div>
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
