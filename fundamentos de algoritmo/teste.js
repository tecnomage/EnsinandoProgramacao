const objects = [
    { name: 'John', age: 25, city: 'New York' },
    { name: 'Jane', age: 30, city: 'Los Angeles' },
    { name: 'Bob', age: 40, city: 'Chicago' },
    { name: 'Alice', age: 20, city: 'Houston' },
    { name: 'Mike', age: 35, city: 'Miami' }
];


const dados = objects.reduce((acc, cur) => {
    acc[cur.name] = cur.age;
    return acc;
});

console.log(dados);

