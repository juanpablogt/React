console.log('hallo welt!')

//no se debe usar var

const name1 = 'Juan ';
const last = 'Gonzalez';

const fullName = name1 + last;

console.log(name1 + last);

const persona = {
    name: 'Juan',
    last: 'Gonzalez',
    age: 25,
    address: {
        'city': 'Bogota', 
        'zip': 12345, 
        'lat': 14.3232, 
        'lng': 34.23423
    }
}

console.log(persona);

const arreglo = [1,2,3,4];

let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(function(number){
    return number * 2;
}
);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

//Ejercicio con funcion de flecha

const getUserActive= (name)=>({
    uid: 'ABC123',
    username: name
});

const userActive = getUserActive('Juan');
console.log(userActive);




