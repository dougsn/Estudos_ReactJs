import React, { useState, useEffect } from "react";

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function addApi() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";

      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          setNutri(json);
        });
    }

    addApi();
  }, []);

  return (
    <div className="container">
      <header>React Nutri</header>
      {nutri.map((nutri) => {
        return (
          <article key={nutri.id} className="post">
            <h1 className="titulo">{nutri.titulo}</h1>
            <img src={nutri.capa} alt="Foto do blog"></img>
            <h3>{nutri.categoria}</h3>
            <p>{nutri.subtitulo}</p>
            <a href="/" className="botao">Acessar</a>
          </article>
        );
      })}
    </div>
  );
}

//// https://sujeitoprogramador.com/rn-api/?api=posts

export default App;
