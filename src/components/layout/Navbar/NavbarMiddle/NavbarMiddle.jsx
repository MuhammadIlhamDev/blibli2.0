import React from "react";
import "./NavbarMiddle.scss";
import { IoCameraOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import NavbarMiddle_L from "./NavbarMiddle_L/NavbarMiddle_L";
import NavbarMiddle_R from "./NavbarMiddle_R/NavbarMiddle_R";

function NavbarMiddle() {
  return (
    <>
      <div className="navbar-middle">
        <IoCameraOutline size={"4em"} className="navbar-camera" />
        <NavbarMiddle_L />
        <div className="navbar-input-search">
          <input type="text" placeholder="Cari..." className="navbar-input" />
          <LuSearch size={"1.3em"} className="navbar-search" />
          <div className="navbar-bottom-link">
            <ul className="navbar-bottom-link-list">
              <li className="navbar-bottom-link-item">
                <a href="#">Exclusive Deals Katsae 71% Off*</a>
                <a href="#"> Harga Terbaik Elektronik </a>
                <a href="#"> Roland & Boss Cicilan 0%</a>
                <a href="#"> Alif Modern Wear</a>
              </li>
            </ul>
          </div>
        </div>
        <NavbarMiddle_R />
      </div>
    </>
  );
}

export default NavbarMiddle;
