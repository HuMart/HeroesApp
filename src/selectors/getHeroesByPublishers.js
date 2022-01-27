import { heroes } from "../data/Heroes";


export const getHeroesByPublisher = (publisher) => {
    return heroes.filter( hero => hero.publisher === publisher );
};