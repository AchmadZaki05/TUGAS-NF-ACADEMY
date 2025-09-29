import { Link } from 'react-router-dom';

export default function Header () {
return (
<>
{/*header*/}
    <nav className="navbar navbar-expand-lg bg dark  border-bottom"
      style={{ backgroundColor: '#000000ff', color: 'white' }}>
      <div className="container-fluid">
        {/* Logo */}
        <a>
        <i className="fa-solid fa-book"></i>
        <span className="ms-2 fs-4">Bookstore</span>
        </a>

        {/* Toggle button untuk responsive */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu di tengah */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page"  style={{ color: 'white' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link"  style={{ color: 'white' }}>
                Book
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Tim" className="nav-link"  style={{ color: 'white' }}>
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Kontak" className="nav-link" style={{ color: 'white' }}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Tombol Login & Sign-up di kanan */}
          <div className="d-flex">
            <button className="btn btn-outline-primary me-2" style={{ color: 'white' }}>Login</button>
            <button className="btn btn-primary" style={{ color: 'white' }}>Register</button>
          </div>
        </div>
      </div>
    </nav>
</>

)
}