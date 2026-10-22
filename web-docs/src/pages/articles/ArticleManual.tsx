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
            <img src="/assets/step1-menu-pembelian.png" alt="Menu Pembelian CashFlow" />
            <span className="img-caption">Gambar 1: Mengakses menu Pembelian di sidebar aplikasi CashFlow Online</span>
          </div>
        </div>

        <div className="step-section">
          <h3>2. Isi informasi Supplier dan Tanggal Terima</h3>
          <p>Pilih nama pemasok pada kolom <strong>Pemasok</strong>, masukkan tanggal barang diterima fisik di gudang, dan isi nomor surat jalan pengiriman dari pemasok pada kolom <strong>No. Terima</strong>.</p>
          <div className="img-wrapper">
            <img src="/assets/step1-cari-barang.png" alt="Form Penerimaan Barang Baru" />
            <span className="img-caption">Gambar 2: Mengisi data header formulir penerimaan barang baru</span>
          </div>
        </div>

        <div className="step-section">
          <h3>3. Pilih atau Tambah Barang yang Diterima</h3>
          <p>Ketik nama barang pada kolom pencarian barang atau klik tombol <em>+ Tambah</em> jika barang belum terdaftar di sistem.</p>
          <div className="img-wrapper">
            <img src="/assets/step1-tambah-barang-modal.png" alt="Modal Tambah Barang" />
            <span className="img-caption">Gambar 3: Form popup tambah item barang baru langsung dari transaksi</span>
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
