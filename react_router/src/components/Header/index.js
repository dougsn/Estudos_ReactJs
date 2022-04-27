import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <h2>Header da Página</h2>
      </header>

      <Link to="/">Home</Link>
      <br></br>
      <Link to="/contato">Contato</Link>
      <br></br>
      <Link to="/sobre">Sobre</Link>
      <br></br>
    </div>
  );
}
