import React from 'react'
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

function MoviieCard({el}) {
  return (
    <div className='container-cards'>
      < Link style={{textDecoration:"none", color:"black"}} to={`/trailer/${el.name}`}>
    <Card style={{ width: '18rem', margin: '30px' , height:'530px'}}>
      
      <Card.Img  className='immg' variant="top" src= {el.posterurl} />
      <Card.Body>
        <Card.Title>   {el.name} </Card.Title>
        <Card.Text className='texxt'>{el.description}</Card.Text>
        <ReactStars
    count={5}
    size={24}
    activeColor="pink"
    value={el.rating}
    edit={ false }
  />
      </Card.Body>
    </Card> 
    </Link>

    </div>
  )
}

export default MoviieCard