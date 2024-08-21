import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { getFirestore, getDocs, collection, addDoc, setDoc, doc } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js';

const firebaseConfig = {
    apiKey: "AIzaSyCg3ZIpBl2jxW-McpRXKoD1vN51T_pxmsc",
    authDomain: "adricosmeticos-88d41.firebaseapp.com",
    projectId: "adricosmeticos-88d41",
    storageBucket: "adricosmeticos-88d41.appspot.com",
    messagingSenderId: "535046942907",
    appId: "1:535046942907:web:221ce40943dfa84d05399e"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const manicure = document.getElementById('manicurePedicure');
const produtosManicure = document.querySelector('.produtosManicure');

const salao = document.getElementById('salao');
const produtosSalao = document.querySelector('.produtosSalao')

const lash = document.getElementById('lash');
const produtosLash = document.querySelector('.produtosLash');



const criarDiv = () => {
    return document.createElement('div')
}

const displayNoneLoader = () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = 'none'
        document.getElementById("loading-overlay").style.display = 'none'
    }, 1200)
}

const criarLinkWpp = (produto) => {
    const array = produto.split(" ");
    let link = "https://wa.me/5541996983316?text=Olá,+boa+tarde!+Tenho+interesse+em+um+de+seus+produtos,+gostaria+de+saber+mais+informações+sobre+o(a)"

    array.forEach(i => link += ` ${i}`)
    return link;
}

const renderizarDisplaynone = (array_db, colecao) => {
    array_db.forEach(i => {
        const divDisplayNone = criarDiv();
        divDisplayNone.classList.add('display-none');

        const divProdutoDisplayNone = criarDiv();
        divProdutoDisplayNone.classList.add('produtos-display-none', 'produto');

        const img = document.createElement('img');
        img.setAttribute('src', i.url);

        const divConteudo = criarDiv();
        divConteudo.classList.add('conteudo');

        const pCod = document.createElement('p');
        pCod.innerText = 'Código: ' + i.codigo;
        pCod.style.margin = '0px';

        const h1 = document.createElement('h1');
        h1.innerText = i.produto;
        h1.style.margin = '0px'

        const p = document.createElement('p');
        p.innerText = i.descricao;

        const divSaibaMais = criarDiv();
        divSaibaMais.classList.add('saibaMais');

        const h3 = document.createElement('h3');
        h3.innerText = `R$ ${i.preco}`

        const a = document.createElement('a');
        a.innerText = 'Saiba mais';
        a.setAttribute('href', criarLinkWpp(i.produto));

        divSaibaMais.appendChild(h3);
        divSaibaMais.appendChild(a);
        divConteudo.appendChild(pCod);
        divConteudo.appendChild(h1);
        divConteudo.appendChild(p);
        divConteudo.appendChild(divSaibaMais);
        divProdutoDisplayNone.appendChild(img);
        divProdutoDisplayNone.appendChild(divConteudo);
        divDisplayNone.appendChild(divProdutoDisplayNone);

        if (colecao == 'manicurePedicure') {
            manicure.appendChild(divDisplayNone);
        } else if (colecao == 'salao') {
            salao.appendChild(divDisplayNone);
        } else if (colecao == 'lash') {
            lash.appendChild(divDisplayNone);
        }

    })
    if(param.size === 0 && !sessao){  
        displayNoneLoader()
    }
}

const renderizarProdutos = (array_db, colecao) => {

    array_db.forEach(i => {
        const div = criarDiv();
        const img = document.createElement('img');
        const h4 = document.createElement('h4');
        div.classList.add('produtos');

        img.setAttribute('src', i.url);
        h4.innerText = i.produto;

        if (i.estoque < 1) {
            div.innerHTML = `<h5>Indisponivel no momento</h5>`
            div.style.opacity = '0.3';
        }

        div.appendChild(img);
        div.appendChild(h4);

        if (colecao == 'manicurePedicure') {
            produtosManicure.appendChild(div);
        } else if (colecao == 'salao') {
            produtosSalao.appendChild(div);
        } else if (colecao == 'lash') {
            produtosLash.appendChild(div);
        }
    })
    renderizarDisplaynone(array_db, colecao)
}



const buscarCollectionData = async () => {
    const colecoes = ["manicurePedicure", "salao", "lash"]

    colecoes.forEach(async (col) => {
        const array_db = new Array;
        const doc = await getDocs(collection(db, col));
        doc.forEach(doc => {
            array_db.push(doc.data())
        })
        renderizarProdutos(array_db, col);
    })
};
const abrirProdutoIndividual = async (codigo) => {
        let divDisplayNone = document.getElementsByClassName('display-none')
        let produtos = document.querySelectorAll('.produtos')
        for(let c = 0; c < produtos.length; c++){
            if(produtos[c].innerText === codigo){
                divDisplayNone[c].classList.add('active')
            }
        }
}

let param;
let sessao;
window.addEventListener('load', function () {
    const url = new URL(this.window.location.href);
    param = new URLSearchParams(url.search);
    sessao = param.get('sessao');
    const nameProduto = param.get('codigo')
    buscarCollectionData()

    this.setTimeout(() => {
       if(sessao){
        document.getElementById(sessao).scrollIntoView({ behavior: 'smooth' });
        return displayNoneLoader();
    } else if(nameProduto){
        abrirProdutoIndividual(nameProduto)
        return displayNoneLoader()
    }
    }, 1500)
});
