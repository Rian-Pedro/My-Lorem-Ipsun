import{allP} from './paragraphs.js'

function Text(numP){
    Object.defineProperty(this,'ps',{
        get: function(){
            const text = [];
            for(let i = 0; i < numP; i++){
                text.push(allP[Math.floor(Math.random() * allP.length)]);
            }
            return text;
        }
    });
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const sec = document.querySelector('#texto');
    sec.innerHTML = '';
    const qtd = document.querySelector('#amount');
    if(qtd.value === ''){
        qtd.value = 5
    }
    const text = new Text(qtd.value);
    const p = document.createElement('p');
    for(let i of text.ps){
        p.innerHTML += i;
    }
    sec.appendChild(p);
    qtd.focus();
})
