import React from 'react';
import {useSpring, animated} from 'react-spring';

import './../scss/TransitionScreen.scss';
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
      <p className="transition-title" onClick={() => onClickClose()}>Best {category}</p>

      { bestThings[category].map((item, key) =>
        (<li key={key}>
          <p>{item.title}</p>
          <p>{item.description}</p>
        </li>)
      )}
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