import React, { PureComponent } from "react";
import './Gallery.scss';

export class GalleryComponent extends PureComponent {
  render() {
    const { cards } = this.props;
    return (
      <div className="gcard">
        {cards.map((card) => (
          <div className="gcard-list">
            <div className="gcard-list-img">
              <img className="gcard-list-img" src={card.img} alt="card" />
            </div>
            <h5 className="gcard-list-name">{card.name}</h5>
            <p className="gcard-list-price">
              price:<span>{card.price}</span>
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default GalleryComponent;
