const url = 'https://script.google.com/macros/s/AKfycbwIrTmXmMCtgC-1VVitPdm9cnqj7tLZV8m4BvR2wKDrm9cvxBw/exec';

const btn = document.querySelector('button');
const output = document.querySelector('.output');

btn.addEventListener('click', sendData);

function sendData() {
    let value1 = document.querySelector('input[name="name"]').value || 'unknown';
    let value2 = document.querySelector('input[name="message"]').value || 'Message';
    let arr = [value1, value2];

    let formData = new FormData(); //👉 This creates an object used to send data like a form submission
    formData.append('data', JSON.stringify(arr)); //👉 You’re adding: key → 'data'  value → JSON.stringify(arr)
    // stringifyinf the data i.e converting it to string value so that  it could be sent over http
    fetch(url, {
        method: 'POST',
        body: formData
    }).then(resp => resp.json())
        .then(response => {
            console.log(response);

        })
}