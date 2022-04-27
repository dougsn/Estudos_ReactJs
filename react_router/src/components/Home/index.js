import { Link } from "react-router-dom"

export default function Home() {

    return (
        <div>
           <h1>Bem-vindo(a) a HOME</h1><br></br>
           <Link to="/sobre">Sobre</Link><br></br>
           <Link to="/contato">Contato</Link>
        </div>
    )
}