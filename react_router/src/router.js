import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Contato from "./components/Contato";
import Sobre from "./components/Sobre";
import Produto from "./components/Produto";
import Erro from "./components/Erro";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contato" element={<Contato />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
        <Route path="/produto/:id" element={<Produto />}></Route>
        <Route path="*" element={<Erro />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

// @@ O <Link/> é faz parte do React-Router-DOM, ele é uma âncora, que ao clicar nele, é redirecionado para alguma rota pré configurada no arquivo de rotas. Ele é extremamente poderoso, pois não recarrega a página para redirecionar o usuário final para o local que ele desejou ir.

// @@ Arquivo de configuraão externo dos componentes para a criação das Rotas da página. Com a nova versão do React Router DOM, faz se necessário o uso do element={} ao em vez do component={} (que foi apresentado na aula)..

// @@ É necessário utilizar o <Routes> envolvendo o <Route> para a devida renderização, sem isso, aparece um erro no console e os componentes não são renderizados..

// @@ Foi criado um componente <Header/> a parte, para mostrar como se faz para vincular componentes separados com o arquivo de rota.

// @@ Mais cedo não estava renderizando corretamente, mesmo fazendo a alteração, pois o projeto estava no 'ar', era necessário para-lo e posteriormente dar o npm start novamente, para conseguir renderizar corretamente !

// @@ Para construirmos uma rota de página not found, temos que criar um <Route> com um path="*", o asterisco instância uma página que não possui rota pré-configurada, e joga para o element={} configurado, que no caso do exercicio foi o <Erro/>

// @@ Quando quisermos criar uma página, que precisamos pegar o  ID que está no ENDPOINT (URL) da página, podemos criar um <Route> com o path="" no final com /:id, o ':' prepara a aplicação para pegar o id que ficará no ENDPOINT da URL.. Isso ajuda para podemos pegar o ID de alguma API e conseguirmos renderizar algo com base nisso. Vale ressaltar que, após configurarmos dessa forma, a rota anterior do /:id, será descartada e se tentar navegar para ela, cairá na págia de notfound.
