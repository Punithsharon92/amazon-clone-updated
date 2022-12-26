import React from "react";
import "./Payment.css";
import OrderSummary from "./Payment-assets/OrderSummary";
import StripeApp from "./Payment-assets/StripeApp";

function Payment() {
  return (
    <div className='paymentContainer'>
      <img
        className='payment__sbiAd'
        src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/AugART21/Bank/bank_stripe_pc_augart.jpg'
        alt='ad-img'
      />
      <div className='payment__billing__info'>
        <div className='payment__details'>
          <div className='payment__address'>
            <h3>Shipping Address</h3>
            <p>
              John M. Doe <br />
              VRS Road, 852, New Kantharaj, VRS Road, <br />
              Kuvempunagar,Mysore-570023,Karnataka,
              <br />
              Ph : +91 9342188775
            </p>
          </div>
          <hr />
          <h3>Select a payment method</h3>
          <div className='payment__card__details'>
            <StripeApp />
          </div>
        </div>

        <div className='order__summary'>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

export default Payment;
