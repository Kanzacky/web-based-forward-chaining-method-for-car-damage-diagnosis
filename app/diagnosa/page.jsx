"use client";
import "./diagnosa.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { forwardChaining } from "@/lib/forwardChaining";

export default function Diagnosa() {
    const [rules, setRules] = useState([]);
    const [selected, setSelected] = useState([]);
    const [hasil, setHasil] = useState([]);

    useEffect(() => {
        fetch("/api/rules")
            .then(res => res.json())
            .then(data => setRules(data));
    }, []);

    const toggle = (kode) => {
        setSelected(prev =>
            prev.includes(kode)
                ? prev.filter(g => g !== kode)
                : [...prev, kode]
        );
    };

    const diagnosa = () => {
        const result = forwardChaining(selected, rules);
        setHasil(result);
    };

    return (
        <>
            {/* NAVBAR */}
            <header className="navbar">
                <div className="logo">Tuneup.id</div>

                <nav className="menu">
                    <Link href="/">Home</Link>
                    <Link href="/#about">Tentang</Link>
                    <Link href="/diagnosa">Perbaikan</Link>
                    <Link href="/#kontak">Kontak</Link>
                </nav>

                <div className="lang-dropdown">
                    <button className="lang-btn">Bahasa</button>
                    <div className="lang-menu">
                        <a href="#">Indonesia</a>
                        <a href="#">English</a>
                    </div>
                </div>
            </header>

            {/* KONTEN */}
            <main className="container">
                <form id="diagnosaForm">
                    <h2>Pilih Keluhan dari Masalah pada Mobil Anda</h2>

                    <div className="gejala-list">
                        {rules.map(rule => (
                            <label key={rule.id} className="gejala-item">
                                <input
                                    type="checkbox"
                                    checked={selected.includes(rule.kode_gejala)}
                                    onChange={() => toggle(rule.kode_gejala)}
                                />
                                <span>{rule.gejala}</span>
                            </label>
                        ))}
                    </div>

                    <div className="button-center">
                        <button type="button" onClick={diagnosa}>
                            Perbaiki Sekarang
                        </button>
                    </div>

                </form>

                {hasil.length > 0 && (
                    <section id="hasil">
                        <h2>Hasil Keluhan yang anda pilih</h2>

                        <div id="hasilContent">
                            {hasil.map((h, i) => (
                                <div key={i} className="hasil-item">
                                    <p><strong>Kerusakan:</strong> {h.kerusakan}</p>
                                    <p><strong>Solusi:</strong> {h.solusi}</p>
                                    <p><strong>Tingkat Keparahan:</strong> {h.tingkat_keparahan}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

            </main>
        </>
    );
}
