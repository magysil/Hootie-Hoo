import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '../Styles/Guides.css';
import Relations from '../Assets/guia-cuidando-las-relaciones.png';
import Covid from '../Assets/guia-que-es-el-covid.png';
import WhatsHappening from '../Assets/guia-que-esta-pasando.png';
import TalkingWithKids from '../Assets/guia-hablando-con-los-mas-pequenos-UNICEF.png';
import WhatParentsShouldKnow from '../Assets/guia-lo-que-padres-deben-saber-UNICEF.png';
import LifeUnicef from '../Assets/guia-rearmemos-la-vida-UNICEF.png';
import TipsForHome from '../Assets/guia-tips-psicologicos-para-estar-en-casa.png';
import PdfRelations from '../Downloadables/HH_GanemosleAlVirus_PDF_M2_T1_cuidando_relaciones.pdf';
import PdfCovid from '../Downloadables/HH_GanemosleAlVirus_PDF_M1_T2_que_es_covid.pdf';
import PdfWhatsHappening from '../Downloadables/HH_GanemosleAlVirus_PDF_M1_T1_que_esta_pasando.pdf';
import PdfTalkingWithKids from '../Downloadables/guia-hablando-con-los-pequeños-UNICEF.pdf';
import PdfWhatParentsShouldKnow from '../Downloadables/guia-lo-que-padres-deben-saber-UNICEF.pdf';
import PdfLifeUnicef from '../Downloadables/guia-rearmemos-la-vida-UNICEF.pdf';
import PdfTipsForHome from '../Downloadables/guia-tips-psicológicos-para-estar-en-casa.pdf';

const Guides = () => {
    return (
        <div className="guideContainer">
            <div className="contentGuideContainer">

                <div>
                    <h1 className="tittleContent">Guías descargables</h1>
                </div>        

             <Splide
                options={
                    {
                        type: 'loop',
                        gap          : '1rem',
                        autoplay     : true,
                        interval: 8000,
					    resetProgress: false,
                        arrows       : 'slider',
                        perPage: 2,
                        focus: 'center',
                    }
                }
                hasSliderWrapper
                hasAutoplayProgress
				>   
                <SplideSlide>
                    <div className="carousel-img-guide">
                        <a href={PdfWhatsHappening} download="HH_GanemosleAlVirus_PDF_M1_T1_que_esta_pasando.pdf"><img width={600} src={WhatsHappening} alt=""/></a>                   
                    </div>
               </SplideSlide>
               
               <SplideSlide>
                    <div className="carousel-img-guide">
                        <a href={PdfCovid} download="HH_GanemosleAlVirus_PDF_M1_T2_que_es_covid.pdf"><img width={600} src={Covid} alt=""/></a>                      
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="carousel-img-guide">
                       <a href={PdfRelations} download="HH_GanemosleAlVirus_PDF_M2_T1_cuidando_relaciones.pdf"><img width={600} src={Relations} alt=""/></a>
                    </div>
                </SplideSlide>     

                
                <SplideSlide>
                    <div className="carousel-img-guide">
                       <a href={PdfTalkingWithKids} download="guia-hablando-con-los-pequeños-UNICEF.pdf"><img width={600} src={TalkingWithKids} alt=""/></a>
                    </div>
                </SplideSlide> 

                <SplideSlide>
                    <div className="carousel-img-guide">
                       <a href={PdfWhatParentsShouldKnow} download="guia-lo-que-padres-deben-saber-UNICEF.pdf"><img width={600} src={WhatParentsShouldKnow} alt=""/></a>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="carousel-img-guide">
                       <a href={PdfLifeUnicef} download="guia-rearmemos-la-vida-UNICEF.pdf"><img width={600} src={LifeUnicef} alt=""/></a>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="carousel-img-guide">
                       <a href={PdfTipsForHome} download="guia-tips-psicológicos-para-estar-en-casa.pdf"><img width={600} src={TipsForHome} alt=""/></a>
                    </div>
                </SplideSlide>
                                           
              </Splide>                 
            </div>
        </div>
    );
}

export default Guides;
