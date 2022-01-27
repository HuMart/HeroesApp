import React from 'react';
import { useParams } from 'react-router-dom';


export const HeroScreen = () => {

  const { heroId } = useParams();
  console.log(heroId);

  return (
    <div>
        <h1>
            Hero Screen
        </h1>
    </div>
  );
};
