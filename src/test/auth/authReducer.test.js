import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";


describe('Test authReducer', () => {
  
    test('should return state by default', () => {

        const state = authReducer({ logged: false }, {} );
        expect( state ).toEqual({ logged: false });

    });
    
    test('should autenticate and render the user name', () => {
      
        const action = {
            type: types.login,
            payload: {
                name: 'User logged'
            }
        }

        const state = authReducer({ logged: false }, action );
        expect( state ).toEqual({
            logged: true,
            name: 'User logged'
        });

    });
    
});
