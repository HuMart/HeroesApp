import React from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import { AuthContext } from "../../../auth/authContext";
import { Navbar } from "../../../components/ui/Navbar";
import { mount } from "enzyme";
import { types } from "../../../types/types";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

describe('testing <Navbar />', () => { 

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            name: "Pedro",
            logged: true
        }
    };

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter initialEntries={ ['/'] }>
                <Routes>
                    <Route path="/" element={<Navbar />} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    );


    test('should display correctly', () => { 


        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Pedro');


    });

     test('should call logOut, call navigate and dispatch the arguments', () => { 

        wrapper.find('button').prop('onClick')();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({

            'type': types.logout

        });
        expect( mockNavigate ).toHaveBeenCalledWith('/login', { replace: true })

    });

 })