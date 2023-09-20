// Given this function
/*
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
        return num % 2 === 0;
    });
}
*/
// Refactor it to use the rest operator & an arrow function

const filterOutOdds = (...args) => [...args].filter((num) => num % 2 === 0);

// findMin
/* Write a function called findMin that accepts a variable number of arguments and returns the smallest argument
 ** Make sure to do this using the rest and spread operator.
 */

const findMin = (...args) => Math.min(...args);

/* Merge Objects
 ** Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first objct and second object
 */

// Issue here was that I forgot you can't implicitly return an object without parens surrounding them. The program ran the error because it expected me to have a explicit return statement because I set brackets around anonymous function

const mergeObjects = (object1, object2) => ({ ...object1, ...object2 });

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));

/* Slice and Dice
 ** For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
 ** Make sure that you are always returning a new array or ojbect and not modifying the existing inputs.
 */

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
  let randomIndex = Math.floor(Math.random() * items.length);
  return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
};

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {}

const addKeyVal = (obj, key, val) => ({...obj, [key]:val});

/** Return a new object with a key removed. */

// function removeKey(obj, key) {}

const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2});

/** Return a new object with a modified key and value. */

// function update(obj, key, val) {
// }

const update = (obj, key, val) => {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj;
}
