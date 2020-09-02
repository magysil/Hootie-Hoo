import React from "react";
import { images } from "./Images/index";



class Images extends React.Component {
  state = {
    vidas:  5,
  };
  
  characters = [];

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
      }
    }

    if (this.state.vidas === 0) {
      alert('GAME OVER');
      let reset = document.getElementsByClassName("image");
      for (let i = 0; i < reset.length; i++) {
        reset[i].classList.add("image-blank");
        reset[i].setAttribute("check", "false");
        this.characters = [];
        this.setState({ vidas: 5 });
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
      this.setState({ vidas: this.state.vidas - 1 });
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
    return (
      <div>
        <div>
            <h2>Lives: {this.state.vidas}</h2>
        </div>
        <div className="images">
          {images
           .sort() //> Math.random() - 0.5)
            .map((element) => {
              return (
                <div
                  className="image image-blank"
                  name={element.name}
                  style={{ background: `url(${element.pic})` }}
                  check="false"
                  onClick={this.handleClick}
                />
              );
            })}
        </div>
      </div>
      
    );
  }
}
export default Images;