
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
