import React from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { mount } from "enzyme";
import { HeroScreen } from "../../../components/hero/HeroScreen";


const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))


describe('Test <HeroScreen />', () => { 

    test("shouldn't show HeroScreen if is not a hero in the URL", () => { 
        
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero'] }>
                <Routes>
                    <Route path='/hero' element={<HeroScreen/>} />
                    <Route path='/' element={<h1>No hero page</h1>} />
                </Routes>
            </MemoryRouter>
        )

        expect(wrapper.find('h1').text().trim() ).toBe('No hero page');

     })

     test("should show HeroScreen matching URL", () => { 
        
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero/marvel-spider'] }>
                <Routes>
                    <Route path='/hero/:heroId' element={<HeroScreen/>} />
                    <Route path='/' element={<h1>No hero page</h1>} />
                </Routes>
            </MemoryRouter>
        )

        expect( wrapper.find('.card-title').text().trim() ).toBe('Spider Man');

     })

     test('should return to previous screen', () => { 

        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero/marvel-spider'] }>
                <Routes>
                    <Route path='/hero/:heroId' element={<HeroScreen/>} />
                </Routes>
            </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')();
        expect(mockNavigate).toHaveBeenCalledWith(-1, {"replace": true});

      })

      test("shouldn't show HeroScreen if the hero doesn't exist", () => { 
        
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero/marvel-spider1234'] }>
                <Routes>
                    <Route path='/hero/:heroId' element={<HeroScreen/>} />
                    <Route path='/' element={<h1>No hero page</h1>} />
                </Routes>
            </MemoryRouter>
        )

        expect(wrapper.text().trim() ).toBe('No hero page');

     })

 })