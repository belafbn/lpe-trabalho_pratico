import { NavLink, Outlet } from 'react-router-dom';
import { getUsuario, logout } from '../seguranca/Autenticacao';

const MenuPrivado = () => {
  const usuario = getUsuario();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand"
            aria-current="page"
            exact="true"
            to="/privado"
          >
            Adoções de animais de ONG - LPE
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  exact
                  to="/privado"
                >
                  Home
                </NavLink>
              </li>
              {usuario && (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Manutenções
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink className="dropdown-item" exact to="animais">
                        Animais
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" exact to="adotantes">
                        Adotantes
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" exact to="adocao">
                        Adoção
                      </NavLink>
                    </li>
                  </ul>
                </li>
              )}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {usuario ? 'Usuário: ' + usuario.nome : 'Usuário'}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    {usuario ? (
                      <li>
                        <NavLink
                          className="dropdown-item"
                          onClick={() => logout()}
                          exact
                          to="/"
                        >
                          Logout
                        </NavLink>
                      </li>
                    ) : (
                      <li>
                        <NavLink className="dropdown-item" exact to="/login">
                          Login
                        </NavLink>
                      </li>
                    )}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default MenuPrivado;
