import Products from "./Products";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

function ProductsDetailPage() {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const { id } = params;
  console.log(id);
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

      // setProducts(data.products);

      console.log(data);
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
      this is dynamic route
      <h1> {id}</h1>
    </>
    //   <div>
    //    <Link to= "/products ${id}"> </Link>
    //   </div>
  );
}

export default ProductsDetailPage;
