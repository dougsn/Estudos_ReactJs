import React, { Component } from "react";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: false
        };

        this.sair = this.sair.bind(this)

        this.entrar = this.entrar.bind(this)
    }

    sair() {
        this.setState({status: false})
    }
    
    entrar() {
        this.setState({status: true})
    }

    render() {
        return (
            <div> 
                {/* {this.state.status === 1 && 
                // Se o status for igual a 1, o que tiver depois do && aparecerá.
                    <h1>Bem-vindo ao sistema</h1>
                }*/}

                {this.state.status ? // @@ O '?' é como se fosse o if, se for verdadeiro faça o bloco
                    <div>
                        <h2>Bem-vindo ao sistema</h2>
                        <button onClick={this.sair}>Sair do sistema</button>
                    </div> : // @ O ':' é como se fosse o else, se for falso faça o bloco

                    <div>
                        <h2>Olá visitante, faça o login</h2>
                        <button onClick={this.entrar}>Entrar no sistema</button>
                    </div>

                }


            </div>
        )
    }
}

export default App;