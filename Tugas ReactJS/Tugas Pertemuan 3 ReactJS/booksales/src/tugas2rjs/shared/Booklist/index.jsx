import { useState } from "react";
import booksData from "../../../Utils/Books.js"

export default function List() {
  // State awal berisi data dari books.js
  const [books, setBooks] = useState(booksData);

  // Handler untuk menambahkan buku baru ke daftar
  const addBook = () => {
    const newBook = {
      id: books.length + 1, // id otomatis berdasarkan panjang array
      title: `Buku Baru ${books.length + 1}`, // judul otomatis
      author: "Penulis Baru",
      year: 2025,
      description: "Deskripsi singkat buku baru",
      image: "/default.jpg", // gambar default jika tidak ada
    };
    // Update state books dengan menambahkan data baru
    setBooks([...books, newBook]);
  };

  return (
    <section className="container my-5">
      {/* Judul section */}
      <h2 className="mb-3">Daftar Buku</h2>

      {/* Tombol tambah buku */}
      <button onClick={addBook} className="btn btn-primary mb-4">
        Tambah Buku
      </button>

      {/* Daftar buku ditampilkan dalam grid */}
      <div className="row">
        {books.map((book) => (
          <div key={book.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              {/* Gambar buku */}
              <img
                src={book.image}
                className="card-img-top"
                alt={book.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                {/* Judul buku */}
                <h5 className="card-title">{book.title}</h5>

                {/* Penulis & tahun */}
                <h6 className="card-subtitle mb-2 text-muted">
                  {book.author} • {book.year}
                </h6>

                {/* Deskripsi buku */}
                <p className="card-text">{book.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
