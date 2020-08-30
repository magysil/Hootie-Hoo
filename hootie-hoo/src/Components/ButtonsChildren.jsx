import React from 'react'
import '../Styles/ButtonsChildren.css'
import { Link } from "react-router-dom";

const ButtonsChildren = () => {
    return (
        <div className="containerButtons">
            <div className="containerColorChildren">

                <div className="containerContentBtn4">
                    <div className="divHoverChildren">
                        <Link className="link" to="/games">
                            <button className="btnGames">
                                <h4 className="tittleBtn">Juegos</h4>
                                <img className="iconBtn" src="https://i.ibb.co/xSkf8dW/puzzle.png" alt="Botón juegos"/>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="containerContentBtn4">
                    <div className="divHoverChildren">
                        <Link className="link" to="/videos">
                            <button className="btnVideos">
                                <h4 className="tittleBtn">Videos</h4>
                                <img className="iconBtn" src="https://i.ibb.co/1zPFZX0/video-camara.png" alt="Botón videos"/>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="containerContentBtn4">
                    <div className="divHoverChildren">
                        <Link className="link" to="/covidChildren">
                            <button className="btnCovidChildren">
                                <h4 className="tittleBtn">Covid</h4>
                                <img className="iconBtn" src="https://i.ibb.co/HhYyrNV/covid.png" alt="Botón covid"/>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="containerContentBtn4">
                    <div className="divHoverChildren">
                        <Link className="link" to="/covidParents">
                            <button className="btnParentsChildren">
                                <h4 className="tittleBtn">Cuidadores</h4>
                                <img className="iconBtn" src="https://i.ibb.co/NjvXm8Y/Group-9.png" alt="Botón Padres"/>
                            </button>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ButtonsChildren
