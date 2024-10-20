/* Função tipewriter */
const titulo = [
    'G','r','a','n','d','e','s','m','a','r',
    'c','a','s','e','e','x','c','e','l','e',
    'n','t','e','s','p','r','o','d','u','t',
    'o','s','.'
]

const typeWriterTitle = document.getElementById('typeWriterTitle')
let c = 0

const typewriterInit = () => {
    typeWriterTitle.innerText += titulo[c]
    if(c === 6 || c === 12 || c === 13 || c === 23){
        typeWriterTitle.innerHTML += `&nbsp;`
    }
    if(c === 33){
        typeWriterTitle.innerHTML += `<br>` 
    }
    c++
    if(c >= 33){
        clearInterval(interval)
    }
}
const interval = setInterval(typewriterInit, 100)