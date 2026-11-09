import React from 'react';
import { ArrowLeft, Clock, Play, Camera } from 'lucide-react';

interface ArticleProps {
  onBack: () => void;
}

export const CaraMembuatFakturPembelian: React.FC<ArticleProps> = ({ onBack }) => {
  return (
    <article className="article-container">
      <div className="article-header">
        <button onClick={onBack} className="btn-back">
          <ArrowLeft size={16} /> Kembali ke {"Faktur Pembelian"}
        </button>
        <h1 className="article-title">{"Cara Membuat Faktur Pembelian (Purchase Invoice)"}</h1>
        <div className="article-meta">
          <span className="badge-category">{"Faktur Pembelian"}</span>
          <span className="dot">•</span>
          <span className="meta-time"><Clock size={14} /> Waktu baca: {"3.5 Menit"}</span>
        </div>
      </div>

      <div className="video-tutorial-box">
        <div className="video-tutorial-badge">
          <Play size={14} fill="#0284c7" color="#0284c7" />
          <span>Video Tutorial: {"Cara Membuat Faktur Pembelian (Purchase Invoice)"}</span>
        </div>
        <div className="video-tutorial-preview">
          <div className="video-play-btn">
            <Play size={24} fill="#ffffff" color="#ffffff" />
          </div>
          <span className="video-duration">{"3.5 Menit"}</span>
        </div>
      </div>

      <div className="article-content">
        <p className="article-summary">{"Faktur Pembelian mencatat tagihan resmi dari pemasok atas barang atau jasa yang telah diterima, sekaligus membentuk hutang usaha (Account Payable) perusahaan dalam laporan keuangan."}</p>

        <div className="steps-container">
          <div key={1} className="step-section">
            <h3 className="step-title">1. Akses Menu Faktur Pembelian</h3>
            <p className="step-description">Navigasi ke menu Pembelian ➔ Faktur Pembelian. Klik tombol 'Baru' untuk membuka formulir penagihan faktur.</p>
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
                <span className="capture-label">Area Tangkapan Layar: Akses Menu Faktur Pembelian</span>
                <span className="capture-sublabel">
                  Aset visual: Halaman modul Faktur Pembelian dan navigasi tombol Baru
                </span>
              </div>
            </div>
          </div>

          <div key={2} className="step-section">
            <h3 className="step-title">2. Tarik Data dari Penerimaan Barang (Surat Jalan)</h3>
            <p className="step-description">Klik tombol 'Ambil Data' lalu pilih 'Penerimaan Barang'. Pilih nomor penerimaan barang yang akan ditagihkan agar barang dan kuantitas terisi otomatis.</p>
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
                <span className="capture-label">Area Tangkapan Layar: Tarik Data dari Penerimaan Barang (Surat Jalan)</span>
                <span className="capture-sublabel">
                  Aset visual: Modal tarik data penerimaan barang ke dalam faktur pembelian
                </span>
              </div>
            </div>
          </div>

          <div key={3} className="step-section">
            <h3 className="step-title">3. Masukkan No. Faktur Tagihan dari Pemasok</h3>
            <p className="step-description">Ketik nomor surat tagihan/faktur fisik dari pemasok pada kolom No. Faktur Pemasok untuk validasi pencatatan hutang.</p>
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
                <span className="capture-label">Area Tangkapan Layar: Masukkan No. Faktur Tagihan dari Pemasok</span>
                <span className="capture-sublabel">
                  Aset visual: Kolom input No. Faktur Pemasok dan tanggal jatuh tempo
                </span>
              </div>
            </div>
          </div>

          <div key={4} className="step-section">
            <h3 className="step-title">4. Periksa Nilai Jurnal dan Simpan Faktur</h3>
            <p className="step-description">Pastikan total tagihan, potongan termin, dan pajak sesuai dengan surat tagihan fisik. Klik 'Simpan' untuk memposting hutang usaha.</p>
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
                <span className="capture-label">Area Tangkapan Layar: Periksa Nilai Jurnal dan Simpan Faktur</span>
                <span className="capture-sublabel">
                  Aset visual: Pratinjau total faktur pembelian dan tombol simpan final
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const cara_membuat_faktur_pembelian_meta = {
  id: "cara-membuat-faktur-pembelian",
  title: "Cara Membuat Faktur Pembelian (Purchase Invoice)",
  category: "Faktur Pembelian",
  readTime: "3.5 Menit",
  steps: [{"num":1,"title":"Akses Menu Faktur Pembelian"},{"num":2,"title":"Tarik Data dari Penerimaan Barang (Surat Jalan)"},{"num":3,"title":"Masukkan No. Faktur Tagihan dari Pemasok"},{"num":4,"title":"Periksa Nilai Jurnal dan Simpan Faktur"}]
};

export default CaraMembuatFakturPembelian;
