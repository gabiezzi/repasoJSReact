const heroes =['goku','vegeta','gohan'];

// const[p1] = personajes; goku
// const[,p2] = personajes; vegeta
 const[ , ,p3] = heroes; 

// console.log (p1)

const retornaArreglo = ()=>{
    return ['abc',123];
}

const [letras,numeros] = retornaArreglo();


const useState = ( valor ) =>{
    return [valor , ()=>{console.log('Hola Mundo')}];

}

const [nombre,setNombre] = useState('goku');

console.log(nombre);

setNombre();