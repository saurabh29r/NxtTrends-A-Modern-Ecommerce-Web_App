import Products from "./Products";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Navbars from "../Components/Navbars";
import { Container, Row, Col } from "react-bootstrap";
import "./ProductsDetailPage.css";
import { MoveLeft } from "lucide-react";
import { CirclesWithBar } from "react-loader-spinner";

function ProductsDetailPage() {
  const [prod, setDetailProd] = useState([]);
  const [similar_products, setSimilarProd] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const { id } = params;
  // console.log(id);
  // console.log(params);

  const getProductDetails = async () => {
    try {
      const jwtToken = Cookies.get("jwt_token");

      const apiUrl = "https://apis.ccbp.in/products/" + `${id}`;

      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: "GET",
      };

      const response = await fetch(apiUrl, options);
      const data = await response.json();

      setDetailProd(data);
      console.log(data.similar_products);
      setSimilarProd(data.similar_products);

      // setProducts(data.products);
      // console.log(data);
      console.log(data);
      setIsLoading(false);

      // console.log(data.id);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <>
      <Navbars />
      <Container>
        <Row>
          <Col>
            {isLoading ? (
              <div className="loader">
                <CirclesWithBar /> {/*loader added here  */}
              </div>
            ) : (
              <>
                <div className="mt-3">
                  <Link to={`/products`} className="back-button">
                    <button className="btn btn-secondary">
                      {<MoveLeft />}
                    </button>
                  </Link>
                </div>
                <div className="product-detailed-container mt-5 d-flex">
                  <div key={prod.id} className="product_detailed ">
                    <img
                      src={prod.image_url}
                      alt="product_images"
                      className="detailed-view-image"
                    />
                  </div>
                  <div className="brand-conatiner-1 d-none d-lg-block  ">
                    <h2 className="product-name"> {prod.title}</h2>
                    <p className="price"> {`₹ ${prod.price}`}</p>
                    <div className="rating-reviews-con">
                      <div className="rating-conatiner">
                        <p className="ratings"> {`${prod.rating} ⭐`}</p>
                      </div>
                      <p className="reviwes">
                        {`${prod.total_reviews} Reviews`}{" "}
                      </p>
                    </div>

                    <p className="product-description"> {prod.description}</p>
                    <p className="available-product">
                      {` Available : ${prod.availability}`}
                    </p>
                    <p className="brand-section">{`Brand: ${prod.brand}`}</p>
                  </div>
                </div>
                <div>
                  <div className="brand-conatiner-mobile d-block d-lg-none  ">
                    <h2> {prod.title}</h2>
                    <p className="price"> {`₹ ${prod.price}`}</p>
                    <div className="d-flex ">
                      <p> {`${prod.rating} ⭐`}</p>
                      <p> {`${prod.total_reviews} Reviews`} </p>
                    </div>

                    <p> {prod.description}</p>
                    <p className="font-weight-bold">
                      {` Available : ${prod.availability}`}
                    </p>
                    <p> {`Brand: ${prod.brand}`}</p>

                    <p> {prod.rating}</p>
                  </div>
                </div>
                <br />
                <h4 className="mt-5"> Similar Products</h4>
                <div>
                  {similar_products.map((item, index) => {
                    const { image_url, price, rating, title, brand } = item;

                    return (
                      <div key={index}>
                        <div className="similar-product-container">
                          <img src={image_url} alt="similar_products" />
                          <p>{price}</p>
                          <p>{rating}</p>
                          <p> {title}</p>
                          <p> {brand}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductsDetailPage;
