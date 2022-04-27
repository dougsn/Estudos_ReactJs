import { Link } from "react-router-dom"

export default function Contato() {
  return (
    <div>
      <h1>Rotas com React - Estou no Contato</h1>
      <Link to="/sobre">Sobre</Link>
      <br></br>

      <Link to="/">Home</Link>
    </div>
  );
}
