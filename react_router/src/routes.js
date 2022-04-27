import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
const Rotas = () => {
    <BrowserRouter>
            <Route path="/" element={Home}></Route>
    </BrowserRouter>
}

export default Rotas ;


