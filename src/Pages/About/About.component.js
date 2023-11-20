import React, { PureComponent } from "react";
import './About.scss';

export class AboutComponent extends PureComponent {
  renderAbout = () => {
    return (
      <div className="wrapper">
      <div className="wrapper-Aboutmain">
        <div className="wrapper-Aboutmain-pic">
          <img className="wrapper-Aboutmain-pic" src="./Assets/about.jpg" alt="about" />
        </div>
        <div className="wrapper-Aboutmain-para">
          <h4> About Us</h4>
          <p>Best Service providers at your destination...</p>
        </div>
      </div>
      </div>
    );
  };

  render() {
    return <>{this.renderAbout()}</>;
  }
}

export default AboutComponent;
