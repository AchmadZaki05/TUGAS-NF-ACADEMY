// Array awal produk toko (isinya daftar produk dalam bentuk object)
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },   // Produk 1
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },    // Produk 2
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }   // Produk 3
];

// Fungsi untuk menambahkan produk baru ke array produkToko
function tambahProduk(nama, harga, stok) {
    // Cari id terakhir lalu tambahkan 1 untuk id produk baru
    let idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;

    // Buat object produk baru dengan struktur {id, nama, harga, stok}
    let produkBaru = { id: idBaru, nama: nama, harga: harga, stok: stok };

    // Masukkan (push) produk baru ke dalam array produkToko
    produkToko.push(produkBaru);

    // Tampilkan pesan konfirmasi
    console.log(`Produk ${nama} berhasil ditambahkan!`);
}

// Fungsi untuk menghapus produk berdasarkan id
function hapusProduk(id) {
    // Cari posisi (index) produk di array sesuai id yang diminta
    let index = produkToko.findIndex(produk => produk.id === id);

    // Jika produk ditemukan (index bukan -1)
    if (index !== -1) {
        // Hapus produk dari array berdasarkan index
        let hapus = produkToko.splice(index, 1);

        // Tampilkan pesan konfirmasi produk yang dihapus
        console.log(`Produk ${hapus[0].nama} berhasil dihapus!`);
    } else {
        // Jika id tidak ditemukan
        console.log(`Produk dengan id ${id} tidak ditemukan.`);
    }
}

// Fungsi untuk menampilkan semua produk yang ada di array produkToko
function tampilkanProduk() {
    console.log("Daftar Produk Toko:");
    
    // Looping semua produk di array
    produkToko.forEach(produk => {
        console.log(`ID: ${produk.id}, Nama: ${produk.nama}, Harga: Rp${produk.harga}, Stok: ${produk.stok}`);
    });
}

// penggunaan fungsi

// Menampilkan daftar produk awal
tampilkanProduk();

// Menambahkan produk baru "Headset"
tambahProduk("Headset", 500000, 8);

// Menampilkan daftar produk setelah ditambah
tampilkanProduk();

// Menghapus produk dengan id = 2 (Mouse)
hapusProduk(2);

// Menampilkan daftar produk setelah dihapus
tampilkanProduk();
