


const nombre= 'gabi';

const apellido = 'iezzi';

//const nombreCompleto = nombre + ' ' + apellido ;

const nombreCompleto = `${nombre} ${apellido} ` ;



 function getSaludo(nombre){
    return 'Hola ' + nombre;
 }

console.log(`${ getSaludo(nombreCompleto) }`);
