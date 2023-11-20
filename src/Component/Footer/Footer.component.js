import React, { PureComponent } from 'react';
import './Footer.scss';
// import phone from '../../../public/Assets/phone.png';
// import mail from '../../../public/Assets/mail.png';

export class FooterComponent extends PureComponent {
  render() {
    return (
      <div className='content'>
        <div className='content-getin'>
          <div className='content-getin-h1'>
            <h4 >GET IN TOUCH</h4>
            </div>
            <div className='content-getin-p'>
            <p>contact:</p>
            <p>email</p>
            </div>
        </div>

        <div className='content-follow'>
          <h5>FOLLOW US ON</h5>
          <div className='content-follow-img'>
         <img  src='../Assets/insta.png' alt='insta'/>
         <img  src='../Assets/facebook.png' alt='facebook'/>
        <img  src='../Assets/twitter.png' alt='twiter'/>
        </div>
        </div>

        

      </div>
    )
  }
}

export default FooterComponent;