import "./NavbarTop.scss";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaCloudDownloadAlt } from "react-icons/fa";
import NavbarTopDownloadBox from "../NavbarTopDownloadBox/NavbarTopDownloadBox";

function NavbarTop() {
  return (
    <>
      <div className="navbar-top-container">
        <div className="navbar-top">
          <div className="navbar-top-left">
            <FaCloudDownloadAlt size={"1.1em"} />
            <div className="hover-container">
              <div className="hover-text"><span>Download Aplikasi Blibli</span></div>
              <div className="hover-content">
                <NavbarTopDownloadBox />
              </div>
            </div>
            <RiCustomerService2Fill size={"1.1em"} />
            <span> Bantuan 24/7</span>
          </div>
          <div className="navbar-top-right">
            <a href="#">Jual di Blibli</a>
            <a href="#">Blibli Tiket Rewards</a>
            <a href="#">Cek Daftar Pesanan</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarTop;
