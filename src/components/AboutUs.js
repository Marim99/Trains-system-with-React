import React, { Component, Fragment } from "react";
import "../styles/AboutUs.css";

import image1 from "../utilities/images/1.jpeg";
import image2 from "../utilities/images/2.jpeg";
import image3 from "../utilities/images/3.jpeg";
import image4 from "../utilities/images/4.jpeg";
import image5 from "../utilities/images/5.jpeg";
import image6 from "../utilities/images/6.jpeg";
import image7 from "../utilities/images/7.jpeg";
import image8 from "../utilities/images/8.jpeg";
import image9 from "../utilities/images/9.jpeg";

class AboutUs extends Component {
  render() {
    return (
      <Fragment>
        <div className="portofolio pd-y" id="portofolio">
          <div className="section-header">
            <h2 className="section-title">about us</h2>
          </div>

          <div className="container flexBox">
            <div className="portofolio-item">
              <img src={image1} alt="Sief" />
              <div className="layer-content">
                <div className="layer-info">
                  <span className="category">Sief</span>
                  <ul className="layer-content-title">
                    <li>communication</li>
                    <li>speech recognetion</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="portofolio-item mg">
              <img src={image2} alt="Nada" />
              <div className="layer-content">
                <div className="layer-info">
                  <span className="category">Nada</span>
                  <ul className="layer-content-title">
                    <li>embedded system</li>
                    <li>mobile application</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="portofolio-item">
              <img src={image3} alt="Islam" />
              <div className="layer-content">
                <div className="layer-info">
                  <span className="category">Islam</span>
                  <ul className="layer-content-title">
                    <li>image processing</li>
                    <li>backend server</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="portofolio-item">
              <img src={image4} alt="Mariam" />
              <div className="layer-content">
                <div className="layer-info">
                  <span className="category">Mariam</span>
                  <ul className="layer-content-title">
                    <li>speech recognetion</li>
                    <li>web development</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="portofolio-item mg">
              <img src={image5} alt="Nancy" />
              <div className="layer-content">
                <div className="layer-info">
                  <span className="category">Nancy</span>
                  <ul className="layer-content-title">
                    <li>image processing</li>
                    <li>web development</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="portofolio-item">
              <img src={image6} alt="Nagham" />
              <div className="layer-content">
                <div className="layer-info">
                  <span className="category">Nagham</span>
                  <ul className="layer-content-title">
                    <li>communication</li>
                    <li>embedded system</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="portofolio-item">
              <img src={image7} alt="Hager" />
              <div className="layer-content">
                <div className="layer-info">
                  <span className="category">Hager</span>
                  <ul className="layer-content-title">
                    <li>image processing</li>
                    <li>mobile application</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="portofolio-item mg">
              <img src={image8} alt="Nadine" />
              <div className="layer-content">
                <div className="layer-info">
                  <span className="category">Nadine</span>
                  <ul className="layer-content-title">
                    <li>communication</li>
                    <li>embedded system</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="portofolio-item">
              <img src={image9} alt="Radwa" />
              <div className="layer-content">
                <div className="layer-info">
                  <span className="category">Radwa</span>
                  <ul className="layer-content-title">
                    <li>embedded system</li>
                    <li>speech recognetion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </Fragment>
    );
  }
}

export default AboutUs;
