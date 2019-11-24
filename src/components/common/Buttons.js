import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';

import './../../scss/components/Button.scss';

const Button = ({label, onClick}) => {

  const [isMouseOver, setMouseOver] = useState(false);

  const scale = useSpring({
    from: {
      transform: isMouseOver ? `scale(1)` : `scale(1.1)`
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