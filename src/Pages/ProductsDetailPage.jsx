import Products from "./Products";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Navbars from "../Components/Navbars";

function ProductsDetailPage() {
  const [products, setProducts] = useState([]);
  const [similar_products, setSimilarProd] = useState([]);

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

      setProducts(data.products);
      console.log(data.similar_products);
      setSimilarProd(data.similar_products);

      // setProducts(data.products);
      // console.log(data);
      console.log(data);

      // console.log(data.id);
      // console.log(data.products[16].id);
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
      this is dynamic route
      <h1> {id}</h1>
      <div className="product-detailed-container">
        {products.map((item, index) => {
          const { image_url, brand, description, price, rating } = item;

          return (
            <>
              <div className="product_detailed" key={index}>
                <img src={image_url} alt="product_images" />
              </div>
              <div className="brand-conatiner">
                <h3> {brand}</h3>
                <p> {description}</p>
                <p>{price}</p>
                <p> {rating}</p>
              </div>
            </>
          );
        })}
      </div>
      <div>
        <h4> Similar Job Item</h4>
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
  );
}

export default ProductsDetailPage;
