import React from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublishers';

export const HeroList = ({ publisher }) => {

  const heroes = getHeroesByPublisher( publisher );

  return (
  <>
    <h1>Heroes List - { publisher }</h1>
    <hr />

    <ul>
        {
            heroes.map( hero => {
            <li>
                { hero.superhero }
            </li>

            })
        }
    </ul>

  </>)
};
