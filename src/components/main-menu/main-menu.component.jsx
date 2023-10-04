import React from 'react';
import CategoryAccordian from '../accordian/accordian.component';
import './main-menu.styles.scss';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export const MainMenu = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [category, setCategory] = useState('General')
  
    return (
        <div className='main-menu' style={{ textAlign: 'center' }}>
            <div className='accordian-container'>
                <CategoryAccordian setCategory = {setCategory} showModal = {handleShow} text='Music' subcategories = {['All Music', 'Hip-Hop', 'Country', 'Classic Rock', 'Pop']}/>
                
            </div>
         

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Begin Round</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you wanto to start {category} </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>


        </div>
    )
}