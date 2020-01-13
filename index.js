import 'dotenv/config';
import  { add} from './src/add';
console.log(add(1,2));

const person = {
    name:"kunle",
    age:98,
    email:"kunle@gmail.com"
}

const address = {
    street:"adeoye",
    city:'abuja'
}

const personWithAddress ={
    ...person,
    ...address
}

console.log(personWithAddress);