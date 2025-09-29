export default function Contact () {
return (
<>
{/* Contact Section */}
      <section className="py-5 text-center container" id="contact-section" style={{ backgroundColor: '#000000ff' }}>
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