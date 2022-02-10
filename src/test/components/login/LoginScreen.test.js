import React from "react";
import { mount } from "enzyme";
import { Routes, MemoryRouter, Route } from "react-router-dom";

import { AuthContext } from "../../../auth/authContext";
import { types } from "../../../types/types";
import { LoginScreen } from "../../../components/login/LoginScreen";



const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))


describe('Test <LoginScreen />', () => { 

    const contextValue =  {
        dispatch: jest.fn(),
        user: {
            logged: false,
        }
    }    

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter initialEntries={ ['/login'] }>
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>

    )


    test('should render correctly', () => { 

        expect( wrapper ).toMatchSnapshot();

    })

    test('should execute dispatch and navigate to the next screen', () => { 

        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: { name: 'User Logged' }
        });
        expect(mockNavigate).toHaveBeenCalledWith( "/marvel", { replace: true } );

        localStorage.setItem('lastPath', '/dc');

        handleClick();
        expect(mockNavigate).toHaveBeenCalledWith( "/dc", { replace: true } );


    })

 })