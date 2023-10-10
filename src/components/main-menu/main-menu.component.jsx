import React from 'react';
import CategoryAccordian from '../accordian/accordian.component';
import './main-menu.styles.scss';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";



export const MainMenu = () => {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = (category) => {
        setShow(false);
        if (category.length>1){
            navigate(category.toLowerCase().replace(' ','_'))

        }
    }
    const handleShow = () => setShow(true);
    const [category, setCategory] = useState('General')
  
    return (
        <div className='main-menu' style={{ textAlign: 'center' }}>
            <div className='accordian-container' style={{marginTop:'8px'}}>
                <CategoryAccordian setCategory = {setCategory} showModal = {handleShow} text='Music' subcategories = {['All Music', 'Hip-Hop', 'Country', 'Classic Rock', 'Pop']}/>
                
            </div>
         

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>  Category: <span style ={{color:'#0e6efd'}}>{category}</span> </Modal.Title>
        </Modal.Header>
        <Modal.Body>Press Continue to start.   </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleClose(category)}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>


        </div>
    )
}