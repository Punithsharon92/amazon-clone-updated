import React from "react";

function AdBoxTypeTwo(props) {
  return (
    <div className='adBox__container'>
      <div className='adBox__header'>{props.header}</div>
      <div className='adBoxTwo__body'>
        <div>
          <img alt='' src={props.image[0]} />
          <p>{props.imageTitle[0]}</p>
        </div>
        <div>
          <img alt='' src={props.image[1]} />
          <p>{props.imageTitle[1]}</p>
        </div>

        <div>
          <img alt='' src={props.image[2]} />
          <p>{props.imageTitle[2]}</p>
        </div>

        <div>
          <img alt='' src={props.image[3]} />
          <p>{props.imageTitle[3]}</p>
        </div>
      </div>
      <div className='adBox__footer'>See more...</div>
    </div>
  );
}

export default AdBoxTypeTwo;
