/* 
const apikey = 'NGv2bSa4V3T9Y6bUqHFhPSw0o4S8p9Nc';

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

//Destruccion de arreglos

const person = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3] = person;
console.log(p3);

//Destruccion de objetos

const person2 = {
    name: 'Juan',
    age: 25,
    key: 'ABC123'
}

const {name, age, key} = person2;
console.log(name, age, key);

const returnPerson = () => {
    return['ABC', 123];
}

const [letters, numbers] = returnPerson();
console.log(letters, numbers);

//Tarea
//1. El primer valor del arr se llamara nombre
//2. se llamara setNombre

/* const useState = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo')}];
}

const [nombre, setNombre] = useState('Goku');
console.log(nombre);
setNombre();
 */



const petcion = fetch('http://api.giphy.com/v1/gifs/random?api_key=NGv2bSa4V3T9Y6bUqHFhPSw0o4S8p9Nc');

petcion.then(resp => resp.json())
.then(({data}) => {
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
})
.catch(console.warn);

