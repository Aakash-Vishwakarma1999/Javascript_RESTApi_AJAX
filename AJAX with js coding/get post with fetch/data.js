const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const myInput = document.querySelector('input[name="val"]')
const main = document.querySelector('.container');
const url1 = 'https://httpbin.org/get';
const url2 = 'https://httpbin.org/post';
const holder = [];


btn1.onclick = () => {
    const val = myInput.value;
    console.log("myInput.value: ", myInput.value);

    const url = `${url1}?val=${val}` // ?val=${val} this will go in the args in the url 
    fetch(url).then(resp => resp.json()).then(data => {
        // console.log(data.args.val);
        adder('GET ' + data.args.val);


    })

}
btn2.onclick = () => {
    const val = myInput.value;
    const formData = new FormData();
    formData.append('val', val);
    formData.append('id', 1);

    fetch(url2, {
        method: 'POST',
        body: formData
    }).then(resp => resp.json()).then(data => {

        console.log(data);
        console.log(data.form.val);
        adder('POST ' + data.form.val);


    })

}

function adder(html) {
    holder.push(html)
    const div = document.createElement('div');
    div.innerHTML = `${holder.length}. ${html}`;
    main.append(div)

}