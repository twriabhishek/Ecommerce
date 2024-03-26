import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useCart } from "./CartContext.js";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const { cart } = useCart();

  const totalCount = cart.reduce((total, item) => total + item.count, 0);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a
          className="navbar-brand d-flex justify-content-between align-items-center "
          href="#"
        >
          <img
            src="/assets/images/icons8-e-commerce-64.png"
            width="40"
            height="40"
            className="d-inline-block align-top mr-2"
            alt=""
          />
          e-Commerce
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                About <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/product">
                Product <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/contact-us">
                Contact us <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav ml-auto d-flex flex-row">
          <li className="nav-item active">
            <Link
              className="nav-link ml-4"
              to="/addinCart"
              onClick={() => console.log(cart)}
            >
              <div className="cart-container">
                <img
                  src="/assets/images/cart.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top mr-4 cart-icon"
                  alt=""
                />
                <span className="cart-count">{totalCount}</span>
              </div>
            </Link>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <img
                src="/assets/images/person-circle.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
              />
            </a>
          </li>
        </ul>
      </nav>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
