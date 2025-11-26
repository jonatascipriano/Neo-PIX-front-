import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login/login.jsx";
import Home from "./home/home.jsx";
import Transferencia from "./tranferencia/transferencia.jsx";
import Seguraca from "./segurança/seguraca.jsx";
import Pendente from "./pendecias/pendente.jsx";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/transferencia" element={<Transferencia />} />
                <Route path="/segurança" element={<Seguraca />} />
                <Route path="/pendencias" element={<Pendente />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;