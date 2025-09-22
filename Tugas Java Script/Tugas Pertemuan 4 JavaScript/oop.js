// bikin class Pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon) { // constructor buat isi data pelanggan
        this.nama = nama                // nama pelanggan
        this.nomorTelepon = nomorTelepon // nomor telp pelanggan
        this.kendaraanDisewa = null      // default belum sewa kendaraan
    }

    sewaKendaraan(kendaraan) { // method untuk sewa kendaraan
        this.kendaraanDisewa = kendaraan
    }

    infoPelanggan() { // method untuk nampilin info pelanggan
        return "Nama: " + this.nama +
               " Telp: " + this.nomorTelepon +
               "  Sewa: " + (this.kendaraanDisewa ? this.kendaraanDisewa : "Belum menyewa")
    }
}

// array buat daftar pelanggan
let daftarPelanggan = []

// bikin pelanggan
let pelanggan1 = new Pelanggan("jaki", "08123456789")
let pelanggan2 = new Pelanggan("ronaldo", "08987654321")
let pelanggan3 = new Pelanggan("messi", "08111111111") // pelanggan baru tapi belum sewa

// proses sewa kendaraan
pelanggan1.sewaKendaraan("Mobil Toyota Avanza")
pelanggan2.sewaKendaraan("Motor Honda Vario")
// pelanggan3 sengaja belum sewa, biar muncul "Belum menyewa"

// masukin ke daftar
daftarPelanggan.push(pelanggan1, pelanggan2, pelanggan3)

// menampilkan daftar pelanggan yg sedang menyewa
console.log("Daftar Pelanggan yang Sedang Menyewa Kendaraan:")
daftarPelanggan.forEach(p => {
    console.log(p.infoPelanggan())
})

