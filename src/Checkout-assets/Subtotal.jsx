import React from "react";
import "../Checkout.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../Context/amazon-context";
import { getBasketTotal } from "../Context/StateProvider";
import { Link } from "react-router-dom";

function Subtotal() {
  const amazonCtx = useStateValue();
  const basket = amazonCtx.basket;
  const user = amazonCtx.user;
  const totalAmount = amazonCtx.totalAmount;
  console.log(totalAmount);

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>₹{totalAmount}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Link to={user ? "/Payment" : "/Login"}>
        <button disabled={basket.length < 1 && true}>
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}

export default Subtotal;
