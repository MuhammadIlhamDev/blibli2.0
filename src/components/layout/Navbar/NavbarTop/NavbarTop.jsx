import "./NavbarTop.scss";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaCloudDownloadAlt } from "react-icons/fa";

function NavbarTop() {
  return (
    <>
      <div className="navbar-top-container">
        <div className="navbar-top">
          <div className="navbar-top-left">
            <FaCloudDownloadAlt size={"1.1em"} />
            <p> Download Aplikasi Blibli</p>
            <RiCustomerService2Fill size={"1.1em"} />
            <p> Bantuan 24/7</p>
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
