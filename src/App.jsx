import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './componentes/Home';
import MenuPrivado from './componentes/MenuPrivado';
import MenuPublico from './componentes/MenuPublico';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/cjs/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Animais from './componentes/telas/animais/Animais';
import Adotante from './componentes/telas/adotante/Adotante';
import Adocao from './componentes/telas/adocao/Adocao';
import Login from './componentes/login/Login';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MenuPublico />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/privado',
    element: <MenuPrivado />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'animais',
        element: <Animais />,
      },
      {
        path: 'adotantes',
        element: <Adotante />,
      },
      {
        path: 'adocao',
        element: <Adocao />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
