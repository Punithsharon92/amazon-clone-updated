import React from "react";
import "../Checkout.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useStateValue } from "../Context/amazon-context";

function CheckoutProduct(props) {
  const amazonCtx = useStateValue();

  const removeFromBasket = () => {
    amazonCtx.removeFromBasket(props.id);
    console.log(props.id);
  };
  return (
    <div className='checkout__product'>
      <img className='checkoutProduct__img' alt='' src={props.image} />

      <div className='checkoutProduct__info'>
        <div className='checkoutProduct__title'>{props.title}</div>
        <div className='checkoutProduct__rating'>
          <p style={{ display: "flex" }}>
            {Array(props.rating.rate)
              .fill()
              .map((_, i) => (
                <p>
                  <StarIcon style={{ color: "orange", fontSize: "1.3em" }} />
                </p>
              ))}

            {Array(5 - props.rating.rate)
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
          </p>
          <img
            src='https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png'
            className='fullfilled'
            alt='fullfilled-img'></img>
          <span>In stock</span>
          <span>Eligible for FREE Shipping</span>
          {!props.hideButton && (
            <button
              className='checkoutProduct__button'
              onClick={removeFromBasket}>
              Remove from Cart
            </button>
          )}
        </div>
      </div>
      <div className='checkoutProduct__price'>
        <div>₹{props.price.offer}</div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
