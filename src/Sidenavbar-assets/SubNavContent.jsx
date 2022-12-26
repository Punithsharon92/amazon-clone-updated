import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function SubNavContent(props) {
  //   if (
  //     props.subNavClickedTitle ==
  //     props.entryData.map((entrydata) => {
  //       return entrydata.entries.map((entry) => {
  //         return entry.title;
  //       });
  //     })
  //   ) {
  //   }

  const subNavDisplayContent = props.entryData.map((entrydata) => {
    return entrydata.entries.map((entry) => {
      // Checks if user clicked value equals value in data provide, if true then value is assigne to subNavDisplayContent
      if (entry.title === props.subNavClickedTitle) {
        return entry.subEntries.map((subEntry) => {
          return (
            <p className='mainNavContent__contents mainNavContent__title'>
              {subEntry.rowtitle}
            </p>
          );
        });
      }
    });
  });

  return (
    <div>
      <h3
        onClick={props.handleShowSubNavClick}
        className='subNavContent__mainMenu'>
        <ArrowBackIcon className='subNavContent__arrowBack' />
        Main Menu
      </h3>
      <hr />
      <div>{subNavDisplayContent}</div>
    </div>
  );
}

export default SubNavContent;
