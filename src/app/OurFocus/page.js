import "./OurFocus.Module.css";
import Navmanger from "../GlobalComponents/Navmanger";
import Image from "next/image";
import { Button } from "@mui/material";
import DesktopFooter from "../GlobalComponents/DesktopFooter";
import OrangeFooter from "../GlobalComponents/OrangeFooter";
import foucsimages from "../Assests/founderimages.png";
import foucsimage1 from "../Assests/foucsimage1.jpeg";


const OurFocus = () => {
  return (
   <>
    <div className="OurFocusPage">
    <Navmanger/>
    <div className="FocusTag">
      <h3>Our Foucus</h3>
    </div>

    <div className="focus_content">
        <div className="focus-image1">
        <Image src={foucsimage1} />
        </div>
        <div className="focus-content-1">
          <p>At Naandi Ventures, our primary focus is on investing in
             early-stage startup companies, with a particular emphasis
              on entities based in India. We maintain an open approach 
              to considering investments across a wide range of sectors 
              and demographics, typically at the seed stage.
              </p>
              <p>
              Beyond investment, we are dedicated to building and nurturing relationships among our
               members, fellow investor organizations, and ambitious entrepreneurs. Our commitment 
               extends to providing our members with ongoing access to investment opportunities, 
               thereby contributing to the growth of early-stage angel investors within the Indian ecosystem.
              </p>
              <p>
              Furthermore, we actively offer mentorship opportunities to budding founders, supporting
               them throughout their entrepreneurial journey. Our experienced team is well-equipped 
               to expedite your startup journey, regardless of your current stage – whether it’s 
               validating customer needs, identifying product-market fit, scaling your business, 
               developing an MVP, or assembling a well-balanced founding team.
              </p>
        </div>
    </div>

    <div className="focus-box">
          <h2>Ready to take the next step?</h2>
          <h3>Click  Below Link</h3>
          <Button>Submit</Button>
    </div>
    <div className="founder_news-container">
      <div className="heading">
      <h3>Founder News</h3>
      </div>
      <div className="founder-image-container">
        <div className="founder-section">
          <Image src={foucsimages}/>
          <h4>INDUSTRI NEWS</h4>
          <p>3-day boot camp completed</p>
        </div>
        <div className="founder-section">
          <Image src={foucsimages}/>
          <h4>INDUSTRI NEWS</h4>
          <p>3-day boot camp completed</p>
        </div>
        <div className="founder-section">
          <Image src={foucsimages}/>
          <h4>INDUSTRI NEWS</h4>
          <p>3-day boot camp completed</p>
        </div>
      </div>
    </div>
    <OrangeFooter/>
    </div>
    </>
  );
};

export default OurFocus;
