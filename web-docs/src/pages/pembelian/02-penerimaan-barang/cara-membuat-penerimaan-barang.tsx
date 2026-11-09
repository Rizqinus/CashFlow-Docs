import React from 'react';
import { ArrowLeft, Clock, Play, Camera } from 'lucide-react';

interface ArticleProps {
  onBack: () => void;
}

export const CaraMembuatPenerimaanBarang: React.FC<ArticleProps> = ({ onBack }) => {
  return (
    <article className="article-container">
      <div className="article-header">
        <button onClick={onBack} className="btn-back">
          <ArrowLeft size={16} /> Kembali ke {"Penerimaan Barang"}
        </button>
        <h1 className="article-title">{"Cara Mencatat Barang yang Masuk dari Supplier di CashFlow"}</h1>
        <div className="article-meta">
          <span className="author-badge">{"Product Specialist"}</span>
          <span className="dot">•</span>
          <span className="author-badge">{"Inventory Consultant"}</span>
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
          <span>Video Tutorial: {"Cara Mencatat Barang yang Masuk dari Supplier di CashFlow"}</span>
        </div>
        <div className="video-tutorial-preview">
          <div className="video-play-btn">
            <Play size={24} fill="#ffffff" color="#ffffff" />
          </div>
          <span className="video-duration">{"3 Menit"}</span>
        </div>
      </div>

      <div className="article-content">
        <p className="article-summary">{"Panduan operasional pencatatan surat jalan fisik barang masuk dari supplier secara langsung tanpa dokumen pesanan pembelian (Non-PO receipt) pada sistem persediaan CashFlow Online."}</p>

        <div className="steps-container">
          <div key={1} className="step-section">
            <h3 className="step-title">1. Buka formulir Penerimaan Barang</h3>
            <p className="step-description">Masuk ke menu navigasi Pembelian ➔ klik sub-menu Penerimaan Barang.</p>
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
              <img src="/images/pembelian/cashflow_manual_langkah_1.png" alt="Buka formulir Penerimaan Barang" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ padding: '8px 12px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', fontSize: '13px', color: '#64748b' }}>Gambar 1: Mengakses modul Pembelian dan membuka fitur Penerimaan Pesanan (1)</div>
            </div>
          </div>

          <div key={2} className="step-section">
            <h3 className="step-title">2. Isi informasi Supplier dan Cari Barang</h3>
            <p className="step-description">Pilih nama pemasok pada kolom Supplier (1), tentukan tanggal terima, lalu pada kolom Scan / Cari Barang pilih item barang fisik yang masuk (2).</p>
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
              <img src="/images/pembelian/cashflow_manual_langkah_2.png" alt="Isi informasi Supplier dan Cari Barang" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ padding: '8px 12px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', fontSize: '13px', color: '#64748b' }}>Gambar 2: Mengisi header dokumen (1) dan memilih item barang pada kolom pencarian (2)</div>
            </div>
          </div>

          <div key={3} className="step-section">
            <h3 className="step-title">3. Tentukan Kuantitas dan Tambahkan Barang</h3>
            <p className="step-description">Pada modal pop-up yang muncul, tentukan kuantitas barang yang diterima secara fisik, lalu klik tombol Tambahkan.</p>
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
              <img src="/images/pembelian/cashflow_manual_langkah_3.png" alt="Tentukan Kuantitas dan Tambahkan Barang" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ padding: '8px 12px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', fontSize: '13px', color: '#64748b' }}>Gambar 3: Memeriksa kuantitas/harga barang dan mengonfirmasi tombol Tambahkan</div>
            </div>
          </div>

          <div key={4} className="step-section">
            <h3 className="step-title">4. Simpan Transaksi</h3>
            <p className="step-description">Periksa kembali daftar barang yang telah dimasukkan, lalu klik tombol Simpan di pojok kanan atas formulir untuk membukukan penambahan stok.</p>
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
                <span className="capture-label">Area Tangkapan Layar: Simpan Transaksi</span>
                <span className="capture-sublabel">
                  Aset visual: Tombol simpan di pojok kanan atas form Penerimaan Barang
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const cara_membuat_penerimaan_barang_meta = {
  id: "art1",
  title: "Cara Mencatat Barang yang Masuk dari Supplier di CashFlow",
  category: "Penerimaan Barang",
  readTime: "3 Menit",
  steps: [{"num":1,"title":"Buka formulir Penerimaan Barang"},{"num":2,"title":"Isi informasi Supplier dan Cari Barang"},{"num":3,"title":"Tentukan Kuantitas dan Tambahkan Barang"},{"num":4,"title":"Simpan Transaksi"}]
};

export default CaraMembuatPenerimaanBarang;
