import React from 'react'
import '../Style/Footer.css';
import icons8bag from '../Images/icons8bag.png'
import facebook from '../Images/facebook.png'
import twitterlogo from '../Images/twitterlogo.png'
import camera from '../Images/camera.png'
import youtube from '../Images/youtube.png'
import App_store from '../Images/App_store.jpg';
import play from '../Images/play.jpg';
export default function Footer() {
  return (
    <>
     <section className="newsletter">
    <h2>Subscribe on our newsletter</h2>
    <p>Get daily news on upcoming offers from many suppliers all over the world</p>
    <form className="newsletter-form">
      <input type="email" placeholder="Email"/>
      <button type="submit">Subscribe</button>
    </form>
  </section>
  
      <div className="footer">
           <div className="footer-1">
             <div className="brand1">
                  <img src={icons8bag} alt="" />
                  <span>Brand</span>
                </div>
                <p>Best information about the company <br />
                gies here but now lorem impum is</p>
                <span><img src={facebook} alt=""/></span>
                <span><img src={twitterlogo} alt="" /></span>
                <span><img src={camera} alt="" /></span>
                <span><img src={youtube} alt="" /></span>
           </div>
           <div className="footer-2">
            <h3>About</h3>
            <li><a href="https://www.yoursite.com/about-us">About Us</a></li>
            <li><a href="https://www.yoursite.com/store-locator">Find Store</a></li>
            <li><a href="https://www.yoursite.com/categories">Categories</a></li>
            <li><a href="https://www.yoursite.com/report-bug">Bugs</a></li>
           </div>
           <div className="footer-3">
           <h3>partnership</h3>
            <li><a href="https://www.yoursite.com/about-us">About Us</a></li>
            <li><a href="https://www.yoursite.com/store-locator">Find Store</a></li>
            <li><a href="https://www.yoursite.com/categories">Categories</a></li>
            <li><a href="https://www.yoursite.com/report-bug">Bugs</a></li>
           </div>
           <div className="footer-4">
           <h3>Information</h3>
             <li><a href="https://www.yoursite.com/help-center">Help Center</a></li>
             <li><a href="https://www.yoursite.com/refund-policy">Money Refund</a></li>
             <li><a href="https://www.yoursite.com/shipping-info">Shipping</a></li>
             <li><a href="https://www.yoursite.com/contact">Contact Us</a></li>
           </div>
           <div className="footer-5">
           <h3>For users</h3>
            <li><a href="https://www.yoursite.com/login">Login</a></li>
            <li><a href="https://www.yoursite.com/register">Register</a></li>
            <li><a href="https://www.yoursite.com/account/settings">Settings</a></li>
            <li><a href="https://www.yoursite.com/account/orders">My Orders</a></li>
           </div>
           <div className="footer-6">
            <h3>Get app</h3>
            <img src={App_store} alt="" /><br />
            <img src={play} alt="" />
           </div>
      </div>
      <div className="footer-low">
        <p>2023 Ecommerence</p>
        <select name="select" id="united">
        <option value="">English</option>
        <option value="">Arabic</option>
        <option value="">Australia</option>
        <option value="">Russian</option>
        <option value="">Italian</option>
        <option value="">Denmark</option>
        <option value="">France</option>
        <option value="">Chinees</option>
        <option value="">British</option>
        </select>
      </div>
    </>
  )
}