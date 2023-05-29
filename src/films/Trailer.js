import React from 'react';
import { useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
function Trailer({movies}) {
    const params=useParams();
    const movie=movies.filter((el)=>el.name==params.name)[0]
    console.log(movie)
  return (
    <div style={{backgroundColor:'black'}} > 
      <h1> {movie.name} </h1>
      <iframe style={{marginLeft:'200px'}} width="1000" height="500" src={movie.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         <img style={{ width:' 511px', marginLeft:'429px'}} src={movie.posterurl}/>  
         <h5 style={{ texttransform:'lowercase', color:'red', marginleft:'500px'}} > {movie.description} </h5>
            <div style={{justifyContent:'center'}}></div>
            <div className='ratee'>
             <ReactStars     
    count={5}
    size={24}
    activeColor="pink"
    value={movie.rating}
    edit={false}
  /></div> 
    </div>
  )
}

export default Trailer