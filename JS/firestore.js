import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getFirestore, collection, addDoc, getDocs, setDoc, doc } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'

const btnCadastrar = document.getElementById('cadastrar');
const btnBuscar = document.getElementById('btn');

const firebaseConfig = {
    apiKey: "AIzaSyCsPXX5r_KI24Qfr6KrhoLbLyWNX9B-4n4",
    authDomain: "fir-63a98.firebaseapp.com",
    projectId: "fir-63a98",
    storageBucket: "fir-63a98.appspot.com",
    messagingSenderId: "553276039894",
    appId: "1:553276039894:web:3181db5413c8a7c9b55f77"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const buscarCollectionData = async () => {
    const querySnapshot = await getDocs(collection(db, "Produtos"));
    const div = document.getElementById("imagens")
    div.innerHTML = ``;
    
    querySnapshot.forEach( doc => {
        const img = document.createElement("img")
        const h1 = document.createElement("h1")
        h1.innerText = doc.data().nome
        img.setAttribute('src', doc.data().imagem)
        div.appendChild(h1)
        div.appendChild(img)
    })

};

const cadastrarImagem = async () => {

    const imagem = {
        id: Math.random().toString(),
        imagem: document.getElementById("url").value,
        nome: document.getElementById("nome").value
    }
    //const docRef = await addDoc(collection(db, "Produtos"), imagem)
    const docRef = await setDoc(doc(db, "Produtos", imagem.id), imagem);
};

btnBuscar.addEventListener('click', () => {
    buscarCollectionData();
})

btnCadastrar.addEventListener('click', () => {
    cadastrarImagem();
})

//doc.data() retorna todos os dados de um documento firestore