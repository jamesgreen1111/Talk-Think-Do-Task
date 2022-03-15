// External Imports
import React from "react";
// Styles
import "./header.css";
// FontAwsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
//Imgs
import Logo from "../../Assets/images/logo-ttd-line.svg";
/**
 * @function Header * Component for rendering Header content
 */
const Header = () => {
  return (
    <div class="header-container">
      <img src={Logo} height="30px" />
      <ul class="header-links text-purple">
        <li>Services</li>
        <li>Our Clients</li>
        <li>Our Story</li>
        <li>Our Blog</li>
        <li>Careers</li>
        <button class="button-grey">
          <FontAwesomeIcon class="button-icon" icon={faArrowRightLong} />
          Contact us
        </button>
      </ul>
    </div>
  );
};
export default Header;
