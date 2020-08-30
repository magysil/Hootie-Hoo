import React from 'react'
import '../Styles/ButtonsParents.css'
import { Link } from "react-router-dom";

const ButtonsParents = () => {
    return (
        <div className="containerButtons">
            <div className="containerColorParents">

                <div className="containerContentBtn5">
                    <div className="divHoverParents">
                        <Link className="link" to="/covidChildren">
                            <button className="btnChildrenParents">
                                <h4 className="tittleBtn">Niños</h4>
                                <img className="iconBtn" src="https://i.ibb.co/3rhYhxz/ghj.png" alt="Botón niños"/>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="containerContentBtn5">
                    <div className="divHoverParents">
                        <Link className="link" to="/covidParents">
                            <button className="btnCovidParents">
                                <h4 className="tittleBtn">Covid</h4>
                                <img className="iconBtn" src="https://i.ibb.co/HhYyrNV/covid.png" alt="Botón covid"/>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="containerContentBtn5">
                    <div className="divHoverParents">
                        <Link className="link" to="/care">
                            <button className="btnCare">
                                <h4 className="tittleBtn">Cuidados</h4>
                                <img className="iconBtn" src="https://i.ibb.co/0XZhpYC/casita.png" alt="Botón cuidados"/>
                            </button>
                        </Link>
                    </div>
                </div>
                
                <div className="containerContentBtn5">
                    <div className="divHoverParents">
                        <Link className="link" to="/guides">
                            <button className="btnGuides">
                                <h4 className="tittleBtn">Guías</h4>
                                <img className="iconBtn" src="https://i.ibb.co/5MLWDj7/libro.png" alt="Botón guías"/>
                            </button>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ButtonsParents
