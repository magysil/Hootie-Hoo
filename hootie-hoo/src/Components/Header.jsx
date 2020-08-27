import React from 'react'
import '../Styles/Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="containerHeader">
            <div className="containerImgHeader">
                <Link to="/" className="link">
                    <img className="imgHeader" src="https://i.ibb.co/Jk6Zgrk/02-Imagotipo-Sin-texto-auxiliar.png" alt="LogoHootieHoo"/>
                </Link>
            </div>
        </div>
    )
}

export default Header
