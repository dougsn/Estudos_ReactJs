import { Link } from 'react-router-dom'

export default function Erro() {
    return (
        <div>
            <h1>Humm, parece que essa página não existe !</h1><br></br>
            <span>Você pode estar procurando:</span><br></br>
            <Link to="/">Home</Link><br></br>
            <Link to="/sobre">Sobre</Link><br></br>
            <Link to="/contato">Contato</Link><br></br>
        </div>
    )
}