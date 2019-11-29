import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';

import './../../scss/components/Button.scss';

const Button = ({label, onClick}) => {

  const [isMouseOver, setMouseOver] = useState('');

  const getScaleFrom = () => {
    // when isMouseOver is empty it means there hasn't been any interaction with the button yet
    // and it should not start scaling down from 1.1 to 1 on the first load
    if (isMouseOver === '' || isMouseOver === true) {
      return 'scale(1)';
    } else {
      return 'scale(1.1)'
    }
  }

  const scale = useSpring({
    from: {
      transform: getScaleFrom()
    }, 
    transform: isMouseOver ? `scale(1.1)` : `scale(1)`,
    config: {
      friction: 10,
      tension: 300
    }
  });

  return (
    <animated.div className="button" 
      style={scale}
      onMouseOver={() => setMouseOver(true)} 
      onMouseLeave={() => setMouseOver(false)}
      onClick={() => onClick()}>
        {label}
    </animated.div>
  )
}

export default Button;