import React from 'react';
import {useSpring, animated} from 'react-spring';

import './../scss/TransitionScreen.scss';

const TransitionScreen = ({category, isOpen, onClose}) => {

  const { x } = useSpring({
    x: isOpen ? 0 : 100
  });

  const onClickClose = () => {
    onClose();
  }

  return (
    <animated.div 
      style={{
        transform: x.interpolate(x => `translate3d(${x}%, 0, 0)`)
      }}
      className="transition-screen">
      <span onClick={() => onClickClose()}>Transition Screen {category}</span>
    </animated.div>
  );
}

export default TransitionScreen;