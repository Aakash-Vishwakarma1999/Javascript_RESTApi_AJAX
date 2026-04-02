const btn = document.querySelector('button');
const main = document.querySelector(".output");
const url = 'code1.txt';

// uncomment this to view
// btn.onclick = () => {

// const xhr = new XMLHttpRequest();

// xhr.onload = () => main.innerHTML = xhr.responseText;

// xhr.open('GET', url);

// xhr.send(null);

// };

// comment below 1 line after you uncomment the upper code
btn.onclick = reqData;


function reqData() {

    console.log('click');

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        console.log(`RS : ${this.readyState}`);

        console.log('response text: ',this.responseText);

        console.log('status: ', this.status);

        if (this.readyState == 4) {

            console.log(`Done ${this.responseText}`);

        }

    }

    console.log('readyState: ',xhr.readyState);

    xhr.onprogress = function () {

        console.log(`Progress : ${this.readyState}`);

        console.log(this.responseText);

    }

    xhr.onload = function () {

        console.log(`Done : ${this.readyState}`);

        console.log(this.responseText);

    }

    xhr.open('GET', url);

    xhr.send(null);

}