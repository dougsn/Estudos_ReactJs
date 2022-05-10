import { useState , createContext} from "react";


export const UserContext = createContext({}); // Aqui foi criado um contexto

   

function UserProvider({children}) { // Criamos um componente com o contexto criado e repassammos para os 'filhos' que estiverem dentro dele (no App.js)
    const [alunos, setAlunos] = useState('Sujeito Programador')
    const [novoNome, setNovoNome] = useState('')
    return (
        // Passamos para o nosso Provider (provedor) os valores que devem ser repassados aos filhos
        <UserContext.Provider value={{alunos, setAlunos, novoNome, setNovoNome}}> 
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;


// Se usa o useContext comm componentes que possuem estados que são espalhados de forma global e que outros componentes tem que 'pegar' o seu valor para utilizar na aplicação..