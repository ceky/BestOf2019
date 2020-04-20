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
import TransitionScreen from './components/TransitionScreen';

import './scss/App.scss';
import './scss/BurgerMenu.scss';

const App = () => {

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeIndexWhenOpeningDetails, setActiveIndexWhenOpeningDetails] = useState(-1);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('movies');

  const afterLoad = (origin, destination, direction) => { 
    setActiveIndex(destination.index + 1);
  }

  const showMenu = () => {
    setIsMenuVisible(false);
  }

  const hideMenu = () => {
    setIsMenuVisible(true);
  }

  const openDetailsView = (category) => {
    setSelectedCategory(category);
    setIsDetailsOpen(true);
    showMenu();
    setActiveIndexWhenOpeningDetails(activeIndex);
  }

  const closeDetailsView = () => {
    setIsDetailsOpen(false);
    hideMenu();
  }

  return (
    <div>
      {isMenuVisible &&
        <BurgerMenu activeIndex={activeIndex}/>
      }
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
                <BestMovies openDetailsView={() => openDetailsView('movies')}/>
                <BestDocumentaries openDetailsView={() => openDetailsView('documentaries')}/>
                <BestBooks openDetailsView={() => openDetailsView('books')}/>
                <BestSongs openDetailsView={() => openDetailsView('songs')}/>
                <BestYoutube openDetailsView={() => openDetailsView('youtube')}/>
                <BestTechnical openDetailsView={() => openDetailsView('technical')}/>
              </ReactFullpage.Wrapper>
            </div>              
          );
        }}
      />

      <TransitionScreen 
        category={selectedCategory} 
        isOpen={isDetailsOpen} 
        activeIndex={activeIndexWhenOpeningDetails} 
        onClose={() => closeDetailsView()}
      />
    </div>      
  );
}

export default App;
