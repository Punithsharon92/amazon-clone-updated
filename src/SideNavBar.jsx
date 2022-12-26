import React, { useState } from "react";
import "./SideNavBar.css";
import MainNavContent from "./Sidenavbar-assets/MainNavContent";
import SubNavContent from "./Sidenavbar-assets/SubNavContent";
import entryData from "./Sidenavbar-assets/datainfo";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SideNavHeader from "./Sidenavbar-assets/SideNavHeader";

function SideNavBar() {
  const [showSideNav, setShowSideNav] = useState(false);
  const [showSubNav, setShowSubNav] = useState(false);
  const [subNavClickedTitle, setsubNavClickedTitle] = useState("");
  let sideNavBarContainerClass;

  const handleShowSideNav = () => {
    setShowSideNav((prevValue) => {
      return !prevValue;
    });
  };

  if (showSideNav) {
    sideNavBarContainerClass = "sideNavBarContainer";
  } else {
    sideNavBarContainerClass = "sideNavBarContainer sideNavBarContainerClose";
  }

  const handleShowSubNavClick = (event) => {
    setsubNavClickedTitle(event.currentTarget.innerText);
    // console.log(event.currentTarget.innerText);
    setShowSubNav((prevValue) => {
      return !prevValue;
    });
  };

  const Backdrop = (props) => {
    return <div className='backdrop' onClick={props.onClose}></div>;
  };

  return (
    <React.Fragment>
      <div className='sideNavBar__menuIcon' onClick={handleShowSideNav}>
        <MenuIcon style={{ paddingRight: "1px" }} />
        <h4>All</h4>
      </div>

      {showSideNav && (
        <CloseIcon
          className='sideNavBar__closeIcon'
          onClick={handleShowSideNav}
          style={{ fontSize: "2.2em" }}
        />
      )}
      {showSideNav && <Backdrop />}
      <div className={sideNavBarContainerClass}>
        <SideNavHeader />

        <div className='sideNavBar__scroll'>
          {!showSubNav ? (
            <MainNavContent
              entryData={entryData}
              handleShowSubNavClick={handleShowSubNavClick}
            />
          ) : (
            <SubNavContent
              entryData={entryData}
              subNavClickedTitle={subNavClickedTitle}
              handleShowSubNavClick={handleShowSubNavClick}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default SideNavBar;
