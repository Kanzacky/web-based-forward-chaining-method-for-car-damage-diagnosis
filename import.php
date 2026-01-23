<?php
$conn = new mysqli("localhost", "root", "", "sistem_pakar_mobil");

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

$json = file_get_contents("otomotif.json");
$data = json_decode($json, true);

foreach ($data as $row) {
    $kode_gejala = $row["Kode Gejala"];
    $gejala = $row["Gejala"];
    $kode_kerusakan = $row["Kode Kerusakan"];
    $kerusakan = $row["Kemungkinan Kerusakan"];
    $solusi = $row["Solusi/Perbaikan"];
    $tingkat = $row["Tingkat Keparahan"];

    $sql = "INSERT INTO rules 
        (kode_gejala, gejala, kode_kerusakan, kerusakan, solusi, tingkat_keparahan)
        VALUES 
        ('$kode_gejala', '$gejala', '$kode_kerusakan', '$kerusakan', '$solusi', '$tingkat')";

    $conn->query($sql);
}

echo "✅ Data JSON berhasil diimport ke MySQL";
