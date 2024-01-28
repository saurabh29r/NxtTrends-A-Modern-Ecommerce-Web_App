import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./Logins.css";
import Accordians from "./Accordians";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Login() {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [showErro, setShowError] = useState(false);

  let navigate = useNavigate();
  // here useNavigate hook is used for navigate from one page to another page.

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetais = { username, password };

    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",

      body: JSON.stringify(userDetais),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    console.log(response);

    if (response.ok === true) {
      navigate("../", { replace: true });
      Cookies.set("jwt_token", data.jwt_token, {
        expires: 5,
      });
      // here we should remember that we use ../ to fix the page on the current location and disable back button
    } else {
      navigate("/login");
      console.log(data.error_msg);
      setShowError(data.error_msg);
    }
  };

  useEffect(() => {
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      navigate("/", { replace: true });
      console.log("jwt_token.value");
    } else if (jwtToken === undefined) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <Container>
      {/* this fluid is used a special class */}
      <Row>
        <Col
          xs={12}
          lg={6}
          className="d-flex justify-content-center align-items-center "
        >
          <div className="login-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="The login"
              className="login-imgage"
            />
          </div>
        </Col>
        <Col
          xs={12}
          lg={6}
          className="d-flex justify-content-center  align-items-center pt-5"
        >
          <div className="form-container p-3">
            <Form>
              <div className="text-center">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                  alt="form-img"
                  className="form-image"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="users" className="label-element">
                  {" "}
                  Username
                </label>
                <input
                  type="text"
                  id="users"
                  placeholder="Enter the username"
                  className="form-control"
                  name="users"
                  value={username}
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>
              <div className="mt-2">
                <label htmlFor="pass" className="label-element">
                  {" "}
                  Password
                </label>
                <input
                  type="password"
                  id="pass"
                  placeholder="Enter the password"
                  className="form-control"
                  name="pass"
                  value={password}
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <br />
              <div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
              <div>
                {showErro && <div className="error-msg-api"> {showErro} </div>}
              </div>
              <div className="mt-4 d-none d-md-block w-50 accordinas">
                <Accordians />
              </div>
              <div className="mt-2 w-100 d-md-none accordinas">
                <Accordians />
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
