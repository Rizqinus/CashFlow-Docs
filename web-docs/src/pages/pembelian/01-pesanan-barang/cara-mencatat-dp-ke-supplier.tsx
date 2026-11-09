import React from 'react';
import { ArrowLeft, Clock, Play, Camera } from 'lucide-react';

interface ArticleProps {
  onBack: () => void;
}

export const CaraMencatatDpKeSupplier: React.FC<ArticleProps> = ({ onBack }) => {
  return (
    <article className="article-container">
      <div className="article-header">
        <button onClick={onBack} className="btn-back">
          <ArrowLeft size={16} /> Kembali ke {"Pesanan Pembelian"}
        </button>
        <h1 className="article-title">{"Cara Mencatat DP Barang ke Supplier"}</h1>
        <div className="article-meta">
          <span className="badge-category">{"Pesanan Pembelian"}</span>
          <span className="dot">•</span>
          <span className="meta-time"><Clock size={14} /> Waktu baca: {"3 Menit"}</span>
        </div>
      </div>

      <div className="video-tutorial-box">
        <div className="video-tutorial-badge">
          <Play size={14} fill="#0284c7" color="#0284c7" />
          <span>Video Tutorial: {"Cara Mencatat DP Barang ke Supplier"}</span>
        </div>
        <div className="video-tutorial-preview">
          <div className="video-play-btn">
            <Play size={24} fill="#ffffff" color="#ffffff" />
          </div>
          <span className="video-duration">{"3 Menit"}</span>
        </div>
      </div>

      <div className="article-content">
        <p className="article-summary">{"Pernah pesan barang ke pemasok dan diminta bayar DP (Uang Muka) dulu? Di CashFlow Online, kamu bisa catat uang muka pembelian yang didahului pesanan agar pembayaran awal langsung tersambung ke nomor PO tanpa input berulang."}</p>

        <div className="steps-container">
          <div key={1} className="step-section">
            <h3 className="step-title">1. Buka Modul Pembelian dan Pilih Uang Muka Pembelian</h3>
            <p className="step-description">Masuk ke navigasi modul Pembelian, kemudian pilih menu Uang Muka Pembelian.</p>
            <div className="capture-placeholder-frame">
              <div className="capture-header-bar">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-address-pill">
                  appcashflow.id/pesanan-pembelian
                </div>
              </div>
              <div className="capture-body-content">
                <Camera size={32} className="camera-icon-muted" />
                <span className="capture-label">Area Tangkapan Layar: Buka Modul Pembelian dan Pilih Uang Muka Pembelian</span>
                <span className="capture-sublabel">
                  Aset visual: Navigasi modul Pembelian dan menu Uang Muka Pembelian
                </span>
              </div>
            </div>
          </div>

          <div key={2} className="step-section">
            <h3 className="step-title">2. Pilih Pemasok dan Cari Nomor Pesanan (PO)</h3>
            <p className="step-description">Tentukan nama pemasok dan tanggal transaksi. Pada bagian kolom Nomor Pesanan / No. PO, klik untuk mencari pesanan pembelian yang akan dibayarkan uang mukanya.</p>
            <div className="capture-placeholder-frame">
              <div className="capture-header-bar">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-address-pill">
                  appcashflow.id/pesanan-pembelian
                </div>
              </div>
              <div className="capture-body-content">
                <Camera size={32} className="camera-icon-muted" />
                <span className="capture-label">Area Tangkapan Layar: Pilih Pemasok dan Cari Nomor Pesanan (PO)</span>
                <span className="capture-sublabel">
                  Aset visual: Pencarian nomor PO rujukan pada formulir uang muka pembelian
                </span>
              </div>
            </div>
          </div>

          <div key={3} className="step-section">
            <h3 className="step-title">3. Tentukan Nilai Uang Muka dan No. Faktur DP</h3>
            <p className="step-description">Isi nominal uang muka (DP) yang disepakati. Masuk ke tab Info Lainnya (i), lalu ketikkan nomor faktur fisik uang muka dari pihak pemasok.</p>
            <div className="capture-placeholder-frame">
              <div className="capture-header-bar">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-address-pill">
                  appcashflow.id/pesanan-pembelian
                </div>
              </div>
              <div className="capture-body-content">
                <Camera size={32} className="camera-icon-muted" />
                <span className="capture-label">Area Tangkapan Layar: Tentukan Nilai Uang Muka dan No. Faktur DP</span>
                <span className="capture-sublabel">
                  Aset visual: Form pengisian nominal DP dan nomor faktur tagihan uang muka
                </span>
              </div>
            </div>
          </div>

          <div key={4} className="step-section">
            <h3 className="step-title">4. Proses Pembayaran Kas/Bank dan Simpan Transaksi</h3>
            <p className="step-description">Klik tombol Proses ➔ Pembayaran. Lengkapi informasi akun bank pengeluaran, klik tombol Hitung Nilai Pembayaran, lalu klik Simpan.</p>
            <div className="capture-placeholder-frame">
              <div className="capture-header-bar">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-address-pill">
                  appcashflow.id/pesanan-pembelian
                </div>
              </div>
              <div className="capture-body-content">
                <Camera size={32} className="camera-icon-muted" />
                <span className="capture-label">Area Tangkapan Layar: Proses Pembayaran Kas/Bank dan Simpan Transaksi</span>
                <span className="capture-sublabel">
                  Aset visual: Form pembayaran kas/bank untuk pelunasan uang muka PO
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const cara_mencatat_dp_ke_supplier_meta = {
  id: "cara-mencatat-dp-ke-supplier",
  title: "Cara Mencatat DP Barang ke Supplier",
  category: "Pesanan Pembelian",
  readTime: "3 Menit",
  steps: [{"num":1,"title":"Buka Modul Pembelian dan Pilih Uang Muka Pembelian"},{"num":2,"title":"Pilih Pemasok dan Cari Nomor Pesanan (PO)"},{"num":3,"title":"Tentukan Nilai Uang Muka dan No. Faktur DP"},{"num":4,"title":"Proses Pembayaran Kas/Bank dan Simpan Transaksi"}]
};

export default CaraMencatatDpKeSupplier;
