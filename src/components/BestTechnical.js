import React from 'react';

import Button from './common/Buttons';
import Title from './common/Title';
import TechnicalIcon from './icons/TechnicalIcon';

const BestTechnical = () => {
  
  const onClickSeeTechnical = () => {
    console.log('new test');
  }

  return (
    <div className="section technical-container">
      <div className="center">
        <div className="page-container">
          <Title label="Best Technical"></Title>

          <main className="page-content right-photo">
            
            <div>
              <p>It was a really good year 2019 due to the passion that I managed to maintain on a high level regarding the web development world. It's so big and hot all this ecosystem. The possibilities to choose and learn any new skill are endless with so many good features and libraries. Just thinking on how the Flexbox and CSS Grid changed the layout games, or how many crazy things have appeared with crazy animations done with CSS, Javascript and SVG.</p>

              <p>Also the browsers are better in implementing and supporting any new features. And all I can say is that it's a joy to be a frontend developer these days.</p>
            </div>

            <TechnicalIcon />
            
          </main>     

          <Button label='See Technical' onClick={onClickSeeTechnical} />
        </div>
      </div>
    </div>
  );
}

export default BestTechnical;