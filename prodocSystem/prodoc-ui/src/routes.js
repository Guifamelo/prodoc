import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/homeScreen";
import FormularioScreen from "./screens/formularioScreen";
import UsersScreen from "./screens/usersScreen";
import OportunidadesScreen from "./screens/oportunidadesScreen";
import OportunidadesFiltradasScreen from "./screens/oportunidadesFiltradasScreen";


const Routess = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<HomeScreen />}></Route>
                <Route path="/formulario" element={<FormularioScreen />}></Route>
                <Route path="/users" element={<UsersScreen />}></Route>                
                <Route path="/oportunidades" element={<OportunidadesScreen />}></Route>
                <Route path="/oportunidadesfiltradas" element={<OportunidadesFiltradasScreen />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Routess;