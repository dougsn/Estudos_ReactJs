import React from 'react';
import ReactDOM from 'react-dom/client';
import ExEstado from './components/Diversos/ExEstado'
import App from './App'; 
import Estado from './components/Diversos/Estado'
import ClicoDeVida from './components/Diversos/CicloDeVida'
import Eventos from './components/Diversos/Eventos'
import RenderCondicional from './components/Diversos/RenderCondicional'
import ListaApp from './components/Listas_Form/lista/listaApp'
import FormApp from './components/Listas_Form/form/formApp1'
import FormApp2 from './components/Listas_Form/form/formApp2'
import Cookie from './components/Biscoito/cookie'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ExEstado/> */}
    {/* <App /> Foi comentado pois está com os comentarios da aulas iniciais, foi criado outro arquivo para prosseguirmos com os estudos*/}

    <Cookie />
  </React.StrictMode>
);
