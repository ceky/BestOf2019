import React from 'react';

import Button from './common/Buttons';
import Title from './common/Title';
import YoutubeIcon from './icons/YoutubeIcon';

const BestYoutube = () => {
  
  const onClickSeeYoutube = () => {
    console.log('new test');
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

              <p>This year I've seen a lot of documentaries, TED Talks and stand ups, especially Patrice O'Neal which blown me completely. Hell, in fact I could have a category just for the best TED Talks.
              </p>
            </div>
            
          </main>     

          <Button label='See Youtube' onClick={onClickSeeYoutube} />
        </div>
      </div>
    </div>
  );
}

export default BestYoutube;