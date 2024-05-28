import "./NavbarBottom.scss";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiArrowDropDownFill } from "react-icons/ri";

function NavbarBottom() {
  return (
    <>
      <div className="navbar-bottom-address">
        <div className="navbar-bottom-address-container">
          <FaMapMarkerAlt className="navbar-bottom-address-icon" />
          <p className="navbar-bottom-address-text">
            <strong>Tambah alamat </strong>
            biar belanja lebih asyik
          </p>
          <RiArrowDropDownFill
            size={"2em"}
            className="navbar-bottom-dropdown-icon"
          />
        </div>
      </div>
    </>
  );
}

export default NavbarBottom;
