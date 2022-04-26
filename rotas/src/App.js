import React, { useState, useEffect } from "react";

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    let url = "https://sujeitoprogramador.com/rn-api/?api=posts";

    function addApi() {
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
          <h1>{nutri.titulo}</h1>
          <img src={nutri.capa} alt="Foto relacionado ao post"/>
          <h2>{nutri.categoria}</h2>
          <p className="subtitulo">{nutri.subtitulo}</p>
          <a href="/" className="botao">Acessar</a>
        </article>
        )
      })}
    </div>
  );
}

//// https://sujeitoprogramador.com/rn-api/?api=posts

export default App;
