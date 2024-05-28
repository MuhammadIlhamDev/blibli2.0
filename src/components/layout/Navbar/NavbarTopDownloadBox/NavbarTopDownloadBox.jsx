import "./NavbarTopDownloadBox.scss";
import NavbarTopDownloadAndro from "../../../assets/images/navbartopdownloadandro.png";
import NavbarTOpDownloadIos from "../../../assets/images/navbartopdownloadios.png";

function NavbarTopDownloadBox() {
  return (
    <>
      <div className="container">
        <div className="box">
          <p>Unduh Sekarang!</p>
          <img src={NavbarTopDownloadAndro} alt="Navbar Top Download Andro" />
          <img src={NavbarTOpDownloadIos} alt="Navbar Top Download Ios" />
        </div>
      </div>
    </>
  );
}

export default NavbarTopDownloadBox;
