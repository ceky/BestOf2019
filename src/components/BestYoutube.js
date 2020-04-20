import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import Title from './common/Title';
import YoutubeIcon from './icons/YoutubeIcon';

const BestYoutube = ({openDetailsView}) => {
  
  const onClickSeeYoutube = () => {
    openDetailsView();
  }

  return (
    <div className="section youtube-container">
      <div className="center">
        <div className="page-container">
          <Title label="Best Youtube"></Title>

          <main className="page-content">
            
            <YoutubeIcon />

            <div>
              <p>Youtube is my number one choice when it comes to procrastination. So I see this category standing here solid for the next years as well. This year I've seen also a ton of recordings from various web conferences around the world. So hey, it's not all about procrastination.</p>

              <p>Among that there've been a lot of documentaries, TED Talks and stand ups (especially Patrice O'Neal which blown me completely). In fact I could have a category just for the best TED Talks. This year I'm not gonna do this tho cause I'm not ready to reveal all the videos that helped me with my mental problems :))
              </p>
            </div>
            
          </main>     

          <AwesomeButton type="primary" onPress={() => {
            onClickSeeYoutube();
          }}>See Youtube</AwesomeButton>
        </div>
      </div>
    </div>
  );
}

export default BestYoutube;