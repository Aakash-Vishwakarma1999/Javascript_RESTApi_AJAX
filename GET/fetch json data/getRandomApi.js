const url ='https://randomuser.me/api/?results=10';
const btn = document.querySelector('button');
const output = document.querySelector('.output');

btn.addEventListener('click',getData);

function getData(){
    output.innerHTML ='';
    fetch(url).then(resp=> resp.json()).then(data=>{
        console.log(data);
        console.log(data.results);

        data.results.forEach(item=>{
            console.log(item.name);
            console.log(item.picture.thumbnail);

            let div = document.createElement('div');
            div.textContent = `${item.name.title} ${item.name.first} ${item.name.last}`;
            output.appendChild(div);

            let img= document.createElement('img');
            img.setAttribute('src',item.picture.thumbnail);
            img.style.display = 'block';
            div.appendChild(img )
            
        })
        
    })
}
 

//////    alternate way using xHR ///////////////////////////////
// function getData(){
//     output.innerHTML='';
//     const xHR = new XMLHttpRequest();
//     xHR.open('GET',url);
//     xHR.responseType ='json';
//     xHR.onload= function(){
//         console.log("response: ",xHR.response);

//         xHR.response.results.forEach(element => {
//             let div = document.createElement('div');
//             div.textContent=`${element.name.title}  ${element.name.first}  ${element.name.last}`;
//             output.appendChild(div)

//             let img = document.createElement('img');
//             img.setAttribute('src',element.picture.thumbnail)
//             img.style.display ='block';
//             div.appendChild(img)
//         });
        
//     }
//     xHR.send();
// }
