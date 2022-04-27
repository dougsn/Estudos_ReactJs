import { useParams } from 'react-router-dom'

export default function Produto() {

  const { id } = useParams();
  return (
    <div>
      <h1>Grade de produtos</h1>
      <br></br>
      <span>Produto selecionado: {id} </span>
    </div>
  );
}

// @@ Para usarmos o id de forma dinânica, é necessário importarmos o useParm, para capturarmos o ENDPOINT da URL, e colocarmos em uma constante, conforme foi feito acima... e depois utilizarmos na página ou em outro lugar.