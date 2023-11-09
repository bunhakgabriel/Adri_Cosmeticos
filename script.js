/*
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

},4000000000)
*/