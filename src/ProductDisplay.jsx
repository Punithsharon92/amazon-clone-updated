/* eslint-disable no-unused-vars */
import React from "react";
import "./ProductDisplay.css";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useEffect } from "react";
import { useStateValue } from "./Context/amazon-context";
import Topad from "./images/addisplay.png";
import { Link, useLocation } from "react-router-dom";
import productData from "./Product-assets/ProductData";
function ProductDisplay(props) {
  const amazonCtx = useStateValue();

  const location = useLocation();
  // console.log(location);

  // Brings you back on top of a page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const displayItem = productData.filter((productData) => {
    return location.state === productData.id;
  });

  const addItem = () => {
    amazonCtx.addToBasket(displayItem[0]);
    console.log(displayItem[0]);
  };

  return (
    <div className='productDisplay_mainContainer'>
      <img className='top__ad' alt='' src={Topad} />
      <div className='display__container'>
        <div className='display__image'>
          <img alt='' src={displayItem[0].image} />
        </div>
        <div className='display__info'>
          <h2>{displayItem[0].title}</h2>
          <p style={{ display: "flex", color: "blue", padding: "5px 0px" }}>
            {Array(displayItem[0].rating.rate)
              .fill()
              .map((_, i) => (
                <p>
                  <StarIcon style={{ color: "orange", fontSize: "1.3em" }} />
                </p>
              ))}
            {Array(5 - displayItem[0].rating.rate)
              .fill()
              .map((_, i) => (
                <p>
                  <StarBorderIcon
                    style={{
                      color: "orange",
                      fontSize: "1.3em",
                    }}
                  />
                </p>
              ))}
            &nbsp; {displayItem[0].rating.count} ratings |{" "}
            {displayItem[0].rating.answers} answered question
          </p>
          <hr />
          <div>
            <p className='display__price'>
              <span>₹</span>
              {displayItem[0].price.offer}
            </p>
            <p className='display__mrpPrice'>
              M.R.P.: ₹{displayItem[0].price.mrp}
            </p>
            <p>
              Inclusive of all taxes <br />
              EMI starts at ₹{displayItem[0].emi}. No Cost EMI available{" "}
              <span style={{ color: "blue", fontWeight: "500" }}>
                EMI options
              </span>
            </p>
            <div className='display__Emioffers'>
              <p>
                <span>
                  <LocalOfferOutlinedIcon
                    style={{ position: "relative", top: "7px" }}
                  />
                  &nbsp;Save Extra
                </span>
                &nbsp;with 3 offers
              </p>
              <p>
                <span>No Cost EMI:</span> Avail No Cost EMI on select cards for
                orders above ₹3000
              </p>
              <p>
                <span>Exchange Offer:</span> Up to ₹
                {displayItem[0].price.exchange} off on Exchange
              </p>
              <p>
                <span>Partner Offers:</span> Get GST invoice and save up to 28%
                on business purchases. Sign up for free .
              </p>
            </div>

            <div className='display__aboutProduct'>
              <h4 className='display__aboutHeader'>About this item</h4>
              <ul className='display_aboutList'>
                {displayItem[0].description.map((description) => {
                  return <li>{description}</li>;
                })}
                {/* <li>
                  15 cm (6.1-inch) Super Retina XDR display with ProMotion for a
                  faster, more responsive feel
                </li>
                <li>
                  Cinematic mode adds shallow depth of field and shifts focus
                  automatically in your videos
                </li>
                <li>
                  Pro camera system with new 12MP Telephoto, Wide and Ultra Wide
                  cameras; LiDAR Scanner; 6x optical zoom range; macro
                  photography; Photographic Styles, ProRes video, Smart HDR 4,
                  Night mode, Apple ProRAW, 4K Dolby Vision HDR recording
                </li>
                <li>
                  12MP TrueDepth front camera with Night mode, 4K Dolby Vision
                  HDR recording
                </li>
                <li>Up to 22 hours of video playback</li>
                <li>
                  Supports MagSafe accessories for easy attachment and faster
                  wireless charging
                </li>
                <li>
                  iOS 15 packs new features to do more with iPhone than ever
                  before
                </li>
                <li>
                  12MP TrueDepth front camera with Night mode, 4K Dolby Vision
                  HDR recording
                </li>
                <li>Up to 22 hours of video playback</li>
                <li>
                  Supports MagSafe accessories for easy attachment and faster
                  wireless charging
                </li>
                <li>
                  iOS 15 packs new features to do more with iPhone than ever
                  before
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className='display__buyingBtns'>
          <div className='display__buyingBtns__contents'>
            <h5>
              <input type='radio' value='Yes' checked='checked' readOnly />
              &nbsp; Without Exchange
              <span style={{ padding: "0px 20px", display: "block" }}>
                ₹{displayItem[0].price.offer}
              </span>
            </h5>

            <p>FREE delivery Wednesday, 27 July. Details </p>
            <p>Or fastest delivery Today. Order within 12 mins.</p>

            <p>
              <span
                style={{
                  color: "green",
                  fontWeight: "500",
                }}>
                In stock
              </span>
              <br />
              Sold by Appario Retail Private Ltd and Fulfilled by Amazon.
            </p>
            <button className='btn__cart' onClick={addItem}>
              Add to Cart
            </button>
            <Link to='/Checkout' style={{ textDecoration: "none" }}>
              <button className='btn__buy' onClick={addItem}>
                Buy Now
              </button>
            </Link>
          </div>
          <hr style={{ margin: "30px 15px 15px 5px" }} />
          <button className='btn__wishList'>Add to Wish List</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
