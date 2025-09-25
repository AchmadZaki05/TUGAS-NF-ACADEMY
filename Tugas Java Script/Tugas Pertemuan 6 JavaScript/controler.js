// controller.js
const data = require("./data.js");

// Melihat data
function index() {
    console.log("===== Daftar Data =====");
    data.map((item, i) => {
        console.log(`${i + 1}. Nama: ${item.nama}, Umur: ${item.umur}, Alamat: ${item.alamat}, Email: ${item.email}`);
    });
}

// Menambah data (store)
function store(nama, umur, alamat, email) {
    data.push({ nama, umur, alamat, email });
    console.log(`Data ${nama} berhasil ditambahkan!`);
}

// Menghapus data (destroy)
function destroy(index) {
    if (index >= 0 && index < data.length) {
        const removed = data.splice(index, 1);
        console.log(`Data ${removed[0].nama} berhasil dihapus!`);
    } else {
        console.log("Index tidak valid!");
    }
}

module.exports = { index, store, destroy };
