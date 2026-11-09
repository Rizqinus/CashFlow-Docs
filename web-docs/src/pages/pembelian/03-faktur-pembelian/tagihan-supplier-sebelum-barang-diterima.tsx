import React from 'react';
import { ArrowLeft, Clock, Play, Camera } from 'lucide-react';

interface ArticleProps {
  onBack: () => void;
}

export const TagihanSupplierSebelumBarangDiterima: React.FC<ArticleProps> = ({ onBack }) => {
  return (
    <article className="article-container">
      <div className="article-header">
        <button onClick={onBack} className="btn-back">
          <ArrowLeft size={16} /> Kembali ke {"Faktur Pembelian"}
        </button>
        <h1 className="article-title">{"Cara Mencatat Tagihan Supplier Sebelum Barang Diterima"}</h1>
        <div className="article-meta">
          <span className="badge-category">{"Faktur Pembelian"}</span>
          <span className="dot">•</span>
          <span className="meta-time"><Clock size={14} /> Waktu baca: {"3.5 Menit"}</span>
        </div>
      </div>

      <div className="video-tutorial-box">
        <div className="video-tutorial-badge">
          <Play size={14} fill="#0284c7" color="#0284c7" />
          <span>Video Tutorial: {"Cara Mencatat Tagihan Supplier Sebelum Barang Diterima"}</span>
        </div>
        <div className="video-tutorial-preview">
          <div className="video-play-btn">
            <Play size={24} fill="#ffffff" color="#ffffff" />
          </div>
          <span className="video-duration">{"3.5 Menit"}</span>
        </div>
      </div>

      <div className="article-content">
        <p className="article-summary">{"Mekanisme penagihan uang muka dan tagihan supplier sebelum barang diterima di gudang penyimpanan."}</p>

        <div className="steps-container">
          <div key={1} className="step-section">
            <h3 className="step-title">1. Akses Menu Faktur Pembelian</h3>
            <p className="step-description">Buka navigasi Pembelian lalu pilih modul Faktur Pembelian pada menu utama CashFlow Online.</p>
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
                  Aset visual: Navigasi menu Pembelian dan modul Faktur Pembelian
                </span>
              </div>
            </div>
          </div>

          <div key={2} className="step-section">
            <h3 className="step-title">2. Pengisian Formulir / Parameter</h3>
            <p className="step-description">Lengkapi data rekanan, nomor transaksi, serta parameter pendukung transaksi.</p>
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
                <span className="capture-label">Area Tangkapan Layar: Pengisian Formulir / Parameter</span>
                <span className="capture-sublabel">
                  Aset visual: Tampilan formulir transaksi dan rincian parameter
                </span>
              </div>
            </div>
          </div>

          <div key={3} className="step-section">
            <h3 className="step-title">3. Simpan Transaksi</h3>
            <p className="step-description">Periksa kembali ringkasan jurnal dan nilai total sebelum mengklik tombol Simpan.</p>
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
                <span className="capture-label">Area Tangkapan Layar: Simpan Transaksi</span>
                <span className="capture-sublabel">
                  Aset visual: Konfirmasi penyimpanan dan status transaksi selesai
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const tagihan_supplier_sebelum_barang_diterima_meta = {
  id: "tagihan-supplier-sebelum-barang-diterima",
  title: "Cara Mencatat Tagihan Supplier Sebelum Barang Diterima",
  category: "Faktur Pembelian",
  readTime: "3.5 Menit",
  steps: [{"num":1,"title":"Akses Menu Faktur Pembelian"},{"num":2,"title":"Pengisian Formulir / Parameter"},{"num":3,"title":"Simpan Transaksi"}]
};

export default TagihanSupplierSebelumBarangDiterima;
