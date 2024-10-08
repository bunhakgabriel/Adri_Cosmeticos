const btn_busca = document.getElementById('btnBusca');
const btn_voltar = document.getElementById('btnVoltar');
const inputPesquisa = document.getElementById('pesquisa');

const busca = (text, operacao) => {
    const produtos = document.querySelectorAll('.produtos');

    produtos.forEach(item => {
        const h4 = item.querySelector('h4').innerText.toLowerCase();
        item.style.display = (operacao == 'filtrar' && !h4.includes(text.value.toLowerCase())) ? 'none' : 'block';
    })

    if(operacao == 'resetar') text.value = '';
}

btn_busca.addEventListener('click', () => {
    busca(inputPesquisa, 'filtrar');
});

btn_voltar.addEventListener('click', () => {
    busca(inputPesquisa, 'resetar');
})

document.querySelector('.pesquisa').addEventListener('keydown', () => {
    busca(inputPesquisa, 'filtrar');
})
