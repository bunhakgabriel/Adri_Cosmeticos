/* Função menu responsivo */
const btn_menu = document.getElementById('btn-menu')
const mobileMenu = document.querySelector('.mobile-menu')

btn_menu.addEventListener('click', e => {
    mobileMenu.classList.contains('active') ?
        mobileMenu.classList.remove('active') :
        mobileMenu.classList.add('active')
}) /* Fim função menu responsivo */

//Função buscar produto
const busca = (operacao) => {
    const text = document.getElementById('pesquisa');
    const produtos = document.querySelectorAll('.produtos');
    produtos.forEach(item => {
        const h4 = item.querySelector('h4').innerText.toLowerCase();
        item.style.display = (operacao == 'filtrar' && !h4.includes(text.value.toLowerCase())) ? 'none' : 'block';
    })

    if(operacao == 'resetar') text.value = '';
}

document.getElementById('btnBusca').addEventListener('click', () => {
    busca('filtrar');
});

document.getElementById('btnVoltar').addEventListener('click', () => {
    busca('resetar');
})

document.querySelector('.pesquisa').addEventListener('keydown', () => {
    busca('filtrar');
})
