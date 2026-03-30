// let url ='https://www.reddit.com/r/test/top/.json?limit=5';
let url = 'reddit.json';
let output = document.querySelector('.output');
let btn = document.querySelector('button');

btn.addEventListener('click',getData);

function getData(){
    fetch(url).then(resp=> resp.json()).then(response=> {
        console.log(response);
        console.log(response.data.children);
        makeHtml(response.data.children)
    })
}


function makeHtml(val){
    output.innerHTML ='';
    
    val.forEach(element => {
       let div = document.createElement('div');
       div.innerHTML =`${element.data.title} <a href="${element.data.url}" target="_blank"> Link </a>`;
       output.appendChild(div) ;
    });
}
