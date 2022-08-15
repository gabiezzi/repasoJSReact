import { heroes , owners} from '../data/heroes'; //escribiendolo 

// import heroes ,{ owners} from './data/heroes'; // importando uno por defecto y otro importacion individual

// import personajes from "./data/heroes"; cuando importamos por  DEFECTO

// import { heroes } from "./data/heroes";  escribiendo directamente el elemento e importando



// import { heroes } from './data/heroes' escribiendo imp y lego tab


// const getHeroesById = (id) => {
//     return heroes.find( (heroe) => heroe.id === id);
// }


export const getHeroesById = (id) => heroes.find( (heroe) => heroe.id === id);


//console.log(getHeroesById(3));


export const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);

//console.log(getHeroesByOwner('Marvel'));

//console.log(owners);

