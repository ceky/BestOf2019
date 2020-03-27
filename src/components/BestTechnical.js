import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import Title from './common/Title';
import TechnicalIcon from './icons/TechnicalIcon';

const BestTechnical = ({openDetailsView}) => {
  
  const onClickSeeTechnical = () => {
    openDetailsView();
  }

  return (
    <div className="section technical-container">
      <div className="center">
        <div className="page-container">
          <Title label="Best Technical"></Title>

          <main className="page-content right-photo">
            
            <div>
              <p>It was a really good year 2019 due to the passion that I managed to maintain on a high level regarding the web development world. All this web development ecosystem is so big and hot. The possibilities to choose and learn any new skill are endless with so many good features and libraries. Just thinking on how the Flexbox and CSS Grid changed the layout games.</p>

              <p>Also the browsers are better in implementing and supporting new features. And all I can say is that it's a joy to be a frontend developer these days.</p>
            </div>

            <TechnicalIcon />
            
          </main>     

          <AwesomeButton type="primary" onPress={() => {
            onClickSeeTechnical();
          }}>See Technical</AwesomeButton>
        </div>
      </div>
    </div>
  );
}

export default BestTechnical;