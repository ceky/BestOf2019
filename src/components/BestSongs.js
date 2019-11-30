import React from 'react';

import Button from './common/Buttons';
import Title from './common/Title';
import MusicIcon from './icons/MusicIcon';

const BestSongs = () => {

  const onClickSeeSongs = () => {
    console.log('new test');
  }
  
  return (
    <div className="section songs-container">
      <div className="center">
        <div className="page-container">
          <Title label="Best Songs"></Title>

          <main className="page-content right-photo">
            
            <div>
              <p>I just love listening to music. It's like therapy to me, it always helped me in difficult times. And this year I've discovered so many good songs and bands. I've also discovered some good concerts from NPR Music Tiny Desk. My favorite being by far the one from Mac Miller. Compared to past years I would say I've listened to less Romanian music however.</p>

              <p>Listening to so many good songs I just couldn't limit my selections to only 5 picks as I did last year.</p>
            </div>

            <MusicIcon />
            
          </main>     

          <Button label='See Songs' onClick={onClickSeeSongs} />
        </div>
      </div>
    </div>
  );
}

export default BestSongs;
