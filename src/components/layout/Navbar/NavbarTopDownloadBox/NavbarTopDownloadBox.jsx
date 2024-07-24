import "./NavbarTopDownloadBox.scss";
import NavbarTopDownloadAndro from "../../../../assets/images/NavbarTopDownload/navbartopdownloadandro.png";
import NavbarTOpDownloadIos from "../../../../assets/images/NavbarTopDownload/navbartopdownloadios.png";

function NavbarTopDownloadBox() {
  return (
    <>
      <div className="container">
        <div className="box">
          <p>Unduh Sekarang!</p>
          <a href="https://play.google.com/store/apps/details?id=blibli.mobile.commerce">
            {" "}
            <img src={NavbarTopDownloadAndro} alt="Navbar Top Download Andro" />
          </a>
          <a href="https://apps.apple.com/id/app/blibli-belanja-online/id1034231507?l=id&amp%3Bmt=8">
            <img src={NavbarTOpDownloadIos} alt="Navbar Top Download Ios" />
          </a>
        </div>
      </div>
    </>
  );
}

export default NavbarTopDownloadBox;
