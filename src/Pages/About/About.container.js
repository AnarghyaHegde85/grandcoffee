import React, { PureComponent } from 'react';
import AboutComponent from './About.component';

export class AboutContainer extends PureComponent {
  render() {
    return (
      <div>
        <AboutComponent />
      </div>
    )
  }
}

export default AboutContainer