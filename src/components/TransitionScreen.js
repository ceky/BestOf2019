import React, {useEffect} from 'react';
import {useSpring, animated} from 'react-spring';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';

import './../scss/TransitionScreen.scss';
import closeBtn from '../assets/close.svg';
import bestThings from './../common/BestThingsList';

const TransitionScreen = ({category, isOpen, activeIndex, onClose}) => {

  useEffect(() => {
    var flickity = new Flickity('.mobile-carousel', {
      wrapAround: true,
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.getElementById('transition-screen').scrollTop = 0;
    }
  }, [isOpen]);

  const { y } = useSpring({
    y: isOpen ? 0 : 100
  });

  const onClickClose = () => {
    onClose();

    window.fullpageApi.silentMoveTo(activeIndex);
  }

  const onOpenLink = (url) => {
    window.open(url,'_blank');
  }

  return (
    <animated.div 
      style={{
        transform: y.interpolate(y => `translate3d(0, ${y}%, 0)`)
      }}
      className="transition-screen" id="transition-screen">

      <img className="close-btn" alt="close" src={closeBtn} onClick={() => onClickClose()}/>

      <p className="transition-title">Best {category}</p>

      <div className="desktop">
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
      </div>

      <div className="mobile">
        <ul className="mobile-carousel">

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
      </div>

      
      
    </animated.div>
  );
}

export default TransitionScreen;