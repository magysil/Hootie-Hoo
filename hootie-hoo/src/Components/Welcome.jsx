import React from 'react'
import '../Styles/Welcome.css';

const Welcome = () => {
    return (
        <div className="containerWelcome">
            <div className="welcomeContainer">
                <div className="contentContainerWelcome">
                    <div className="containerBtnAudioWelcome">
                        <button className="btnAudioWelcome">
                            <img className="imgAudio" src="https://i.ibb.co/c19pngs/Group-3.png" alt="Audio"/>
                        </button>
                    </div>
                    <div className="containerText">
                        <p className="text">
                            En este lugar, podrás encontrar herramientas de autocuidado 
                            para niñas y niños en edad escolar y sus familias, durante 
                            la contingencia sanitaria.
                            <br/><br/>
                            Este programa, está dirigido a familias con niños y/o niñas 
                            entre 4 a 8 años, con usuarios pensados en madres, padres, 
                            formadores y/o cuidadores de niños y niñas en edad escolar.
                        </p>
                    </div>
                </div>
                <div className="containerImgWelcome">
                    <img className="imgWelcome" src="https://i.ibb.co/7KsnYmj/Group-8.png" alt="Buho hootie hoo"/>
                </div>
            </div>
        </div>
    )
}

export default Welcome
