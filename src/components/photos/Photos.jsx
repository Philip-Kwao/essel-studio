import React from 'react'
import './Photos.css'
import LightGallery from 'lightgallery/react';
import imageData from './photo'

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Photos = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
  return (
    <div className='photos__container'>
        <h1>our gallery</h1>
        <div className='img__items'>
        <LightGallery className='img__item'
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                {imageData.map((image)=>(
                        <a href={image}>
                            {/* {console.log(image)} */}
                            <img className='photo__image' alt="img1" src={image} />
                        </a>
                ))}
            </LightGallery>
                </div>
    </div>
  )
}

export default Photos