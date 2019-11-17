import React from 'react';

import logo from './../assets/love.svg';
import './../scss/Home.scss';
import Button from './buttons/Buttons';

const Home = ({fullpageApi}) => {

  const onClickStart = () => {
    fullpageApi.moveSectionDown();
  }
  
  return (
    <div className="section home-container">
      <div className="center">
        <div className="page-container">
          <div className="title-container">
            <img className="title-background" alt="bg" src={logo}/>
            <h1 className="title">2019</h1>
          </div>
          
          <section className="main-container">
            <p>This is the second year in a row I'm doing this. Having a look back to the past year, on the things I enjoyed the most in terms of content consumption, gives me a good feeling. I've spent so much time on some of them, with books like Flow or The Count of Monte Cristo, or songs that I had on repeat for so long. They are worth mentioning in a site just like this one, since these little things leave a mark on us.</p>

            <p>All in all it was a good year, having a curiosity for learning new things. I can't say I always had this high level of curiosity, but it's always rewarding when I'm experiencing it for longer periods of time. Having said that, let's start exploring the things that caught my attention in 2019!</p>
          </section>

          <Button label='Start' onClick={onClickStart} />
        </div>
      </div>
    </div>
  );
}

export default Home;