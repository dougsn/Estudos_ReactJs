
import { useContext } from "react";
import { UserContext } from "../../contexts/user";

function Nome() {

  const { alunos, setAlunos, novoNome, setNovoNome } = useContext(UserContext) // Pegando as informações que foram repassadas pelo App.js

  function trocaNome() {
    setAlunos(novoNome)
  }

  return (
    <div>
      <span style={{ color: '#FF0000' }} >Bem vindo: {alunos}</span>
      <br/>
      <input type="text" onChange={(e) => setNovoNome(e.target.value)}/>
      <button onClick={trocaNome}>Troca nome</button>
    </div>
  );
}

export default Nome;
