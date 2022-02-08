import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';


export const LoginScreen = () => {

  

  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = () => {

    const action = {

      type: types.login,
      payload: { name: 'User Logged' }
    }

    dispatch(action);

    const lastPath = localStorage.getItem('lastPath') || '/marvel'

    navigate(lastPath, {
      replace: true
    });
  }

  return (
    <div  className='position-absolute top-50 start-50 translate-middle'>
      <img className='container  w-auto h-auto opacity-50 ' src='https://wallpapertag.com/wallpaper/full/1/1/1/549111-marvel-vs-dc-wallpaper-1929x1200-for-android-50.jpg' alt=''/>
      <div className='img-overlay text-dark text-center position-absolute top-50 start-50 translate-middle'>
          <h1>Enter to the World of Heroes</h1>
          <hr />

          <button 
            className='btn btn-transparent btn-lg' 
            onClick={ handleLogin }
          >
            Click Me
          </button>
      </div>      
      <footer className='text-center text-white bg-dark'>
        MIT <span className="material-icons-outlined">
copyright
</span>
      </footer>

    </div>

  );
};
