// import React from 'react'
import "./NavbarMiddle.scss";
import { IoCameraOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { MdLogin } from "react-icons/md";
import NavbarLogoMiddleBlibli from "../../../../assets/logos/LogoNavbarMiddle/logo-blibli-blue.0f340eba.svg";
import { MdShoppingCart } from "react-icons/md";
// import NavbarBottom from "../NavbarBottom/NavbarBottom";

function NavbarMiddle() {
  return (
    <>
      <div className="navbar-middle">
        <IoCameraOutline size={"4em"} className="navbar-camera" />
        <div className="category__container">
          <img
            src={NavbarLogoMiddleBlibli}
            alt="Logo BliBli"
            className="logo-blibli-navbar-middle"
          />
          <div data-v-8849594e="" className="category__trigger">
            <svg
              data-v-8849594e=""
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              preserveAspectRatio="xMidYMid meet"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className="icon-gray"
            >
              <path d="M4.5 2H8.5C9.88071 2 11 3.11929 11 4.5V8.5C11 9.88071 9.88071 11 8.5 11H4.5C3.11929 11 2 9.88071 2 8.5V4.5C2 3.11929 3.11929 2 4.5 2ZM15.5 2H19.5C20.8807 2 22 3.11929 22 4.5V8.5C22 9.88071 20.8807 11 19.5 11H15.5C14.1193 11 13 9.88071 13 8.5V4.5C13 3.11929 14.1193 2 15.5 2ZM8.5 13H4.5C3.11929 13 2 14.1193 2 15.5V19.5C2 20.8807 3.11929 22 4.5 22H8.5C9.88071 22 11 20.8807 11 19.5V15.5C11 14.1193 9.88071 13 8.5 13ZM15.5 13H19.5C20.8807 13 22 14.1193 22 15.5V19.5C22 20.8807 20.8807 22 19.5 22H15.5C14.1193 22 13 20.8807 13 19.5V15.5C13 14.1193 14.1193 13 15.5 13Z"></path>
            </svg>
            <span data-v-8849594e="" className="category__trigger__name">
              Kategori
            </span>
          </div>
        </div>

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
      </div>
    </>
  );
}

export default NavbarMiddle;
