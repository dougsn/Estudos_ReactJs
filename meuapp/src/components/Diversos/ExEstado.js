import React, { Component } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

class RenderApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Douglas",
      cargo: "Programador",
      idade: 23,
      facebook: "https://google.com",
    };

    this.mudarNome = this.mudarNome.bind(this);
    this.mudarCargo = this.mudarCargo.bind(this);
    this.mudarIdade = this.mudarIdade.bind(this);
  }

  mudarNome() {
    let input = document.querySelector(".inputNome").value;
    let state = this.state;
    const MySwal = withReactContent(Swal);

    if (input != "") {
      MySwal.fire({
        icon: "success",
        title: "Nome trocado com sucesso !",
        showConfirmButton: false,
        timer: 1500,
      });
      state.name = input;
      console.log(state);
      this.setState(state);
    } else {
      MySwal.fire({
        icon: "error",
        title: "Campo Vazio !",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  mudarCargo() {
    let input = document.querySelector(".inputCargo").value;
    let state = this.state;
    const MySwal = withReactContent(Swal);
    if (input != "") {
        MySwal.fire({
          icon: "success",
          title: "Cargo trocado com sucesso !",
          showConfirmButton: false,
          timer: 1500,
        });
        state.cargo = input;
        console.log(state);
        this.setState(state);
      } else {
        MySwal.fire({
          icon: "error",
          title: "Campo Vazio !",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    
  }

  mudarIdade() {
    let input = document.querySelector(".inputIdade").value;
    let state = this.state;
    const MySwal = withReactContent(Swal);

    if (input != "") {
        MySwal.fire({
          icon: "success",
          title: "Idade trocada com sucesso !",
          showConfirmButton: false,
          timer: 1500,
        });
        state.idade = input;
        console.log(state);
        this.setState(state); // o setState realiza efetivamente a mudança no estado
      } else {
        MySwal.fire({
          icon: "error",
          title: "Campo Vazio !",
          showConfirmButton: false,
          timer: 1500,
        });
      }

  }

  render() {
    return (
      <div>
        <Infos
          nome={this.state.name}
          cargo={this.state.cargo}
          idade={this.state.idade}
          facebook={this.state.facebook}
        />

        <Social fb={this.state.facebook} />

        <Inputs />
        <br></br>

        <button onClick={this.mudarNome}>Mudar Nome</button>
        <button onClick={this.mudarCargo}>Mudar Cargo</button>
        <button onClick={this.mudarIdade}>Mudar Idade</button>
      </div>
    );
  }
}

class Inputs extends Component {
  render() {
    return (
      <div>
        <input
          className="inputNome"
          type="text"
          placeholder="Digite para mudar o nome"
        ></input>
        <input
          className="inputCargo"
          type="text"
          placeholder="Digite para mudar o cargo"
        ></input>
        <input
          className="inputIdade"
          type="text"
          placeholder="Digite para mudar o idade"
        ></input>
      </div>
    );
  }
}

class Infos extends Component {
  render() {
    return (
      <div>
        <h2>Olá, eu sou o(a) {this.props.nome}</h2>
        <h3>Cargo: {this.props.cargo}</h3>
        <h3>Idade: {this.props.idade} anos</h3>
        <hr></hr>
      </div>
    );
  }
}

class Social extends Component {
  render() {
    return (
      <div>
        <a href={this.props.fb} target="_blank">
          Facebook
        </a>
      </div>
    );
  }
}

export default RenderApp;
