export default function List () {
return (
<>
{/* Book List Section */}
      <section className="py-5 text-center container" id="book-list"
      style={{ backgroundColor: '#000000ff', color: 'white' }}>
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
</>
)
}