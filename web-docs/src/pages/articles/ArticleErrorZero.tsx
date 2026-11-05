import React from 'react';

interface ArticleProps {
  onBackToIndex: () => void;
  onPrevArticle: () => void;
}

export const ArticleErrorZero: React.FC<ArticleProps> = ({ onBackToIndex, onPrevArticle }) => {
  return (
    <article className="page-article">
      <h1 className="article-title">Cara Mengatasi Pesan Error: Jumlah Pengeluaran Tidak Boleh Nol</h1>
      <div className="article-meta">
        <span className="author-badge">Product Enablement Consultant</span>
        <span className="dot">•</span>
        <span>Dipublikasikan: 24 Februari 2026</span>
        <span className="dot">•</span>
        <span>Diperbarui: 17 Juli 2026</span>
      </div>

      <div className="article-body">
        <p>Saat memproses transaksi Penerimaan Barang di <strong>CashFlow</strong>, terkadang muncul pesan error atau gagal simpan bertuliskan <em>"Jumlah pengeluaran tidak boleh nol"</em>.</p>
        
        <div className="callout-box info">
          <strong>Kenapa ini terjadi?</strong>
          <p>Sistem akuntansi CashFlow membutuhkan nilai rupiah untuk membentuk jurnal debit persediaan dan kredit hutang/penerimaan barang. Jika barang masuk dengan harga Rp 0, sistem tidak dapat mencatat penambahan nilai aset.</p>
        </div>

        {/* VIDEO TUTORIAL EMBED BOX */}
        <div className="video-tutorial-box">
          <div className="video-card-header">
            <div className="video-badge">
              <span className="play-icon">▶</span>
              <strong>Video Tutorial</strong>
            </div>
            <span className="video-duration">2 Menit</span>
          </div>
          <div className="video-player-placeholder">
            <div className="play-button-circle">
              <span className="play-triangle">▶</span>
            </div>
            <p className="video-title">Solusi Mengatasi Error "Jumlah Pengeluaran Tidak Boleh Nol"</p>
            <span className="video-sub">Panduan teknis pengisian nilai nominal aset pada formulir pesanan</span>
          </div>
        </div>

        <h2>Langkah-langkah penyelesaian:</h2>
        
        <div className="step-section">
          <h3>1. Periksa nilai Total Transaksi</h3>
          
          {/* PLACEHOLDER ILUSTRASI / SCREENSHOT DENGAN UKURAN ASLI CAPTURE */}
          <div className="capture-placeholder-frame">
            <div className="capture-placeholder-inner">
              <div className="capture-header-bar">
                <span className="dot-red"></span>
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
                <span className="capture-bar-title">Screenshot: Form Penerimaan Pesanan &amp; Kolom Total IDR</span>
              </div>
              <div className="capture-body-content">
                <div className="capture-icon">🖼️</div>
                <strong className="capture-main-text">[Capture: Form Penerimaan Pesanan - Kolom Total IDR &gt; Rp 0]</strong>
                <span className="capture-sub-text">Ukuran capture standar 1280 × 720 (Rasio 16:9)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="step-section">
          <h3>2. Periksa harga pada dokumen Pesanan (PO)</h3>
          
          {/* PLACEHOLDER ILUSTRASI / SCREENSHOT DENGAN UKURAN ASLI CAPTURE */}
          <div className="capture-placeholder-frame">
            <div className="capture-placeholder-inner">
              <div className="capture-header-bar">
                <span className="dot-red"></span>
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
                <span className="capture-bar-title">Screenshot: Form Pesanan Pembelian &amp; Kolom Nilai Satuan (@Harga)</span>
              </div>
              <div className="capture-body-content">
                <div className="capture-icon">🖼️</div>
                <strong className="capture-main-text">[Capture: Form Pesanan Pembelian - Kolom Harga Satuan Barang Valid]</strong>
                <span className="capture-sub-text">Ukuran capture standar 1280 × 720 (Rasio 16:9)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="step-section">
          <h3>3. Tarik ulang dan simpan dokumen</h3>
          
          {/* PLACEHOLDER ILUSTRASI / SCREENSHOT DENGAN UKURAN ASLI CAPTURE */}
          <div className="capture-placeholder-frame">
            <div className="capture-placeholder-inner">
              <div className="capture-header-bar">
                <span className="dot-red"></span>
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
                <span className="capture-bar-title">Screenshot: Konfirmasi Notifikasi Transaksi Berhasil Tersimpan</span>
              </div>
              <div className="capture-body-content">
                <div className="capture-icon">🖼️</div>
                <strong className="capture-main-text">[Capture: Konfirmasi Simpan Berhasil &amp; Riwayat Transaksi]</strong>
                <span className="capture-sub-text">Ukuran capture standar 1280 × 720 (Rasio 16:9)</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM PAGINATION */}
        <div className="pagination-bar">
          <button className="pag-btn prev" onClick={onPrevArticle}>« Cara membuat penerimaan barang dari pesanan</button>
          <button className="pag-btn next" onClick={onBackToIndex}>Kembali ke Katalog Penerimaan Barang »</button>
        </div>
      </div>
    </article>
  );
};
