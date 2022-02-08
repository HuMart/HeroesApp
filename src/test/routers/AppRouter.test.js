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

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h1').text().trim() ).toBe( 'Enter to the World of Heroes' )

    });

    test('should render marvel component if is autenticated', () => {
      
        const contextValue = {
            user: {
                logged: true,
                name: 'User logged'
            }
        }

        const wrapper = mount(

            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>

        );
        

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.navbar').exists() ).toBe( true );

    });
    
    

});
