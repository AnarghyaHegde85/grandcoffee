import React, { PureComponent } from 'react';
import GalleryComponent from './Gallery.component';
import Card from '../../Card';

 class GalleryContainer extends PureComponent {
  state={
        cards:[],
    };

    componentDidMount() {
       this.setState({
        cards:Card,
       });
    }

  //   fetchData = () => {
  //     fetch("/Card.js")
  //     .then((res) => res.json())
  //     .then((Card) => {
  //         this.setState({
  //             cards:Card,
  //         });
  //     })
  // }

    
  render() {
    
    return (
      <div>
        <GalleryComponent cards={this.state.cards} />
      </div>
    )
  }
}

export default GalleryContainer;