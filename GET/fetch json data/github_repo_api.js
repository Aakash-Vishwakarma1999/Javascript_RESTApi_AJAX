const url = 'https://api.github.com/search/repositories?q=tetris&sort=stars&order=desc';
const btn = document.querySelector('button');
const output = document.querySelector('.output');


btn.addEventListener('click', getData)

function getData() {
    fetch(url).then(resp => resp.json()).then(response => {
        console.log(response);
        console.log(response.items);


        response.items.forEach(elem => {
            console.log(elem);
            let div = document.createElement('div');
            div.url = elem.url;
            div.innerHTML = `name: ${elem.name}  ${elem.description} `;
            output.appendChild(div);

            div.addEventListener('click', function (e) {
                fetch(div.url).then(resp => resp.json())
                    .then(response => {
                        console.log(response);
                        let span = document.createElement('span');
                        span.textContent = response.html_url;
                        span.style.color = "red";
                        div.appendChild(span)
                    })
            },{once:true}) //// i.e enables click only once to each element

        })

    })
}




////   using xHR

// function getData() {
//     let xHR = new XMLHttpRequest();
//     xHR.open('GET', url);
//     xHR.responseType = "json";
//     xHR.onload = function () {
//         console.log(xHR.response);
//         console.log(xHR.response.items);

//         xHR.response.items.forEach(elem => {
//             let div = document.createElement('div');
//             div.innerHTML = `name: ${elem.name} <a href="${elem.url}"> ${elem.description}</a> `;
//             output.appendChild(div);
//         })

//     }
//     xHR.send();
// }