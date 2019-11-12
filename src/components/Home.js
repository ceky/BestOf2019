import React from 'react';
import {useSpring, animated} from 'react-spring';

import './../scss/Home.scss';

const Home = ({fullpageApi}) => {

  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  });
  
  return (
    <div className="section home-container">
      <div className="page-container">
        <div className="title-container">
          <div className="title-background"/>
          <animated.h1 className="title" style={fade}>BEST OF 2019</animated.h1>
        </div>
        
        <div className="main-container">
          <div>This is the second year in a row I'm doing this. Having a look back to the past year, on the things I enjoyed the most in terms of content consumption, gives me good feeling. It makes me feel grateful for the amount of awesome things that I came over. And I've spent so much time on some of them, with books like Flow or The Count of Monte Cristo, or songs that I had on repeat for so long. They are worth mentioning in a site just like this one, since these little things leave a mark on me.</div>

          <div>All in all it was a good year, having a curiosity for learning new things. I can't say I always had this high level of curiosity, but it's always rewarding when I'm experiencing it for longer periods of time. Having said that, let's start exploring the things that caught my attention in 2019!</div>
        </div>

        <div onClick={() => fullpageApi.moveSectionDown()}>GO</div>
      </div>
    </div>
  );
}

export default Home;