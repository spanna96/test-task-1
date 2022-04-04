import React from "react";

import "./Header.css";

const Header = ({ avatar, userName }) => {
  return (
    <div className="header">
      <img src={avatar} alt="avatar" className="header__avatar" />
      <span className="header__name">{userName}</span>
    </div>
  );
};

export default Header;
