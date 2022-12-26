import React from "react";
import "./Home.css";
import Carousel from "./HomePage-assets/Carousel";
import AdBoxTypeOne from "./HomePage-assets/AdBoxTypeOne";
import AdBoxTypeTwo from "./HomePage-assets/AdBoxTypeTwo";
import AdBoxTypeThree from "./HomePage-assets/AdBoxTypeThree";
import AdBoxTypeFour from "./HomePage-assets/AdBoxTypeFour";
import SignInBox from "./HomePage-assets/SignInBox";
import adBoxData from "./HomePage-assets/AdBoxData";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Carousel />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          position: "absolute",
          padding: "10px",
          top: "400px",
          zIndex: "100",
        }}>
        {adBoxData.map((data) => {
          if (data.type === "one") {
            return (
              <Link to='/Products' style={{ textDecoration: "none" }}>
                <AdBoxTypeOne
                  header={data.header}
                  image={data.images}
                  key={data.id}
                />
              </Link>
            );
          } else if (data.type === "two") {
            return (
              <Link to='/Products' style={{ textDecoration: "none" }}>
                <AdBoxTypeTwo
                  key={data.id}
                  header={data.header}
                  image={data.images}
                  imageTitle={data.imageTitle}
                />
              </Link>
            );
          } else if (data.type === "three") {
            return <AdBoxTypeThree image={data.images} key={data.id} />;
          } else if (data.type === "four") {
            return <AdBoxTypeFour image={data.images} key={data.id} />;
          } else {
            return <SignInBox key={data.id} />;
          }
        })}
        {/* <AdBoxTypeOne />
        <AdBoxTypeTwo />
        <AdBoxTypeTwo />
        <SignInBox />
        <AdBoxTypeTwo />
        <AdBoxTypeTwo />
        <AdBoxTypeOne />
        <AdBoxTypeTwo />
        <AdBoxTypeThree />
        <AdBoxTypeOne />
        <AdBoxTypeOne />
        <AdBoxTypeTwo />
        <AdBoxTypeOne />
        <AdBoxTypeThree />
        <AdBoxTypeThree /> */}
      </div>
    </div>
  );
}

export default Home;
