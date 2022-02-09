import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {  

  
  
  const navigate = useNavigate();

  const location = useLocation();

  // const queryString = require('query-string');

  const { q = '' } = queryString.parse(location.search);


  const [ formValues, handleInputChange ] = useForm({
    inputText: q,
  });

  const { inputText } = formValues;

  const heroesFiltered = useMemo( () => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`?q=${ inputText }`);
  }


  return (
      <div className='card bg-transparent animate__animated animate__fadeIn'>
        <img src='https://www.animatedtimes.com/wp-content/uploads/2020/01/Marvel-Vs-Dc-Movies-Research-Winner.jpg' alt='' />
        <div className="container-fluid card-img-overlay">
          <h1 className='text-white'>Search</h1>
          <hr />
          <div className='row'>
            <div className='col-5'>
              <form onSubmit={ handleSearch }>
                <input
                  type="text"
                  placeholder="Search your Hero"
                  className="form-control"
                  name="inputText"
                  autoComplete="off"
                  value={ inputText }
                  onChange={ handleInputChange }
                >
                </input>

                <button
                  className='btn btn-primary mt-1'
                  type='submit'
                  onClick={ handleSearch }
                >
                  Submit...
                </button>

              </form>
            </div>
            <div className='col-7 text-white'>
              <h4>Results</h4>
              <hr />

              {
                (q === '')
                  ? <div className='alert alert-info animate__animated animate__flash'>Search a Hero by Name</div>
                  : ( heroesFiltered.length === 0 )
                    && <div className='alert alert-danger animate__animated animate__flash'>There isn't a hero with {q} name</div>
              }

              {
                heroesFiltered.map(hero => (
                  <HeroCard 
                    key={hero.id}
                    {...hero}
                  />
                ))
              }
            </div>
          </div>

        </div>
          
      </div>
  );
};
