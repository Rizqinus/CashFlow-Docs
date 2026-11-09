import React from 'react';
import { ArrowLeft, Clock, Play, Camera } from 'lucide-react';

interface ArticleProps {
  onBack: () => void;
}

export const InvoiceDariBarangSudahDiterima: React.FC<ArticleProps> = ({ onBack }) => {
  return (
    <article className="article-container">
      <div className="article-header">
        <button onClick={onBack} className="btn-back">
          <ArrowLeft size={16} /> Kembali ke {"Faktur Pembelian"}
        </button>
        <h1 className="article-title">{"Cara Membuat Faktur Pembelian Berasal dari Penerimaan Barang"}</h1>
        <div className="article-meta">
          <span className="badge-category">{"Faktur Pembelian"}</span>
          <span className="dot">•</span>
          <span className="meta-time"><Clock size={14} /> Waktu baca: {"3 Menit"}</span>
        </div>
      </div>

      <div className="video-tutorial-box">
        <div className="video-tutorial-badge">
          <Play size={14} fill="#0284c7" color="#0284c7" />
          <span>Video Tutorial: {"Cara Membuat Faktur Pembelian Berasal dari Penerimaan Barang"}</span>
        </div>
        <div className="video-tutorial-preview">
          <div className="video-play-btn">
            <Play size={24} fill="#ffffff" color="#ffffff" />
          </div>
          <span className="video-duration">{"3 Menit"}</span>
        </div>
      </div>

      <div className="article-content">
        <p className="article-summary">{"Barang sudah sampai di gudang dan sudah dicatat di formulir Penerimaan Barang? Begini cara membuat tagihan faktur pembelian langsung dari nomor tanda terima barang dengan cepat dan akurat."}</p>

        <div className="steps-container">
          <div key={1} className="step-section">
            <h3 className="step-title">1. Buka Menu Faktur Pembelian</h3>
            <p className="step-description">Masuk ke modul Pembelian ➔ Faktur Pembelian. Klik tombol Data Baru (+).</p>
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
                  Aset visual: Formulir baru Faktur Pembelian
                </span>
              </div>
            </div>
          </div>

          <div key={2} className="step-section">
            <h3 className="step-title">2. Pilih Pemasok dan Tarik Penerimaan Barang</h3>
            <p className="step-description">Tentukan nama pemasok. Klik tombol 'Ambil Data', pilih opsi 'Penerimaan Barang', kemudian centang nomor surat penerimaan barang yang ingin ditagihkan.</p>
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
                <span className="capture-label">Area Tangkapan Layar: Pilih Pemasok dan Tarik Penerimaan Barang</span>
                <span className="capture-sublabel">
                  Aset visual: Dropdown Ambil Data ➔ Penerimaan Barang dan modal centang dokumen
                </span>
              </div>
            </div>
          </div>

          <div key={3} className="step-section">
            <h3 className="step-title">3. Periksa Kuantitas dan Harga Barang Masuk</h3>
            <p className="step-description">Daftar barang beserta kuantitas fisik yang masuk akan langsung terisi otomatis. Cocokkan harga satuan dengan invoice resmi dari supplier.</p>
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
                <span className="capture-label">Area Tangkapan Layar: Periksa Kuantitas dan Harga Barang Masuk</span>
                <span className="capture-sublabel">
                  Aset visual: Tabel rincian barang hasil penarikan surat penerimaan barang
                </span>
              </div>
            </div>
          </div>

          <div key={4} className="step-section">
            <h3 className="step-title">4. Isi No. Faktur Tagihan Pemasok dan Simpan</h3>
            <p className="step-description">Klik tab Info Lainnya (i), isi kolom No. Faktur Pemasok, lalu klik tombol Simpan untuk memposting hutang usaha.</p>
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
                <span className="capture-label">Area Tangkapan Layar: Isi No. Faktur Tagihan Pemasok dan Simpan</span>
                <span className="capture-sublabel">
                  Aset visual: Tab Info Lainnya pengisian No. Faktur Pemasok dan tombol simpan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const invoice_dari_barang_sudah_diterima_meta = {
  id: "invoice-dari-barang-sudah-diterima",
  title: "Cara Membuat Faktur Pembelian Berasal dari Penerimaan Barang",
  category: "Faktur Pembelian",
  readTime: "3 Menit",
  steps: [{"num":1,"title":"Buka Menu Faktur Pembelian"},{"num":2,"title":"Pilih Pemasok dan Tarik Penerimaan Barang"},{"num":3,"title":"Periksa Kuantitas dan Harga Barang Masuk"},{"num":4,"title":"Isi No. Faktur Tagihan Pemasok dan Simpan"}]
};

export default InvoiceDariBarangSudahDiterima;
