import React, {Component} from 'react';

import './../scss/Home.scss';
import logo from './../assets/logo.svg';

class Home extends Component {
  
  render() {
    return (
      <div className="section">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => this.props.fullpageApi.moveSectionDown()}>
          Click me to move down
        </button>
      </div>
    );
  }
}

export default Home;