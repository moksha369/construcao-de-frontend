import { BrowserRouter, Routes, Route } from "react-router-dom";
import Novo from "./pages/Novo";
import Listar from "./pages/Listar";
import Editar from "./pages/Editar";
import Error404 from "./pages/Error404";

function App(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listar />} />
          <Route path="Novo" element={<Novo />} />
          <Route path="/editar/:id" element={<Editar />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;