import React, {Component} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Home from './components/Home';
import BestMovies from './components/BestMovies';
import BestDocumentaries from './components/BestDocumentaries';
import BestBooks from './components/BestBooks';
import BestSongs from './components/BestSongs';
import BestYoutube from './components/BestYoutube';
import BestTechnical from './components/BestTechnical';

import './scss/App.scss';
import './scss/BurgerMenu.scss';
import BurgerMenu from './components/BurgerMenu';

class App extends Component {

  render() {
  
    return (
      <div>
        <BurgerMenu/>
        <ReactFullpage
          licenseKey = '^9hrscI$n7'
          scrollingSpeed = {1000}
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
}

export default App;
