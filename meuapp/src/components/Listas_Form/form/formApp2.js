import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      email: "",
      senha: "",
      error: "",
    };

    this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar(e) {
    e.preventDefault();
    const { nome, email, senha } = this.state;

    if (nome != "" && email != "" && senha != "") {
      alert(`Nome: ${nome} \nEmail ${email} \nSenha: ${senha}`);
    } else {
      this.setState({ error: "Ops! Está faltando algo" });
    }
  }

  render() {
    return (
      <div>
        <h1> Novo Usuário</h1>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.cadastrar}>
          {" "}
          {/* @@ Função criada para quando o SUBMITE acontecer  */}
          <label>Nome:</label>
          <input
            type="text"
            value={this.state.nome}
            onChange={(e) => this.setState({ nome: e.target.value })}
          ></input>
          <br></br>
          <label>Email:</label>
          <input
            type="email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          ></input>
          <br></br>
          <label>Senha:</label>
          <input
            type="password"
            value={this.state.senha}
            onChange={(e) => this.setState({ senha: e.target.value })}
          ></input>
          <br></br>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default App;
