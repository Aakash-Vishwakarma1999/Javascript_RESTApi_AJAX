const url = 'json.json';
const output = document.querySelector('.output')

let xHR = new XMLHttpRequest();
xHR.open('GET', url);
xHR.responseType = 'json';
xHR.onload = function () {
    console.log("Response", xHR.response);
    xHR.response.books.forEach(function (element) {
        output.innerHTML += element.title + ' ' + element.author + ' ' + element.isbn + '<br>'
    })


}
xHR.send();
console.log("xHR", xHR);