import { Link } from "react-router-dom";


export default function Erro() {

    return (
        <div>
            <h1>Hummm, talvez você esteja procurando:</h1><br></br>
            <Link to="/">Home</Link><br></br>
            <Link to="/sobre">Sobre</Link><br></br>
            <Link to="/contato">Contato</Link><br></br>
        </div>
    )

}