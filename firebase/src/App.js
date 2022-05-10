import { useState } from "react";

import firebase from "./firebaseConnection";
import { toast } from "react-toastify";
import "./App.css";

function App() {
  // const [idPost, setIdPost] = useState("");
  // const [titulo, setTitulo] = useState("");
  // const [autor, setAutor] = useState("");
  // const [posts, setPosts] = useState([]);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')

  const [user, setUser] = useState({})

  // const [user, setUser] = useState(false);
  // const [userLogged, setuserLogged] = useState({});

  // useEffect(() => {
  //   async function loadPosts() {
  //     await firebase
  //       .firestore()
  //       .collection("post")
  //       .onSnapshot((doc) => {
  //         let meusPosts = [];

  //         doc.forEach((item) => {
  //           meusPosts.push({
  //             id: item.id,
  //             autor: item.data().autor,
  //             titulo: item.data().titulo,
  //           });
  //         });
  //         setPosts(meusPosts);
  //       });
  //   }

  //   loadPosts();
  // }, []);

  // useEffect(() => {

  //   async function checkLogin() {
  //     // Verifica se já tem um login ou não, fica olhando a aplicação..
  //     await firebase.auth().onAuthStateChanged((user) => {
  //       if(user) {
  //         // se tem usuario logado entra aqui dentro
  //         setUser(true)
  //         setuserLogged({ // Essas informações são reaproveitadas no HTML, para renderização de informações
  //           uid: user.uid,
  //           email: user.email
  //         })
  //       }else {
  //         // não tem usuario logado
  //         setUser(false)
  //         setuserLogged({})

  //       }
  //     })

  //   } 

  //   checkLogin();


  // }, [])


  // Se usa o async await, quando vamos consultar algo externamente na internet.
  // async function handleAdd() {
  //   // Passando os parâmetros que queremos acessar. o .firestore() é o banco de dados, o .collection('nome') é a tabela, o .doc('nome') é o ID da tabela que queremos e o .set({}) são os parâmetros que queremos cadastrar, tem que se igualzinho ao que foi criado no Cloud Firestore.

  //   await firebase
  //     .firestore()
  //     .collection("post")
  //     // .doc('12345') @@ Foi comentado para fazer algo dinâmico
  //     // .set({
  //     //   autor: autor, // Pegando os dados do estado autor
  //     //   titulo: titulo // Pegando os dados do estado titulo

  //     // })
  //     .add({
  //       // Criando um ID do doc aleatório
  //       titulo: titulo,
  //       autor: autor,
  //     })
  //     .then(() => {
  //       toast.success("Dados cadastrados com sucesso !");
  //       setTitulo("");
  //       setAutor("");
  //     })
  //     .catch((err) => {
  //       toast.warning("Gerou algum erro" + err);
  //     });
  // }

  // async function buscaPost() {
  //   // await firebase.firestore().collection('post')
  //   // .doc('123')
  //   // .get()
  //   // .then((snapshot) => {
  //   //   toast.success('Dados consultados com sucesso !')
  //   //   setTitulo(snapshot.data().titulo)
  //   //   setAutor(snapshot.data().autor)
  //   // })
  //   // .catch((err) => {
  //   //   toast.warning('Gerou algum erro' + err)
  //   // })

  //   await firebase
  //     .firestore()
  //     .collection("post")

  //     .get()
  //     .then((snapshot) => {
  //       let lista = [];
  //       // Tivermos que fazer um forEach para percorrer os documentos que ficam dentro da coleção do firebase
  //       snapshot.forEach((doc) => {
  //         lista.push({
  //           // Aqui jogamos as informações retornadas do banco de dados e colocamos em um objeto dentro do array lista que criamos.
  //           id: doc.id,
  //           autor: doc.data().autor,
  //           titulo: doc.data().titulo,
  //         });
  //       });
  //       setPosts(lista); // Aqui foi jogado em nossa State as informações de cada campo retornado e depois criado no array de lista
  //       toast.success("Dados capturados com sucesso!");
  //     })
  //     .catch((e) => {
  //       toast.warning("Algo deu errado !" + e);
  //     });
  // }

  // async function editarPost() {
  //   await firebase
  //     .firestore()
  //     .collection("post")
  //     .doc(idPost) // Pegando as informações da State do input da idPost
  //     .update({
  //       // Mandando atualizar no banco, nos outros usamos o .get() para buscar. 'Atualiza o titulo, pelo valor, e o autor pelo valor que foi passado abaixo.
  //       titulo: titulo,
  //       autor: autor,
  //     })
  //     .then(() => {
  //       console.log("Dados atualizados com sucesso");
  //       setIdPost("");
  //       setTitulo("");
  //       setAutor("");
  //     })
  //     .catch((e) => {
  //       console.log("Erro ao atualizar" + e);
  //     });
  // }

  // async function excluirPost(id) {
  //   await firebase
  //     .firestore()
  //     .collection("post")
  //     .doc(id) // Acessando o ID do documento que eu passei como parametro
  //     .delete() // Deletando o post inteiro
  //     .then(() => {
  //       toast.success("Excluido com sucesso !");
  //     });
  // }

  async function novoUsuario() {
    // vai no serviço de autenticação e pede para criar um novo usuario e senha.. Foi importado o .auth() no arquivo de config do firebaseConnection
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then( async (value) => {
        await firebase.firestore().collection('users')
        .doc(value.user.uid)
        .set({
          nome: nome,
          cargo: cargo,
          status: true
        })
        setEmail('')
        setSenha('')
        setNome('')
        setCargo('')
        toast.success("Cadastrado com sucesso");
      })
      .catch((e) => {
        // toast.warning('Error' + e)
        if (e.code === "auth/weak-password") {
          toast.warning("Senha muito fraca");
        } else if (e.code === "auth/email-already-in-use") {
          toast.warning("Esse email já existe");
        }
      });
  }

  async function logout() {
    await firebase.auth().signOut(); // desconectando da conta
    setUser({})
  }

  // async function fazerLogin() {
  //   await firebase.auth().signInWithEmailAndPassword(email, senha)
  //   .then(() => {
  //     toast.success("Logado com sucesso")
  //   })
  //   .catch((e) => {
  //     toast.warning("Erro" + e)
  //   })
  // }

  async function login() {
    await firebase.auth().signInWithEmailAndPassword(email, senha)
    .then( async (value) => {
      await firebase.firestore().collection('users')
      .doc(value.user.uid)
      .get()
      .then((snapshot) => {
        setUser({
          nome: snapshot.data().nome,
          cargo: snapshot.data().cargo,
          status: snapshot.data().status,
          email: value.user.email
        });
      })

    })
  }

  return (
    <div className="App">
      <h1>ReactJS + Firebase :)</h1>
      <br />

      {/* Quando o user for TRUE, renderize o que tiver abaixo
      {user && ( 
        <div>
          <strong>Seja bem vindo ! (Você está logado !)</strong><br/>
          <span>{userLogged.uid} - {userLogged.email}</span><br/><br/>  
        </div>
      )} */}

      <label>Nome</label>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <label>Cargo</label>
      <input
        type="text"
        value={cargo}
        onChange={(e) => setCargo(e.target.value)}
      />

      <label>E-mail</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Senha</label>
      <input
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      
      

      

      {/* <button onClick={fazerLogin}>Fazer login</button> */}
      <button onClick={login}>Login</button>
      <br />
      <button onClick={novoUsuario}>Cadastrar</button>
      <br />
      <br />
      <button onClick={logout}>Sair da conta</button>
{/* 
      <hr />

      <h2>Banco de dados:</h2>
      <label>:ID </label>
      <input
        type="text"
        value={idPost}
        onChange={(e) => setIdPost(e.target.value)}
      />

      <label>Titulo: </label>
      <textarea
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <label>Autor: </label>
      <input
        type="text"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
      /> */}

      {/* <button onClick={handleAdd}>Cadastrar</button>
      <br />
      <button onClick={buscaPost}>Buscar Post</button>
      <br />
      <button onClick={editarPost}>Editar</button>
      <br /> */}

      {/* <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <span>ID: {post.id}</span>
              <br />
              <span>Titulo: {post.titulo}</span> <br />
              <span>Autor: {post.autor}</span> <br />
              <button onClick={() => excluirPost(post.id)}>Excluir post</button>
              <br />
              <br />
            </li>
          );
        })}
      </ul> */}
      <hr/><br/>
      {/* Verificando se o Objeto está vazio ou não para a renderização condicional. */}
      {Object.keys(user).length > 0 && (
        <div>
          <strong>Olá </strong> {user.nome}<br/>
          <strong>Cargo: </strong> {user.cargo}<br/>
          <strong>Email: </strong> {user.email}<br/>
          <strong>Status: </strong> {user.status ? 'Ativo' : 'Desativado'} 
         
        </div>
      )}


    </div>
  );
}

export default App;
