import React from 'react'
import '../Styles/Buttons.css';
import { Link } from "react-router-dom";

const Buttons = () => {
    return (      
        <div className="containerButtons">
            <div className="containerColor">

                <div className="containerContentBtn3">
                    <div className="divHover">
                        <Link className="link" to="/covidChildren">
                            <button className="btnChildren">
                                <h4 className="tittleBtn1">Niños</h4>
                                <img className="iconBtn1" src="https://i.ibb.co/3rhYhxz/ghj.png" alt="Botón Niños"/>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="containerContentBtn2">
                    <div className="divHover1">
                        <Link className="link" to="/covid">
                            <button className="btnCovid">
                                <h4 className="tittleBtn1">Covid</h4>
                                <img className="iconBtn1" src="https://i.ibb.co/HhYyrNV/covid.png" alt="Botón covid"/>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="containerContentBtn3">
                    <div className="divHover">
                        <Link className="link" to="/covidParents">
                            <button className="btnParents">
                                <h4 className="tittleBtn1">Cuidadores</h4>
                                <img className="iconBtn1" src="https://i.ibb.co/NjvXm8Y/Group-9.png" alt="Botón Padres"/>
                            </button>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Buttons
