import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          Intel
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Microprocesadores
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Generacion
            </a>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
