import React, { Component } from "react";
import "../src/index.css";
import "../src/style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: "VAI",
    };
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }
  vai() {
    let state = this.state;

    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      state.botao = "VAI";
      this.setState(state);
    } else {
      this.timer = setInterval(() => {
        state.numero += 0.1;

        this.setState(state);
      }, 100);
      state.botao = "PARAR";
    }
    this.setState(state);
  }
  limpar() {
    let state = this.state;

    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;

      this.setState(state);
    }

    state.numero = 0;
    state.botao = "VAI";
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img src={require("./assets/cronometro.png")}></img>
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a onClick={this.vai} className="botao">
            {this.state.botao}
          </a>
          <a onClick={this.limpar} className="botao">
            LIMPAR
          </a>
        </div>
      </div>
    );
  }
}

export default App;
