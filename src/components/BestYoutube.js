import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

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

              <p>Among that there've been a lot of documentaries, TED Talks and stand ups (especially Patrice O'Neal which blown me completely). In fact I could have a category just for the best TED Talks. This year I'm including only one though (about curiosity from Bucharest), cause I'm not ready to reveal all the videos that helped me heal my wounds haha.
              </p>
            </div>
            
          </main>     

          <AwesomeButton type="primary" onPress={() => {
            onClickSeeYoutube();
          }}>See Youtube</AwesomeButton>

          <ul style={{display: 'none'}}>
            <li>Patrice O'Neal Elephant In The Room Standup</li>
            <li>Guild Talks - Echilibru între carieră de top si viaţă personală - Mircea Miclea </li>
            <li>Izolaţi în România: Cătunele Dobraia, Ineleţ şi Prisecina, din judeţul Caraş-Severin</li>
            <li>Lauren Hom Fall 2018 | CoAD Lecture Series</li>
            <li>Alternativa Fundamentală | Solomon Marcus | TEDxCluj</li>
            <li>Art + Life Rules from a Nun</li>
            <li>A Brief History of Graphics</li>
            <li>For People Who Feel Behind In Life</li>
            <li>Curiozitatea, povestea şi ecuaţiile | Cristian Presura | TEDxCaleaDomneasca</li>
            <li>A young woman finds a one-night stand. But he lives 2 hours away via public transit</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BestYoutube;