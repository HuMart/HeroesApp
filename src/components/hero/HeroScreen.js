import React, { useMemo } from 'react';
import {  Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroesById';


export const HeroScreen = () => {

  const { heroId } = useParams();

  const navigate = useNavigate()

  const hero = useMemo( () => getHeroesById(heroId), [heroId] ); // this is very important to don' be calling the function everytime the state is changed

  const handleReturn = () => {
    navigate(-1, {
      replace: true
    })
  }
  
  if( !hero ) {
    return <Navigate to="/" />
  }


  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters

  } = hero;

  const imagePath =  `/assets/images/${id}.jpg`;

  return (
    
    <div className='row mt-5shadow-sm p-3 mb-5 bg-white rounded'>
      <div className='col-4 '>
        <img 
          src={ imagePath } 
          alt={ superhero }
          className='shadow-sm p-0 mb-5 bg-white rounded img-thumbnail animate__animated animate__rollIn'
        />
      </div>
      <div className='col-8'>
        <h3 className='card-title'>{ superhero }</h3>  
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter Ego: </b>{ alter_ego}</li>
          <li className='list-group-item'><b>Publisher: </b>{ publisher}</li>
          <li className='list-group-item'><b>First Appearence: </b>{ first_appearance}</li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{ characters }</p>

        <button 
          className='btn btn-outline-info'
          onClick={handleReturn}
        >Return</button>
      </div>

      
      
    </div>

  );
};
