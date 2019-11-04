import React, {Component} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Home from './components/Home';
import BestMovies from './components/BestMovies';

class App extends Component {

  render() {
    return (
      <ReactFullpage
        //fullpage options
        licenseKey = '^9hrscI$n7'
        scrollingSpeed = {1000} /* Options here */

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Home fullpageApi={fullpageApi}/>
              <BestMovies />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }  
}

export default App;
