import React from "react";
import { MdLogin } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";

import "./NavbarMiddle_R.scss";
function NavbarMiddle_R() {
  return (
    <>
      <div className="navbar-middle-right">
        <button className="navbar-login-mobile">
          <MdLogin size={"1.3em"} />
          Masuk
        </button>
        <div className="navbar-login-desktop">
          <MdShoppingCart size={"1.7em"} className="navbar-cart-desktop" />
          <span className="separator"></span>
          <button className="navbar-login">Masuk</button>
          <button className="navbar-register">Daftar</button>
        </div>
      </div>
    </>
  );
}

export default NavbarMiddle_R;
