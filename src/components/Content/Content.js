import React from "react";
import Artical from "../Artical";
import Logo from "../../assets/images/logoNCC 1.png";
import Icon1 from "../../assets/images/css-icon 1.png";
import Icon2 from "../../assets/images/html-icon 1.png";
import Icon3 from "../../assets/images/url-icon 1.png";
import "./Content.css";
const Content = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="content__logo">
          <img src={Logo} alt="" />
        </div>
        <div className="content__hero">
          <div className="inner-container">
            <h4>Lorem ipsum dolor sit asmet?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique consequat placerat. Vestibulum auctor pellentesque sem, eu
              posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
              facilisis, ligula in mattis sodales, augue justo tristique nulla,
              sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
              mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
              convallis. Quisque suscipit maximus vestibulum. Phasellus congue
              mollis orci, sit amet luctus augue tristique eu. Donec vulputate
              odio neque, sed semper turpis pellentesque a.
            </p>
          </div>
        </div>
        <div className="content__main">
          <Artical image={Icon1} />
          <Artical image={Icon2} />
          <Artical image={Icon3} />
        </div>
      </div>
    </div>
  );
};

export default Content;
