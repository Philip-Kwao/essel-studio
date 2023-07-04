import React from 'react'
import './VideoTour.css'
import Button from '../button/Button'
// API_KEY = AIzaSyBOGLvUf0pGKeCL64OFlWnhDCCAQLcc91I

const VideoTour = () => {
  return (
    <div className='video__tour_container'>
        <div className="video__item">
        <iframe src="https://www.youtube.com/embed/XBh1Z3CyjWA" title="My New Professional Music Studio Tour 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="video__text_item">
            <h2>get a visual tour of our studio</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi repellat, eius aut voluptatum, quam culpa voluptatem vel dolorem cumque temporibus harum pariatur. Rerum minus porro ut consequuntur nostrum deserunt impedit?Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <Button title={'visit our gallery'} />
        </div>
    </div>
  )
}

export default VideoTour