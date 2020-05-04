import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import DocumentaryIcon from './icons/DocumentaryIcon';
import Title from './common/Title';

const BestDocumentaries = ({openDetailsView}) => {

  const onClickSeeDocumentaries = () => {
    openDetailsView();
  }

  return (
    <div className="section documentaries-container">
      <div className="center">
        <div className="page-container">
          <Title label="Best Documentaries"></Title>

          <main className="page-content right-photo">
            <div>
              <p>At the beginning of the year I decided to watch 100 documentaries in 2019. For the first three months I've seen more than 10 in each month, being on schedule. But as it usually happens, the enthuziasm starts to fade from the moment you plan something as the time goes on. So by April I've decided to stop it, cause I didn't want to feel this as a burden. I've continued watching some documentaries for the rest of the year however, being one of my favorites genre.</p>
            </div>
            <DocumentaryIcon />
            
          </main>     

          <AwesomeButton type="primary" onPress={() => {
            onClickSeeDocumentaries();
          }}>See Documentaries</AwesomeButton>
        </div>
      </div>
    </div>
  );
}

export default BestDocumentaries;
