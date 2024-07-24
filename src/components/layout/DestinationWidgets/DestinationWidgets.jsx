import React from "react";

// image-mobile
import imageMobile1 from "../../../assets/images/ImagesDestinationWidgets/ImagesMobile/DBE-Mobile-Blimart.jpg";
import imageMobile2 from "../../../assets/images/ImagesDestinationWidgets/ImagesMobile/DBE-Mobile-Gadget.jpg";
import imageMobile3 from "../../../assets/images/ImagesDestinationWidgets/ImagesMobile/DBE-Mobile-Fashion.jpg";
import imageMobile4 from "../../../assets/images/ImagesDestinationWidgets/ImagesMobile/DBE-TravelingLiburan-mobile-app.jpg";
// image-desktop
import imageDesktop1 from "../../../assets/images/ImagesDestinationWidgets/ImagesDesktop/DBE-Desktop-Bliblimart.jpg";
import imageDesktop3 from "../../../assets/images/ImagesDestinationWidgets/ImagesDesktop/DBE-Desktop-Fashion.jpg";
import imageDesktop2 from "../../../assets/images/ImagesDestinationWidgets/ImagesDesktop/DBE-Desktop-Gadget.jpg";
import imageDesktop4 from "../../../assets/images/ImagesDestinationWidgets/ImagesDesktop/DBE-TravelingLiburan-desk.jpg";
import "./DestinationWidgets.scss";

function DestinationWidgets() {
  return (
    <>
      <div className="image-mobile">
        <img src={imageMobile1} alt="imageMobile1" />
        <img src={imageMobile2} alt="imageMobile2" />
        <img src={imageMobile3} alt="imageMile3" />
        <img src={imageMobile4} alt="imageMobile4" />
      </div>

      <div className="image-desktop">
        <img src={imageDesktop1} alt="imageDesktop1" />
        <img src={imageDesktop2} alt="imageDesktop2" />
        <img src={imageDesktop3} alt="imageDesktop3" />
        <img src={imageDesktop4} alt="imageDesktop4" />
      </div>
    </>
  );
}

export default DestinationWidgets;
