export default function Header () {
  return (
    <>
      {/* Header */}
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom"
        style={{ backgroundColor: '#000000ff', color: 'white' }}
      >
        <div className="container-fluid">
          {/* Logo */}
          <a href="/" className="navbar-brand" style={{ color: 'white' }}>
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
                <a href="/" className="nav-link active" aria-current="page" style={{ color: 'white' }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/book" className="nav-link" style={{ color: 'white' }}>
                  Book
                </a>
              </li>
              <li className="nav-item">
                <a href="/team" className="nav-link" style={{ color: 'white' }}>
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link" style={{ color: 'white' }}>
                  Contact
                </a>
              </li>
            </ul>

            {/* Tombol Login & Sign-up di kanan */}
            <div className="d-flex">
              <button className="btn btn-outline-primary me-2" style={{ color: 'white' }}>
                Login
              </button>
              <button className="btn btn-primary" style={{ color: 'white' }}>
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
