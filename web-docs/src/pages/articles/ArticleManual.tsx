import React from 'react';

interface ArticleProps {
  onBackToIndex: () => void;
  onNextArticle: () => void;
}

export const ArticleManual: React.FC<ArticleProps> = ({ onBackToIndex, onNextArticle }) => {
  return (
    <article className="page-article">
      <h1 className="article-title">Cara Mencatat Barang yang Masuk dari Supplier di CashFlow</h1>
      <div className="article-meta">
        <span className="author-badge">Product Specialist</span>
        <span className="dot">•</span>
        <span>Dipublikasikan: 21 April 2025</span>
        <span className="dot">•</span>
        <span>Diperbarui: 13 Juli 2026</span>
      </div>

      <div className="article-body">
        <p>Fitur <strong>Penerimaan Barang</strong> di CashFlow Online digunakan untuk mencatat penerimaan barang fisik dari pemasok secara langsung sebelum atau tanpa melalui proses pesanan pembelian (PO).</p>
        
        {/* VIDEO TUTORIAL EMBED BOX */}
        <div className="video-tutorial-box">
          <div className="video-card-header">
            <div className="video-badge">
              <span className="play-icon">▶</span>
              <strong>Video Tutorial</strong>
            </div>
            <span className="video-duration">3 Menit</span>
          </div>
          <div className="video-player-placeholder">
            <div className="play-button-circle">
              <span className="play-triangle">▶</span>
            </div>
            <p className="video-title">Penerimaan Barang Manual Tanpa Pesanan (Non-PO)</p>
            <span className="video-sub">Pelajari alur cepat input stok masuk langsung dari surat jalan pemasok</span>
          </div>
        </div>

        <div className="callout-box tip">
          <strong>Tips Penting:</strong>
          <p>Pastikan master data Supplier dan Barang sudah terdaftar terlebih dahulu di menu Persediaan agar proses input berjalan cepat.</p>
        </div>

        <h2>Langkah-langkah pembuatan formulir:</h2>
        
        <div className="step-section">
          <h3>1. Buka formulir Penerimaan Barang</h3>
          <p>Masuk ke menu navigasi <strong>Pembelian</strong> ➔ klik sub-menu <strong>Penerimaan Barang</strong>.</p>
          <div className="img-wrapper">
            <img src="/images/pembelian/cashflow_manual_langkah_1.png" alt="Menu Pembelian CashFlow" />
            <span className="img-caption">Gambar 1: Mengakses modul Pembelian dan membuka fitur Penerimaan Pesanan (1)</span>
          </div>
        </div>

        <div className="step-section">
          <h3>2. Isi informasi Supplier dan Cari Barang</h3>
          <p>Pilih nama pemasok pada kolom <strong>Supplier</strong> (1), tentukan tanggal terima, lalu pada kolom <strong>Scan / Cari Barang</strong> pilih item barang fisik yang masuk (2).</p>
          <div className="img-wrapper">
            <img src="/images/pembelian/cashflow_manual_langkah_2.png" alt="Form Penerimaan Barang Baru" />
            <span className="img-caption">Gambar 2: Mengisi header dokumen (1) dan memilih item barang pada kolom pencarian (2)</span>
          </div>
        </div>

        <div className="step-section">
          <h3>3. Tentukan Kuantitas dan Tambahkan Barang</h3>
          <p>Pada modal pop-up yang muncul, tentukan kuantitas barang yang diterima secara fisik, lalu klik tombol <strong>Tambahkan</strong>.</p>
          <div className="img-wrapper">
            <img src="/images/pembelian/cashflow_manual_langkah_3.png" alt="Modal Tambah Barang" />
            <span className="img-caption">Gambar 3: Memeriksa kuantitas/harga barang dan mengonfirmasi tombol Tambahkan</span>
          </div>
        </div>

        <div className="step-section">
          <h3>4. Simpan Transaksi</h3>
          <p>Periksa kembali kuantitas dan rincian barang. Jika sudah sesuai, klik tombol <strong>Simpan</strong> di sudut kanan atas untuk menyelesaikan pencatatan.</p>
        </div>

        {/* BOTTOM PAGINATION */}
        <div className="pagination-bar">
          <button className="pag-btn prev" onClick={onBackToIndex}>« Kembali ke Katalog Penerimaan Barang</button>
          <button className="pag-btn next" onClick={onNextArticle}>Cara menerima barang dari pesanan pembelian »</button>
        </div>
      </div>
    </article>
  );
};
