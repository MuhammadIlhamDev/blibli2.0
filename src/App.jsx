import NavbarTop from "./components/layout/Navbar/NavbarTop/NavbarTop";
import NavbarMiddle from "./components/layout/Navbar/NavbarMiddle/NavbarMiddle";
import NavbarBottom from "./components/layout/Navbar/NavbarBottom/NavbarBottom";
import Carousel from "./components/layout/Carousel/Carousel";
import DestinationWidgets from "./components/layout/DestinationWidgets/DestinationWidgets";
import FavouriteScroller from "./components/layout/FavouriteScroller/FavouriteScroller";
import LongbannerImg from "./components/layout/LongBanner/LongbannerImg";
import Vouchers from "./components/layout/Vouchers/Vouchers";

import "./App.scss";

function App() {
  return (
    <>
      <div>
        {/* Navbar-Start */}
        <NavbarTop />
        <div className="navbarM-navbarB">
          <NavbarMiddle />
          <NavbarBottom />
        </div>
        <Carousel />
        <DestinationWidgets />
        <FavouriteScroller />
        <LongbannerImg/>
        <Vouchers/>
      </div>
    </>
  );
}

export default App;
