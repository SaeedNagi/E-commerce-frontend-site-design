import React from "react";
import "../Style/Header.css";
import icons8administratormale from "../Images/icons8administratormale.png";
import icons8heart from "../Images/icons8heart.png";
import icons8shoppingcart from "../Images/icons8shoppingcart.png";
import icons8sms from "../Images/icons8sms.png";
import icons8bag from "../Images/icons8bag.png";
import flag from "../Images/flag.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="Navbar-homepage">
        <div className="navbar">
          <div className="brand brand-5">
            <img src={icons8bag} alt="" />
            <span>Brand</span>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <select>
              <option>All category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
            </select>
            <button>Search</button>
          </div>
          <div className="icons">
            <div className="icon">
              <img src={icons8administratormale} alt="Profile"></img>
              <span>Profile</span>
            </div>
            <div className="icon">
              <img src={icons8heart} alt="Message" />
              <span>Message</span>
            </div>
            <div className="icon">
              <img src={icons8shoppingcart} alt="Orders" />
              <span>Orders</span>
            </div>
            <Link to="/mycart"><div className="icon">
              <img src={icons8sms} alt="My Cart" />
              <span>MyCart</span>
            </div></Link>
          </div>
        </div>
        <div className="top-nav">
          <div className="menu-left">
            <span className="menu-icon">☰</span>
            <Link to="/categore"><span>All Categories</span></Link>
            <span>Categore</span>
            <span>Gift Box</span>
            <span>Projects</span>
            <span>Menu item</span>
            <span>Help ▾</span>
          </div>
          <div className="menu-right">
            <span>English, USD ▾</span>
            <span>
              Ship to <img src={flag} alt="" /> ▾
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
