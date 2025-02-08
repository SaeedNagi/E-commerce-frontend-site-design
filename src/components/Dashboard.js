import React from "react";
import "../Style/Dashboard.css";
import icons8expandarrow from "../Images/icons8expandarrow.png";
import iPhone_16_Pro_Max from "../Images/iPhone_16_Pro_Max.png";
import samsung from "../Images/samsung.png";
import watches from "../Images/watches.png";
import WP205_head from "../Images/WP205_head.png";
import oppo from "../Images/oppo.png";
import poco from "../Images/poco.png";
import poco1 from "../Images/poco1.png";
import right_arrow from "../Images/right_arrow.png";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <>
      <div className="bool">
        <div className="bread-crumb">
          <Link to = "/">Home</Link>
          <img src={right_arrow} alt="/" />
          <a href="#">Mobile accessory</a>
          <img src={right_arrow} alt="" />
          <a href="#">Men's wear</a>
          <img src={right_arrow} alt="" />
          <a href="#">Summer clothing</a>
        </div>
        <div className="fetch-1">
          <div className="container">
            <aside className="sidebar">
              <h3>Category</h3>
              <ul>
                <li>
                  <a>
                    Mobile accessory
                  </a>
                </li>
                <li>
                  <a href="#">
                    Electronics
                  </a>
                </li>
                <li>
                  <a href="#">
                    Smartphones
                  </a>
                </li>
                <li>
                  <a href="#">Modern tech</a>
                </li>
                <li>
                  <a href="#">
                    See all
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="sidebar">
              <h3>Brands</h3>
              <ul>
                <input type="checkbox" checked />
                Samsung
                <br />
                <input type="checkbox" checked />
                Apple
                <br />
                <input type="checkbox" />
                Huawei
                <br />
                <input type="checkbox" checked />
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
                <input type="checkbox" checked />
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
            <aside className="sidebar-1">
              <h3>Condition</h3>
              <img src={icons8expandarrow} alt="" />
            </aside>
            <div className="sidebar-1">
              <h3>Price Range</h3>
              <img src={icons8expandarrow} alt="" />
            </div>
            <div className="sidebar-1">
              <h3>Ratings</h3>
              <img src={icons8expandarrow} alt="" />
            </div>
            <div className="sidebar-1">
              <h3>Menufecturer</h3>
              <img src={icons8expandarrow} alt="" />
            </div>
          </div>
          <div className="main-content-2">
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
               <Link to = "/categore"> <button class="view-toggle grid-view active" id="grid-view" aria-label="Grid View">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <rect x="1" y="3" width="10" height="10" fill="#000"></rect>
          <rect x="12" y="3" width="10" height="10" fill="#000"></rect>
          <rect x="1" y="13" width="10" height="10" fill="#000"></rect>
          <rect x="12" y="13" width="10" height="10" fill="#000"></rect>
        </svg>
      </button></Link>
              <Link to = "/dashboard"> <button class="view-toggle list-view" id="list-view" aria-label="List View">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <rect x="3" y="5" width="4" height="4" fill="#000"></rect>
          <rect x="9" y="5" width="12" height="4" fill="#000"></rect>
          <rect x="3" y="11" width="4" height="4" fill="#000"></rect>
          <rect x="9" y="11" width="12" height="4" fill="#000"></rect>
          <rect x="3" y="17" width="4" height="4" fill="#000"></rect>
          <rect x="9" y="17" width="12" height="4" fill="#000"></rect>
        </svg>
      </button></Link>
      </div>
            </header>

            <div className="product-head">
              <div className="product-list-2">
                <div className="product-item-2">
                  <img src={iPhone_16_Pro_Max} alt="" />
                  <div className="product-details-2">
                    <h3 className="price">$99.00</h3>
                    <p>
                      ⭐⭐⭐⭐☆<strong>7.5</strong>
                    </p>
                    <h4>GoPro HERO8 4K Action Camera - Black</h4>
                  </div>
                </div>
              </div>
              <div className="product-list-2">
                <div className="product-item-2">
                  <img src={samsung} alt="" />
                  <div className="product-details-2">
                    <h3 className="price">$99.00</h3>
                    <p>
                      ⭐⭐⭐⭐☆<strong>7.5</strong>
                    </p>
                    <h4>GoPro HERO8 4K Action Camera - Black</h4>
                  </div>
                </div>
              </div>
              <div className="product-list-2">
                <div className="product-item-2">
                  <img src={WP205_head} alt="" />
                  <div className="product-details-2">
                    <h3 className="price">$99.00</h3>
                    <p>
                      ⭐⭐⭐⭐☆<strong>7.5</strong>
                    </p>
                    <h4>GoPro HERO8 4K Action Camera - Black</h4>
                  </div>
                </div>
              </div>
              <div className="product-list-2">
                <div className="product-item-2">
                  <img src={watches} alt="" />
                  <div className="product-details-2">
                    <h3 className="price">$99.00</h3>
                    <p>
                      ⭐⭐⭐⭐☆<strong>7.5</strong>
                    </p>
                    <h4>GoPro HERO8 4K Action Camera - Black</h4>
                  </div>
                </div>
              </div>
              <div className="product-list-2 wewewe">
                <div className="product-item-2">
                  <img src={poco1} alt="" />
                  <div className="product-details-2">
                    <h3 className="price">$99.00</h3>
                    <p>
                      ⭐⭐⭐⭐☆<strong>7.5</strong>
                    </p>
                    <h4>GoPro HERO8 4K Action Camera - Black</h4>
                  </div>
                </div>
              </div>
              <div className="product-list-2">
                <div className="product-item-2">
                  <img src={oppo} alt="" />
                  <div className="product-details-2">
                    <h3 className="price">$99.00</h3>
                    <p>
                      ⭐⭐⭐⭐☆<strong>7.5</strong>
                    </p>
                    <h4>GoPro HERO8 4K Action Camera - Black</h4>
                  </div>
                </div>
              </div>
              <div className="product-list-2 wewewe">
                <div className="product-item-2">
                  <img src={poco1} alt="" />
                  <div className="product-details-2">
                    <h3 className="price">$99.00</h3>
                    <p>
                      ⭐⭐⭐⭐☆<strong>7.5</strong>
                    </p>
                    <h4>GoPro HERO8 4K Action Camera - Black</h4>
                  </div>
                </div>
              </div>
              <div className="product-list-2">
                <div className="product-item-2">
                  <img src={watches} alt="" />
                  <div className="product-details-2">
                    <h3 className="price">$99.00</h3>
                    <p>
                      ⭐⭐⭐⭐☆<strong>7.5</strong>
                    </p>
                    <h4>GoPro HERO8 4K Action Camera - Black</h4>
                  </div>
                </div>
              </div>
              <div className="product-list-2 lisst">
                <div className="product-item-2">
                  <img src={poco} alt="" />
                  <div className="product-details-2">
                    <h3 className="price">$99.00</h3>
                    <p>
                      ⭐⭐⭐⭐☆<strong>7.5</strong>
                    </p>
                    <h4>GoPro HERO8 4K Action Camera - Black</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
