import React from "react";
import Navbars from "../Components/Navbars";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbars />

      <Container>
        <Row>
          <Col>
            <div className="d-flex flex-row justify-content-between pt-5">
              <div className="pr-3">
                <div className="main-heading-container">
                  <h1 className="main-heading">
                    {" "}
                    Clothes That Get YOU Noticed
                  </h1>
                </div>
                <div className="home-image-container d-lg-none d-md-block d-sm-block d-block">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                    alt=""
                    className="home-img"
                  />
                </div>
                <div className="para">
                  <p className="home-para">
                    Fashion is part of the daily air and it does not quite help
                    that it changes all the time. Clothes have always been a
                    marker of the era and we are in a revolution. Your fashion
                    makes you been seen and heard that way you are. So,
                    celebrate the seasons new and exciting fashion in your own
                    way.
                  </p>
                </div>
                <div className="btn-container mt-3">
                  <button className="btn btn-primary mt-2 buttons">
                    {" "}
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="pl-3">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                  alt=""
                  className="home-img-large-screen d-lg-block  d-none"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
