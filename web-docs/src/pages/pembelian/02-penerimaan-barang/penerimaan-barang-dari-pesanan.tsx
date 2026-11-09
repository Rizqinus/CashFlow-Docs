import React from 'react';
import { ArrowLeft, Clock, Play, Camera } from 'lucide-react';

interface ArticleProps {
  onBack: () => void;
}

export const PenerimaanBarangDariPesanan: React.FC<ArticleProps> = ({ onBack }) => {
  return (
    <article className="article-container">
      <div className="article-header">
        <button onClick={onBack} className="btn-back">
          <ArrowLeft size={16} /> Kembali ke {"Penerimaan Barang"}
        </button>
        <h1 className="article-title">{"Cara Membuat Penerimaan Barang yang Berasal dari Pesanan Pembelian"}</h1>
        <div className="article-meta">
          <span className="author-badge">{"Senior Solution Architect"}</span>
          <span className="dot">•</span>
          <span className="author-badge">{"ERP Specialist"}</span>
          <span className="dot">•</span>
          <span className="badge-category">{"Penerimaan Barang"}</span>
          <span className="dot">•</span>
          <span className="meta-time"><Clock size={14} /> Waktu baca: {"3 Menit"}</span>
          <span className="dot">•</span>
          <span className="meta-time">Diperbarui: {"02 November 2026"}</span>
        </div>
      </div>

      <div className="video-tutorial-box">
        <div className="video-tutorial-badge">
          <Play size={14} fill="#0284c7" color="#0284c7" />
          <span>Video Tutorial: {"Cara Membuat Penerimaan Barang yang Berasal dari Pesanan Pembelian"}</span>
        </div>
        <div className="video-tutorial-preview">
          <div className="video-play-btn">
            <Play size={24} fill="#ffffff" color="#ffffff" />
          </div>
          <span className="video-duration">{"3 Menit"}</span>
        </div>
      </div>

      <div className="article-content">
        <p className="article-summary">{"Alur penerimaan barang masuk berdasarkan referensi dokumen Pesanan Pembelian (Purchase Order) yang sudah disetujui sebelumnya."}</p>

        <div className="steps-container">
          <div key={1} className="step-section">
            <h3 className="step-title">1. Buka formulir Penerimaan Barang dan Pilih Supplier</h3>
            <p className="step-description">Masuk ke menu Pembelian ➔ Penerimaan Barang. Pilih nama Supplier yang sesuai dengan supplier penerbit PO.</p>
            <div className="capture-image-frame" style={{ marginTop: '14px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #cbd5e1', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.08)' }}>
              <div className="capture-header-bar">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-address-pill">
                  appcashflow.id/penerimaan-barang
                </div>
              </div>
              <img src="/images/pembelian/cashflow_penerimaan_langkah_1.png" alt="Buka formulir Penerimaan Barang dan Pilih Supplier" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ padding: '8px 12px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', fontSize: '13px', color: '#64748b' }}>Gambar 1: Membuka formulir Penerimaan Barang dan memilih pemasok</div>
            </div>
          </div>

          <div key={2} className="step-section">
            <h3 className="step-title">2. Klik tombol Ambil ➔ Pilih Pesanan Pembelian</h3>
            <p className="step-description">Pada sisi kanan form, klik dropdown tombol Ambil lalu klik pilihan Pesanan Pembelian.</p>
            <div className="capture-image-frame" style={{ marginTop: '14px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #cbd5e1', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.08)' }}>
              <div className="capture-header-bar">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-address-pill">
                  appcashflow.id/penerimaan-barang
                </div>
              </div>
              <img src="/images/pembelian/cashflow_penerimaan_langkah_2.png" alt="Klik tombol Ambil ➔ Pilih Pesanan Pembelian" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ padding: '8px 12px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', fontSize: '13px', color: '#64748b' }}>Gambar 2: Memilih opsi pengambilan data dari Pesanan Pembelian</div>
            </div>
          </div>

          <div key={3} className="step-section">
            <h3 className="step-title">3. Pilih Nomor Transaksi PO dan Klik Lanjut</h3>
            <p className="step-description">Pilih nomor dokumen PO yang barangnya sedang diterima, centang item barang yang datang, lalu klik tombol Lanjut.</p>
            <div className="capture-placeholder-frame">
              <div className="capture-header-bar">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-address-pill">
                  appcashflow.id/penerimaan-barang
                </div>
              </div>
              <div className="capture-body-content">
                <Camera size={32} className="camera-icon-muted" />
                <span className="capture-label">Area Tangkapan Layar: Pilih Nomor Transaksi PO dan Klik Lanjut</span>
                <span className="capture-sublabel">
                  Aset visual: Dialog pemilihan nomor PO dan checklist item barang yang diterima
                </span>
              </div>
            </div>
          </div>

          <div key={4} className="step-section">
            <h3 className="step-title">4. Simpan Dokumen</h3>
            <p className="step-description">Sistem akan otomatis mengisi kuantitas dan rincian barang. Klik Simpan untuk memperbarui status pesanan menjadi Terproses.</p>
            <div className="capture-placeholder-frame">
              <div className="capture-header-bar">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-address-pill">
                  appcashflow.id/penerimaan-barang
                </div>
              </div>
              <div className="capture-body-content">
                <Camera size={32} className="camera-icon-muted" />
                <span className="capture-label">Area Tangkapan Layar: Simpan Dokumen</span>
                <span className="capture-sublabel">
                  Aset visual: Tombol Simpan form penerimaan barang
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const penerimaan_barang_dari_pesanan_meta = {
  id: "art2",
  title: "Cara Membuat Penerimaan Barang yang Berasal dari Pesanan Pembelian",
  category: "Penerimaan Barang",
  readTime: "3 Menit",
  steps: [{"num":1,"title":"Buka formulir Penerimaan Barang dan Pilih Supplier"},{"num":2,"title":"Klik tombol Ambil ➔ Pilih Pesanan Pembelian"},{"num":3,"title":"Pilih Nomor Transaksi PO dan Klik Lanjut"},{"num":4,"title":"Simpan Dokumen"}]
};

export default PenerimaanBarangDariPesanan;
