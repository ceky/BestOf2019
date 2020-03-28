import React, {Component} from 'react';

import './../../scss/components/Card.scss';

import CardBack from './CardBack';
import CardFront from './CardFront';

class Card extends Component {
  render() {
    return(
      <div className='card-container'>
        <div className='card-body'>
          <CardBack />

          <CardFront />
        </div>
      </div>
    )
  }
}

export default Card;