import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbars.css";
import { RxHamburgerMenu } from "react-icons/rx";
function Navbars() {
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <>
      <nav>
        <Link to="/">
          <p> Logo Image </p>
        </Link>
        <div
          className="menu"
          onClick={() => {
            setmenuOpen(!menuOpen);
            console.log("button clcik hua");
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
            <button type="button" className="btn btn-primary m-3">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbars;
