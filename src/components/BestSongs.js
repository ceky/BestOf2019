import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import Title from './common/Title';
import MusicIcon from './icons/MusicIcon';

const BestSongs = ({openDetailsView}) => {

  const onClickSeeSongs = () => {
    openDetailsView();
  }
  
  return (
    <div className="section songs-container">
      <div className="center">
        <div className="page-container">
          <Title label="Best Songs"></Title>

          <main className="page-content right-photo">
            
            <div>
              <p>I just love listening to music. It's like therapy to me, it always helped me in difficult times. And this year I've discovered so many good songs and bands. I've also discovered some good concerts from NPR Music Tiny Desk. My favorite being by far the one from Mac Miller. Compared to past years I would say I've listened to less Romanian music however.</p>

              <p>Listening to so many good songs I just couldn't limit my selections to only 5 picks as I did last year. Also I found there is a direct connection between the amount of music I listen to and my melancholic moods. So that might say something about 2019.</p>
            </div>

            <MusicIcon />
            
          </main>     

          <AwesomeButton type="primary" onPress={() => {
            onClickSeeSongs();
          }}>See Songs</AwesomeButton>
        </div>
      </div>
    </div>
  );
}

export default BestSongs;
