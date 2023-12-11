/**
 * Represents an array of objects.
 * @typedef {Object[]} ObjectArray
 * @property {string} name - The name of the person.
 * @property {number} age - The age of the person.
 * @property {string} city - The city where the person lives.
 */
const objects = [
    { name: 'John', age: 25, city: 'New York' },
    { name: 'Jane', age: 30, city: 'Los Angeles' },
    { name: 'Bob', age: 40, city: 'Chicago' },
    { name: 'Alice', age: 20, city: 'Houston' },
    { name: 'Mike', age: 35, city: 'Miami' }
];

/**
 * Reduces an array of objects to a single object with names as keys and ages as values.
 * @param {ObjectArray} objects - The array of objects to be reduced.
 * @returns {Object} - The reduced object with names as keys and ages as values.
 */
const dados = objects.reduce((acc, cur) => {
    acc[cur.name] = cur.age;
    return acc;
});

console.log(dados);

