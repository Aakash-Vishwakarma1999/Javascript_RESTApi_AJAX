const btn = document.querySelector('button');
const main = document.querySelector('.container');
const url ="code1.txt";

btn.onclick= reqData;

// btn.onclick =()=>{
//     console.log('clicked');
    
    
// }

function output(data){
    console.log("data: ",data);
    console.log("this: ",this);
    console.log(this.responseText);
    main.innerHTML = this.responseText;   
    
}

function reqData(){
    const xHR = new XMLHttpRequest();
    xHR.addEventListener('load',output) //When a function is used as an event listener 👉 "this" refers to the object that fired the event i.e in this case it is xHR
    xHR.open('GET',url);
    xHR.send()
    console.log(xHR);
    
}