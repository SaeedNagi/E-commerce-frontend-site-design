import React from "react";
import "../Style/Categore.css";
// import { Route } from "react-router-dom";
import iPhone_16_Pro_Max from "../Images/iPhone_16_Pro_Max.png";
import samsung from "../Images/samsung.png";
import watches from "../Images/watches.png";
import WP205_head from "../Images/WP205_head.png";
import New_Surface_Laptop from "../Images/New_Surface_Laptop.png";
import right_arrow from "../Images/right_arrow.png";
import { Link } from "react-router-dom";
export default function Categore() {
  return (
    <>
      <div className="bred">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <img src={right_arrow} alt="" />
          <a href="#">Mobile accessory</a>
          <img src={right_arrow} alt="" />
          <a href="#">Men's wear</a>
          <img src={right_arrow} alt="" />
          <a href="#">Summer clothing</a>
        </div>
        <div className="fetch">
          <div className="container">
            <aside className="sidebar">
              <h3>Category</h3>
              <ul>
                <li>
                  <a href="#">Mobile accessory</a>
                </li>
                <li>
                  <a href="#">Electronics</a>
                </li>
                <li>
                  <a href="#">Smartphones</a>
                </li>
                <li>
                  <a href="#">Modern tech</a>
                </li>
                <li>
                  <a href="#">See all</a>
                </li>
              </ul>
            </aside>
            <aside className="sidebar">
              <h3>Brands</h3>
              <ul>
                <input type="checkbox" />
                Samsung
                <br />
                <input type="checkbox" />
                Apple
                <br />
                <input type="checkbox" />
                Huawei
                <br />
                <input type="checkbox" />
                Poco
                <br />
                <input type="checkbox" />
                Lenovo
                <br />
                <li>
                  <a href="#">See all</a>
                </li>
              </ul>
            </aside>
            <aside className="sidebar">
              <h3>Features</h3>
              <ul>
                <input type="checkbox" />
                Matalic
                <br />
                <input type="checkbox" />
                Plastic cover
                <br />
                <input type="checkbox" />
                8GB RAM
                <br />
                <input type="checkbox" />
                Super Power
                <br />
                <input type="checkbox" />
                large Memory
                <br />
                <p>
                  <a href="#">See all</a>
                </p>
              </ul>
            </aside>
            <aside className="sidebar">
              <h3>Condition</h3>
              <ul>
                <input type="checkbox" />
                Any
                <br />
                <input type="checkbox" />
                Refurbished
                <br />
                <input type="checkbox" />
                Brand new
                <br />
                <input type="checkbox" />
                Old items
                <br />
              </ul>
            </aside>
            <div className="filter-section">
              <h3>Price Range</h3>
              <input
                type="range"
                min="0"
                max="10000"
                value="0"
                id="min-price"
              />
              <input
                type="range"
                min="0"
                max="10000"
                value="10000"
                id="max-price"
              />
              <div className="price-inputs">
                <label htmlFor="min-price-input">Min</label>
                <input type="number" id="min-price-input" placeholder="0" />
                <label htmlFor="max-price-input">Max</label>
                <input
                  type="number"
                  id="max-price-input"
                  placeholder="999999"
                />
              </div>
              <button className="apply-btn">Apply</button>
            </div>
            <div className="filter-section">
              <h3>Ratings</h3>
              <label>
                <input type="checkbox" value="5" /> <span>★★★★★</span>
              </label>
              <label>
                <input type="checkbox" value="4" /> <span>★★★★☆</span>
              </label>
              <label>
                <input type="checkbox" value="3" /> <span>★★★☆☆</span>
              </label>
              <label>
                <input type="checkbox" value="2" /> <span>★★☆☆☆</span>
              </label>
              <label>
                <input type="checkbox" value="1" /> <span>★☆☆☆☆</span>
              </label>
            </div>
          </div>
          <div className="main-content">
            <header className="filter-bar">
              <p>
                12,911 items in <strong>Mobile accessory</strong>
              </p>
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Verified only
                </label>
                <select>
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
              <div className="grid">
                <Link to="/categore">
                  {" "}
                  <button
                    class="view-toggle grid-view active"
                    id="grid-view"
                    aria-label="Grid View"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="1"
                        y="3"
                        width="10"
                        height="10"
                        fill="#000"
                      ></rect>
                      <rect
                        x="12"
                        y="3"
                        width="10"
                        height="10"
                        fill="#000"
                      ></rect>
                      <rect
                        x="1"
                        y="13"
                        width="10"
                        height="10"
                        fill="#000"
                      ></rect>
                      <rect
                        x="12"
                        y="13"
                        width="10"
                        height="10"
                        fill="#000"
                      ></rect>
                    </svg>
                  </button>
                </Link>
                <Link to="/dashboard">
                  {" "}
                  <button
                    class="view-toggle list-view"
                    id="list-view"
                    aria-label="List View"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="5" width="4" height="4" fill="#000"></rect>
                      <rect
                        x="9"
                        y="5"
                        width="12"
                        height="4"
                        fill="#000"
                      ></rect>
                      <rect
                        x="3"
                        y="11"
                        width="4"
                        height="4"
                        fill="#000"
                      ></rect>
                      <rect
                        x="9"
                        y="11"
                        width="12"
                        height="4"
                        fill="#000"
                      ></rect>
                      <rect
                        x="3"
                        y="17"
                        width="4"
                        height="4"
                        fill="#000"
                      ></rect>
                      <rect
                        x="9"
                        y="17"
                        width="12"
                        height="4"
                        fill="#000"
                      ></rect>
                    </svg>
                  </button>
                </Link>
              </div>
            </header>

            <div className="product-list">
              <div className="product-item">
                <img src={iPhone_16_Pro_Max} alt="" />
                <div className="product-details">
                  <h4>GoPro HERO8 4K Action Camera - Black</h4>
                  <h3 className="price">$998.00</h3>
                  <p>
                    ⭐⭐⭐⭐ <strong>7.5</strong> - 154 orders -{" "}
                    <b>Free Shipping</b>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus, eaque amet tenetur laudantium explicabo sit
                    officiis, quam voluptatum cupiditate in dolorem?.
                  </p>
                  <Link to="/webdetails">View details</Link>
                </div>
              </div>
            </div>

            <div className="product-list">
              <div className="product-item">
                <img src={New_Surface_Laptop} alt="" />
                <div className="product-details">
                  <h4>GoPro HERO8 4K Action Camera - Black</h4>
                  <h3 className="price">$998.00</h3>
                  <p>
                    ⭐⭐⭐⭐ <strong>7.5</strong> - 154 orders -{" "}
                    <b>Free Shipping</b>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus, eaque amet tenetur laudantium explicabo sit
                    officiis, quam voluptatum cupiditate in dolorem?.
                  </p>
                  <Link to="/webdetails">View details</Link>
                </div>
              </div>
            </div>

            <div className="product-list">
              <div className="product-item">
                <img src={WP205_head} alt="" />
                <div className="product-details">
                  <h4>GoPro HERO8 4K Action Camera - Black</h4>
                  <h3 className="price">$998.00</h3>
                  <p>
                    ⭐⭐⭐⭐ <strong>7.5</strong> - 154 orders -{" "}
                    <b>Free Shipping</b>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus, eaque amet tenetur laudantium explicabo sit
                    officiis, quam voluptatum cupiditate in dolorem?.
                  </p>
                  <Link to="/webdetails">View details</Link>
                </div>
              </div>
            </div>

            <div className="product-list">
              <div className="product-item">
                <img src={samsung} alt="" />
                <div className="product-details">
                  <h4>GoPro HERO8 4K Action Camera - Black</h4>
                  <h3 className="price">$998.00</h3>
                  <p>
                    ⭐⭐⭐⭐ <strong>7.5</strong> - 154 orders -{" "}
                    <b>Free Shipping</b>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus, eaque amet tenetur laudantium explicabo sit
                    officiis, quam voluptatum cupiditate in dolorem?.
                  </p>
                  <Link to="/webdetails">View details</Link>
                </div>
              </div>
            </div>

            <div className="product-list">
              <div className="product-item">
                <img src={watches} alt="" />
                <div className="product-details">
                  <h4>GoPro HERO8 4K Action Camera - Black</h4>
                  <h3 className="price">$998.00</h3>
                  <p>
                    ⭐⭐⭐⭐ <strong>7.5</strong> - 154 orders -{" "}
                    <b>Free Shipping</b>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus, eaque amet tenetur laudantium explicabo sit
                    officiis, quam voluptatum cupiditate in dolorem?.
                  </p>
                  <Link to="/webdetails">View details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
