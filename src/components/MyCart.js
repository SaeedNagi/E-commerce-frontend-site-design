import React, { useState } from "react";
import "../Style/MyCart.css";
import tshirt from "../Images/tshirt.png";
import bag from "../Images/bag.png";
import lamp from "../Images/lamp.png";
import applepay from "../Images/applepay.png";
import visalogo from "../Images/visalogo.png";
import creditcard from "../Images/creditcard.png";
import paypallogo from "../Images/paypallogo.png";
import icons8securitylock from "../Images/icons8securitylock.png";
import icons8urgentmessage from "../Images/icons8urgentmessage.png";
import icons8delivery from "../Images/icons8delivery.png";
import samsung from "../Images/samsung.png";
import watches from "../Images/watches.png";
import HPLaptop_Silver_2 from "../Images/HPLaptop_Silver_2.png";
export default function MyCart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "T-shirt", price: 78.99, quantity: 1, image: tshirt },
    { id: 2, name: "Bag", price: 39.0, quantity: 1, image: bag },
    { id: 3, name: "Lamp", price: 170.5, quantity: 1, image: lamp },
  ]);

  const [savedItems, setSavedItems] = useState([
    { id: 4, name: "Samsung", price: 99.5, image: samsung },
    { id: 5, name: "Watch", price: 99.5, image: watches },
    { id: 6, name: "Laptop", price: 99.5, image: HPLaptop_Silver_2 },
  ]);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const saveForLater = (id) => {
    const item = cartItems.find((item) => item.id === id);
    setSavedItems([...savedItems, item]);
    removeItem(id);
  };

  const moveToCart = (id) => {
    const item = savedItems.find((item) => item.id === id);
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
    setSavedItems(savedItems.filter((item) => item.id !== id));
  };

  const applyCoupon = () => {
    if (coupon === "DISCOUNT10") {
      setDiscount(10);
    } else {
      setDiscount(0);
      alert("Invalid coupon code");
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = 14;
  const total = subtotal - discount + tax;
  return (
    <>
      <div className="web-head">
        <div className="web-cart">
          <div className="cart-container">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <div class="item-title">
                    T-shirts with multiple colors, for men and lady
                  </div>
                  <div class="item-info">
                    Size: medium, Color: blue, Material: Plastic
                    <br />
                    Seller: Artel Market
                  </div>
                  <p>{item.name}</p>
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                  <button onClick={() => saveForLater(item.id)}>
                    Save for later
                  </button>
                </div>
                <div className="item-actions">
                  <p>${item.price.toFixed(2)}</p>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="cart">
            <div className="cart-2">
              <div class="coupon-section">
                <label for="coupon">Have a coupon?</label>
                <input
                  type="text"
                  id="coupon"
                  placeholder="Add coupon"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button onClick={applyCoupon}>Apply</button>
              </div>
            </div>
            <div className="cart-3">
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <p>Discount: -${discount.toFixed(2)}</p>
              <p>Tax: +${tax.toFixed(2)}</p>
              <p>Total: ${total.toFixed(2)}</p>
              <button onClick={() => alert("Proceeding to checkout...")}>Checkout</button>
              <div className="card">
                <img src={applepay} alt="" />
                <img src={visalogo} alt="" />
                <img src={creditcard} alt="" />
                <img src={paypallogo} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="payment">
          <div className="magic-1">
            <img src={icons8securitylock} alt="" />
          </div>
          <div className="magic">
            <p>Secure Payment</p>
            <p>Have you ever finally just</p>
          </div>
          <div className="magic-1">
            <img src={icons8urgentmessage} alt="" />
          </div>
          <div className="magic">
            <p>Customer</p>
            <p>Have you ever finally just</p>
          </div>
          <div className="magic-1">
            <img src={icons8delivery} alt="" />
          </div>
          <div className="magic">
            <p>Free delivery</p>
            <p>Have you ever finally just</p>
          </div>
        </div>

        <div className="saved">
          <h2>Saved for later</h2>
          <div className="saved-items">
            {savedItems.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt={item.name} />
                <p>${item.price.toFixed(3)}</p>
                <p>GoPro HERO6 4K Action <br />
                Camera - Black</p>
                <button onClick={() => moveToCart(item.id)}>
                  Move to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
