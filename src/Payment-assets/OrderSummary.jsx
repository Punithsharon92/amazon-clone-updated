import React from "react";
import { useStateValue } from "../Context/amazon-context";

function OrderSummary() {
  const amazonCtx = useStateValue();
  const basket = amazonCtx.basket;
  const totalAmount = amazonCtx.totalAmount;
  // console.log(basket[0].id);

  const OrderSummaryItems = (props) => {
    return (
      <div className='OrderSummary__Items'>
        <img src={props.image} alt='product-img'></img>
        <h4 className='OrderSummary__Item_name'>{props.title}</h4>
        <h4 className='OrderSummary__Item_price'>₹{props.price}</h4>
      </div>
    );
  };

  return (
    <div className='orderSummaryContainer'>
      <div className='orderSummary__caution'>
        <p>⚠️ Please ensure your card is enabled for online transactions !</p>
      </div>
      <div className='orderSummary__caution'>
        <p>
          <strong>Note</strong> : You can use the following fake payment details
          to make a payment. Card Number : 4242 4242 4242 4242. Expiration :
          Any. CVV : Any.
        </p>
      </div>
      <h3>Order Summary</h3>

      <div className='orderSummary__box'>
        <div>
          {basket.map((item) => {
            return (
              <OrderSummaryItems
                title={item.title}
                image={item.image}
                price={item.price.offer}
              />
            );
          })}
        </div>
        <hr />
        <div>
          <h3 className='orderSummary__total'>Total</h3>
          <h3 className='orderSummary__totalAmount'>₹{totalAmount}.00</h3>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
