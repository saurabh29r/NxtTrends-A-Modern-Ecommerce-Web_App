import React, { useEffect, useState } from "react";
import EmptyCartView from "./EmptyCartView";
import { Container, Row, Col, Button } from "react-bootstrap";
import Navbars from "../../Components/Navbars";

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
    localStorage.setItem("cart", JSON.stringify(updatedCart));
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
                  <div key={index}>
                    <div className="product_detailed ">
                      <img
                        src={cartItem.prod.image_url}
                        alt="cart_item"
                        className="detailed-view-image"
                      />
                    </div>
                    <p>{cartItem.prod.title}</p>
                    <p>Price: ₹ {cartItem.prod.price}</p>
                    <p>Quantity: {cartItem.quantity}</p>
                    <Button
                      variant="danger"
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <p>Subtotal: ₹ {subTotal}</p>
                {/* Add Checkout Button Here */}
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
