import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';

import logo from './../assets/love.svg';
import './../scss/Home.scss';

const Home = ({fullpageApi}) => {

  const [isMouseOver, setMouseOver] = useState(false);

  const scale = useSpring({
    from: {
      transform: isMouseOver ? `scale(1)` : `scale(1.1)`
    }, 
    transform: isMouseOver ? `scale(1.1)` : `scale(1)`
  });
  
  return (
    <div className="section home-container">
      <div className="center">
        <div className="page-container">
          <div className="title-container">
            <img className="title-background" alt="bg" src={logo}/>
            <h1 className="title">2019</h1>
          </div>
          
          <div className="main-container">
            <div>This is the second year in a row I'm doing this. Having a look back to the past year, on the things I enjoyed the most in terms of content consumption, gives me a good feeling. I've spent so much time on some of them, with books like Flow or The Count of Monte Cristo, or songs that I had on repeat for so long. They are worth mentioning in a site just like this one, since these little things leave a mark on me.</div>

            <div>All in all it was a good year, having a curiosity for learning new things. I can't say I always had this high level of curiosity, but it's always rewarding when I'm experiencing it for longer periods of time. Having said that, let's start exploring the things that caught my attention in 2019!</div>
          </div>

          <animated.div className="start-button" 
            style={scale}
            onMouseOver={() => setMouseOver(true)} 
            onMouseLeave={() => setMouseOver(false)}
            onClick={() => fullpageApi.moveSectionDown()}>Start</animated.div>
        </div>
      </div>
    </div>
  );
}

export default Home;