const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const myInput = document.querySelector('input[name="val"]')
const main = document.querySelector('.container');
const url1 ='https://httpbin.org/get';
const url2 ='https://httpbin.org/post';


////  Sending data via URL (GET) and fetching it
btn1.onclick=()=>{
    const xhr = new XMLHttpRequest();
    const val = myInput.value;
    // console.log('val: ',val);
    
    xhr.onload=()=>{
        // console.log(xhr.responseText);
        const data = JSON.parse(xhr.responseText);
        // console.log(data);
        main.textContent = (data.args.val)
        
        
    }

    xhr.open('GET',url1 + '?val=' + val)
    xhr.send();
}

//Sending data via body (POST) posting it in body and getting it
btn2.onclick=()=>{
    const xhr = new XMLHttpRequest();
    const val = myInput.value;

    const formData = new FormData();
    formData.append('val',myInput.value) 
    formData.append('id',2000) 

    xhr.onload=()=>{
        const data = JSON.parse(xhr.responseText);
        // console.log(data)
        console.log(data.form.val);
        main.textContent =(data.form.val)
    }
    xhr.open('POST' ,url2);
    xhr.send(formData);

}