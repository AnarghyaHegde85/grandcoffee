import React, { PureComponent } from 'react';
import ServiceComponent from './Service.component';

 class ServiceContainer extends PureComponent {
  render() {
    return (
      <div>
        <ServiceComponent />
      </div>
    )
  }
}

export default ServiceContainer;