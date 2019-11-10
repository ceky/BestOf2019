import React, {Component} from 'react';
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

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1
    }
  }

  afterLoad(origin, destination, direction) { 
    this.setState({activeIndex: destination.index + 1});
  }

  render() {
    return (
      <div>
        <BurgerMenu activeIndex={this.state.activeIndex}/>
        <ReactFullpage
          licenseKey = '^9hrscI$n7'
          scrollingSpeed = {1000}
          afterLoad={this.afterLoad.bind(this)}
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
