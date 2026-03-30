const friend1 = {
    name: 'Laurence'
};
const friend2 = {
    name: 'John'
};
const friend3 = {
    name: 'Jane'
};
const friend = {
    name: 'Laurence Svekis'
    , age: 40
    , gender: 'male'
    , location: {
        city: 'Toronto'
        , country: 'Canada'
        , address: '100 Main St.'
    }
}
const friends = [friend1, friend2, friend3];
console.log(friends);

for (const key in friend) {
    // console.log(key);
    // console.log(friend[key]);
}

console.log(Object.entries(friend)); // Object.entries() is a very useful JavaScript method when you want to work with both keys and values together.
// It converts an object into an array of key–value pairs.

for (const [key, value] of Object.entries(friends)) {
    // console.log(key);
    // console.log(value);
    // console.log(value.name);

} //explaination below:
// 👉 What Object.entries(friends) returns

// Even though it's an array, arrays are also objects in JavaScript.
// So internally it becomes:Object.entries(friends)==>
// o / p ==> [
//     ["0", friend1], ["1", friend2], ["2", friend3]
// ]



// Q. add last name to every object of friends array?
for (const [key, value] of Object.entries(friends)) {
    value['last'] = "smith" // or we can use friends[key].last ="smith"  both will work same
    console.log(value);

}
console.log(friends);


