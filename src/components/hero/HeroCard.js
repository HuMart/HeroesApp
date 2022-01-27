import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const imagePath = `/assets/images/${id}.jpg`

  return (
      <div className='col'>
        <div className='card'>
            <div className='row no-gutters'>
                <div className='col-md-4'>
                    <img src={imagePath} className='card-img-top' alt={superhero} />
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{superhero}</h5>
                        <p className='card-text'>{alter_ego}</p>
                        {
                            ( alter_ego !== characters ) 
                                && <p className='text-muted'>{characters}</p>
                        }
                        <Link to={`/hero/${id}`}>
                            More...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    
 );
};