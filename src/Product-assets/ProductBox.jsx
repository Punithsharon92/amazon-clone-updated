import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function ProductBox(props) {
  return (
    <div className='productBox__container'>
      <div className='productBox_header'>
        <img alt='' src={props.image} />
      </div>
      <div className='productBox_body'>
        <div className='productBox__name'>{props.title}</div>
        <div className='productBox__star'>
          {/* <StarIcon style={{ color: "orange", fontSize: "1.3em" }} /> */}
          {/* <StarIcon style={{ color: "orange", fontSize: "1.3em" }} /> */}

          {Array(props.rate)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon style={{ color: "orange", fontSize: "1.3em" }} />
              </p>
            ))}

          {Array(5 - props.rate)
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

          <span className='product__ratings'>{props.count}</span>
        </div>
        <div className='productBox__price'>
          <h6>₹</h6>
          {props.price}
        </div>
        <div className='productBox__offers'>{props.offer}</div>
      </div>
      <div className='productBox__foot'></div>
    </div>
  );
}

export default ProductBox;
