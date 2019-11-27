import React from 'react';

import MovieIcon from './icons/MovieIcon';
import Button from './common/Buttons';
import Title from './common/Title';

const BestSongs = () => {

  const onClickSeeSongs = () => {
    console.log('new test');
  }
  
  return (
    <div className="section songs-container">
      <div className="center">
        <div className="page-container">
        <Title label="Best Songs"></Title>

        <main className="page-content">
          <MovieIcon width={320} height={240} />
          <div>
            <p>Compared to other years, I've watched significantly less movies in 2019. Mainly because I've consumed a different type of video content. Youtube, stand up shows or documentaries. But I always loved movies, old ones, indepentend ones, Romanian productions every now and then. I even tried netflix this year for a few months. But being afraid of spending too much time watching tv series I canceled my subscription.</p>

            <p>Even so there were some really good movies that I've stumbled upon. Two of them being animated tv series from netflix. So it might not be a final goodbye to the platform.</p>
          </div>
          
        </main>     

        <Button label='See Songs' onClick={onClickSeeSongs} />
        </div>
      </div>
    </div>
  );
}

export default BestSongs;
