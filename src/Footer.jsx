import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className='footerContainer'>
      <div className='footer__backtotop'>Back to top</div>
      <div className='footer__details'>
        <div>
          <h3>Get to Know Us</h3>
          <p>About US</p>
          <p>Careers</p>
          <p>Press Realeases</p>
          <p>Amazon Science</p>
        </div>
        <div>
          <h3>Connect with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div>
          <h3>Make Money with Us</h3>
          <p>Sell on Amazon</p>
          <p>Sell uner Amazon Accelerator</p>
          <p>Amazon Glbal selling</p>
          <p>Become an Affiliate</p>
          <p>Fulfilment by Amazon</p>
          <p>Advertise Your Products</p>
          <p>Amazon Pay on Merchants</p>
        </div>
        <div>
          <h3>Let Us Help You</h3>
          <p>COVID-19 and Amazon</p>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
          <p>Amazon Assistant Download</p>
          <p>Help</p>
        </div>
      </div>
      <div className='footer__countries'>
        <img src='' alt='' />
        <img src='' alt='' />
        <p>
          Australia Brazil Canada China France Germany Italy Japan Mexico
          Netherlands Poland Singapore Spain Turkey United Arab Emirates United
          Kingdom United States
        </p>
        <p>© 1996-2022, Amazon-Clone, Inc. or its affiliates</p>
      </div>
    </div>
  );
}

export default Footer;
