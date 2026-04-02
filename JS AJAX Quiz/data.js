const btn = document.querySelector('#btn');
const main = document.querySelector('.container')

//step1:
const message = pageEles(main, 'div', 'Press Start Button', 'message') // on load the element div will be created and the ,essahe press... will be displayed
//step2:
const output = pageEles(main, 'div', "", 'game')
const url = 'quiz.json';
const game ={score:0}
// btn.onclick=()=>{
//     main.textContent ='Clicked' // after button isclicked this message will be displayed   
// }
btn.onclick = loadData;



function loadData() {
    fetch(url).then(resp => resp.json()).then(data => {
        console.log('data: ', data);
        const temp = {
            total: data.length,
            q: data,
            score: 0,
            counter: 0
        }
        createQuestion(temp)

    })
}

function createQuestion(data) {
    const el = pageEles(output, 'div', "", "question");

    console.log('createquestion: ', data)
    if (data.q.length == 0) {
        message.innerHTML = `<h1>Game Over</h1> <div>${game.score} correct out of ${data.total} questions`
    } else {
        const tBtn = pageEles(el, 'button', 'Next', 'next');
        tBtn.onclick = () => {
            el.remove();
            createQuestion(data);
        }

        const question = data.q.shift();// removing first element from data array and putting it in question variable
        data.counter++;
        message.textContent = `Question ${data.counter} of ${data.total}`;
        if (data.q.length == 0) tBtn.textContent = 'End Game';

        tBtn.style.display = 'none'
        console.log('question: ', question);
        outputQuestion(question, el, tBtn);

    }
}


function outputQuestion(question, parent, tBtn) {
    console.log(question);
    const que = pageEles(parent, 'div', question.question, 'question');

    const arr = question.opt;
    arr.push(question.answer);
    arr.sort(() => {
        return Math.random - 0.5
    })
    const btns = pageEles(parent, 'div', "", 'opts');
    arr.forEach(elem => {
        const optemp = pageEles(btns, "button", elem, 'btns');
        optemp.onclick = () => {
            if (question.answer == elem) {
                message.textContent = 'correct';
                game.score +=1;
            } else {
                message.textContent = 'Incorrect'
            }
            const temps = parent.querySelectorAll('.btns');


            temps.forEach(e => {
                e.disabled = true;
                const bgc = (question.answer == e.textContent) ? 'green' : 'red';
                e.style.backgroundColor = bgc;
            })
            tBtn.style.display = 'block';
        }
    })
    console.log(arr);


}

function pageEles(parent, t, html, c) {
    const ele = document.createElement(t);
    ele.innerHTML = html;
    ele.classList.add(c);
    return parent.appendChild(ele)
}