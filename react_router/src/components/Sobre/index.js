import { Link } from "react-router-dom"

export default function Sobre() {
    return (
        <div>
            <h1>Saiba mais</h1><br></br>
            <Link to="/">Home</Link><br></br>
            <Link to="/contato">Contato</Link>
        </div>
    )
}