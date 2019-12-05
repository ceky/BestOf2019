import React, {useState} from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import MovieIcon from './icons/MovieIcon';
import Title from './common/Title';
import TransitionScreen from './TransitionScreen';

const BestMovies = () => {
  
  const [seeDetails, setSeeDetails] = useState(false);

  const onClickSeeMovies = () => {
    setSeeDetails(true);
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

          { seeDetails &&
            <TransitionScreen category='movies'/>
          }
        </div>
      </div>
    </div>
  );
}

export default BestMovies;