<<<<<<< HEAD

export default function Sobre() {
  return (
    <div>Sobre o curso ReactJs...</div>
  );
}

=======
import  {Link } from "react-router-dom"
export default function Sobre() {
  return (
    <div>
      <h1>Rotas com React - Estou no Sobre</h1>
      <Link to="/contato">Contato</Link>
      <br></br>

      <Link to="/">Home</Link>
    </div>
  );
}
>>>>>>> 3c6e54d0ff22979d0e8409237f98dfe6924167ea
