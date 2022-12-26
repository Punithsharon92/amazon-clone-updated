import React from "react";

function AdBoxTypeOne(props) {
  return (
    <div className='adBox__container'>
      <div className='adBox__header'>{props.header}</div>
      <div className='adBoxOne__body'>
        <img alt='' src={props.image} />
      </div>
      <div className='adBox__footer'>See more...</div>
    </div>
  );
}

export default AdBoxTypeOne;
