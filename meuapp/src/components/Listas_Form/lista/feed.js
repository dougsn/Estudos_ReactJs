import React, { Component } from "react";

// Esse arquivo foi criado para criar um componente separado do App (listaApp), separando as responsabilidades e também fazendo uma lógica para a ortográfia

class Feed extends Component {
  render() {
    return (
      <div key={this.props.div}>
        <h3>{this.props.username}</h3>

        <a>
          {this.props.curtidas != 0
            ? this.props.curtidas + " curtidas"
            : this.props.curtidas + " curtida"}{" "}
          /{""}{" "}
          {this.props.comentarios != 0
            ? this.props.comentarios + " comentários"
            : this.props.comentarios + " comentário"}
        </a>
      </div>
    );
  }
}

export default Feed;
