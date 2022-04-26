import React, { Component } from "react"; // Importando a dependencia do Component

// const BemVindo = (props) => { // Criando um componente e utilizando na função App()
//   return (
//     <div>
//       <h2>Bem-Vindo(a) {props.nome}</h2>
//       <h3>Tenho {props.idade}</h3>
//     </div>
//   )
// }

class Equipe extends Component {
  render() {
    // Renderiza na tela
    return (
      // Já referencia a props com o this.props.. Não precisa ser feito como nos exemplos abaixo
      <div>
        <Sobre nome={this.props.nome} cargo = {this.props.cargo} idade={this.props.idade}/>
        <Social fb={this.props.facebook}/>
      </div>
    );
  }
}

class Sobre extends Component {
  render() {
    return (
      <div>
        <h2>Olá eu sou o(a) {this.props.nome}</h2>
        <h3>Cargo: {this.props.cargo}</h3>
        <h3>Minha idade é {this.props.idade}</h3>
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
        <br></br>
        <a>Linkedln</a>
        <br></br>
        <a>Youtube</a>
      </div>
    );
  }
}

export default function App() {
  return (
    <div>
      <h1>Conheça nossa equipe:</h1>
      {/* tag com um props que foi utilizado no componente BemVindo(props) */}
      {/* <BemVindo nome="Douglas" idade="23" />
      <BemVindo nome="Rafaella" idade="22" />
      <h2>Esse é o meu primeiro contato com o ReactJs</h2> */}
      <Equipe
        nome="Douglas"
        cargo="Programador"
        idade="23"
        facebook="https://google.com"
      />
      <Equipe
        nome="Rafaella"
        cargo="Designer"
        idade="19"
        facebook="https://google.com"
      />
      <Equipe
        nome="Amanda"
        cargo="Front-End"
        idade="24"
        facebook="https://google.com"
      />
    </div>
  );
}

// @@ Foi aprendendido primeiramente assim, para depois ter acesso a criação com classes, que foi feito acima

// const Equipe = (props) => {
//   return (
//     <div>
//       <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
//       <Social fb={props.facebook}/>
//     </div>
//   )
// }

// const Sobre = (props) => {
//   return (
//     <div>
//       <h2>Olá sou o(a) {props.nome}</h2>
//       <h3>Cargo: {props.cargo}</h3>
//       <h3>Idade: {props.idade}</h3>
//       <hr></hr>
//     </div>
//   )
// }

// const Social = (props) => {
//   return (
//     <div>
//       <a href={props.fb} target="_blank">Facebook</a>
//       <a>Linkdln</a>
//       <a>Youtube</a>
//     </div>
//   )
// }
