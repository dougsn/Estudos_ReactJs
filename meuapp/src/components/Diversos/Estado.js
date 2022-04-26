import React, { Component } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
class App extends Component {
  constructor(props) {
    super(props); // acessando todos os components do render
    this.state = {
      // Criando o estado
      nome: "Douglas",
      contador: 0,
    };

    this.aumentar = this.aumentar.bind(this); // Esse bind é feito para que a função possa ser acessada
    this.diminuir = this.diminuir.bind(this); // Esse bind é feito para que a função possa ser acessada
  }

  aumentar() {
    let state = this.state; // Para acessar o objeto this.state na variavel
    state.contador += 1; // Para decrementar os numeros
    state.nome = 'Rodrigo'
    this.setState(state); // setando o estado de acordo com o contador ou nome.
  }

  diminuir() {
    let state = this.state;
    const MySwal = withReactContent(Swal)
    if(state.contador === 0) {
       
        MySwal.fire({
            icon: 'success',
            title: 'Opa, chegou no zero !',
            showConfirmButton: false,
            timer: 1500
          })
        return;
    }
    state.contador -= 1;
    state.nome = 'Douglas'
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1>Contador</h1>
        {this.state.nome}
        <h3>
          <button onClick={this.diminuir}>-</button>
          {this.state.contador}
          <button onClick={this.aumentar}>+</button>
        </h3>
      </div>
    );
  }
}

export default App;
