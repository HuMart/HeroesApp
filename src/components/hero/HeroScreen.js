import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroesById';


export const HeroScreen = () => {

  const { heroId } = useParams();

  const hero = getHeroesById(heroId);
  
  if( !hero ) {
    return <Navigate to="/" />
  }

  return (
    
    <div>
      <h1>{ hero.superhero }</h1>
      <hr/>
      
    </div>

  );
};
