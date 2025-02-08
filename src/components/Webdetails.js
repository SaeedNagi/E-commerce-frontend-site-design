import React from 'react';
import '../Style/Webdetails1.css';
import '../Style/Webdetails2.css';
import tshirt from '../Images/tshirt.png';
import image_1 from '../Images/image_1.png';
import image_2 from '../Images/image_2.png';
import image_3 from '../Images/image_3.png';
import image_4 from '../Images/image_4.png';
import image_5 from '../Images/image_5.png';
import icons8tick from '../Images/icons8tick.png';
import icons8r67 from '../Images/icons8r67.png';
import coat from '../Images/coat.png';
import jacket from '../Images/jacket.png'
import wallet from '../Images/wallet.png'
import bag from '../Images/bag.png'
export default function Webdetails() {
  return (
    <>
      <div className="data-page">
         <div className="data-page-1">
          <div className="detail-1">
              <div className="page-1">
                    <img src={tshirt} alt=""/>
                </div>
                    <div className="page-1-1">
                        <div className="long"><img src={image_1} alt="" /></div>
                        <div className="long"><img src={image_2} alt="" /></div>
                        <div className="long"><img src={image_3} alt="" /></div>
                        <div className="long"><img src={image_4} alt="" /></div>
                        <div className="long"><img src={image_5} alt="" /></div>
                        <div className="long"><img src={image_1} alt="" /></div>
                     </div>
                          </div>
           <div className="detail-2">
              <div className="imgg-d">
                   <span><img src={icons8tick} alt="" /> In stock</span> 
               </div>
               <p>Mens Long sleeve T-shirt Cotton Base <br />
                   Layer slim muscle</p>
                   <span>⭐⭐⭐⭐☆ 9.3 </span><span>- 32 reviews</span><span> - 154 sold</span>
                     <div className="price-d">
                          <div className="frist-1-d">
                               <h3>$98.00</h3>
                               <p>50-100 pcs</p>
                          </div>
                          <div className="frist-1-d">
                                <h3>$90.00</h3>
                                <p>100-700 pcs</p>
                          </div>
                          <div className="frist-1-d">
                                <h3>$78.00</h3>
                                <p>700+pcs</p>
                          </div>
                     </div>
                     <div className="price-23-1">
                           <li>price:</li> 
                           <li>Negoitable</li>
                     </div>
                      <div className="price-23-2">
                           <li>Type:</li>
                           <li>Classic shoes</li> 
                      </div>
                        <div className="price-23-2">
                           <li>Material:</li>
                           <li>Plastic Material</li>
                           </div>  
                           <div className="price-23-2">                           
                           <li>Design:</li>
                           <li>Modern design</li>
                        </div>                    
                       <div className="price-23-3">
                           <li>Custmization:</li>
                           <li>Custmize logo and <br /> 
                           design custom packages</li>
                        </div>
                        <div className="price-23-3">
                           <li>protection:</li>
                           <li>Refund policy</li>
                        </div>
                        <div className="price-23-3">
                           <li>Warranty:</li>
                           <li>Full 2 year warranty</li>
                       </div>
             </div>
                 <div className="detail-3">
                       <div className="detail-3-1">
                          <img src={icons8r67} alt="" />
                          <p>Supplier <br />
                             Guarjoi Trading LLC</p>
                       </div>
                       <div className="lo">
                            <p>germany, Berlin</p>
                            <p>Verified Seller</p>
                            <p>Worldwide Shopping</p>
                       </div>
                        <div className="buuto">
                              <button id='buuto-1'>Send inquiry</button>
                              <button id='buuto-2'>Seller's profile</button>
                        </div>
                  </div>
          </div>
         <div className="desc">
               <div className="decode-1">
                    <div className="does">
                            <li>Description</li>
                            <li>Reviews</li>
                            <li>Shipping</li>
                            <li>Auto Seller</li>                       
                    </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt ipsum nulla qui obcaecati iure, officiis ullam at adipisci ipsa porro blanditiis sint molestias nam aperiam ea architecto, provident quas.
                  Iusto voluptatum eum dolorem sunt natus vitae minus doloremque. Expedita accusantium veniam sequi corrupti nihil non! Impedit voluptate adipisci fugit ad sapiente earum exercitationem, repudiandae tempora quae. Iste, dolores natus.
                  Facilis nesciunt, incidunt optio hic voluptas sed et necessitatibus id deleniti tempore illum. Tempora, corporis? Velit quo quae, voluptatem ut deserunt excepturi quos atque ducimus error dolores nihil accusamus? Tempore.
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sequi illum, hic modi magnam libero placeat atque natus omnis molestias non reprehenderit maxime provident quidem odio voluptatem enim nesciunt vel.</p>

                  <table class="product-table">
                       <tr>
                           <td>Model</td>
                           <td>#8786867</td>
                       </tr>
                       <tr>
                           <td>Style</td>
                           <td>Classic style</td>
                       </tr>
                       <tr>
                           <td>Certificate</td>
                           <td>ISO-889321212</td>
                       </tr>
                       <tr>
                           <td>Size</td>
                           <td>34mm x 450mm x 19mm</td>
                       </tr>
                       <tr>
                           <td>Memory</td>
                           <td>36GB RAM</td>
                       </tr>
                   </table>
                  <ul class="features">
                     <li>Some great feature name here</li>
                     <li>Lorem ipsum dolor sit amet, consectetur</li>
                     <li>Duis aute irure dolor in reprehenderit</li>
                     <li>Some great feature name here</li>
                  </ul>
               </div>
              <div className="decode-2">
                             <h4>You may like</h4>
                  <div class="recommendation-item-1">
                            <img src={coat} alt="" />
                       <div className="rooocoome">
                           <a>Men Blazers Sets <br /> Elegant Formal</a>
                           <p class="price-range">$7.00 - $39.50</p>
                       </div>           
                   </div>
                  <div class="recommendation-item-1">
                          <img src={jacket} alt="" />  
                        <div className="rooocoome">
                          <a>Men Shirt Sleeve <br /> Polo Contrast</a>
                         <p class="price-range">$7.00 - $39.50</p>
                      </div> 
                              </div>
                 <div class="recommendation-item-1">
                         <img src={wallet} alt="" />
                      <div className="rooocoome">
                           <a>Apple Watch Series <br /> Space Gray</a>
                           <p class="price-range">$7.00 - $39.50</p>
                      </div>
                   </div>
                   <div class="recommendation-item-1">
                         <img src={bag} alt="" />
                      <div className="rooocoome">
                           <a>Basketball Crew Socks <br /> Long Stuff</a>
                           <p class="price-range">$7.00 - $39.50</p>
                      </div>
                  </div>
                   <div class="recommendation-item-1">
                         <img src={image_1} alt="" />
                      <div className="rooocoome">
                           <a>New Summer Men's <br /> Casual T-Shirts</a>
                           <p class="price-range">$7.00 - $39.50</p>
                      </div>
                 </div>
              </div>
          </div>

            <div class="related-products-container">
              <h3>Related products</h3>
              <div class="related-products">
                    <div class="product-card">
                        <img src={image_1} alt=""/>
                        <h4>Xiaomi Redmi 8 Original</h4>
                        <p>$32.00 - $40.00</p>
                    </div>
                    <div class="product-card">
                         <img src={bag} alt=""/>
                         <h4>Xiaomi Redmi 8 Original</h4>
                         <p>$32.00 - $40.00</p>
                    </div>
                    <div class="product-card">
                           <img src={wallet} alt=""/>
                           <h4>Xiaomi Redmi 8 Original</h4>
                           <p>$32.00 - $40.00</p>
                    </div>
                    <div class="product-card">
                            <img src={jacket} alt=""/>
                            <h4>Xiaomi Redmi 8 Original</h4>
                            <p>$32.00 - $40.00</p>
                    </div>
                    <div class="product-card">
                           <img src={coat} alt=""/>
                           <h4>Xiaomi Redmi 8 Original</h4>
                           <p>$32.00 - $40.00</p>
                    </div>
               </div>
               <div class="promo-banner">
                  <div>
                       <h3>Super discount on more than 100 USD</h3>
                       <p>Have you ever finally just write dummy info</p>
                 </div>
                    <button>Shop now</button>
               </div>
           </div>
        </div>
    </>
  )
}