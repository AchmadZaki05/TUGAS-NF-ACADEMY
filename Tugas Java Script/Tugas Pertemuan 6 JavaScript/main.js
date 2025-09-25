// main.js
const { index, store, destroy } = require("./controler.js");

// Lihat data awal
index();

// Tambah minimal 2 data baru
store("Wibowo", 21, "Palembang", "kiki@mail.com");
store("Linalin", 22, "Padang", "lina@mail.com");

// Lihat data setelah ditambah
index();

// Hapus data index ke-2 (Citra)
destroy(2);

// Lihat data akhir
index();
