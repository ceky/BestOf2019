import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu'

class BurgerMenu extends Component {

  goToSlide = (index) => {
    const element = document.getElementsByClassName("bm-overlay")[0];
    element.click();
    window.fullpageApi.moveTo(index);
  }  

  render() {
    return (
      <Menu >
        <div onClick={ (e) => this.goToSlide(1, e) }>Home</div>
        <div onClick={ (e) => this.goToSlide(2, e) }>Movies</div>
        <div onClick={ (e) => this.goToSlide(3, e) }>Documentaries</div>
        <div onClick={ (e) => this.goToSlide(4, e) }>Books</div>
        <div onClick={ (e) => this.goToSlide(5, e) }>Songs</div>
        <div onClick={ (e) => this.goToSlide(6, e) }>Youtube</div>
        <div onClick={ (e) => this.goToSlide(7, e) }>Technical</div>
      </Menu>
    );
  }
}

export default BurgerMenu;