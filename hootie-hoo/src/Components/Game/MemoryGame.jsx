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

  handleEndGame = (boolean) => {
    if (boolean) {
      this.setState({ showEndGame: boolean, score: this.state.score + 1 });
    } else {
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
                <p className="detractor-score">
                  {score === 1 ? <img src="https://i.ibb.co/bHZ3mHY/dddd.png" alt="Medal" className="medal-score"/> : null}
                  {score === 2 ? <img src="https://i.ibb.co/kX5jM64/Group-11.png" alt="Medal" className="medal2-score"/> : null}
                  {score === 3 ? <img src="https://i.ibb.co/d6f2y1G/Group-111.png" alt="Medal" className="medal3-score"/> : null}
                  {score === 4 ? <img src="https://i.ibb.co/5K0DCMV/Group-1111.png" alt="Medal" className="medal4-score"/> : null}
                  {score === 5 ? <img src="https://i.ibb.co/P4bJPZH/Group-11111.png" alt="Medal" className="medal5-score"/> : null}
                  {score >= 6 ? <img src="https://i.ibb.co/sFnLZ7S/Group-111111.png" alt="Medal" className="medal6-score"/> : null}
                </p>
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