import React, {useState} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Home from './components/Home';
import BestMovies from './components/BestMovies';
import BestDocumentaries from './components/BestDocumentaries';
import BestBooks from './components/BestBooks';
import BestSongs from './components/BestSongs';
import BestYoutube from './components/BestYoutube';
import BestTechnical from './components/BestTechnical';
import BurgerMenu from './components/BurgerMenu';

import './scss/App.scss';
import './scss/BurgerMenu.scss';

const App = () => {

  const [activeIndex, setActiveIndex] = useState(-1);

  const afterLoad = (origin, destination, direction) => { 
    setActiveIndex(destination.index + 1);
  }

  return (
    <div>
      <BurgerMenu activeIndex={activeIndex}/>
      <ReactFullpage
        licenseKey = '^9hrscI$n7'
        scrollingSpeed = {1000}
        afterLoad={afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          window.fullpageApi = fullpageApi;
          
          return (
            <div>
              <ReactFullpage.Wrapper>
                <Home fullpageApi={fullpageApi}/>
                <BestMovies />
                <BestDocumentaries />
                <BestBooks />
                <BestSongs />
                <BestYoutube />
                <BestTechnical />
              </ReactFullpage.Wrapper>
            </div>              
          );
        }}
      />
    </div>      
  );
}

export default App;
