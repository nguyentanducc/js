// Log number
console.log(100);

// Log string
console.log('Hello World');

// Log multiple values
console.log(20, 'Hello', true);

// Log a variable
const x = 100;
console.log(x);

// Console error & warning
console.error('Alert');
console.warn('Warning');

// Log object as table
console.table({ name: 'Brad', email: 'brad@gmail.com' });

// Group console commands
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// Add CSS to logs
const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', styles);

const theName = "hung";

const lastName = "nd";

const fullName = `Full name is ${theName}${lastName}`;

console.log(fullName);

const arr = [1, 2, 3, 4];
arr.push(5);

console.log(arr);

const person = {
    name: "hung",
    age: 18,
    major: "frontend"
};
person.email = 'hungndph34648@fpt.edu.vn';
person.telephone = '0394879813';
console.log(person);

// true false
const hasChild = true;

const aptNumber = null;

console.log(aptNumber);

const score = undefined;

function sayHello(){
    console.log("Hello");
}
sayHello();

console.log('output', typeof sayHello);