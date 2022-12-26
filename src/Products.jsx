import React from "react";
import "./Products.css";
import ProductBox from "./Product-assets/ProductBox";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import productData from "./Product-assets/ProductData";

function Products() {
  // const [productId, setProductId] = useState(0);

  // const handleClickToDisplayProduct = (event) => {
  //   // newValue.current = event.currentTarget.id;
  //   // console.log(newValue.current);
  //   // // setProductId(event.currentTarget.id);
  // };

  // Brings you back on top of a page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='products__container'>
      <div className='products_leftSide'>
        <h4>All Departments</h4>
        <p>Cell Phones & Accessories</p>
        <p>Landline Phones</p>
        <p>Electronics</p>
        <p>Industrial & Scientific</p>
        <p>Automotive Parts & Accessories</p>
        <p> Sports & Outdoors Office Products</p>
        <p>Tools & Home Improvement</p>
        <p>Musical Instruments</p>
        <p>Home & Kitchen</p>
        <p>Health</p>
        <p>Garden & Outdoor</p>
        <p>Toys & Games</p>
        <p>Baby Beauty & Personal Care Arts</p>
        <p>Crafts & Sewing Kindle</p>
        <p> Accessories Pet Supplies </p>
        <p>Kindle Store</p>

        {/* <h4>Avg. Customer Review</h4>
        <p>⭐ ⭐ ⭐ ⭐ & Up</p>
        <p>⭐ ⭐ ⭐ ✰ & Up</p>
        <p>⭐ ⭐ ✰ ✰ & Up</p>
        <p>⭐ ✰ ✰ ✰ & Up</p> */}
      </div>

      <div className='verticle__line'></div>
      <div className='products__rightSide'>
        <div className='products__adRightSide'>
          <div className='adRightSide__header'>Explore all devices</div>
          <img
            alt=''
            src='https://m.media-amazon.com/images/G/01/FireTV/Inline/IDB_RatingLabel_NA._TTW_.jpg'
          />

          <img
            alt=''
            src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/b2b/banner-03.jpg'
          />
          <h4
            style={{
              margin: "15px 30px 20px 30px",
              padding: "14px 18px",
              border: "1px solid #d5d9d9",
              borderRadius: "8px",
              opacity: ".7",
              fontSize: "15px",
            }}>
            Showing Results:
          </h4>

          <div className='product__box'>
            {productData.map((productInfo) => {
              return (
                <Link
                  to='/ProductDisplay'
                  state={productInfo.id}
                  id={productInfo.id}
                  // onClick={handleClickToDisplayProduct}
                  style={{ textDecoration: "none" }}>
                  <ProductBox
                    id={productInfo.id}
                    image={productInfo.image}
                    title={productInfo.title}
                    rate={productInfo.rating.rate}
                    count={productInfo.rating.count}
                    price={productInfo.price.offer}
                    offer={productInfo.otherOffer}
                  />
                </Link>
              );
            })}

            {/* <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
