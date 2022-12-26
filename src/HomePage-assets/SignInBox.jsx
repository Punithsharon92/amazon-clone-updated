import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../Context/amazon-context";

function SignInBox() {
  const amazonCtx = useStateValue();
  const user = amazonCtx.user;

  if (!user) {
    return (
      <div className='signIn__box__container'>
        <div className='signIn__box_main adBox__header'>
          <span>Sign in for your best experience</span>
          <Link to='/Login'>
            <button className='signIn__box__btn'>Sign In securely</button>
          </Link>
        </div>
        <div className='signIn__box_ad'>
          <img alt='' src='https://i.ibb.co/HKgf8P3/fire-Stick.gif' />
        </div>
      </div>
    );
  } else
    return (
      <div className='signIn__box__container'>
        <div className='signIn__box_main adBox__header'>
          <img alt='' src='https://i.ibb.co/yqd9LXD/adsignin.jpg' />
        </div>
        <div className='signIn__box_ad'>
          <img alt='' src='https://i.ibb.co/HKgf8P3/fire-Stick.gif' />
        </div>
      </div>
    );
}

export default SignInBox;
