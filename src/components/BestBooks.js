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
              <p>Probably my favorite category over here. I don't read as much as I would like to, but I've become quite good in picking books that I enjoy. That wasn't always the case. And by that I get to read every year some books that get me really attached to the stories.</p>
              
              <p>This year I've read two stories, each over 1000 pages. And for the months that I've been reading them I felt as being part of another universe. A new dimension in parallel with the reality. So it's like an add-on, improving the life's experience.</p>
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