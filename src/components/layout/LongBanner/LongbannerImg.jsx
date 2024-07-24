import React from "react";
import LongBannerMobile from "../../../assets/images/LongBanner/Gratis-Ongkir-Hingga-25jun40RB_LongBannerApp.jpg";
import LongBannerDesktop from "../../../assets/images/LongBanner/Gratis-Ongkir-Hingga-40RB_25junrDesktop.jpg";

import "./LongBannerImg.scss";
function LongbannerImg() {
  return (
    <>
      <div className="long-banner">
        <picture className="long-banner-mobile">
          <img src={LongBannerMobile} alt="long banner mobile" />
        </picture>
        <picture className="long-banner-desktop">
          <img src={LongBannerDesktop} alt="long banner desktop" />
        </picture>
      </div>
    </>
  );
}

export default LongbannerImg;
