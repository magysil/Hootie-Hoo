import React from 'react'
import '../Styles/Buttons.css';
import { Link } from "react-router-dom";

const Buttons = () => {
    return (      
        <div className="containerButtons">
            <div className="containerBtns">
                <div className="containerAllBtn">
                    <Link className="link" to="/games">
                        <button className="btnGames">
                            <h4 className="tittleBtn">Juegos</h4>
                            <img className="iconBtn" src="https://i.ibb.co/xSkf8dW/puzzle.png" alt="Botón juegos"/>
                        </button>
                    </Link>
                </div>
                <div className="containerAllBtn">
                    <Link className="link" to="/videos">
                        <button className="btnVideos">
                            <h4 className="tittleBtn">Videos</h4>
                            <img className="iconBtn" src="https://i.ibb.co/1zPFZX0/video-camara.png" alt="Botón videos"/>
                        </button>
                    </Link>
                </div>
                <div className="containerAllBtn">
                    <Link className="link" to="/covid">
                        <button className="btnCovid">
                            <h4 className="tittleBtn">Covid</h4>
                            <img className="iconBtn" src="https://i.ibb.co/HhYyrNV/covid.png" alt="Botón covid"/>
                        </button>
                    </Link>
                </div>
                <div className="containerAllBtn">
                    <Link className="link" to="/care">
                        <button className="btnCare">
                            <h4 className="tittleBtn">Cuidados</h4>
                            <img className="iconBtn" src="https://i.ibb.co/0XZhpYC/casita.png" alt="Botón cuidados"/>
                        </button>
                    </Link>
                </div>
                <div className="containerAllBtn">
                    <Link className="link" to="/guides">
                        <button className="btnGuides">
                            <h4 className="tittleBtn">Guías</h4>
                            <img className="iconBtn" src="https://i.ibb.co/5MLWDj7/libro.png" alt="Botón guías"/>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Buttons
