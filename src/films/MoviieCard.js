import React from 'react'
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";

function MoviieCard({el}) {
  return (
    <div className='container-cards'>
      
    <Card style={{ width: '18rem', margin: '80px' ,}}>
      <Card.Img variant="top" src= {el.posterurl} />
      <Card.Body>
        <Card.Title>   {el.name} </Card.Title>
        <Card.Text>
        {el.description}
        </Card.Text>
        <ReactStars
    count={5}
    size={24}
    activeColor="pink"
    value={el.rating}
    edit={ false }
  />
      </Card.Body>
    </Card>

    </div>
  )
}

export default MoviieCard