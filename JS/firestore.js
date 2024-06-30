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
const array_db = new Array;
const divMaisProdutos = document.getElementById('teste');
const testeFirebase = document.getElementById('testeFirebase');

const criarDiv = () => {
    return document.createElement('div')
}

const criarLinkWpp = (produto) => {
    const array = produto.split(" ");
    let link = "https://wa.me/5541996983316?text=Olá,+boa+tarde!+Tenho+interesse+em+um+de+seus+produtos,+gostaria+de+saber+mais+informações+sobre+o(a)"

    array.forEach(i => link += ` ${i}`)
    return link;
}

const renderizarDisplaynone = (array_db) => {
    array_db.forEach(i => {
        const divDisplayNone = criarDiv();
        divDisplayNone.classList.add('display-none');

        const divProdutoDisplayNone = criarDiv();
        divProdutoDisplayNone.classList.add('produtos-display-none', 'produto');

        const img = document.createElement('img');
        img.setAttribute('src', i.url);

        const divConteudo = criarDiv();
        divConteudo.classList.add('conteudo');

        const h1 = document.createElement('h1');
        h1.innerText = i.produto;

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
        divConteudo.appendChild(h1);
        divConteudo.appendChild(p);
        divConteudo.appendChild(divSaibaMais);
        divProdutoDisplayNone.appendChild(img);
        divProdutoDisplayNone.appendChild(divConteudo);
        divDisplayNone.appendChild(divProdutoDisplayNone);
        testeFirebase.appendChild(divDisplayNone);

    })
}

const renderizarProdutos = (array_db) => {
    array_db.forEach(i => {
        const div = criarDiv();
        const img = document.createElement('img');
        const h4 = document.createElement('h4');
        div.classList.add('produtos');
        
        img.setAttribute('src', i.url);
        h4.innerText = i.produto;
        div.appendChild(img);
        div.appendChild(h4);
        divMaisProdutos.appendChild(div)
    })
    renderizarDisplaynone(array_db)
}



const buscarCollectionData = async () => {
    const doc = await getDocs(collection(db, "manicurePedicure"));
    doc.forEach(doc => {
        array_db.push(doc.data())
    })
    renderizarProdutos(array_db)
};

buscarCollectionData();


