import React from "react";
import SocialIcons from "../SocialLinks/SocialIcons";
import config from "../../../data/SiteConfig";
import profileImage from "../../assets/img/me.jpg";
import Link from "gatsby-link";

import "./Author.scss";

const Author = () => (
  <aside className="author">
    <img className="profile-image" src={profileImage} alt={config.userName} />
    <p className="name"> 
      by:<strong> {config.userName} </strong></p>
    <p className="address"> {config.userLocation}</p>
    <SocialIcons />
    <br /><br />
     <Link to="/talks" className="speaker-link">Speaking Engaements</Link>
  </aside>
)

export default Author