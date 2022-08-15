

const persona = {

    nombre: 'Ron' ,
    apellido: 'Weasley' ,
    edad: 22 ,
    direccion: {
        ciudad: 'Inglaterra',
        correo: 345345
    }
};

//console.table( { persona } )
console.log( { persona } )

//const persona2 = persona; copia de referencia NO HACERLA
//persona2.nombre = "Carmaicol"; modificamos el objeto original !!!!

const persona2 = { ...persona };

console.log( { persona} );
console.log( persona2 );