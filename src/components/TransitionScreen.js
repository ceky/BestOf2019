import React, {useEffect} from 'react';
import {useSpring, animated} from 'react-spring';

import './../scss/TransitionScreen.scss';
import closeBtn from '../assets/close.svg';
import bestThings from './../common/BestThingsList';

const TransitionScreen = ({category, isOpen, activeIndex, onClose}) => {

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        document.getElementById('fullpage').style.visibility = 'hidden';
        document.getElementsByTagName('html')[0].style.overflow = 'auto';
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
        document.getElementsByTagName('html')[0].scrollTop = 0;
      }, 700);
    }
  }, [isOpen]);

  const { y } = useSpring({
    y: isOpen ? 0 : 100
  });

  const onClickClose = () => {
    onClose();

    document.getElementById('fullpage').style.visibility = 'visible';
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    document.getElementsByTagName('html')[0].scrollTop = 0;
    setTimeout(() => {
      window.fullpageApi.silentMoveTo(activeIndex);
    }, 50);
  }

  const onOpenLink = (url) => {
    window.open(url,'_blank');
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
          (<li key={key} className="list-item" onClick={() => onOpenLink(item.link)}>
            <img src={item.thumbnail} alt="thumb"></img>
            <div className="text-container">
              <p className="title">{item.title}</p>
              <p className="description">{item.description}</p>
            </div>            
          </li>)
        )}
      </ul>
      
    </animated.div>
  );
}

export default TransitionScreen;