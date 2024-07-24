import React from "react";
import NavbarLogoBlibliMiddle_L from "../../../../../assets/logos/LogoNavbarMiddle/logo-blibli-blue.0f340eba.svg";
import { IoGrid } from "react-icons/io5";
import "./NavbarMiddle_L.scss";

function NavbarMiddle_L() {
  return (
    <>
      <div className="category__container">
        <img
          src={NavbarLogoBlibliMiddle_L}
          alt="Logo BliBli"
          className="logo-blibli-navbar-middle"
        />
        <div className="category__trigger">
          <IoGrid />
          <span className="category__trigger__name">Kategori</span>
        </div>
      </div>
    </>
  );
}

export default NavbarMiddle_L;
