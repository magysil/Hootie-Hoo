import React, {useState}from 'react'
import Modal from 'react-bootstrap/Modal'
import '../Styles/Care.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Thoughts from '../Assets/infografia-pensamientos3.JPG';
import Handwashing from '../Assets/infografia-lavado.jpg';
import Together from '../Assets/infografia-juntos-contra-el-virus2.png';
import whereWashHands from '../Assets/infografiaLavaTusManos.png';
import Symptoms from '../Assets/Sintomas.png';

const Care = () => {
    const [lgThoughts, setlgThoughts] = useState(false);
    const [lgHandwashing, setlgHandwashing] = useState(false);
    const [lgwhereWashHands, setlgwhereWashHands] = useState(false);
    const [lgTogether, setlgTogether] = useState(false);
    const [lgSymptoms, setlgSymptoms] = useState(false);
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
                    <img className="imgCares" width={350} height={500} alt="Cuida tus pensamientos" src={Thoughts} onClick={() => setlgThoughts(true)}/>
                    <Modal
                        size="lg"
                        show={lgThoughts}
                        onHide={() => setlgThoughts(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Cuidemos nuestros pensamientos
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='rounded mx-auto d-block'>
                            <img className="imgModalCare" width={450} height={600} alt="Cuida tus pensamientos" src={Thoughts}/>
                        </Modal.Body>
                    </Modal>
                </SplideSlide>

                <SplideSlide>
                    <img className="imgCares" width={350} height={500} alt="Lavado de manos" src={Handwashing} onClick={() => setlgHandwashing(true)}/>
                    <Modal
                        size="lg"
                        show={lgHandwashing}
                        onHide={() => setlgHandwashing(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Pasos para lavar las manos
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='rounded mx-auto d-block'>
                            <img className="imgModalCare" width={450} height={600} alt="Lavado de manos" src={Handwashing}/>
                        </Modal.Body>
                    </Modal>
                </SplideSlide>

                <SplideSlide>
                    <img className="imgCares" width={350} height={500} alt="Cuando lavar las manos" src={whereWashHands} onClick={() => setlgwhereWashHands(true)}/>
                    <Modal
                        size="lg"
                        show={lgwhereWashHands}
                        onHide={() => setlgwhereWashHands(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Cuando lavarse las manos 
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='rounded mx-auto d-block'>
                            <img className="imgModalCare" width={450} height={600} alt="Cuando lavar las manos" src={whereWashHands}/>
                        </Modal.Body>
                    </Modal>  
               </SplideSlide> 

                 <SplideSlide>                      
                    <img className="imgCares" width={350} height={500}  src={Together} alt="Todos juntos contra el virus" onClick={() => setlgTogether(true)}/>
                    <Modal
                        size="lg"
                        show={lgTogether}
                        onHide={() => setlgTogether(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Juntos Contra el Virus
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='rounded mx-auto d-block'>
                            <img className="imgModalCare" width={450} height={600} alt="Todos juntos contra el virus" src={Together}/>
                        </Modal.Body>
                    </Modal>           
                </SplideSlide>  

                <SplideSlide>
                    <img className="imgCares" width={350} height={500} alt="Síntomas del COVID" src={Symptoms} onClick={() => setlgSymptoms(true)}/>
                    <Modal
                        size="lg"
                        show={lgSymptoms}
                        onHide={() => setlgSymptoms(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Sintomas
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='rounded mx-auto d-block'>
                            <img className="imgModalCare" width={450} height={600} alt="Síntomas del COVID" src={Symptoms}/>
                        </Modal.Body>
                    </Modal>
                </SplideSlide> 

              </Splide>
                            
            </div>
        </div>
        
    );
}


export default Care;
