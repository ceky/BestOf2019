import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import Title from './common/Title';
import BookIcon from './icons/BookIcon';

const BestBooks = () => {

  const onClickSeeBooks = () => {
    console.log('new test3');
  }

  return (
    <div className="section books-container">
      <div className="center">
        <div className="page-container">
          <Title label="Best Books"></Title>

          <main className="page-content">
            <BookIcon />
            <div>
              <p>Probably my favorite category over here. I don't read as much as I would like to, but I've become quite good in picking books that I enjoy. That wasn't always the case, but hey that's where experience comes into place :D</p>
              
              <p>I like to combine fiction and nonficiton books. My favorite fiction book was The Count of Monte Cristo. It has more than 1000 pages and I've started it because Cartarescu recommended it as one of his favorites. As for my my favorite nonfiction that has to be Flow. And I've started it again on another recommendation by Kathy Sierra that wrote Head First Java. I don't reread books because life it's too short. But one day I might do an exception for this book.</p>
            </div>
            
          </main>     

          <AwesomeButton type="primary" onPress={() => {
            onClickSeeBooks();
          }}>See Books</AwesomeButton>

          <ul style={{display: 'none'}}>
            <li>1. The Count of Monte Cristo</li>
            <li>2. Flow: The Psychology of Optimal Experience</li>
            <li>3. Lost Connections: Uncovering the Real Causes of Depression - and the Unexpected Solutions</li>
            <li>4. Prietena mea geniala</li>
            <li>5. The Spinoza Problem</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BestBooks;