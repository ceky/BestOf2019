import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import DocumentaryIcon from './icons/DocumentaryIcon';
import Title from './common/Title';

const BestDocumentaries = () => {
  
  const onClickSeeDocumentaries = () => {
    console.log('new test2');
  }

  return (
    <div className="section documentaries-container">
      <div className="center">
        <div className="page-container">
          <Title label="Best Documentaries"></Title>

          <main className="page-content right-photo">
            <div>
              <p>Compared to other years, I've watched significantly less movies in 2019. Mainly because I've consumed a different type of video content. Youtube, stand up shows or documentaries. But I always loved movies, old ones, indepentend ones, Romanian productions every now and then. I even tried netflix this year for a few months. But being afraid of spending too much time watching tv series I canceled my subscription.</p>

              <p>Even so there were some really good movies that I've stumbled upon. Two of them being animated tv series from netflix. So it might not be a final goodbye to the platform.</p>
            </div>
            <DocumentaryIcon />
            
          </main>     

          <AwesomeButton type="primary" onPress={() => {
            onClickSeeDocumentaries();
          }}>See Documentaries</AwesomeButton>

          <ul style={{display: 'none'}}>
            <li>1. Dear Zachary: A Letter to a Son About His Father</li>
            <li>2. Formula 1: Drive to Survive</li>
            <li>3. Faces Places</li>
            <li>4. I Am Alive: Surviving the Andes Plane Crash</li>
            <li>5. The Eagle Huntress</li>
            <li>6. The Game Changers</li>
            <li>7. Amy</li>
            <li>8. The Dawn Wall</li>
            <li>9. Kedi</li>
            <li>10. Chasing Ice</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BestDocumentaries;
