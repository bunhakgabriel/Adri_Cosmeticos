/* Função menu responsivo */
const btn_menu = document.getElementById('btn-menu')
const mobileMenu = document.querySelector('.mobile-menu')

btn_menu.addEventListener('click', e => {
    mobileMenu.classList.contains('active') ?
        mobileMenu.classList.remove('active') :
        mobileMenu.classList.add('active')
}) /* Fim função menu responsivo */

/*Função carrosel de imagens */
let cont = 1
let margin_left = -8.3
let img1 = document.querySelector('.img1')

let init = setInterval(() => {
    let margin;
    img1.style.marginLeft = '0%'
    if (cont > 0) {
        margin = (cont * margin_left - 0.08 * cont).toFixed(1)
        margin = margin + '%'
        img1.style.marginLeft = margin
    }
    cont++
    if (cont == 10) cont = 0 
}, 4000)

/* Função vizualizar um produto individualmente a partir do carrossel de imagens */
const reloadPageProduto = (data) => {
    const params = new URLSearchParams();
    params.append('codigo', data)
    const baseUrl = "http://127.0.0.1:5500/produtos.html?" + params.toString()
    window.location.href = baseUrl;
}
const btn_carrossel_produtos = document.querySelectorAll('.link_carrossel_produtos');
btn_carrossel_produtos.forEach(btn => {
    btn.addEventListener('click', e => {
        let data = e.target.getAttribute('data-value');
        reloadPageProduto(data);
    })
});

/* Função mudar para pagina produtos */
const btn_categorias = document.querySelectorAll('.btn_categorias')

const reloadPage = (coletion) => {
    const params = new URLSearchParams();
    params.append('sessao', coletion)
    const baseUrl = "http://127.0.0.1:5500/produtos.html?" + params.toString()
    console.log(baseUrl)
    window.location.href = baseUrl;
}
btn_categorias.forEach(button => {
    button.addEventListener('click', e => {
        let data = e.target.getAttribute('data-value')
        reloadPage(data);
    })
})

