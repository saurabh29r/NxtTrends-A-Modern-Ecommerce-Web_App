import { Col, Container, Row } from "react-bootstrap";
import Navbars from "../Components/Navbars";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./Products.css";
import LazyLoad from "react-lazy-load";
import { FaSearch } from "react-icons/fa";
import { CirclesWithBar } from "react-loader-spinner";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(false);
      // the above will show the data in console.

      // console.log(data.id);
      // console.log(data.products[16].id);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbars />

      <Container fluid>
        <Row>
          <Col>
            <div>
              <h2 className="mains-heading"> All Products</h2>
            </div>
            <div className="input-wrapper">
              <FaSearch id="search-icon" />
              <input
                type="search"
                placeholder="Please Enter the product Like:watch,toy etc"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="p3-5 prods">
              {isLoading ? (
                <div className="loader">
                  <CirclesWithBar /> {/*loader added here  */}
                </div>
              ) : filteredProducts.length === 0 ? (
                <div className="empty-search-conatiner">
                  <div className="empty-search">
                    <img
                      src={
                        "https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
                      }
                      alt="No results found"
                      className="no-product-found"
                    />

                    <h3> No Products Found</h3>
                    <p> Search something else</p>
                  </div>
                </div>
              ) : (
                filteredProducts.map((item, index) => {
                  const { brand, image_url, price, rating, title, id } = item;

                  return (
                    <LazyLoad key={index}>
                      <div className="product-container">
                        <img src={image_url} alt="" className="map-image" />
                        <div className="card-body">
                          <h5 className="card-title text-center pt-2">
                            {title.substr(0, 30)}
                          </h5>
                          <p className="card-text text-center">{`by ${brand}`}</p>

                          <p className="text-center price">{`₹ ${price}`}</p>
                          <div className="rating-container">
                            <p className="ratings text-center">{`${rating} ⭐`}</p>
                          </div>
                          <div className="btns text-center">
                            <button className="btns">
                              <Link to={`/products/${id}`}> View More </Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </LazyLoad>
                  );
                })
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Products;
