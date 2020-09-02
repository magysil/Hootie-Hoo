import React, {useState}from 'react'
import Modal from 'react-bootstrap/Modal'

const Modal = () =>{
    const [lgModal, setlModal] = useState(false);
    return (
        <Modal
        size="lg"
        show={lgModal}
        onHide={() => setlModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
    >
        <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
            Cuidemos nuestros pensamientos
        </Modal.Title>
        </Modal.Header>
        <Modal.Body className='rounded mx-auto d-block'>
            <p>Game Over</p>
           {/*  <img className="imgModalCare" width={450} height={600} alt="Cuida tus pensamientos" src={Thoughts}/> */}
        </Modal.Body>
    </Modal>

    )
}
export default Modal;