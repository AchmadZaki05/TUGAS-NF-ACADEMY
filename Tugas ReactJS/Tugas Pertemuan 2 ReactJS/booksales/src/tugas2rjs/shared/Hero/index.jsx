export default function Hero () {
return (
<>
 {/*hero*/}
    <div className="container my-5" style={{ backgroundColor: '#000000ff', color: 'white' }}>  <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg" id="home-awal"> 
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
            </div>
</>
)
}