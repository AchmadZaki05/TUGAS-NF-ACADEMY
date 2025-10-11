<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FORM</title>
</head>
<body>
    <form method="GET">
        <label>Nama</label>
        <input type="text" name="nama" /> <br />

        <label>Email</label>
        <input type="text" name="email" /> <br />

        <label>Nilai Ujian</label>
        <input type="text" name="nu" /> <br />

        <input type="submit" name="proses" value="Simpan" />
    </form>

    <?php
    if (isset($_GET['proses'])) {
        // mengambil data
        $nama = $_GET['nama'];
        $email = $_GET['email'];
        $nu = $_GET['nu'];

        // menampilkan data
        echo "Nama: $nama <br/>";
        echo "Email: $email <br/>";
        echo "Nilai Ujian: $nu <br/>";

        // cara run nya http://localhost/TugasPhp/tugas1/tugasform.php
    }
    ?>

</body>
</html>
