import React from "react";
import { images } from "./Images/index";



class Images extends React.Component {
    
  characters = [];
  // vidas = 6;
  state = {
    vidas: 6,
  }
  
  handleClick = (event) => {

    let character = event.target;
    if (character.getAttribute("check") === "found") {
      return;
    }
    if (character !== this.characters[0]) {
      this.switch(character);
      this.characters.push(character);
    } else {
      this.switch(character);
      this.characters = [];
      
    }

    if (this.characters.length > 2) {
      if (!this.checkName(this.characters[0], this.characters[1])) {
        this.switch(this.characters[0]);
        this.switch(this.characters[1]);
        this.characters.shift();
        this.characters.shift();
      } else {
        this.characters.shift();
        this.characters.shift();
      }
    }
    let allPictures = document.getElementsByClassName("image-blank");
      if (allPictures.length < 1) {
      this.props.endGame(true);
      let reset = document.getElementsByClassName("image");
      for (let i = 0; i < reset.length; i++) {
        reset[i].classList.add("image-blank");
        reset[i].setAttribute("check", "false");
        this.characters = [];
        this.state.vidas = 6 
      }
    }

    if (this.state.vidas === 0) {
      alert('GAME OVER');
      let reset = document.getElementsByClassName("image");
      for (let i = 0; i < reset.length; i++) {
        reset[i].classList.add("image-blank");
        reset[i].setAttribute("check", "false");
        this.characters = [];
        // this.vidas = 6;
        this.state.vidas = 6 
      }
    }
  };
 
 /*  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.vidas === nextState.vidas) {
      return false;
    } else {
      return true;
    }
  } */

  

  checkName = (character1, character2) => {
    
    if (character1.getAttribute("name") === character2.getAttribute("name")) {
      character1.setAttribute("check", "found");
      character2.setAttribute("check", "found");
      return true;
    }else {
      // this.vidas = this.vidas -1
      this.setState({ vidas : this.state.vidas -1}) 
      console.log(`Te quedan ${this.state.vidas} Vidas`);
    }
    return false;
  };

  switch = (target) => {
    if (target.getAttribute("check") === "true") {
      target.setAttribute("check", "false");
      target.classList.add("image-blank");
    } else {
      target.setAttribute("check", "true");
      target.classList.remove("image-blank");
    }
  };

  
  render() {
    const {vidas}  = this.state;
    return (
      <div className="lala">    
        <div className="images">
          {images
            .sort()
            .map((element, index) => {
              return (
                <div
                  className="image image-blank"
                  name={element.name}
                  style={{ background: `url(${element.pic})` }}
                  check="false"
                  onClick={this.handleClick}
                  key = {index}
                />
              );
            })}
        </div>

        <div className="navbar">
          <div className="detractor-container"> 
            <p className="detractor-title">Vidas</p> 
            <p className="detractor-score">
              {vidas === 0 ? <img src="https://i.ibb.co/C0c7YBr/corazon.png" alt="Medal" className="medal-score"/> : null}
              {vidas === 1 ? <img src="https://i.ibb.co/2jt7HKw/1corazon.png" alt="Corazón" className="medal-score"/> : null}
              {vidas === 2 ? <img src="https://i.ibb.co/1rRKtfR/2corazon.png" alt="Corazón" className="medal-score"/> : null}
              {vidas === 3 ? <img src="https://i.ibb.co/FYB9v9V/3corazon.png" alt="Corazón" className="medal-score"/> : null}
              {vidas === 4 ? <img src="https://i.ibb.co/hFc2G0R/4corazon.png" alt="Corazón" className="medal-score"/> : null}
              {vidas === 5 ? <img src="https://i.ibb.co/GPKqThC/5corazon.png" alt="Corazón" className="medal-score"/> : null}
              {vidas === 6 ? <img src="https://i.ibb.co/9v0KcY1/6corazon.png" alt="Corazón" className="medal-score"/> : null}
            </p>
          </div>
        </div>
      </div>
      
    );
  }
}
export default Images;