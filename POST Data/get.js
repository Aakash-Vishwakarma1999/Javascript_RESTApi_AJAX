const url = 'https://script.google.com/macros/s/AKfycbwIrTmXmMCtgC-1VVitPdm9cnqj7tLZV8m4BvR2wKDrm9cvxBw/exec';
const btn = document.querySelector('button');
const output = document.querySelector('.output');
btn.addEventListener('click', getData);
let page = 1;
 
function getData() {
  btn.style.display = 'none';
  output.innerHTML = '';
  fetch(url + '?pg=' + page).then(function (rep) {
    return rep.json()
  }).then(function (data) {
    console.log(data);
    data.data.forEach(function (val) {
      let html = document.createElement('div');
      html.innerHTML = val[0] + ' ' + val[1] + ' ' + val[2] + '<br>';
      output.appendChild(html);
    })
    if (data.pgs.previous !== null) {
      let btn1 = document.createElement('button');
      btn1.textContent = data.pgs.previous;
      btn1.addEventListener('click', function (e) {
        page = data.pgs.previous;
        getData();
      })
      output.appendChild(btn1);
    }
    if (data.pgs.next !== null) {
      let btn2 = document.createElement('button');
      btn2.textContent = data.pgs.next;
      btn2.addEventListener('click', function (e) {
        page = data.pgs.next;
        getData();
      })
      output.appendChild(btn2);
    }
  })
}