import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Registrar from "./pages/Registrar";

function App() {
  const { usuario } = useContext(AuthContext);
  {
    !usuario.logado ? (
      <>
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
      </>
    ) : (
    <>
      <Route path="/home" element={<Home />} />
      <Route path="/perfil/:id" element={<Perfil />} />
    </>
  )
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/perfil/:id" element={<Perfil />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
