import React from "react";
import SearchDropDown from "../Components/searchAbleDropDown";
import SearchDetailDropDown from "../Components/searchDetailDropDown";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__content">
          <div className="header_logo">
            <h2>Restaurant</h2>
          </div>
          <div className="jss85 jss86"></div>
          <div>
            <SearchDropDown />
          </div>
          <div className="jss85 jss86"></div>
          <div>
            <SearchDetailDropDown />
          </div>
          <div
            className="header__notification"
            style={{ cursor: "pointer" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Header;
