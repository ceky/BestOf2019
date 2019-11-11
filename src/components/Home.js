import React from 'react';
import {useSpring, animated} from 'react-spring';

import './../scss/Home.scss';
import logo from './../assets/logo.svg';

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
        <animated.h1 className="title" style={fade}>Best of 2019</animated.h1>
        <div>This is the second year in a row I'm doing this. Having a look back to the past year</div>

        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => fullpageApi.moveSectionDown()}>
          Click me to move down
        </button>
      </div>
    </div>
  );
}

export default Home;