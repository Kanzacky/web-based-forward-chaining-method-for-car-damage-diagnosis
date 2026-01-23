import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="hero-wrapper">
        <nav className="navbar">
          <div className="logo">🚗 AutoDiagnosa</div>
          <div className="menu">
            <a href="#home">Beranda</a>
            <a href="#about">Tentang</a>
            <a href="#contact">Kontak</a>
          </div>
          <div className="lang-dropdown">
            <button className="lang-btn">🌐 ID ▾</button>
            <div className="lang-menu">
              <a href="#">🇮🇩 Indonesia</a>
              <a href="#">🇬🇧 English</a>
            </div>
          </div>
        </nav>

        <section id="home" className="hero">
          <h1>Sistem Pakar Diagnosa<br />Kerusakan Kendaraan</h1>
          <p>
            Temukan penyebab kerusakan kendaraan Anda dengan cepat dan akurat
            menggunakan teknologi Forward Chaining. Diagnosa mandiri tanpa
            harus ke bengkel terlebih dahulu.
          </p>
          <Link href="/diagnosa" className="btn-primary">
            🔧 Mulai Diagnosa
          </Link>
        </section>
      </div>

      {/* ABOUT SECTION */}
      <section id="about" className="about">
        <div className="about-container">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=720&q=80"
              alt="Diagnosa Kendaraan"
            />
          </div>
          <div className="about-content">
            <h2>Tentang Sistem Pakar Ini</h2>
            <p>
              Sistem pakar ini menggunakan metode <strong>Forward Chaining</strong> untuk
              mendiagnosa kerusakan pada kendaraan Anda. Dengan menjawab beberapa
              pertanyaan sederhana tentang gejala yang dialami, sistem akan
              menganalisis dan memberikan kemungkinan penyebab kerusakan.
            </p>
            <p>
              Metode ini bekerja dengan cara mengumpulkan fakta-fakta (gejala)
              yang Anda berikan, kemudian mencocokkan dengan basis pengetahuan
              yang tersedia untuk menghasilkan kesimpulan yang akurat.
            </p>
            <Link href="/diagnosa" className="btn-primary" style={{ background: '#000', color: '#fff', border: '2px solid #000' }}>
              Coba Sekarang →
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact">
        <div className="contact-container">
          <h2>Hubungi Kami</h2>
          <p>
            Punya pertanyaan atau saran untuk pengembangan sistem ini?
            Jangan ragu untuk menghubungi kami.
          </p>
          <form className="contact-form">
            <input type="text" placeholder="Nama Lengkap" />
            <input type="email" placeholder="Email" />
            <textarea rows={4} placeholder="Pesan Anda"></textarea>
            <button type="submit">Kirim Pesan</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 AutoDiagnosa - Sistem Pakar Diagnosa Kerusakan Kendaraan</p>
      </footer>
    </>
  );
}
