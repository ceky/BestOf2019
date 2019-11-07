import React, {Component} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Home from './components/Home';
import BestMovies from './components/BestMovies';
import BestDocumentaries from './components/BestDocumentaries';
import './scss/App.scss';
import BestBooks from './components/BestBooks';
import BestSongs from './components/BestSongs';
import BestYoutube from './components/BestYoutube';
import BestTechnical from './components/BestTechnical';

class App extends Component {

  render() {
    
new fullpage('#fullpage', {
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
	menu: '#myMenu'
});

    return (
      <ReactFullpage
        licenseKey = '^9hrscI$n7'
        scrollingSpeed = {1000}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Home fullpageApi={fullpageApi}/>
              <BestMovies />
              <BestDocumentaries />
              <BestBooks />
              <BestSongs />
              <BestYoutube />
              <BestTechnical />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }  
}

export default App;
