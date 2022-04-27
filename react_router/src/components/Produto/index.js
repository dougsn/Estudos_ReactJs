import { useParams } from "react-router-dom";

export default function Produto() {
  const { id } = useParams();

  return (
    <div>
        <h1>Bem-vindo(a) a Página de Produtos</h1>

        <p>Você está visualizando o produto: { id }</p>
    </div>
  );
}

// @@ Para usarmos o id de forma dinânica, é necessário importarmos o useParm, para capturarmos o ENDPOINT da URL, e colocarmos em uma constante, conforme foi feito acima... e depois utilizarmos na página ou em outro lugar.
