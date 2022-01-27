import { heroes } from "../data/Heroes";


export const getHeroesByPublisher = (publisher) => {

    const validPublisher = [ 'DC Comics', 'Marvel Comics'];

    if( ! validPublisher.includes( publisher ) ){
        throw Error( `${ publisher } is not a valid publisher`);
    }

    return heroes.filter( hero => hero.publisher === publisher );
};