import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Navbars from "../../Components/Navbars";
import "./Carts.css";
import EmptyCartView from "./EmptyCartView";

function Carts() {
  const [cartData, setCartData] = useState([]);
  const [subTotal, setSubtotal] = useState(0);

  const getCartItemsFromLocalStorage = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length > 0) {
      setCartData(cart);
      let tempsubTotal = 0;
      cart.forEach((item) => {
        tempsubTotal += item.prod.price * item.quantity;
      });
      setSubtotal(tempsubTotal);
    }
  };

  useEffect(() => {
    getCartItemsFromLocalStorage();
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = [...cartData];
    updatedCart.splice(index, 1);
    setCartData(updatedCart);
    updateSubtotal(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const incrementQuantity = (index) => {
    const updatedCart = [...cartData];
    updatedCart[index].quantity += 1;
    setCartData(updatedCart);
    updateSubtotal(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decrementQuantity = (index) => {
    const updatedCart = [...cartData];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartData(updatedCart);
      updateSubtotal(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const updateSubtotal = (cart) => {
    let tempsubTotal = 0;
    cart.forEach((item) => {
      tempsubTotal += item.prod.price * item.quantity;
    });
    setSubtotal(tempsubTotal);
  };

  return (
    <>
      <Navbars />
      <Container>
        <Row>
          <Col>
            {cartData.length > 0 ? (
              <div className="mt-3">
                <h2>Your Cart</h2>
                {cartData.map((cartItem, index) => (
                  <div key={index} className="cart_product_item_container">
                    <div className="image-and-price-conatiner">
                      <div className="image-divs">
                        <img
                          src={cartItem.prod.image_url}
                          alt="cart_item"
                          className="carts-image"
                        />
                      </div>
                      <div className="cart-para-container">
                        <p className="cart-para">{cartItem.prod.title}</p>

                        <p className="cart-paras">{`By:${cartItem.prod.brand}`}</p>
                      </div>
                    </div>
                    <div className="cart-price-qunty">
                      <div className="price-container">
                        <p className="carts-prices">
                          {" "}
                          {`₹${cartItem.prod.price * cartItem.quantity}`}
                        </p>
                      </div>
                      <div className="qunatity-container">
                        <p>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => decrementQuantity(index)}
                          >
                            -
                          </Button>
                          {cartItem.quantity}
                          <Button
                            variant="outline-primary"
                            size="sm"
                            onClick={() => incrementQuantity(index)}
                          >
                            +
                          </Button>
                        </p>
                        <Button
                          className="mb-3"
                          variant="info"
                          onClick={() => removeFromCart(index)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="subtotal-checkout-conatainer">
                  <p className="subs-totals">Subtotal: ₹ {subTotal}</p>
                  <div className="checkout-btn">
                    <button className="btn btn-success mb-3"> Checkout </button>
                  </div>
                </div>
              </div>
            ) : (
              <EmptyCartView />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Carts;
