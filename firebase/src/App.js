import { useState, useEffect } from 'react';

import firebase from './firebaseConnection'
import { toast } from 'react-toastify'
import './App.css';

function App() {

  const [idPost, setIdPost] = useState('')
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {

    async function loadPosts() {
      await firebase.firestore().collection('post')
      .onSnapshot((doc) => {
        let meusPosts = []

        doc.forEach((item) => {
          meusPosts.push({
            id: item.id,
            autor: item.data().autor,
            titulo: item.data().titulo
          })
        })
        setPosts(meusPosts)

      })
      
    }

    
    loadPosts();
    
    


  }, [])


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
    // await firebase.firestore().collection('post')
    // .doc('123')
    // .get()
    // .then((snapshot) => {
    //   toast.success('Dados consultados com sucesso !')
    //   setTitulo(snapshot.data().titulo)
    //   setAutor(snapshot.data().autor)
    // })
    // .catch((err) => {
    //   toast.warning('Gerou algum erro' + err)
    // })

    await firebase.firestore().collection('post')
    
    .get()
    .then((snapshot) => {
      let lista = []
      // Tivermos que fazer um forEach para percorrer os documentos que ficam dentro da coleção do firebase
      snapshot.forEach((doc) => {
        lista.push({ // Aqui jogamos as informações retornadas do banco de dados e colocamos em um objeto dentro do array lista que criamos.
          id: doc.id,
          autor: doc.data().autor,
          titulo: doc.data().titulo
        })
      })
      setPosts(lista) // Aqui foi jogado em nossa State as informações de cada campo retornado e depois criado no array de lista
      toast.success("Dados capturados com sucesso!")

    })
    .catch((e) => {
      toast.warning("Algo deu errado !" + e)
    })


  }

  async function editarPost() {
    await firebase.firestore().collection('post')
    .doc(idPost) // Pegando as informações da State do input da idPost
    .update({ // Mandando atualizar no banco, nos outros usamos o .get() para buscar. 'Atualiza o titulo, pelo valor, e o autor pelo valor que foi passado abaixo.
      titulo: titulo,
      autor: autor

    })
    .then(() => {
      console.log('Dados atualizados com sucesso');
      setIdPost('')
      setTitulo('')
      setAutor('')
    })
    .catch((e) => {
      console.log('Erro ao atualizar' + e);
    })


  }

  async function excluirPost(id) {
    await firebase.firestore().collection('post')
    .doc(id) // Acessando o ID do documento que eu passei como parametro
    .delete() // Deletando o post inteiro
    .then(() => {
      toast.success('Excluido com sucesso !')
    })
  }

  return (
    <div className="App">
      <h1>ReactJS + Firebase :)</h1><br/>

      <label>:ID </label>
      <input type='text' value={idPost} onChange={(e) => setIdPost(e.target.value)}/>

      <label>Titulo: </label>
      <textarea type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>

      <label>Autor: </label>
      <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)} />

      <button onClick={ handleAdd }>Cadastrar</button><br/>
      <button onClick={ buscaPost }>Buscar Post</button><br/>
      <button onClick={ editarPost }>Editar</button><br/>

      <ul>
        {posts.map((post)=> {
          return (
            <li key={post.id}>
              <span>ID: {post.id}</span><br/>
              <span>Titulo: {post.titulo}</span> <br/>
              <span>Autor: {post.autor}</span> <br/>
              <button onClick={ () => excluirPost(post.id)} >Excluir post</button><br/><br/>
            </li>
          )
        })}
      </ul>


    </div>
  );
}

export default App;
