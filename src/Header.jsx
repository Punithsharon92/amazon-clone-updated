import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IndiaFlag from "./images/india-flag.png";
import { Link } from "react-router-dom";
import { useStateValue } from "./Context/amazon-context";
import { auth } from "./firebase";
import City from "./City";
import SideNavBar from "./SideNavBar";

function Header() {
  const amazonCtx = useStateValue();
  const user = amazonCtx.user;
  const basket = amazonCtx.basket;

  // console.log(user);
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div>
      <div className='header'>
        <Link to='/'>
          <img
            className='header__logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt='logo-img'
          />
        </Link>

        <div className='header__optionLocation'>
          <LocationOnIcon className='geo__location' />
          <City />
        </div>

        <div className='header__search'>
          <input className='header__searchInput' />
          <SearchIcon className='header__searchIcon' />
        </div>

        <div className='header__indiaFlag'>
          <img className='india_Flag' src={IndiaFlag} alt='Indian-flag-img' />
        </div>

        <div className='header__nav'>
          <Link to={!user && "/Login"} style={{ textDecoration: "none" }}>
            <div onClick={handleAuth} className='header__option'>
              <span className='header__optionLineOne'>
                Hello {user ? user.email : "Guest"}
              </span>
              <span className='header__optionLineTwo'>
                {user ? "Sign Out" : "Sign Into your Account"}
              </span>
            </div>
          </Link>

          <Link to='/Orders' style={{ textDecoration: "none" }}>
            <div className='header__option'>
              <span className='header__optionLineOne'>Returns</span>
              <span className='header__optionLineTwo'>& Orders</span>
            </div>
          </Link>

          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>

          <div className='header__optionBasket'>
            <Link to='/Checkout'>
              <LocalMallIcon style={{ marginBottom: "-5px", color: "white" }} />
              <span className='header__optionLineTwo header_basketCount'>
                {basket?.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className='header__extension'>
        <SideNavBar />
        <div>
          <img
            className='header__ad__primeday'
            alt=''
            src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD22/LU/IN-PD-22-GW-SWM_400x39._CB634187897_.jpg'
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
