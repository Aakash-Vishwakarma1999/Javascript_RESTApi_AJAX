const btn = document.querySelector('#btn');
const main = document.querySelector('.container');
const results =5;

let url='https://randomuser.me/api';

if(results > 1){
    url += `?results=${results}`
}

btn.addEventListener('click',makeData);

function makeData(){
    // main.innerHTML =''
    fetch(url).then(res=> res.json()).then(data=>{
        adder(data)
    })
}

function adder(data){
    // console.log(data);
    data.results.forEach(person=>{
        console.log(person);
        const holder = createEle('div',main,"");
        holder.style.border ='1px solid #ddd';
        holder.style.paddding ='10px'
        holder.style.width ='150px'
        holder.style.display ='inline-block'
        if(person.id.name != ''){
            console.log(person.id.name);
            const idEle = createEle('div',holder,`${person.id.name} ${person.id.value}`)   
        }
        const pic = createEle('img',holder,'');
        pic.src = person.picture.large;
        const emailEle = createEle('div',holder, `Email: ${person.email}`);
        const nameEle = createEle('div',holder, `Name: ${person.name.title} ${person.name.first} ${person.name.last}`)
        
    });
        
}

function createEle(t,parent,html){
    
    const ele = document.createElement(t);
    ele.innerHTML = html;
    return parent.appendChild(ele)

}