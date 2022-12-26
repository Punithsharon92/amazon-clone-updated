import React from "react";
import "./Checkout.css";
import Subtotal from "./Checkout-assets/Subtotal";
import { useStateValue } from "./Context/amazon-context";
import CheckoutProduct from "./Checkout-assets/CheckoutProduct";

function Checkout() {
  const amazonCtx = useStateValue();
  const user = amazonCtx.user;
  const basket = amazonCtx.basket;

  console.log(basket);

  return (
    <div className='checkoutContainer'>
      <img
        className='checkout__ad'
        src='https://i.ibb.co/2P9wdWT/Checkoutad.gif'
        alt=''
      />
      <div className='checkout'>
        <div className='checkout__left'>
          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className='checkout__title'>Your Shopping Cart</h2>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
            {basket.length < 1 && (
              <img
                src='https://i.ibb.co/MSzqDrQ/empty-cart.gif'
                className='checkout__emptycart'
                alt='cart-img'></img>
            )}
          </div>
        </div>
        <div className='checkout__right'>
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
