const url = "get2.json";
const btn = document.createElement('button');
const output = document.querySelector('.output');

btn.textContent ="Click me";
btn.addEventListener("click", ajaxReq);
document.body.prepend(btn);

function ajaxReq(){
    fetch(url).then(resp=> resp.json())
    .then(response=>{
        console.log(response);

        let count=1;
        output.textContent ='';
        response.data.forEach(element => {
            const div = document.createElement('div');
            div.textContent = `${count} ${element.firstName} ${element.lastName}` ;
            output.append(div)
            count++;
        });
        
    }).catch(err=>{
        console.log(err);
        
    })
}
