import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Perfil from './pages/Perfil';

function App() {
  return ( 
  <BrowserRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route element={<Layout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/perfil" element={<Perfil />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;