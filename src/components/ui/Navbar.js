import React, { useContext } from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';



export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    // const {  } = useContext(AuthContext);


    const handleLogout = () => {
        // const action = {
        //     type: types.logout
        // }
        
        dispatch({ type: types.logout });
        navigate('/login', {
            replace: true
        });
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark container-fluid">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                <img className='d-flex b' src="https://th.bing.com/th/id/OIP.JWMbxW3YwUjNX7Q13lsl6AHaE8?pid=ImgDet&rs=1" alt='' width="30" height="24"/>
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => "nav-item nav-link " + (isActive ? 'active' : '') } // muy importante el space after "nav-item nav-link " before the last quotes 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink                         
                        className={ ({ isActive }) => "nav-item nav-link " + (isActive ? 'active' : '') }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink                         
                        className={ ({ isActive }) => "nav-item nav-link " + (isActive ? 'active' : '') }
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info'>
                        { user.name }
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout} 
                    >
                        Fly out of here
                    </button>
                </ul>
            </div>
        </nav>
    )
}