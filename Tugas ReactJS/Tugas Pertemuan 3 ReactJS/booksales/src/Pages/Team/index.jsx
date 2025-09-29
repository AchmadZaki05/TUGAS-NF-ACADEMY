export default function Team () {
return (
<>
{/* Team Section */}
      <section className="py-5 text-center container" id="team-section" 
      style={{ backgroundColor: '#680000ff', color: 'white' }}>
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
</>
)
}