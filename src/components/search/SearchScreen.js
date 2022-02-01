import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {  
  
  const navigate = useNavigate();

  const location = useLocation();

  const [ formValues, handleInputChange, reset ] = useForm({
    inputText: ''
  });

  const { inputText } = formValues;

  const heroesFiltered = getHeroesByName('');

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`?q=${ inputText }`);
  }


  return (
      <>
          <h1>Search</h1>
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
            <div className='col-7'>
              <h4>Results</h4>
              <hr />
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

      </>
  );
};
