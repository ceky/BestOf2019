import React, {Component} from 'react';

import './../scss/Home.scss';
import logo from './../assets/logo.svg';

class Home extends Component {
  
  render() {
    return (
      <div className="section home-container">
        <div className="page-container">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => this.props.fullpageApi.moveSectionDown()}>
            Click me to move down
          </button>
        </div>
      </div>
    );
  }
}

export default Home;