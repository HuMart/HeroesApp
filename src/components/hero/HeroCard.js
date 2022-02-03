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
    <div class="card  border-0 bg-transparent text-black animate__animated animate__fadeIn">
        <img src={imagePath} className='card-img shadow-lg' alt={superhero} />
        <div className=" card-img-overlay ">
            <h5 className='card-title '>{superhero}</h5>
                <p className='card-text fw-bold'>{alter_ego}</p>
                        {
                            ( alter_ego !== characters ) 
                                && <p className='text-muted'>{characters}</p>
                        }
                <div className='col-md-8'>
                    <div className='card-body'>
                        
                        
                        <Link 
                            to={`/hero/${id}`}
                            className='text-black fw-bold'
                        >
                            More...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      
    
 );
};
