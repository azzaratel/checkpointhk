import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Crouselll() {
  return (
    <div className='carou' >
        <Carousel>
    <Carousel.Item>
      <img
        className="imgca"
        src="https://m.media-amazon.com/images/M/MV5BYjE5ZjdmNDMtNzVkZC00YzFhLWFmNGUtOTAyODhhMmRlNjE1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
        alt="xo kitty"
      />
      <Carousel.Caption>
        <h3>Never Have i ever</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="imgca"
        src="https://resizing.flixster.com/ra1n0-jmQobKgbNivqoY2PLdhnc=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vYTFiNjhhNzItODQ5Zi00MzdjLTliZTQtODI2OTVjZTYyYTRiLmpwZw=="
       alt=" NHV"
      />

      <Carousel.Caption>
        <h3>XO, Kitty</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="imgca"
        src="https://people.com/thmb/41M4ilj6qFzyoa-Hwh8CTgi_d0A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/BRIDGERTON_105_Unit_01118RC-5fa12982ad074fb3b16ceed7744776e1.jpg"
       alt="Bridgerton"
     />

      <Carousel.Caption>
        <h3>Bridgerton</h3>
      
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel></div>
  )
}

export default Crouselll