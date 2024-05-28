import NavbarTop from "./components/layout/Navbar/NavbarTop/NavbarTop";
import NavbarMiddle from "./components/layout/Navbar/NavbarMiddle/NavbarMiddle";
import NavbarBottom from "./components/layout/Navbar/NavbarBottom/NavbarBottom";
// import NavbarTopDownloadBox from "./components/layout/Navbar/NavbarTopDownloadBox";

import "./App.scss";

function App() {
  return (
    <>
      <div>
        {/* <NavbarTopDownloadBox /> */}
        <NavbarTop />
        <div className="navbarM-navbarB">
          <NavbarMiddle />
          <NavbarBottom />
        </div>
      </div>
    </>
  );
}

export default App;
