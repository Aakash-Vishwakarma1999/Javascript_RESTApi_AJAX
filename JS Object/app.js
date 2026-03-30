const friend ={
    name:'Laurance Svekis',
    age:40,
    gender: "male",
    location:{
        city:"Toronto",
        country: "Canada",
        address: "100 Main st."

    }
}

console.log(friend);
console.log(friend.name);// dot notation
console.log(friend['name']);// bracket notation
console.log(friend.location.city);


document.querySelector(".output").textContent= friend.location.city;

// diff between textContent and innerHTML
// 🧠 Simple Explanation
// 👉 textContent
// Gets/sets only text
// Ignores HTML tags completely
// 👉 innerHTML
// Gets/sets HTML content
// Browser parses and renders tags

// Example :HTML
// <div id="demo"></div>

// JS
// const el = document.getElementById("demo");
// el.textContent = "<b>Hello</b>";
// o/p ==>  <b>Hello</b>

//el.innerHTML = "<b>Hello</b>";
// o/p ==> Hello   (bold)


