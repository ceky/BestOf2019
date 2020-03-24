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
              <p>At the beginning of the year I decided to watch 100 documentaries in 2019. For the first three months I've seen more than 10 in each month, being on schedule. But as it usually happens, the enthuziasm starts to fade from the moment you plan something as the time goes on. So by April I've decided to stop it, cause I didn't want to feel this as a burden. I've continued watching some documentaries for the rest of the year, but without any extra pressure.</p>
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
