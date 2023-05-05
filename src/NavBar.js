const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mw-100">
      <a className="navbar-brand float-left" href="#"><a className="nav-link" href="#">Pharmasysm <span className="sr-only">(current)</span></a></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">

          </li>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">wallet</a>
          </li>
          <div className="dropdown position-absolute float-right">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Settings
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </ul>

      </div>
    </nav>
  );
}

export default NavBar;