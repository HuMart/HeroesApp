import React from "react";

import { mount } from "enzyme";
import { DashboardRoutes } from "../../routers/DashboardRoutes";
import { AuthContext } from "../../auth/authContext";
import { MemoryRouter } from "react-router-dom";



describe('test in <DashboardRoutes />', () => {
  
    test('should render correctli', () => {
        
        const contextValue = {
            user: {
                logged: true,
                name: 'Uder logged'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        console.log(wrapper.html());
        expect( wrapper ).toMatchSnapshot();

    });
    

});
