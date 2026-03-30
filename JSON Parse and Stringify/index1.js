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
console.log("stringified: " +JSON.stringify(friends)) //JSON.stringify() is a built-in JavaScript method that converts a JavaScript object (or value) into a JSON string.

const str='[{"name":"Laurance"},{"name":"John"},{"name":"Jane"}]';
const friends2 = JSON.parse(str) //JSON.parse() converts a JSON string → JavaScript object (or array).
// parse takes data in string format and turns it into usable JavaScript data.
console.log("parsed:", friends2); // ✅ best
console.log("parsed:"+ friends2); // "text" + object ==> parsed:[object Object],[object Object],[object Object]
friends2.push(
    {"name":"Mike"}
)

let html = "";

friends2.forEach(function(val){
    console.log(val.name);
    html+= val.name +'<br>';
    
})

document.querySelector('.output').innerHTML = html


/// 🔴 Important rule

// 👉 JSON.parse() ONLY works on valid JSON string

// ❌ Invalid:
// JSON.parse('{name: "Aakash"}') // error

// ✅ Valid:
// JSON.parse('{"name":"Aakash"}')

// ⚠️ Common error
// If string is invalid:
// JSON.parse("hello");
// 👉 ❌ Error: Unexpected token