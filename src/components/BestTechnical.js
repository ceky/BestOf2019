import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

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

          <AwesomeButton type="primary" onPress={() => {
            onClickSeeTechnical();
          }}>See Technical</AwesomeButton>

          <ul style={{display: 'none'}}>
            <li>1. The road to React book</li>
            <li>2. Chrys Coyer - Ooooops I guess we’re full-stack developers now</li>
            <li>3. GraphQL: The Documentary</li>
            <li>4. The Weird History of JavaScript</li>
            <li>5. Rediscovering JavaScript by Venkat Subramaniam</li>
            <li>6. CSS Algorithms - Lara Schenck - JSConf US 2019</li>
            <li>7. UI Refactoring https://vimeo.com/348117868</li>
            <li>8. Harry Roberts - CSS for Software Engineers for CSS Developers https://www.youtube.com/watch?v=_F5EISZa1oI</li>
            <li>9. What Are Web Components? https://www.youtube.com/watch?v=R9o9js_HKwc</li>
            <li>10. Brad Frost | The Technical Side of Design Systems | UI Special, CSS Day 2019</li>
            <li>11. ReactCasts #9 - Immutability in JavaScript https://www.youtube.com/watch?v=4LzcQyZ9JOU</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BestTechnical;