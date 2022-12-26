import React, { useEffect } from "react";
import { useState } from "react";
import DeliveryModal from "./City-assets/DeliveryModal";
import "./City.css";

var initialRender = 0;

function City() {
  const [pin, setPin] = useState();
  const [pincode, setPincode] = useState();
  const [city, setCity] = useState("null");
  const [delivaryModalShown, setDelivaryModalShown] = useState(false);

  useEffect(() => {
    // change initialRender > 1 to initialRender > 0 to make it work on firbase.However initialRender > 1 worked on local server.
    if (initialRender > 0) {
      fetch(`https://api.postalpincode.in/pincode/${pincode}`)
        .then((response) => response.json())
        .then((data) => setCity(data[0].PostOffice[0].Block))
        .catch((error) => {
          alert("Please enter a valid Indian Postal Pin code.");
        });
    } else {
      initialRender = initialRender + 1;
    }
  }, [pincode]);

  const onHandleDelivery = (event) => {
    setPin(event.target.value);
  };

  const onDeliveryClick = () => {
    setPincode(pin);
    // console.log(pincode);
    setDelivaryModalShown(false);
  };
  const geoLocation = () => {
    setDelivaryModalShown(true);
  };
  const onClose = () => {
    setDelivaryModalShown(false);
  };

  return (
    <div>
      <div className='header__option'>
        <span onClick={geoLocation} className='header__optionLineOne'>
          Deliver to
        </span>
        <button onClick={geoLocation} className='header__optionLineTwo'>
          {city === "null" ? "Select your Address" : city}
        </button>
      </div>
      {delivaryModalShown && (
        <DeliveryModal
          onDeliveryClick={onDeliveryClick}
          onHandleDelivery={onHandleDelivery}
          onClose={onClose}
        />
      )}
    </div>
  );
}

export default City;
