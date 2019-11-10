import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';

import './../scss/Icons.scss';

class BurgerMenu extends Component {

  goToSlide = (index) => {
    const element = document.getElementsByClassName("bm-overlay")[0];
    element.click();
    window.fullpageApi.moveTo(index);
  }  

  render() {
    return (
      <Menu right>
        <div onClick={ (e) => this.goToSlide(1, e) }>
          <i className="icon icon-home"></i>
          <span>Home</span>
        </div>
        <div onClick={ (e) => this.goToSlide(2, e) }>
          <i className="icon icon-movies"></i>
          <span>Movies</span>
        </div>
        <div onClick={ (e) => this.goToSlide(3, e) }>
          <i className="icon icon-documentaries"></i>
          <span>Documentaries</span>
        </div>
        <div onClick={ (e) => this.goToSlide(4, e) }>
          <i className="icon icon-books"></i>
          <span>Books</span>
        </div>
        <div onClick={ (e) => this.goToSlide(5, e) }>
          <i className="icon icon-songs"></i>
          <span>Songs</span>
        </div>
        <div onClick={ (e) => this.goToSlide(6, e) }>
          <i className="icon icon-youtube"></i>
          <span>Youtube</span>
        </div>
        <div onClick={ (e) => this.goToSlide(7, e) }>
          <i className="icon icon-technical"></i>
          <span>Technical</span>
        </div>
      </Menu>
    );
  }
}

export default BurgerMenu;