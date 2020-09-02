import React from "react";
import Game from "./Game";
import EndGame from "./EndGame";
import '../../Styles/MemoryGame.css';


class MemoryGame extends React.Component {
  state = {
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
            <div className="containerTittleMemoryGame">
              <h3 className="titleMemoryGame">Juego de Memoria</h3>
            </div>
            <div className="containerInfoGame">
              <div className="navbar">
                <div className="detractor-container"> <p className="detractor-title">Medallas</p> 
                  <p className="detractor-score">
                    {score === 1 ? <img src="https://i.ibb.co/P6J5Fj4/dddd.png" alt="Medal" className="medal-score"/> : null}
                    {score === 2 ? <img src="https://i.ibb.co/6WQng8x/Group-11.png" alt="Medal" className="medal-score"/> : null}
                    {score === 3 ? <img src="https://i.ibb.co/TrS9kG2/Group-111.png" alt="Medal" className="medal-score"/> : null}
                    {score === 4 ? <img src="https://i.ibb.co/5K0DCMV/Group-1111.png" alt="Medal" className="medal-score"/> : null}
                    {score === 5 ? <img src="https://i.ibb.co/P4bJPZH/Group-11111.png" alt="Medal" className="medal-score"/> : null}
                    {score >= 6 ? <img src="https://i.ibb.co/sFnLZ7S/Group-111111.png" alt="Medal" className="medal-score"/> : null}
                  </p>
                </div>
              </div>

              <div className="containerModalGame">
                {showEndGame ? <EndGame newGame={this.handleEndGame} /> : null}
                <Game endGame={this.handleEndGame} />
              </div>
            </div>
            <div className="containerImgMemoryGame">
                <img className="imgMemoryGame" src="https://i.ibb.co/vk3qPYn/ni-os.png" alt=""/>
              </div>
        </div>
      </div>
    );
  }
}

export default MemoryGame;