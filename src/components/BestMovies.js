import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import MovieIcon from './icons/MovieIcon';
import Title from './common/Title';

const BestMovies = ({openDetailsView}) => {
  
  const onClickSeeMovies = () => {
    openDetailsView();
  }

  return (
    <div className="section movies-container">
      <div className="center">
        <div className="page-container">
          <Title label="Best Movies"></Title>

          <main className="page-content">
            <MovieIcon />
            <div>
              <p>Compared to other years, I've watched significantly less movies in 2019. Mainly because I've consumed a different type of video content. Youtube, stand up shows or documentaries. But I always loved movies, old ones, indepentend ones, Romanian productions every now and then. Not a big netflix fan tho, cause the best movies can't be found there.</p>

              <p>That being said I couldn't make my mind to pick only five movies. I might have seen less, but the quality didn't drop. Kudos to myself for improving my internal algorithm that is filtering the movies.</p>
            </div>
            
          </main>     

          <AwesomeButton type="primary" onPress={() => {
            onClickSeeMovies();
          }}>See Movies</AwesomeButton>

        </div>
      </div>
    </div>
  );
}

export default BestMovies;