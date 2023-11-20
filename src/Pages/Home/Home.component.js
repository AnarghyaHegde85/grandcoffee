import React, { PureComponent } from 'react';
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';
import './Home.scss';
// import Pic from '../../Assets/pic.jpg';
import Gallery from '../Gallery'

class HomeComponent extends PureComponent {
  render() {
    return (
      <div className='home'>
       <Navbar />
       {/* <img className='home-pic' src={Pic} alt='HomePage' /> */}
       <Gallery />
       <Footer />
      </div>
    )
  }
}

export default HomeComponent