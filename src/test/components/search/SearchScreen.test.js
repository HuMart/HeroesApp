import React from "react";
import { MemoryRouter } from "react-router-dom";

import { mount } from "enzyme";
import { SearchScreen } from "../../../components/search/SearchScreen";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

describe('testing <SearchScreen />', () => {
  
    test('should render correctly with values by default', () => {
      
        const wrapper = mount(
        <MemoryRouter initialEntries={ ['/search'] }>
            <SearchScreen />
        </MemoryRouter>
      
        )
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h1').text().trim() ).toBe('Search');

    });

    test('should return a hero that match with the queryString', () => {
      
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search?q=batman'] }>
                <SearchScreen />
            </MemoryRouter>
        );

        expect( wrapper.find('input').prop('value') ).toBe('batman');
        

    });

    test('should return an error if not hero found', () => {
      
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search?q=batman123'] }>
                <SearchScreen />
            </MemoryRouter>
        );

        expect( wrapper.find('.alert-danger').text().trim() ).toBe("There isn't a hero with batman123 name");
        

    });

    test('should call navigate to the new screen', () => {
      
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search'] }>
                <SearchScreen />
            </MemoryRouter>
        );
        wrapper.find('input').simulate('change', {
            target: {
                name: 'inputText',
                value: 'batman'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        })

        expect(mockNavigate).toHaveBeenCalledWith('?q=batman')

    });
    
    
    

});


