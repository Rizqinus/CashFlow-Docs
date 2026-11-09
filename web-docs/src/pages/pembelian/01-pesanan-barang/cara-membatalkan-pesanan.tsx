import React from 'react';
import { ArrowLeft, Clock, Play, Camera } from 'lucide-react';

interface ArticleProps {
  onBack: () => void;
}

export const CaraMembatalkanPesanan: React.FC<ArticleProps> = ({ onBack }) => {
  return (
    <article className="article-container">
      <div className="article-header">
        <button onClick={onBack} className="btn-back">
          <ArrowLeft size={16} /> Kembali ke {"Pesanan Pembelian"}
        </button>
        <h1 className="article-title">{"Cara Membatalkan Pesanan Barang ke Supplier"}</h1>
        <div className="article-meta">
          <span className="badge-category">{"Pesanan Pembelian"}</span>
          <span className="dot">•</span>
          <span className="meta-time"><Clock size={14} /> Waktu baca: {"2 Menit"}</span>
        </div>
      </div>

      <div className="video-tutorial-box">
        <div className="video-tutorial-badge">
          <Play size={14} fill="#0284c7" color="#0284c7" />
          <span>Video Tutorial: {"Cara Membatalkan Pesanan Barang ke Supplier"}</span>
        </div>
        <div className="video-tutorial-preview">
          <div className="video-play-btn">
            <Play size={24} fill="#ffffff" color="#ffffff" />
          </div>
          <span className="video-duration">{"2 Menit"}</span>
        </div>
      </div>

      <div className="article-content">
        <p className="article-summary">{"Jika pemasok kehabisan stok atau transaksi dibatalkan oleh kedua belah pihak, pesanan pembelian yang terlanjur dibuat dapat ditutup agar tidak menggantung di laporan antrean PO."}</p>

        <div className="steps-container">
          <div key={1} className="step-section">
            <h3 className="step-title">1. Buka Daftar Pesanan Pembelian</h3>
            <p className="step-description">Masuk ke menu Pembelian ➔ Pesanan Pembelian, lalu buka daftar transaksi (ikon tabel hijau).</p>
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
                <span className="capture-label">Area Tangkapan Layar: Buka Daftar Pesanan Pembelian</span>
                <span className="capture-sublabel">
                  Aset visual: Daftar transaksi pesanan pembelian dengan filter status
                </span>
              </div>
            </div>
          </div>

          <div key={2} className="step-section">
            <h3 className="step-title">2. Pilih Dokumen PO yang Akan Dibatalkan</h3>
            <p className="step-description">Cari nomor PO yang ingin dibatalkan, kemudian klik dua kali untuk membuka dokumen transaksi.</p>
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
                <span className="capture-label">Area Tangkapan Layar: Pilih Dokumen PO yang Akan Dibatalkan</span>
                <span className="capture-sublabel">
                  Aset visual: Membuka formulir detail transaksi pesanan pembelian terkait
                </span>
              </div>
            </div>
          </div>

          <div key={3} className="step-section">
            <h3 className="step-title">3. Centang Opsi Tutup Pesanan</h3>
            <p className="step-description">Pada bagian kanan atas form transaksi, centang kotak pilihan 'Tutup Pesanan' (Closed) dan berikan catatan alasan pembatalan jika diperlukan.</p>
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
                <span className="capture-label">Area Tangkapan Layar: Centang Opsi Tutup Pesanan</span>
                <span className="capture-sublabel">
                  Aset visual: Opsi centang Tutup Pesanan pada formulir PO
                </span>
              </div>
            </div>
          </div>

          <div key={4} className="step-section">
            <h3 className="step-title">4. Simpan Perubahan Status Dokumen</h3>
            <p className="step-description">Klik tombol Simpan. Dokumen PO akan otomatis berstatus 'Ditutup' dan tidak bisa ditarik ke Penerimaan Barang maupun Faktur.</p>
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
                <span className="capture-label">Area Tangkapan Layar: Simpan Perubahan Status Dokumen</span>
                <span className="capture-sublabel">
                  Aset visual: Status PO berubah menjadi Ditutup dan tidak aktif
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const cara_membatalkan_pesanan_meta = {
  id: "cara-membatalkan-pesanan",
  title: "Cara Membatalkan Pesanan Barang ke Supplier",
  category: "Pesanan Pembelian",
  readTime: "2 Menit",
  steps: [{"num":1,"title":"Buka Daftar Pesanan Pembelian"},{"num":2,"title":"Pilih Dokumen PO yang Akan Dibatalkan"},{"num":3,"title":"Centang Opsi Tutup Pesanan"},{"num":4,"title":"Simpan Perubahan Status Dokumen"}]
};

export default CaraMembatalkanPesanan;
