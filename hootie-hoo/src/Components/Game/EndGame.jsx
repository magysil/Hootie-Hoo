import React from "react";
import { messages } from "./messages";

class EndGame extends React.Component {
  handleClick = () => {
    this.props.newGame(false);
  };
  render() {
    messages.sort(() => Math.random() - 0.5);
    return (
      <div className="end-game">
        <div className="message">
          <h2>{messages[0].title}</h2>
          <p>{messages[0].message}</p>
          <a href={messages[0].href}  download={messages[0].download}>
            <button className="btn btn-primaryy btn-download">
              Descargar
              <img className="iconBtnModal" src="https://i.ibb.co/NFfs27n/Group.png" alt=""/>
            </button>
          </a> 
          <button className="btn btn-primary" onClick={this.handleClick}>
            Siguiente Nivel
            <img className="iconBtnModal" src="https://i.ibb.co/KFQCFnx/jam-arrow-square-right.png" alt=""/>
          </button>
        </div>
      </div>
    );
  }
}

export default EndGame;