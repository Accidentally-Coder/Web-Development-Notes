"use strict";
{ // named function
    // example 1
    function greet(name) {
        return `Hello, ${name}!`;
    }
    console.log(greet('Raha'));
    // example 2
    function add(a, b) {
        return a + b;
    }
    let sum = add(5, 6);
    console.log(sum);
    // anonymous function
    // example 1
    const greetAnonymously = function (name) {
        return `Hello, ${name}! I am Anonymous!`;
    };
    console.log(greetAnonymously('Hooman'));
    // arrow function
    // example 1
    const greetArrow = (name) => {
        return `Hello, ${name}! I am gonna arrow you!`;
    };
    console.log(greetArrow('Hooman'));
    // example 2 : shorter syntax with single expressions
    const addArrow = (a, b) => a + b;
    console.log('add arrow: 5 + 6 = ', addArrow(5, 6));
    // callback
    function greetWithCallback(name, callback) {
        console.log(`Hello, ${name}! I am gonna call you back!`);
        callback(); // calling the callback function
    }
    function sayBye() {
        console.log('Goodbye!');
    }
    greetWithCallback('Hooman', sayBye);
    // optional parameter
    function greetOpt(name, age) {
        return age ? `Hello, ${name}. Age: ${age}` : `Hello, ${name}`;
    }
    console.log(greetOpt('Hooman', 25));
    // default parameters
    function greetDef(name = "Guest") {
        return `Hello, ${name}`;
    }
    console.log(greetDef());
    // method : function --> object/class
    // within an object
    const person = {
        name: 'Raha',
        age: 24,
        greet: function () {
            console.log(`Hello, my name is ${this.name}`);
        }
    };
    person.greet();
    // example 2
    const oldUser = {
        name: 'Hooman',
        age: 0,
        incAge(age) {
            return `New age is ${this.age + age}`;
        }
    };
    console.log(oldUser.incAge(5));
}
