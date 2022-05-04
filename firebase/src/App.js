import { useState } from 'react';

import firebase from './firebaseConnection'
import { toast } from 'react-toastify'
import './App.css';

function App() {

  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')


  // Se usa o async await, quando vamos consultar algo externamente na internet.
  async function handleAdd() {

    // Passando os parâmetros que queremos acessar. o .firestore() é o banco de dados, o .collection('nome') é a tabela, o .doc('nome') é o ID da tabela que queremos e o .set({}) são os parâmetros que queremos cadastrar, tem que se igualzinho ao que foi criado no Cloud Firestore.

    await firebase.firestore().collection('post')
    // .doc('12345') @@ Foi comentado para fazer algo dinâmico
    // .set({
    //   autor: autor, // Pegando os dados do estado autor 
    //   titulo: titulo // Pegando os dados do estado titulo
     
    // })
    .add({ // Criando um ID do doc aleatório
      titulo: titulo,
      autor: autor
    })
    .then(() => {
      toast.success('Dados cadastrados com sucesso !')
      setTitulo('')
      setAutor('')
    })
    .catch((err) => {
      toast.warning('Gerou algum erro' + err)
    })

  }

  async function buscaPost() {
    await firebase.firestore().collection('post')
    .doc('123')
    .get()
    .then((snapshot) => {
      toast.success('Dados consultados com sucesso !')
      setTitulo(snapshot.data().titulo)
      setAutor(snapshot.data().autor)
    })
    .catch((err) => {
      toast.warning('Gerou algum erro' + err)
    })

  }


  return (
    <div className="App">
      <h1>ReactJS + Firebase :)</h1><br/>

      <label>Titulo: </label>
      <textarea type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>

      <label>Autor: </label>
      <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)} />

      <button onClick={ handleAdd }>Cadastrar</button>
      <button onClick={ buscaPost }>Buscar Post</button>

    </div>
  );
}

export default App;
