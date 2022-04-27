<<<<<<< HEAD

export default function Home() {
  return (
    <div>Bem vindo a página HOME !</div>
  );
}

=======
import { Link }  from "react-router-dom"


export default function Home() {
  return (
    <div>
      <h1>Rotas com React - Estou no Home</h1>
      <Link to="/sobre">Sobre</Link><br></br>
      
      <Link to="/contato">Contatos</Link>

      
    </div>
  );
}
>>>>>>> 3c6e54d0ff22979d0e8409237f98dfe6924167ea
