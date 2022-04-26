import React, { useState, useEffect, useMemo, useCallback } from "react";
import "./index.css";

function App() {
  // o primeiro parametro é o nome da state e o segundo é o parametro para atualizar o valor da state

  const [tarefas, setTarefas] = useState([]);
  
  const [input, setInput] = useState("");

  //Também pode ser feito para substituir o componentDidMount, que é executado quando carrega o component na nossa tela.. Deixa-se o segundo parametro vazio para sempre que carregar na tela, chamar a função que está criada.

  useEffect(()=>{
    const tarefaStorage = localStorage.getItem("tarefas")

    if(tarefaStorage) {
      setTarefas(JSON.parse(tarefaStorage))
    }

  }, [])

  // Recebe 2 parametros, o primeiro é uma função que será acionada, quando houver alguma mudança no segundo paramentro. O segundo parametro é um array, que pode receber vários, é uma state que fica monitorando e quando algo muda, ele chama a função do primeiro parametro.. Substitui o componentDidUpdate

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
  }, [tarefas])



  // Criando uma função para add a tarefa. Foi transformado em um Hook com o useCallback, para que ela não seja processado de forma desncessário, toda vez que digitarmos algo no input.. Sua construção é desse forma, e o seu segundo parametro é uma array com todos os hooks utilizados dentro da função do primeiro parametro.

  const handleAdd = useCallback(() => {
    setTarefas([...tarefas, input])
    setInput("")
  }, [input, tarefas])


  // O useMemo é utilizado para determinada função ser executada após um outra ser acionada, conforme o botão de criar. E não utilizar todo o retorna da função.

  const qtdTarefas = useMemo(() => tarefas.length, [tarefas])


  return (
    <div>
      <ul>
        {tarefas.map(tarefas => (
          <li key={tarefas}>{tarefas}</li>
        ))}
      </ul>
      <strong>Faltam {qtdTarefas} para terminar </strong>
      <br></br>
      <input type='text' value={input} onChange={e => setInput(e.target.value)}></input>
      <button type="button" onClick={handleAdd}>Criar Tarefa</button>
    </div>
  );
}

export default App;

// Com Hooks, dá para usarmos funções de modo mais fácil, conforme criado acima.. E também podemos ter várias states, com as const's acima..
