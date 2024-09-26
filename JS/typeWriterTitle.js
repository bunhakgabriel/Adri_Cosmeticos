/* Função tipewriter */

const titulo = [
    'M','a','r','c','a','s','d','e','c','o',
    'n','f','i','a','n','ç','a','p','a','r',
    'a','p','o','t','e','n','c','i','a','l',
    'i','z','a','r','s','e','u','s','e','r',
    'v','i','ç','o','.'
]

const typeWriterTitle = document.getElementById('typeWriterTitle')
let c = 0

const typewriterInit = () => {

    typeWriterTitle.innerText += titulo[c]

    if(c === 5 || c === 7 || c === 16 || c === 20 || c === 33 || c === 36){
        typeWriterTitle.innerHTML += `&nbsp;`
    }

    // if(c === 13 || c === 32){
    //     typeWriterTitle.innerHTML += `<br>` 
    // }

    c++
    if(c >= 45){
        clearInterval(interval)
    }
}

const interval = setInterval(typewriterInit, 100)