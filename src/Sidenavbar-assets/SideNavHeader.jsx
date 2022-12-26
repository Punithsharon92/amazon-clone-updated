import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useStateValue } from "../Context/amazon-context";

function SideNavHeader() {
  const amazonCtx = useStateValue();
  const user = amazonCtx.user;

  return (
    <div className='sideNavHeaderContainer'>
      <AccountCircleIcon
        className='sideNavHeader__accountIcon'
        style={{ fontSize: "1.9em" }}
      />
      <span className='sideNavHeader__greetings'>
        Hello, {user ? user.email : "Sign In"}
      </span>
    </div>
  );
}

export default SideNavHeader;
