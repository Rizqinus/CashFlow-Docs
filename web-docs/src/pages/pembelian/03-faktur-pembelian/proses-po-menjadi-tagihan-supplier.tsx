import React from 'react';
import { ArrowLeft, Clock, Play, Camera } from 'lucide-react';

interface ArticleProps {
  onBack: () => void;
}

export const ProsesPoMenjadiTagihanSupplier: React.FC<ArticleProps> = ({ onBack }) => {
  return (
    <article className="article-container">
      <div className="article-header">
        <button onClick={onBack} className="btn-back">
          <ArrowLeft size={16} /> Kembali ke {"Faktur Pembelian"}
        </button>
        <h1 className="article-title">{"Cara Memproses PO Menjadi Tagihan Supplier (Faktur Pembelian)"}</h1>
        <div className="article-meta">
          <span className="badge-category">{"Faktur Pembelian"}</span>
          <span className="dot">•</span>
          <span className="meta-time"><Clock size={14} /> Waktu baca: {"2.5 Menit"}</span>
        </div>
      </div>

      <div className="video-tutorial-box">
        <div className="video-tutorial-badge">
          <Play size={14} fill="#0284c7" color="#0284c7" />
          <span>Video Tutorial: {"Cara Memproses PO Menjadi Tagihan Supplier (Faktur Pembelian)"}</span>
        </div>
        <div className="video-tutorial-preview">
          <div className="video-play-btn">
            <Play size={24} fill="#ffffff" color="#ffffff" />
          </div>
          <span className="video-duration">{"2.5 Menit"}</span>
        </div>
      </div>

      <div className="article-content">
        <p className="article-summary">{"Jika perusahaan membeli jasa atau barang yang langsung ditagihkan tanpa melalui tahap penerimaan gudang fisik, pesanan pembelian (PO) dapat langsung ditarik ke dalam formulir Faktur Pembelian."}</p>

        <div className="steps-container">
          <div key={1} className="step-section">
            <h3 className="step-title">1. Buka Menu Faktur Pembelian</h3>
            <p className="step-description">Navigasi ke menu Pembelian ➔ Faktur Pembelian, lalu buka formulir faktur baru.</p>
            <div className="capture-placeholder-frame">
              <div className="capture-header-bar">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-address-pill">
                  appcashflow.id/faktur-pembelian
                </div>
              </div>
              <div className="capture-body-content">
                <Camera size={32} className="camera-icon-muted" />
                <span className="capture-label">Area Tangkapan Layar: Buka Menu Faktur Pembelian</span>
                <span className="capture-sublabel">
                  Aset visual: Akses menu Faktur Pembelian pada modul Pembelian
                </span>
              </div>
            </div>
          </div>

          <div key={2} className="step-section">
            <h3 className="step-title">2. Ambil Data Berdasarkan Pesanan Pembelian</h3>
            <p className="step-description">Pilih pemasok, klik tombol 'Ambil Data', lalu pilih 'Pesanan Pembelian'. Pilih nomor PO yang akan ditagihkan.</p>
            <div className="capture-placeholder-frame">
              <div className="capture-header-bar">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-address-pill">
                  appcashflow.id/faktur-pembelian
                </div>
              </div>
              <div className="capture-body-content">
                <Camera size={32} className="camera-icon-muted" />
                <span className="capture-label">Area Tangkapan Layar: Ambil Data Berdasarkan Pesanan Pembelian</span>
                <span className="capture-sublabel">
                  Aset visual: Modal pemilihan nomor PO yang akan dialihkan menjadi faktur
                </span>
              </div>
            </div>
          </div>

          <div key={3} className="step-section">
            <h3 className="step-title">3. Lakukan Verifikasi Nilai Transaksi dan Pajak</h3>
            <p className="step-description">Periksa kembali kuantitas, nilai diskon, dan tarif PPN apakah sudah sesuai dengan pesanan awal.</p>
            <div className="capture-placeholder-frame">
              <div className="capture-header-bar">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-address-pill">
                  appcashflow.id/faktur-pembelian
                </div>
              </div>
              <div className="capture-body-content">
                <Camera size={32} className="camera-icon-muted" />
                <span className="capture-label">Area Tangkapan Layar: Lakukan Verifikasi Nilai Transaksi dan Pajak</span>
                <span className="capture-sublabel">
                  Aset visual: Tabel rincian faktur dengan kalkulasi subtotal dan pajak PPN
                </span>
              </div>
            </div>
          </div>

          <div key={4} className="step-section">
            <h3 className="step-title">4. Simpan Transaksi Faktur Pembelian</h3>
            <p className="step-description">Isi nomor faktur dari pemasok pada tab Info Lainnya, kemudian klik tombol Simpan.</p>
            <div className="capture-placeholder-frame">
              <div className="capture-header-bar">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-address-pill">
                  appcashflow.id/faktur-pembelian
                </div>
              </div>
              <div className="capture-body-content">
                <Camera size={32} className="camera-icon-muted" />
                <span className="capture-label">Area Tangkapan Layar: Simpan Transaksi Faktur Pembelian</span>
                <span className="capture-sublabel">
                  Aset visual: Konfirmasi penyimpanan faktur tagihan supplier
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const proses_po_menjadi_tagihan_supplier_meta = {
  id: "proses-po-menjadi-tagihan-supplier",
  title: "Cara Memproses PO Menjadi Tagihan Supplier (Faktur Pembelian)",
  category: "Faktur Pembelian",
  readTime: "2.5 Menit",
  steps: [{"num":1,"title":"Buka Menu Faktur Pembelian"},{"num":2,"title":"Ambil Data Berdasarkan Pesanan Pembelian"},{"num":3,"title":"Lakukan Verifikasi Nilai Transaksi dan Pajak"},{"num":4,"title":"Simpan Transaksi Faktur Pembelian"}]
};

export default ProsesPoMenjadiTagihanSupplier;
