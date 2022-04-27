import { Link } from "react-router-dom";

export default function Contato() {
  return (
    <div>
      <h3>Contato</h3>
      <p>E-mail: teste@teste.com</p>
      <br></br>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/sobre">Sobre</Link>
    </div>
  );
}
