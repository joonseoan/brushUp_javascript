// var name = 'max';
// var age = 29;
// var household = true;

// function summarizeUser(userName, userAge, userHobby) {
//     return 'Name is ' + userName + ' Age ' + userAge + ' userHobby: ' + userHobby;
// }

// console.log(summarizeUser(name, age, household));

// let vs. const
// 
const name = 'max';
var age = 29;
const household = true;

// It generates an error
// name = 'jooon';



// Arrow function
function summarizeUser(userName, userAge, userHobby) {
        return '1. Name is ' + userName + ' Age ' + userAge + ' userHobby: ' + userHobby;
}

console.log(summarizeUser(name, age, household));

const summarizeUser2 = function(userName, userAge, userHobby) {

    return '2. Name is ' + userName + ' Age ' + userAge + ' userHobby: ' + userHobby;

}

console.log(summarizeUser2(name, age, household));


const summarizeUser3 = (userName, userAge, userHobby) => '3. Name is ' + userName + ' Age ' + userAge + ' userHobby: ' + userHobby;

console.log(summarizeUser3(name, age, household));


// ---------------------------------------- object ---------------------

// An error example
// const person1 = {
//     name: 'Max',
//     age: 29,
//     greet: () => {
//         // at this arrow function, "this" indicates a global object
//         console.log('Hi, I am ' + this.name);
//     }
// };

// console.log(person1);

// person1.greet(); // Hi, I am undefined "undefined"


const person2 = {
    name: 'Max',
    age: 29,
    greet: function() {
        // at this arrow function, "this" indicates a global object
        console.log('2. Hi, I am ' + this.name);
    }
};

console.log(person2);

person2.greet(); // Hi, I am undefined "undefined"

const person3 = {
    name: 'Max',
    age: 29,
    greet() {
        // at this arrow function, "this" indicates a global object
        console.log('3. Hi, I am ' + this.name);
    }
};

console.log(person3);

person3.greet(); // Hi, I am undefined "undefined"


// ------------------------------------- Array ------------------------------


const hobbies = ['Sports', 'Cooking'];

// for of statement *******
for(let hobby of hobbies) {
    console.log('1. ' + hobby);
}

console.log(hobbies.map(hobby => { hobby })); // undefined


// when we create the nested object or array, it must use "return"
console.log(hobbies.map(hobby => {

    return { hobby };

}));

hobbies.push('Programming');

console.log(hobbies.map(hobby => {

    return { hobby };

}));

// Destructuring


const d_person = {
    names: 'Max',
    ages: 29,
    greet: function() {
        // at this arrow function, "this" indicates a global object
        console.log('2. Hi, I am ' + this.name);
    }
};

// When 'name' is already declared above, it cannot use destructuring.
// const { name, age } = d_person;

const printName = ({names}) => {
    console.log(names)
}

printName(d_person);

const { names, ages } = d_person;
printName(names); // => 'names' is undefined!!!! at 'printName'
console.log(names, ages);

// ***********************
const fish = ['aaa', 'bbb'];
const [a, b] = fish;

console.log(a, b);

