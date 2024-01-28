import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Navbars.css";
import { RxHamburgerMenu } from "react-icons/rx";
import Cookies from "js-cookie";
function Navbars() {
  const [menuOpen, setmenuOpen] = useState(false);

  let navigate = useNavigate();

  const onclickLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login", { replace: true });
  };

  return (
    <>
      <nav>
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="logo"
            className="logo-image"
          />
        </Link>
        <div
          className="menu"
          onClick={() => {
            setmenuOpen(!menuOpen);
            console.log("button click hua");
          }}
        >
          <RxHamburgerMenu />
        </div>

        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/carts">Carts</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-primary m-3"
              onClick={onclickLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbars;
