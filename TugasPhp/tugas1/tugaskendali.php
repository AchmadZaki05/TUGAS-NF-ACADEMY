<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tugas Kendali - Ternary</title>
</head>
<body>
    <?php
    // variabel
    $nama = "Achmad Zaki";
    $nilai = 75;

    // struktur kendali dengan ternary
    $keterangan = ($nilai > 70) ? "Lulus" : "Remedial";
    ?>

    <h2>Hasil Penilaian</h2>
    Nama Siswa: <?= $nama ?> <br>
    Nilai: <?= $nilai ?> <br>
    Keterangan: <?= $keterangan ?>
</body>
</html>
