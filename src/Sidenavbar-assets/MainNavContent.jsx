import React from "react";
import DropDown from "./DropDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function MainNavContent(props) {
  return (
    <div className='mainNavContentContainer'>
      {props.entryData.map((entryData) => {
        return (
          <div>
            <h3 className='mainNavContent__contents mainNavContent__mainTitle'>
              {entryData.mainTitle}
            </h3>
            {entryData.id === 1030 ? (
              <DropDown dropDownData={entryData} />
            ) : (
              <div>
                {entryData.entries.map((entry) => {
                  return (
                    // onClick executed only if row is true
                    <p
                      className='mainNavContent__contents mainNavContent__title'
                      onClick={props.handleShowSubNavClick}>
                      {entry.title}
                      {entryData.type.row && (
                        <KeyboardArrowRightIcon
                          className='mainNavContent__arrowright'
                          style={{ fontSize: "2em" }}
                        />
                      )}
                    </p>
                  );
                })}
                <hr />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default MainNavContent;
