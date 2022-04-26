import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
     form: {
       nome: "",
       email:"",
       senha: '',
       sexo: ''

     }
    };
    this.dadosForm = this.dadosForm.bind(this)
    // this.trocaEmail = this.trocaEmail.bind(this);
    // this.trocaSexo = this.trocaSexo.bind(this);
  }

  // trocaEmail(e) {
  //   let valorDigitado = e.target.value; // Pega o valor do elemento que está com a função, que no caso é o input

  //   this.setState({ email: valorDigitado }); // Modifica o estado do elemento.
  // }

  // trocaSexo(e) {
  //   let valorDigitado = e.target.value;
  //   this.setState({sexo: valorDigitado})
  // }

  dadosForm(e){ // Foi criado uma única função, para pegar os valores da propriedade NAME e realizar a substituição do statede acordo com o target.value do input.
    let form = this.state.form;
    form[e.target.name] = e.target.value
    this.setState({form: form})

  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        Nome:
        <input type='text' name="nome" value={this.state.form.nome} onChange={this.dadosForm}></input>
        <br></br>
        E-mail:
        <input
          type="email"
          name="email"
          value={this.state.form.email}
          onChange={this.dadosForm}
        ></input>{" "}
        <br></br>
        Senha:
        <input
          type="password"
          name="senha"
          value={this.state.form.senha}
          onChange={this.dadosForm}
        ></input>
        <br></br>
        {/* Fazendo a função onChange em linha.. */}
        Sexo:
        <select name="sexo" onChange={this.dadosForm}>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>
        <div>
          <h3>{this.state.form.nome}</h3>
          <h3>{this.state.form.email}</h3>
          <h3>{this.state.form.senha}</h3>
          <h3>{this.state.form.sexo}</h3>
        </div>
      </div>
    );
  }
}

export default App;
