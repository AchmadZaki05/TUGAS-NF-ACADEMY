
function App() {
  return (
    <>
    {/*header*/}
    <nav className="navbar navbar-expand-lg bg dark  border-bottom"
      style={{ backgroundColor: '#034979ff', color: 'white' }}>
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
              <a className="nav-link active" aria-current="page" href="#home-awal" onClick={() => handleScroll('home-awal')} style={{ color: 'white' }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#book-list" onClick={() => handleScroll('book-list')} style={{ color: 'white' }}>
                Book
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team-section" onClick={() => handleScroll('team-section')} style={{ color: 'white' }}>
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-section" onClick={() => handleScroll('contact-section')} style={{ color: 'white' }}>
                Contact
              </a>
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

    {/*hero*/}
    <div className="container my-5" style={{ backgroundColor: '#034979ff', color: 'white' }}>  <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg" id="home-awal"> 
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3"> 
        <h1 className="display-4 fw-bold lh-1 text-white">
  Almost There: The Ballack Chronicles
</h1>

        <p className="lead" >"Almost There" menceritakan perjalanan hidup Michael Ballack, gelandang legendaris Jerman yang selalu 
          berada di puncak, namun kerap berakhir sebagai runner-up. Dari trofi 
          yang nyaris diraih hingga momen-momen heroik di lapangan, buku ini mengeksplorasi dedikasi, kegigihan, dan semangat juang
          seorang pemain yang dihormati dunia sepakbola meski sering gagal 
          meraih gelar utama. Sebuah kisah tentang kegagalan yang menginspirasi dan ketekunan yang abadi.</p> 
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"> 
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button> 
          <button type="button" className="btn btn-outline-secondary btn-lg px-4" style={{ color: 'white' }}>Details</button> 
          </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg"> 
            <img className="rounded-lg-3" src="/public/ballack.png" alt="" width="420"/> 
            </div>
            </div>

{/* Book List Section */}
      <section className="py-5 text-center container" id="book-list">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Toko Buku Terbaik untuk Anda</h1>
            <p className="lead" style={{ color: 'white' }}>Temukan petualangan berikutnya di setiap halaman.
              Kami lebih dari sekadar toko buku—kami adalah portal menuju dunia-dunia baru, tempat di mana imajinasi bertemu
              dengan pengetahuan. Dengan koleksi buku pilihan dari berbagai genre, kami berkomitmen untuk membantu Anda
              menemukan bacaan yang sempurna, baik untuk relaksasi, inspirasi, atau edukasi. Mulailah perjalanan literasi 
              Anda bersama kami. dan temukan mengapa kami adalah teman terbaik bagi setiap pecinta buku.
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {/* Kartu Buku 1 */}
            <div className="col">
              <div className="card shadow-sm">
                <img src="/public/list1.jpg" alt="" className="card-img-top" style={{ width: '100%', height: '225px', objectFit: 'cover' }} />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            {/* Kartu Buku 2 */}
            <div className="col">
              <div className="card shadow-sm">
                <img src="/public/list2.jpg" alt="" className="card-img-top" style={{ width: '100%', height: '225px', objectFit: 'cover' }} />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            {/* Kartu Buku 3 */}
            <div className="col">
              <div className="card shadow-sm">
                <img src="/public/list3.jpg" alt="" className="card-img-top" style={{ width: '100%', height: '225px', objectFit: 'cover' }} />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            {/* Kartu Buku 4 */}
            <div className="col">
              <div className="card shadow-sm">
                <img src="/public/list4.jpg" alt="" className="card-img-top" style={{ width: '100%', height: '225px', objectFit: 'cover' }} />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            {/* Kartu Buku 5 */}
            <div className="col">
              <div className="card shadow-sm">
                <img src="/public/list5.jpg" alt="" className="card-img-top" style={{ width: '100%', height: '225px', objectFit: 'cover' }} />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            {/* Kartu Buku 6 */}
            <div className="col">
              <div className="card shadow-sm">
                <img src="/public/list6.jpg" alt="" className="card-img-top" style={{ width: '100%', height: '225px', objectFit: 'cover' }} />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            {/* Kartu Buku 7 */}
            <div className="col">
              <div className="card shadow-sm">
                <img src="/public/list7.jpg" alt="" className="card-img-top" style={{ width: '100%', height: '225px', objectFit: 'cover' }} />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            {/* Kartu Buku 8 */}
            <div className="col">
              <div className="card shadow-sm">
                <img src="/public/list8.jpg" alt="" className="card-img-top" style={{ width: '100%', height: '225px', objectFit: 'cover' }} />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            {/* Kartu Buku 9 */}
            <div className="col">
              <div className="card shadow-sm">
                <img src="/public/list9.jpg" alt="" className="card-img-top" style={{ width: '100%', height: '225px', objectFit: 'cover' }} />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
            
      {/* Team Section */}
      <section className="py-5 text-center container" id="team-section" 
      style={{ backgroundColor: '#034979ff', color: 'white' }}>
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light text-white">Team Kita</h1>
            <p className="lead" style={{ color: 'white' }}>
              Para Pendiri Toko Web Buku Ini
            </p>
          </div>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4 feature-column">
              <div className="feature-icon rounded-circle mx-auto d-block">
                <img src="/public/t1.jpg" alt="Team Member 1" className="rounded-circle"/>
              </div>
              <h2 className="fw-normal text-white">Budi speed</h2>
              <p>
                <a className="btn btn-outline-light" href="#">View details »</a>
              </p>
            </div>
            <div className="col-lg-4 feature-column">
              <div className="feature-icon rounded-circle mx-auto d-block">
                <img src="/public/t2.jpg" alt="Team Member 2" className="rounded-circle"/>
              </div>
              <h2 className="fw-normal text-white">Naruto Ayama</h2>
              <p>
                <a className="btn btn-outline-light" href="#">View details »</a>
              </p>
            </div>
            <div className="col-lg-4 feature-column">
              <div className="feature-icon rounded-circle mx-auto d-block">
                <img src="/public/t3.jpg" alt="Team Member 3" className="rounded-circle"/>
              </div>
              <h2 className="fw-normal text-white">El korea</h2>
              <p>
                <a className="btn btn-outline-light" href="#">View details »</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5 text-center container" id="contact-section" style={{ backgroundColor: '#034979' }}>
  <div className="row py-lg-5">
    <div className="col-lg-6 col-md-8 mx-auto">
      <h1 className="fw-bold text-white mb-3">Contact Us</h1>
      <p className="lead text-white mb-4">
        Ada Pertanyaan Atau Masalah Hubungin wa atau langsung ke alamat kami
      </p>

      <div className="d-flex flex-column align-items-center gap-3">
        {/* WhatsApp */}
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success d-flex align-items-center"
          style={{ gap: '10px' }}
        >
          <i className="fab fa-whatsapp"></i>
          Chat via WhatsApp
        </a>

        {/* Address */}
        <div className="text-white">
          <i className="fas fa-map-marker-alt me-2"></i>
          Jl. Merdeka No.123, Jakarta, Indonesia
        </div>

        {/* Optional Email */}
        <div className="text-white">
          <i className="fas fa-envelope me-2"></i>
          contact@yourcompany.com
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default App
