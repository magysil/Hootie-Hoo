import React from 'react'
import '../Styles/Footer.css';

const Footer = () => {
    return (
        <div className="containerFooter">
            <div className="footerContainer">
                <div className="containerCreators">
                    <h4>
                        Copyright© by |  
                        Magally Silva, 
                        Valeria Brito, 
                        Eliana Hidalgo. 2020
                    </h4>
                </div>
                <div className="containerIconsFooter">
                    <a target="blank" href="https://hootiehoo.cl/#/">
                        <img className="iconWeb" src="https://i.ibb.co/hWjx5Kx/pagina-web.png" alt="Web"/>
                    </a>
                    <a target="blank" href="https://www.instagram.com/hootiehoo.cl/">
                        <img className="iconInsta" src="https://i.ibb.co/dryqbKN/instagram.png" alt="Instagram"/>
                    </a>
                    <a target="blank" href="https://www.youtube.com/channel/UC0Z1Czogj0CW3S0XbRyv_0w?sub_confirmation=1">
                        <img className="iconHootieHoo" src="https://i.ibb.co/tKwkwHz/Icono-Demo-1-1.png" alt="Hootie-Hoo"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
