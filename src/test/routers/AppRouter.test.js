import  React  from 'react';

import { AppRouter } from "../../routers/AppRouter";
import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";



describe('testing <AppRouter />', () => {

  
    test('should return login screen if not autenticated', () => {
        const contextValue = {
            user: {
                logged: false
            }
        }

        const wrapper = mount(             
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
            

        );

        console.log(wrapper.html());

    });
    

});
