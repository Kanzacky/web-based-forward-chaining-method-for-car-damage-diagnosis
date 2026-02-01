# 🚗 Sistem Pakar Diagnosa Kerusakan Mobil

Sistem pakar berbasis web untuk mendiagnosa kerusakan pada mobil menggunakan metode **Forward Chaining**. Aplikasi ini membantu pengguna mengidentifikasi masalah pada kendaraan berdasarkan gejala yang dirasakan.

## 🚀 Teknologi yang Digunakan

- **Framework:** Next.js 16 (React 19)
- **Bahasa:** TypeScript
- **Database:** MySQL
- **Styling:** Tailwind CSS

## 📋 Prasyarat

Sebelum menjalankan proyek ini, pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org/) (Versi terbaru direkomendasikan)
- [MySQL](https://www.mysql.com/) atau Laragon

## ⚙️ Persiapan Basis Data

1. Buat database baru di MySQL dengan nama `sistem_pakar_mobil`.
2. Pastikan tabel `rules` sudah tersedia dengan struktur yang sesuai, atau impor struktur tabel jika ada file `.sql`.
3. Gunakan `import.php` untuk memasukkan data dari `otomotif.json` ke database:
   - Jalankan lewat terminal: `php import.php`
   - Atau buka via browser jika menggunakan Laragon/XAMPP: `http://localhost/diagnosa-kerusakan-mobil/import.php`
4. Konfigurasi file `.env` di root project:
   ```env
   MYSQLHOST=localhost
   MYSQLUSER=root
   MYSQLPASSWORD=
   MYSQLDATABASE=sistem_pakar_mobil
   MYSQLPORT=3306
   ```

## 🛠️ Cara Instalasi & Menjalankan

1. **Clone repository:**
   ```bash
   git clone https://github.com/Kanzacky/web-based-forward-chaining-method-for-car-damage-diagnosis.git
   cd diagnosa-kerusakan-mobil
   ```

2. **Instal dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan aplikasi (Mode Pengembangan):**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

4. **Build untuk Produksi:**
   ```bash
   npm run build
   npm start
   ```

## 📂 Struktur Proyek Singkat

- `/app`: Direktori utama aplikasi (Next.js App Router).
- `/lib`: Utilitas dan konfigurasi database.
- `/public`: Aset statis (gambar, ikon, dll).
- `otomotif.json`: Dataset awal atau backup data gejala/kerusakan.

---
Dibuat dengan ❤️ oleh [Kanzacky](https://github.com/Kanzacky)
