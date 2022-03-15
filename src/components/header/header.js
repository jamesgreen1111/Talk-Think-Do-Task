import React from "react";
import "./header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../Assets/images/logo-ttd-line.svg";

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
