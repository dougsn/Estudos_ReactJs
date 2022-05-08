// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB0aOXRhG8nBq_AK1FOH6xc9d7GFXdwBGM",
  authDomain: "curso-9cd79.firebaseapp.com",
  projectId: "curso-9cd79",
  storageBucket: "curso-9cd79.appspot.com",
  messagingSenderId: "1011585869389",
  appId: "1:1011585869389:web:7c047bdc92d3964fe35e04",
  measurementId: "G-WP8Y0KZT2Y"
};

// Initialize Firebase
if(!firebase.apps.length){ // Verificando se há alguma conexão, se não estiver, faça, se tiver, não faça outra conexão.
    firebase.initializeApp(firebaseConfig);
}



export default firebase;

// Cloud Firestore: Local para criar o banco de dados (No-sql), como se fosse chave e valor.

// Depois de criar o banco de dados, podemos começar a criar a estrutura do nosso banco de dados.

// @@ A COLEÇÃO é como se fosse a nossa TABELA
// @@ O DOCUMENTO é o local aonde fica armazenado os valores da tabela. (STRINGS, NUMBER, BOOLEANS e etc)
