import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../CSS/Carosoul.css'


const Carosoul = () => {
  return (
   <>
     <Carousel className='main' pre>
      <Carousel.Item >
    
        <div style={{display:'flex'}} className='fl-1'>
        <div>
          <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="First slide"
          style={{height:"45vh"}}
        /></div>


            <div> <img
          className="d-block w-100"
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="Second slide"   style={{height:"45vh"}}
        /></div>


            <div> <img
          className="d-block w-100"
          src="https://www.w3schools.com/w3css/img_lights.jpg"
          alt="Third slide"  style={{height:"45vh"}}
        /></div>
        </div>

        
      </Carousel.Item>
     
    
    <Carousel.Item >
    
    <div style={{display:'flex'}} className='fl-1' >
    <div>
      <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      alt="First slide"
      style={{height:"45vh"}}
    /></div>


        <div> <img
      className="d-block w-100"
      src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
      alt="Second slide"   style={{height:"45vh"}}
    /></div>


        <div> <img
      className="d-block w-100"
      src="https://www.w3schools.com/w3css/img_lights.jpg"
      alt="Third slide"  style={{height:"45vh"}}
    /></div>
    </div>

    
  </Carousel.Item>



    </Carousel>
   </>
  )
}

export default Carosoul