import { Col, Container, Row } from "react-bootstrap";
import Navbars from "../Components/Navbars";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./Products.css";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

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

      // console.log(data.id);
      // console.log(data.products[16].id);
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
            <div>
              <h2 className="mains-heading"> All Products</h2>
            </div>
            <div className="p3-5 prods">
              {products.map((item, index) => {
                const { brand, image_url, price, rating, title, id } = item;

                return (
                  <>
                    <div key={index} className="product-container">
                      {/* here above we can see the if I write product.id , it will give the error bu if i write product[anynumber(0-56)].id the it works if we manually entered the value in url */}
                      <img src={image_url} alt="" className="map-image" />
                      <div className="card-body">
                        <h5 className="card-title text-center pt-2">
                          {title.substr(0, 30)}
                        </h5>
                        <p className="card-text text-center">{`by ${brand}`}</p>

                        <p className="text-center price">{`₹ ${price}`}</p>

                        <p className="ratings text-center">{`⭐  ${rating}`}</p>
                        <div className="btns text-center">
                          <button className="btns">
                            <Link to={`/products/${id}`}> View More </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
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
