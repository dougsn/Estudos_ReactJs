<<<<<<< HEAD


export default function Contato() {
  return (
    <div>Contatos<br></br>
    <span>Email: teste@teste.com</span>
    </div>
   
=======
import { Link } from "react-router-dom"

export default function Contato() {
  return (
    <div>
      <h1>Rotas com React - Estou no Contato</h1>
      <Link to="/sobre">Sobre</Link>
      <br></br>

      <Link to="/">Home</Link>
    </div>
>>>>>>> 3c6e54d0ff22979d0e8409237f98dfe6924167ea
  );
}
