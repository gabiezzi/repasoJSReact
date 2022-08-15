/** function saludar(nombre){

    return `Hola ${nombre} , como estas?` ;
}  No usar esta manera ya que lleva a equivocarse al referenciar esa function**/


/** const saludar = function(nombre){

    return `Hola ${nombre} , como estas?` ;
} GUARDAR function en una variable **/

const saludar2 = (nombre) => {

    return `Hola ${nombre} , como estas?` ;
}  // fuction flecha 
const saludar3 = (nombre) =>  `Hola ${nombre} , como estas?`; 
// function flecha más resumida

//saludar = 30 ; saltará error de que estamos tratando de modificar una const

const saludar4 = () =>  `Hola, como estas?`; // function flecha sin argumentos


console.log (saludar2('Gabi')); 
console.log (saludar3('Edu')); 
console.log (saludar4()); 


const getUser = () => {
    return {
        uid: 'ABC123',
        username:'ellocodelbosque33',
    }
}; // en el caso de devolver un objeto se resume asi

const getUser2 = () => ({
        uid: 'ABC123',
        username:'ellocodelbosque33', });


const user = getUser();

console.log(user);

function getUsuarioActivo (nombre) {

    return {
        uid:'ACDC2233',
        username: nombre
    }

};

const usuarioActivo = getUsuarioActivo('fernando');

console.log(usuarioActivo);


const userActivo = (nombre) => ({uid:'ACDC2233',
username: nombre});

console.log(userActivo('Calamardoso'));