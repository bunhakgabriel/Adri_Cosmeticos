/* Função menu responsivo */

const btn_menu = document.getElementById('btn-menu')
const mobileMenu = document.querySelector('.mobile-menu')

btn_menu.addEventListener('click', e => {

    if(mobileMenu.classList.contains('active')){
        mobileMenu.classList.remove('active')
    } else{
        mobileMenu.classList.add('active')
    }

}) /* Fim função menu responsivo */

/*Função carrosel de imagens */


let cont = 1
let margin_left = -8.3
let img1 = document.querySelector('.img1')

let init = setInterval( () =>{

    let margin;
    img1.style.marginLeft = '0%'            

    if(cont > 0){
        margin = (cont * margin_left - 0.08 * cont).toFixed(1)
        margin = margin + '%'
        img1.style.marginLeft = margin   
    }

    cont++
    if(cont == 10){cont = 0}            

},4000)


/* Função vizualizar produtos individualmente */


let divDisplayNone = document.getElementsByClassName('display-none')
let produtos = document.getElementsByClassName('produtos')

renderizarIndividual = () => {
    for(let c = 0; c < produtos.length; c++){
        produtos[c].addEventListener('click', () => {
            divDisplayNone[c].classList.add('active')
        })
    }
    
    for(let c = 0; c < produtos.length; c++){
        divDisplayNone[c].addEventListener('click', () => {
            divDisplayNone[c].classList.remove('active')
        })
    }
}

setTimeout(renderizarIndividual, 2000)

/* Função tipewriter */

const titulo = [
    'A','t','r','a','n','s','f','o','r','m',
    'a','ç','ã','o','q','u','e','v','o','c',
    'ê','d','e','s','e','j','a','c','o','m',
    'e','ç','a','a','q','u','i','.'
]

const typeWriterTitle = document.getElementById('typeWriterTitle')
let c = 0

const typewriterInit = () => {

    typeWriterTitle.innerText += titulo[c]

    if(c === 0 || c === 13 || c === 16 || c === 20 || c === 26 || c === 32){
        typeWriterTitle.innerHTML += `&nbsp;`
    }

    if(c === 13 || c === 32){
        typeWriterTitle.innerHTML += `<br>` 
    }

    c++
    if(c >= 38){
        clearInterval(interval)
    }
}

//const interval = setInterval(typewriterInit, 100)

/* Função scroll lateral imagens */


