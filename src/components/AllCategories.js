import React from 'react'
import "../Style/Electronics.css";
import "../Style/Deals.css";
import "../Style/Outdoor.css";
import "../Style/Request.css";
import "../Style/Services.css";
import icons8maleuser from "../Images/icons8maleuser.png";
import icsCcbdKL from "../Images/icsCcbdKL.png";
import New_Surface_Laptop from "../Images/New_Surface_Laptop.png";
import eosr8frt_gallery from "../Images/eosr8frt_gallery.png";
import ArtEdition from "../Images/ArtEdition.webp";
import chairsofa from "../Images/chairsofa.png";
import lamp from "../Images/lamp.png";
import boot from "../Images/boot.png";
import watches from "../Images/watches.png";
import mixer from "../Images/mixer.png";
import blenders from "../Images/blenders.png";
import applience from "../Images/applience.png";
import coffee from "../Images/coffee.png";
import WP205_head from "../Images/WP205_head.png";
import kfsu from "../Images/kfsu.png";
import cattle from "../Images/cattle.png";
import tshirt from "../Images/tshirt.png";
import jacket from "../Images/jacket.png";
import coat from "../Images/coat.png";
import bag from "../Images/bag.png";
import wallet from "../Images/wallet.png";
import camm from "../Images/camm.png";
import kit from "../Images/kit.png";
import shorts from "../Images/shorts.png";
import unitedarabemirates from "../Images/unitedarabemirates.png";
import australia from "../Images/australia.png";
import unitedstatesislands from "../Images/unitedstatesislands.png";
import russia from "../Images/russia.png";
import italy from "../Images/italy.png";
import denmark from "../Images/denmark.png";
import france from "../Images/france.png";
import china from "../Images/china.png";
import greatbritain from "../Images/greatbritain.png";
function AllCategories() {
  return (
    <div className="Categore">
        <div className="electro">
          <div className="side-br">
            <button>Automobiles</button>
            <button value="">Cloths and wears</button>
            <button value="">Home interiors</button>
            <button value="">Computer and tech</button>
            <button value="">Tools, equipments</button>
            <button value="">Sports and outdoors</button>
            <button value="">Animal and pets</button>
            <button value="">Mahinery tools</button>
            <button value="">More category</button>
          </div>
          <div className="imge">
            <div className="back"></div>
            <div className="topbar">
              <div className="topbar-1">
                <div className="card">
                  <img src={icons8maleuser} alt="" />
                  <div className="pra">
                    <p>Hi, user</p>
                    <p>Let's get started</p>
                  </div>
                </div>
                <div className="bar-2">
                  <button className="btn join">Join now</button>
                  <button className="btn login">Log in</button>
                </div>
              </div>
              <div className="topbar-2">
                <p>
                  Get US $10 off
                  <br />
                  with a new
                  <br />
                  supplier
                </p>
              </div>
              <div className="topbar-3">
                <p>
                  Send quotes with
                  <br />
                  supplier <br />
                  preference
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="deals">
          <div className="deal-1">
            <h2>Deals and offers</h2>
            <p>Hygiene equipments</p>
            <div className="del12">
              <div className="clg0">
                <p>
                  04 <br />
                  days
                </p>
              </div>
              <div className="clg0">
                <p>
                  13 <br />
                  hours
                </p>
              </div>
              <div className="clg0">
                <p>
                  34 <br />
                  mins
                </p>
              </div>
              <div className="clg0">
                <p>
                  56 <br />
                  sec
                </p>
              </div>
            </div>
          </div>
          <div className="deal-2">
            <img src={icsCcbdKL} alt="" />
            <p>Smart watches</p>
            <button>-25%</button>
          </div>
          <div className="deal-3">
            <img src={New_Surface_Laptop} alt="" />
            <p>Smart watches</p>
            <button>-25%</button>
          </div>
          <div className="deal-4">
            <img src={eosr8frt_gallery} alt="" />
            <p>Smart watches</p>
            <button>-25%</button>
          </div>
          <div className="deal-5">
            <img src={kfsu} alt="" />
            <p>Smart watches</p>
            <button>-25%</button>
          </div>
          <div className="deal-6">
            <img src={ArtEdition} alt="" />
            <p>Smart watches</p>
            <button>-25%</button>
          </div>
        </div>

        <div className="outdor">
          <div className="out">
            <div className="left-panel">
              <h3>
                Home and <br />
                outdoor
              </h3>
              <button className="btn">Source now</button>
            </div>
          </div>
          <div className="right-panel">
            <div className="product">
              <h4>Soft chairs</h4>
              <p>
                From <br /> USD 19
              </p>
              <img src={chairsofa} alt="" />
            </div>
            <div className="product pro">
              <h4>Sofa & chair</h4>
              <p>
                From <br /> USD 19
              </p>
              <img src={lamp} alt="" />
            </div>
            <div className="product pro">
              <h4>Kitchen dishes</h4>
              <p>
                From <br /> USD 19
              </p>
              <img src={boot} alt="" />
            </div>
            <div className="product pro">
              <h4>Smart watches</h4>
              <p>
                From <br /> USD 19
              </p>
              <img src={watches} alt="" />
            </div>
            <div className="product pro">
              <h4>Kitchen mixer</h4>
              <p>
                From <br /> USD 100
              </p>
              <img src={mixer} alt="" />
            </div>
            <div className="product pro">
              <h4>Blenders</h4>
              <p>
                From <br /> USD 39
              </p>
              <img src={blenders} alt="" />
            </div>
            <div className="product">
              <h4>Home appliance</h4>
              <p>
                From <br /> USD 10
              </p>
              <img src={applience} alt="" />
            </div>
            <div className="product pro">
              <h4>Coffee maker</h4>
              <p>
                From <br /> USD 10
              </p>
              <img src={coffee} alt="" />
            </div>
          </div>
        </div>

        <div className="gadgets">
          <div className="gedt">
            <div className="left-panel">
              <h3>
                Consumer <br />
                Electronics and <br />
                gadgets
              </h3>
              <button className="btn">Source now</button>
            </div>
          </div>
          <div className="right-panel">
            <div className="product pi">
              <h4>Smart watches</h4>
              <p>
                From <br /> USD 19
              </p>
              <img src={icsCcbdKL} alt="" />
            </div>
            <div className="product pro poo">
              <h4>Cameras</h4>
              <p>
                From <br /> USD 89
              </p>
              <img src={eosr8frt_gallery} alt="" />
            </div>
            <div className="product pro pi">
              <h4>headphones</h4>
              <p>
                From <br /> USD 10
              </p>
              <img src={kfsu} alt="" />
            </div>
            <div className="product pro">
              <h4>Smart watches</h4>
              <p>
                From <br /> USD 90
              </p>
              <img src={watches} alt="" />
            </div>
            <div className="product pro">
              <h4>Gaming set</h4>
              <p>
                From <br /> USD 35
              </p>
              <img src={WP205_head} alt="" />
            </div>
            <div className="product pro pii">
              <h4>Laptops & PC</h4>
              <p>
                From <br /> USD 350
              </p>
              <img src={New_Surface_Laptop} alt="" />
            </div>
            <div className="product pi">
              <h4>Smart Phones</h4>
              <p>
                From <br /> USD 19
              </p>
              <img src={ArtEdition} alt="" />
            </div>
            <div className="product pro">
              <h4>Electric kattle</h4>
              <p>
                From <br /> USD 240
              </p>
              <img src={cattle} alt="" />
            </div>
          </div>
        </div>
        <div className="req">
          <div className="request-1">
            <h2>
              An easy way to send <br />
              request to all suppliers
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
              inventore dolorem! Possimus maiores dignissimos optio eveniet quo
              perferendis ut officiis eos sunt.
            </p>
          </div>
          <div className="request-2">
            <h2>Send quote to supplier</h2>
            <div className="form-group">
              <label htmlFor="item">What item you need?</label>
              <input
                type="text"
                id="item"
                name="item"
                placeholder="Enter item"
              />
            </div>
            <div className="form-group">
              <textarea
                id="details"
                name="details"
                rows="3"
                placeholder="Provide more details"
              ></textarea>
            </div>
            <div className="form-group">
              {/* <label for="quantity">Quantity</label> */}
              <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder="Enter quantity"
              />
            </div>
            <div className="form-group group">
              {/* <label for="unit">Unit</label> */}
              <select id="unit" name="unit">
                <option value="pcs">Pcs</option>
                <option value="kg">Kg</option>
                <option value="liters">Liters</option>
              </select>
            </div>
            <button type="submit" className="btn1">
              Send Inquiry
            </button>
          </div>
        </div>

        <div className="recommend">
          <p>Recommended items</p>
          <div className="recomm-12">
            <div className="recom-1">
              <img src={tshirt} alt="" />
              <h3>$10.30</h3>
              <p>
                T-shirt with multiple <br />
                colors, for men
              </p>
            </div>
            <div className="recom-1">
              <img src={jacket} alt="" />
              <h3>$10.30</h3>
              <p>
                Jeans short for men
                <br />
                blue color
              </p>
            </div>
            <div className="recom-1">
              <img src={coat} alt="" />
              <h3>$12.50</h3>
              <p>
                Brown winter coat
                <br />
                medium size
              </p>
            </div>
            <div className="recom-1">
              <img src={bag} alt="" />
              <h3>$34.00</h3>
              <p>
                Jeans bag for
                <br />
                travel, for men
              </p>
            </div>
            <div className="recom-1">
              <img src={wallet} alt="" />
              <h3>$99.00</h3>
              <p>
                Lather wallet
                <br />
              </p>
            </div>
            <div className="recom-1">
              <img src={camm} alt="" />
              <h3>$09.99</h3>
              <p>
                Cannon camera <br />
                black 100x zoom
              </p>
            </div>
            <div className="recom-1">
              <img src={WP205_head} alt="" />
              <h3>$08.99</h3>
              <p>
                Headset for gaming
                <br />
                with mic
              </p>
            </div>
            <div className="recom-1">
              <img src={watches} alt="" />
              <h3>$10.30</h3>
              <p>
                Smart watche
                <br />
                silver color modern
              </p>
            </div>
            <div className="recom-1">
              <img src={kit} alt="" />
              <h3>$10.30</h3>
              <p>
                Blue wallet for men
                <br />
                lether meterial
              </p>
            </div>
            <div className="recom-1 wewrw">
              <img src={shorts} alt="" />
              <h3>$80.95</h3>
              <p>
                Jeans bag for
                <br />
                travel, for men
              </p>
            </div>
          </div>
        </div>

        <div className="Services">
          <h2>Our extra services</h2>
          <div className="servic">
            <div className="irrrrt">
              <div className="ser-1"></div>
              <p>
                Source from
                <br />
                inductry hub
              </p>
            </div>
            <div className="irrrrt">
              <div className="ser-2"></div>
              <p>
                Customize your
                <br />
                product
              </p>
            </div>
            <div className="irrrrt">
              <div className="ser-3"></div>
              <p>
                Fast reliable shipping <br />
                by occen or air
              </p>
            </div>
            <div className="irrrrt">
              <div className="ser-4"></div>
              <p>
                Product monitoring <br />
                and inspection
              </p>
            </div>
          </div>
        </div>

        <section className="suppliers">
          <h2>Suppliers by region</h2>
          <div className="suppliers-container">
            <div className="supplier">
              <img src={unitedarabemirates} alt="" />
              <div className="supplier-info">
                <span>Arabic Emirates</span>
                <br />
                <small>shopname.ae</small>
              </div>
            </div>
            <div className="supplier">
              <img src={australia} alt="" />
              <div className="supplier-info">
                <span>Australia</span>
                <br />
                <small>shopname.au</small>
              </div>
            </div>
            <div className="supplier">
              <img src={unitedstatesislands} alt="" />
              <div className="supplier-info">
                <span>United States</span>
                <br />
                <small>shopname.us</small>
              </div>
            </div>
            <div className="supplier">
              <img src={russia} alt="" />
              <div className="supplier-info">
                <span>Russia</span>
                <br />
                <small>shopname.ru</small>
              </div>
            </div>
            <div className="supplier">
              <img src={italy} alt="" />
              <div className="supplier-info">
                <span>Italy</span>
                <br />
                <small>shopname.it</small>
              </div>
            </div>
            <div className="supplier">
              <img src={denmark} alt="" />
              <div className="supplier-info">
                <span>Denmark</span>
                <br />
                <small>denmark.com.dk</small>
              </div>
            </div>
            <div className="supplier">
              <img src={unitedarabemirates} alt="" />
              <div className="supplier-info">
                <span>Arabic Emirates</span>
                <br />
                <small>shopname.ae</small>
              </div>
            </div>
            <div className="supplier">
              <img src={france} alt="" />
              <div className="supplier-info">
                <span>France</span>
                <br />
                <small>shopname.com.fr</small>
              </div>
            </div>
            <div className="supplier">
              <img src={china} alt="" />
              <div className="supplier-info">
                <span>China</span>
                <br />
                <small>shopname.cn</small>
              </div>
            </div>
            <div className="supplier">
              <img src={greatbritain} alt="" />
              <div className="supplier-info">
                <span>Great Britain</span>
                <br />
                <small>shopname.co.uk</small>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default AllCategories