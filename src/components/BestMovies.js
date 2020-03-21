import React, {useState} from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import MovieIcon from './icons/MovieIcon';
import Title from './common/Title';
import TransitionScreen from './TransitionScreen';

const BestMovies = ({onOpenDetails, onCloseDetails}) => {
  
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const onClickSeeMovies = () => {
    setIsDetailsOpen(true);
    // show the menu
    onOpenDetails();
  }

  const onCloseMovieDetails = () => {
    setIsDetailsOpen(false);
    // hide the menu
    onCloseDetails();
  }

  return (
    <div className="section movies-container">
      <div className="center">
        <div className="page-container">
          <Title label="Best Movies"></Title>

          <main className="page-content">
            <MovieIcon />
            <div>
              <p>Compared to other years, I've watched significantly less movies in 2019. Mainly because I've consumed a different type of video content. Youtube, stand up shows or documentaries. But I always loved movies, old ones, indepentend ones, Romanian productions every now and then. I even tried netflix this year for a few months. But being afraid of spending too much time watching tv series I canceled my subscription.</p>

              <p>Even so there were some really good movies that I've stumbled upon. Two of them being animated tv series from netflix. So it might not be a final goodbye to the platform.</p>
            </div>
            
          </main>     

          <AwesomeButton type="primary" onPress={() => {
            onClickSeeMovies();
          }}>See Movies</AwesomeButton>

          <ul style={{display: 'none'}}>
            <li>1. Green Book</li>
            <li>2. Capernaum</li>
            <li>3. Parasite</li>
            <li>4. Marriage Story</li>
            <li>5. Love, Death & Robots</li>
            <li>6. Pain and Glory</li>
            <li>7. Three Colors: Red</li>
            <li>8. Final Space</li>
            <li>9. Frances Ha</li>
            <li>10. Dear Zachary: A Letter to a Son About His Father</li>
          </ul>

          <TransitionScreen category='movies' isOpen={isDetailsOpen} onClose={() => onCloseMovieDetails()}/>
        </div>
      </div>
    </div>
  );
}

export default BestMovies;