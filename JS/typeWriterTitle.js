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

const interval = setInterval(typewriterInit, 100)