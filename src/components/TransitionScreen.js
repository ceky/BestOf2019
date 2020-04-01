import React from 'react';
import {useSpring, animated} from 'react-spring';

import './../scss/TransitionScreen.scss';
import closeBtn from '../assets/close.svg';
import bestThings from './../common/BestThingsList';

const TransitionScreen = ({category, isOpen, onClose}) => {

  const { y } = useSpring({
    y: isOpen ? 0 : 100
  });

  const onClickClose = () => {
    onClose();
  }

  return (
    <animated.div 
      style={{
        transform: y.interpolate(y => `translate3d(0, ${y}%, 0)`)
      }}
      className="transition-screen">

      <img className="close-btn" alt="close" src={closeBtn} onClick={() => onClickClose()}/>

      <p className="transition-title">Best {category}</p>

      <ul className="list">
        { bestThings[category].map((item, key) =>
          (<li key={key} className="list-item">
            <p>{item.title}</p>
            <p>{item.description}</p>
          </li>)
        )}
      </ul>
      
    </animated.div>
  );
}

export default TransitionScreen;

/**
 * import React, {useEffect} from 'react';
import Typewriter from 'typewriter-effect/dist/core';

useEffect(() => {
  var typewriter = new Typewriter('.title-section', {
    loop: false,
    delay: 75
  });

  typewriter
    .typeString(label)
    .start();
});
 */