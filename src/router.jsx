import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login/login.jsx";
import Home from "./home/home.jsx";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;