import React from 'react';

import { useForm } from '../../hooks/useForm';

export const SearchScreen = () => {  
  
  
  const [ formValues, handleInputChange, reset ] = useForm({
    inputText: ''
  });

  const { inputText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(inputText);
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
                  className='btn btn-ouline-primary mt-1'
                  type='submit'
                  onClick={ handleSearch }
                >
                  Submit...
                </button>

              </form>
            </div>
          </div>

      </>
  );
};
