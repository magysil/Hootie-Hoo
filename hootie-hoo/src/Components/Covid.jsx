import React, { useState, useEffect } from "react";
import '../Styles/Covid.css';
import Audio2 from '../Audios/2.mp3'

const useAudio = () => {
    const [audio] = useState(new Audio(Audio2));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing, audio]
    )
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, [audio])
  
    return [playing, toggle];
}

const Covid = () => {
    const [playing, toggle] = useAudio(Audio2);

    return (
        <div className="containerCovid">
            <div className="covidContainer">
                <div>
                    <h3 className="tittleCovid">Covid</h3>
                </div>
                <div className="containerContentCovid">
                    <div className="containerImgCovidRed">
                        <img className="imgCovidRed" src="https://i.ibb.co/87Dv26n/Group-12.png" alt="Buho hootie hoo"/>
                    </div>

                    <div className="paddingCovid">
                        <div className="hoverBtnAudioWelcome">
                            <button onClick={toggle} className="btnAudio">
                                {playing ?
                                    <img className="imgAudio" src="https://i.ibb.co/F3dRg0X/Group-10-copiaa.png" alt="Audio"/> : 
                                    <img className="imgAudio" src="https://i.ibb.co/gPX08Lp/Group-10.png" alt="Audio"/>
                                }
                            </button> 
                        </div>
                        <div className="containerTextCovid">
                            <p className="text text-justify">
                                Según la Organización Mundial de la Salud (OMS), el conavirus 
                                es un virus que puede  causar enfermedades respiratorias, el 
                                cual, puede ser muy leve e incluso asintomático; pero, también,  
                                puede llegar a generar graves  consecuencias e incluso muerte.
                                <br/><br/>
                                Dada esta situación, las autoridades a nivel mundial han dado 
                                algunas recomendaciones generales relacionadas con resguardos 
                                higiénicos (lavado de manos, sanitización de espacios, entre otros) 
                                como también físicos (distanciamiento social, confinamiento, 
                                entre otros). 
                            </p>
                        </div>
                    </div>

                    <div className="containerImgCovid">
                        <img className="imgCovid" src="https://i.ibb.co/3FVDvZq/Group-13.png" alt="Buho hootie hoo"/>
                    </div>
                </div>
            </div>
        </div>        
    )
}


export default Covid
