const btn = document.querySelector('button');

const main = document.querySelector('.container');

const url = 'data.json';

btn.onclick = () => {

    const xhr = new XMLHttpRequest();

    xhr.onload = () => {

        console.log("text format :", xhr.responseText);

        const data = JSON.parse(xhr.responseText);
        console.log(data);

        outputData(data);

    }
    xhr.open('GET', url);

    xhr.send();

};

function outputData(vals) {

    main.innerHTML = '';

    vals.forEach((ele, ind) => {

        console.log(ele.first, ele.last);

        const div = document.createElement('div');

        main.append(div);

        //div.style.color = 'red';

        div.innerHTML = `${ind + 1}. ${ele.first} ${ele.last}`;

    })
}
// another way to get the same output
// function outputData1(vals) {

//     let html = '';

//     vals.forEach((ele, ind) => {

//         console.log(ele.first, ele.last);

//         html += `<div>${ele.first} ${ele.last}</div>`;

//     })

//     main.innerHTML = html;

// }


//this is how the json object looks in js: 
const data1 = [{

    "first": "Laurence",

    "last": "Svekis"

},

{

    "first": "John",

    "last": "Smith"

},

{

    "first": "Jane",

    "last": "Doe"

}

];






