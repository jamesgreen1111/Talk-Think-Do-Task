// External Imports
import React from "react";
// Styles
import "../../styles/homepage.css";
// FontAwsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faCheck } from "@fortawesome/free-solid-svg-icons";
// Imgs
import ExploreLearning from "../../Assets/images/Explore@2x.png";
import Transport from "../../Assets/images/TFL@2x.png";
import Avios from "../../Assets/images/Avios@2x.png";
import DepartmentforEducation from "../../Assets/images/Department_for_Education@2x.png";
import Stormbreak from "../../Assets/images/Stormbreak@2x.png";
import Book from "../../Assets/images/book.png";
import Iso from "../../Assets/images/iso.png";
import CyberEssentialsCertifiedPlus from "../../Assets/images/Cyber-Essentials-Certified-Plus.png.png";
import MS from "../../Assets/images/MS.svg";
import CrownSupplier from "../../Assets/images/Crown-supplier@2x.png";
import UKBTAwardsWinnerBadge from "../../Assets/images/UKBTAwards-2021-Winner-Badge.png";
import icoTwitter from "../../Assets/images/ico-twitter@2x.png";
import LinkedIn from "../../Assets/images/LinkedIn@2x.png";
import YT from "../../Assets/images/YT@2x.png";
/**
 * @function Homepage * Component for rendering all Homepage content with footer.
 */
const Homepage = () => {
  return (
    <div>
      <div class="container">
        <h1 class="text-purple intro-title">
          Mission-critical cloud native application experts
        </h1>
        <div class="para-intro-container">
          <p>
            We help ambitious businesses to innovate with new applications,
            modernise legacy applications, discover new opportunities and then
            support and protect their applications in use.
          </p>
          <img src={UKBTAwardsWinnerBadge} height="70px" />
        </div>
        <button class="button-purple">
          <FontAwesomeIcon class="button-icon" icon={faArrowRightLong} />
          Our services
        </button>
      </div>
      <div class="our-services-container">
        <h2 class="text-padding text-purple">Our services</h2>
        <div class="three-services-container">
          <div class="three-service">
            <div class="three-service-line"></div>
            <h3 class="three-service-title text-white">
              Application Innovation Solutions
            </h3>
            <p class="three-service-para text-white">
              Exploit new scenarios and opportunities. We help you realise your
              ambitions and launch and scale applications reliably.
            </p>
            <button class="button-white">
              <FontAwesomeIcon class="button-icon" icon={faArrowRightLong} />
              Our services
            </button>
          </div>

          <div class="three-service">
            <div class="three-service-line"></div>
            <h3 class="three-service-title text-white">
              Legacy Application Modernisation
            </h3>
            <p class="three-service-para text-white">
              Iteratively transform mission-critical legacy applications so you
              can reduce risk and increase agility.
            </p>
            <button class="button-white">
              <FontAwesomeIcon class="button-icon" icon={faArrowRightLong} />
              Our services
            </button>
          </div>

          <div class="three-service">
            <div class="three-service-line"></div>
            <h3 class="three-service-title text-white">
              Managed Application Support
            </h3>
            <p class="three-service-para text-white">
              We support you with a dedicated support team, proactively
              monitoring your application with extended support hours.
            </p>
            <button class="button-white">
              <FontAwesomeIcon class="button-icon" icon={faArrowRightLong} />
              Our services
            </button>
          </div>
        </div>
      </div>

      <div class="grey-background">
        <div class="video-container">
          <div class="left-text">
            <div class="purple-line"></div>
            <h3 class="text-purple">
              Lorem ipsum dolor sit amet and some consectetur adipiscing elit.
              Suspendisse donec consectetur tempus nunc.
            </h3>
            <div class="tick-container">
              <FontAwesomeIcon class="tick-icon" icon={faCheck} />
              <p class="text-purple">
                Mission-critical applications and support that ensures you never
                miss a beat
              </p>
            </div>

            <div class="tick-container">
              <FontAwesomeIcon class="tick-icon" icon={faCheck} />
              <p class="text-purple">
                State of the art cloud native architecture, built on Microsoft
                Azure
              </p>
            </div>
            <button class="button-white">
              <FontAwesomeIcon class="button-icon" icon={faArrowRightLong} />
              Our story
            </button>
          </div>
        </div>
      </div>

      <div class="trusted-by-container">
        <p class="text-purple">Trusted by</p>
        <img src={ExploreLearning} height="35px" />
        <img src={Transport} height="35px" />
        <img src={Avios} height="35px" />
        <img src={DepartmentforEducation} height="35px" />
        <img src={Stormbreak} height="35px" />
      </div>

      <div class="book-container">
        <img class="book" src={Book} height="600px" />
        <div class="book-text-right">
          <div class="white-line"></div>
          <h3 class="text-white">Download a copy of our latest whitepaper</h3>
          <p class="text-white">
            Exploit new scenarios and opportunities. We help you realise your
            ambitions and launch and scale applications reliably.
          </p>
          <button class="button-white">
            <FontAwesomeIcon class="button-icon" icon={faArrowRightLong} />
            Our story
          </button>
        </div>
      </div>

      <div class="certified-container container">
        <div class="certified">
          <img src={Iso} height="120px" />
          <div class="certified-text">
            <h4 class="text-purple">ISO27001 : Trusted information security</h4>
            <p class="text-purple">
              Aenean diam velit, fermentum sit amet fermentum sed, elementum at
              felis.{" "}
            </p>
          </div>
        </div>

        <div class="certified">
          <img src={CyberEssentialsCertifiedPlus} height="120px" />
          <div class="certified-text">
            <h4 class="text-purple">
              Guarding against cyber threats and reducing risk
            </h4>
            <p class="text-purple">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit fringilla
              cursus ipsum.
            </p>
          </div>
        </div>
      </div>
      <div class="find-out-more-container container">
        <h1 class="text-purple">Want to find out more? Get in touch.</h1>
        <div class="contact-container">
          <button class="button-grey">
            <FontAwesomeIcon class="button-icon" icon={faArrowRightLong} />
            Contact us
          </button>
          <p class="text-purple">or Call 020 740 614 768</p>
        </div>
      </div>
      <div class="partnership-container container">
        <div class="partnerships">
          <img src={CrownSupplier} height="60px" />
          <img src={MS} height="60px" />
          <img src={UKBTAwardsWinnerBadge} height="65px" />
          <img src={CyberEssentialsCertifiedPlus} height="60px" />
          <img src={Iso} height="60px" />
        </div>
        <div class="grey-line"></div>
      </div>
      <div class="footer container text-small">
        <div class="footer-left">
          <p class="text-purple">
            © 2022 Talk Think Do Limited. All rights reserved • Privacy policy
            •  Cookie policy •  Terms and conditions
          </p>
          <p class="text-purple opacity-half">
            Registered in England & Wales (09302602). VAT Reg GB 218 1108 43
          </p>
        </div>
        <div class="footer-right">
          <p class="text-purple">Follow us online</p>
          <img src={icoTwitter} height="25px" />
          <img src={LinkedIn} height="25px" />
          <img src={YT} height="25px" />
        </div>
      </div>
    </div>
  );
};
export default Homepage;
