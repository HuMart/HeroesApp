import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { PrivateRoute } from "../../routers/PrivateRoute";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: () => <span>Flying out of here</span>
}));


describe('testing PrivateRoute', () => { 

    Storage.prototype.setItem = jest.fn();

    test('should render the component if autenticated and seve it in localStorage', () => { 
        
    const contextValue = {
        user: {
            logged: true,
            name: 'User logged'
        }
    };

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={ ['/'] }>
                <PrivateRoute>
                    <h1>Private Components</h1>
                </PrivateRoute>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    expect( wrapper.text().trim() ).toBe('Private Components');
    expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/")

    });

    test('should block access if not autenticated', () => { 

        const contextValue = {
            user: {
                logged: false
            }
        };
    
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={ ['/'] }>
                    <PrivateRoute>
                        <h1>Private Components</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
        expect( wrapper.text().trim() ).toBe('Flying out of here');

    })

})