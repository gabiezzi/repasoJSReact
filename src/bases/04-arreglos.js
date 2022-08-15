
// ARREGLO EN JS


// const arreglo = new Array( 100 );

const arreglo = [1,2,3,4];

// arreglo.push(2);
// arreglo.push(3); No usar mas el push , modifica el arreglo original
// arreglo.push(4);


// let arreglo2 = arreglo ; OJO con esto, copiamos espacio en memoria y modificamos el original
let arreglo2 = [ ...arreglo , 4 ] ;
// spread extrae la info del primer arreglo al segundo 
//arreglo2.push(2);

const arreglo3 = arreglo2.map( function( x ) {
    return x * 2 ;
});


console.log(arreglo2);
console.log(arreglo3);