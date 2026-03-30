// const url = "https://www.discoveryvip.com/shared/json.php?f=peopledata1";
// const output = document.querySelector(".output");

// fetch(url).then(res=>{
//     console.log(res);
//     return res.json()
// }).then(data=>{
//     console.log(data.data);

//     data.data.forEach(function(val){
//         output.innerHTML += val.firstName +' '+ val.lastName+ '<br>';
//     })

// })



/////       doing the same thing with xhr  ///////////////

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
