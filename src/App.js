import React, {Component} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Home from './components/Home';
import BestMovies from './components/BestMovies';
import BestDocumentaries from './components/BestDocumentaries';
import './scss/App.scss';

class App extends Component {

  render() {
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
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }  
}

export default App;
