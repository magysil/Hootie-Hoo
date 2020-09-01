import React from "react";
import Game from "./Game";
import EndGame from "./EndGame";
import '../../Styles/MemoryGame.css';


class MemoryGame extends React.Component {
  state = {
    showLogin: true,
    showEndGame: false,
    name: "",
    score: 0,
    };

  handleLogin = (name, boolean) => {
    this.setState({ name: name, showLogin: boolean });
  };

  handleEndGame = (boolean) => {
    if (boolean) {
      this.setState({ showEndGame: boolean, score: this.state.score + 1 });
    } 
    else {
      this.setState({ showEndGame: boolean });
    }
  };

  
  render() {
    const { score, showEndGame } = this.state;
    return (

      <div className="containerMemoryGames">
        <div className="memoryGamesContainer">
            <div className="container">
              <h3>Contenedor MemoryGamesContainer</h3>
            </div>
            <div className="containerInfoGame">
              <div className="navbar">
                <div className="detractor-container"> <p className="detractor-title">Vidas</p> 
                </div>
                <div className="detractor-container"> <p className="detractor-title">Medallas</p> 
                <p className="detractor-score">{score} {score !== 0 ? <img src="https://i.ibb.co/bHZ3mHY/dddd.png" alt="Medal" className="medal-score"/> : null}</p>
                </div>
              </div>

              <div>
                {showEndGame ? <EndGame newGame={this.handleEndGame} /> : null}
                <Game endGame={this.handleEndGame} />
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default MemoryGame;