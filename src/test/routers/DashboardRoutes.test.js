import React from "react";

import { mount } from "enzyme";
import { DashboardRoutes } from "../../routers/DashboardRoutes";
import { AuthContext } from "../../auth/authContext";
import { MemoryRouter } from "react-router-dom";



describe('test in <DashboardRoutes />', () => {
  
    test('should render correctli in marvel screen', () => {
        
        const contextValue = {
            user: {
                logged: true,
                name: 'User logged'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={ ['/'] }>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('User logged');
        expect( wrapper.find('h1').text().trim() ).toBe('Marvel Screen');


    });
    
    test('should render correctli in dc screen', () => {
        
        const contextValue = {
            user: {
                logged: true,
                name: 'User logged'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={ ['/dc'] }>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h1').text().trim() ).toBe('Dc Screen');


    });

});
