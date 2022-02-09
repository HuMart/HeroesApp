import React from "react";
import { MemoryRouter } from "react-router-dom";

import { mount } from "enzyme";
import { SearchScreen } from "../../../components/search/SearchScreen";


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
    

});


