import React, { useState } from "react";
import "../SideNavBar.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function DropDown(props) {
  //   console.log(props.dropDownData);
  const [showDropDownContent, setShowDropDownContent] = useState(false);

  const handleDropDownContent = () => {
    setShowDropDownContent((prevValue) => {
      return !prevValue;
    });
  };

  return (
    <div>
      <div>
        <div>
          <p>
            {props.dropDownData.entries.map((entry, index) => {
              if (index < 2)
                return (
                  <p className='mainNavContent__contents mainNavContent__title'>
                    {entry.title}
                    {props.dropDownData.type.row && (
                      <KeyboardArrowRightIcon
                        className='mainNavContent__arrowright'
                        style={{ fontSize: "2em" }}
                      />
                    )}
                  </p>
                );
            })}
          </p>
        </div>
        <div
          className={
            showDropDownContent ? "showDropDownContent" : " dropDownContent"
          }>
          <p>
            {props.dropDownData.entries.map((entry, index) => {
              if (index > 2)
                return (
                  <p className='mainNavContent__contents mainNavContent__title'>
                    {entry.title}
                    {props.dropDownData.type.row && (
                      <KeyboardArrowRightIcon
                        className='mainNavContent__arrowright'
                        style={{ fontSize: "2em" }}
                      />
                    )}
                  </p>
                );
            })}
          </p>
        </div>
        <div
          className='mainNavContent__contents mainNavContent__title'
          onClick={handleDropDownContent}>
          {!showDropDownContent ? (
            <div>
              See All
              <KeyboardArrowDownIcon className='dropDown__arrowDown' />
            </div>
          ) : (
            <div>
              See Less
              <KeyboardArrowUpIcon className='dropDown__arrowDown' />
            </div>
          )}
        </div>
        <hr />
      </div>
    </div>
  );
}

export default DropDown;
