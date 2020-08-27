import React from 'react'
import PropTypes from 'prop-types'
import '../Styles/Care.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Thoughts from '../Assets/infografia-pensamientos3.JPG';
import Handwashing from '../Assets/infografia-lavado.jpg';
import Together from '../Assets/infografia-juntos-contra-el-virus2.png';
import whereWashHands from '../Assets/infografiaLavaTusManos.png';
import Symptoms from '../Assets/Sintomas.png';

const Care = () => {
    return (
        <div className="careContainer">
            <div className="contentCareContainer">

                <div>
                    <h1 className="tittleContent">Cuidados en casa</h1>
                </div>        

             <Splide
                options={
                    {
                        type: 'loop',
                        gap          : '1rem',
                        autoplay     : true,
                        interval: 10000,
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
                    <div className="carousel-img-care">
                       <a href={Thoughts}><img width={350} height={500} src={Thoughts} alt=""/></a>;
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="carousel-img-care">
                      <a href={Handwashing}><img width={350} height={500} src={Handwashing} alt=""/></a>                       
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="carousel-img-care">                   
                      <a href={whereWashHands}><img width={350} height={500} src={whereWashHands} alt=""/></a>                      
                    </div>
               </SplideSlide> 

                 <SplideSlide>                    
                    <div className="carousel-img-care">
                       <a href={Together}><img width={350} height={500}  src={Together} alt=""/></a>;                         
                    </div>             
                </SplideSlide> 

                <SplideSlide>
                    <div className="carousel-img-care">
                      <a href={Symptoms}><img width={350} height={500} src={Symptoms} alt=""/></a>                       
                    </div>
                </SplideSlide>                 
              </Splide>                 
            </div>
        </div>
    );
}


export default Care;
