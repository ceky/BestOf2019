import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

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

          <AwesomeButton type="primary" onPress={() => {
            onClickSeeSongs();
          }}>See Songs</AwesomeButton>

          <ul style={{display: 'none'}}>
            <li>1. Sasha Sloan - Older</li>
            <li>2. Rilès - REMEDY</li>
            <li>3. Mac Miller - What's The Use? (NPR concert)</li>
            <li>4. Mike Posner - Move on</li>
            <li>5. Anderson .Paak - Make It Better</li>
            <li>6. Bastille - Doom Days</li>
            <li>7. The Sound - I Can't Escape Myself</li>
            <li>8. Let's Eat Grandma - It’s Not Just Me</li>
            <li>9. Old Man Saxon - The Perils</li>
            <li>10. Part III: Fever Ray - To The Moon And Back</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BestSongs;
