
import React from 'react';
import './Photogallery.css';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';

const galleryImages = [
    {imageSrc:"https://picsum.photos/id/230/200",},    
    {imageSrc:"https://picsum.photos/id/231/200",},
    {imageSrc:"https://picsum.photos/id/232/200",},
    {imageSrc:"https://picsum.photos/id/233/200",},    
    {imageSrc:"https://picsum.photos/id/234/200",},
    {imageSrc:"https://picsum.photos/id/235/200",},
    {imageSrc:"https://picsum.photos/id/236/200",},
    {imageSrc:"https://picsum.photos/id/237/200",},
]

function GalleryStructs(e){
    const [modalShow, setModalShow] = useState(false)
    const [imagePreviewSrc, setImagePreviewSrc] = useState('')
    const handleClose = () => setModalShow(false);
    const handleModalShow = async(e) => {
        console.log(e.target.src);
        setImagePreviewSrc(e.target.src)
        setModalShow(true)
    }
    return(
      <>
        <section id="gallery">
            <div className='gallery-container'>
                <h1>Photo Gallery</h1>
                <Modal show={modalShow} onHide={handleClose}>                
                    <Modal.Body>
                    <Modal.Header closeButton>
                        <img src={imagePreviewSrc} alt='randomImage' />
                    </Modal.Header>
                    </Modal.Body>
                </Modal>
                <div className='gallery-box'>
                    {galleryImages.map((item) => {
                        return <div className='gallery-item'>
                            <img onClick={handleModalShow} src={item.imageSrc} alt='randomImage' />
                        </div>
                    })}
                </div>
            </div>
          </section>
      </>
    )
  }
  
  export default GalleryStructs;