import React from "react";
import config from "../../../data/SiteConfig";
import "./SocialLinks.scss";

const SocialIcons = () => (
  <ul className="social">
    {config.userLinks.map(({ label, url,iconClassName }, index) => (
      <li key={index}>
        <a href={url} className={iconClassName} target="_blank" title={label}></a>
      </li>
    ))}
  </ul>
)

export default SocialIcons