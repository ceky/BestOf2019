import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import './../scss/Icons.scss';

const BurgerMenu = ({activeIndex}) => {

  const goToSlide = (index) => {
    const element = document.getElementsByClassName("bm-overlay")[0];
    element.click();
    window.fullpageApi.moveTo(index);
    // this.setState({activeIndex: index});
  }

  return (
    <div>
      <Menu right>
        <div className="menu-title__container">
          <h4 className="menu-title__text">Best of 2019</h4>
          <i className="icon menu-title__icon"></i>
        </div>

        <div onClick={ (e) => goToSlide(1, e) } className={activeIndex === 1 ? 'item-active': ''}>
          <i className="icon icon-home"></i>
          <span>Home</span>
        </div>
        <div onClick={ (e) => goToSlide(2, e) } className={activeIndex === 2 ? 'item-active': ''}>
          <i className="icon icon-movies"></i>
          <span>Movies</span>
        </div>
        <div onClick={ (e) => goToSlide(3, e) } className={activeIndex === 3 ? 'item-active': ''}>
          <i className="icon icon-documentaries"></i>
          <span>Documentaries</span>
        </div>
        <div onClick={ (e) => goToSlide(4, e) } className={activeIndex === 4 ? 'item-active': ''}>
          <i className="icon icon-books"></i>
          <span>Books</span>
        </div>
        <div onClick={ (e) => goToSlide(5, e) } className={activeIndex === 5 ? 'item-active': ''}>
          <i className="icon icon-songs"></i>
          <span>Songs</span>
        </div>
        <div onClick={ (e) => goToSlide(6, e) } className={activeIndex === 6 ? 'item-active': ''}>
          <i className="icon icon-youtube"></i>
          <span>Youtube</span>
        </div>
        <div onClick={ (e) => goToSlide(7, e) } className={activeIndex === 7 ? 'item-active': ''}>
          <i className="icon icon-technical"></i>
          <span>Technical</span>
        </div>
      </Menu>
    </div>      
  );
}

export default BurgerMenu;