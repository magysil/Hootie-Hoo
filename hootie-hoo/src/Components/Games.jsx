import React from 'react'
import '../Styles/Games.css';
const Games = () => {
    return (
        <div className="containerGames">
            <div className="gamesContainer">
                <div className="contentContainerGames">
                    <div className="container ">
                        <div className="row justify-content-between">
                            <div className="col">
                            <div className="containerImgGamesRed">
                                    <button className="col btnAudioGames">
                                        <img className="imgAudio" src="https://i.ibb.co/c19pngs/Group-3.png" alt="Audio"/>
                                    </button>
                                    <p className="text text-justify">
                                                La memoria es esencial para el aprendizaje, las habilidades 
                                                comunicativas y sociales de los niños. 
                                                <br/><br/>
                                                Pon a prueba tus habilidades con nuestro juego de memoria. 
                                                Encuentra las parejas de todas las tarjetas en el menor 
                                                número de movimientos posible.
                                    </p>
                            </div>
                            </div>
                            <div className="col">
                                <div className="containerText">
                                    <div className='row '>
                                         
                                        <h3 className='col text-center'>Juguemos</h3>
                                </div>
                                    <img className="imgCenterGames" src="https://i.ibb.co/FnqY3PG/imgGames.png" alt="imgGames" alt="Buho hootie hoo"/>
                                </div>
                            </div>
                                <div className="col">
                                    <div className="containerImgGames">
                                    <button className="col btnAudioGames">
                                        <img className="imgAudio" src="https://i.ibb.co/c19pngs/Group-3.png" alt="Audio"/>
                                     </button>
                                    <p className="text text-justify">
                                        Sube de nivel y aumentan los personajes, asi como los premios 
                                        que puedes ganar: imagenes de nuestros personajes del escuadrón 
                                        prevención y entretenidos cuentos para afianzar tus conocimientos 
                                        sobre como ganarle al virus y mantenerte sano y feliz. 
                                    </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}


export default Games
