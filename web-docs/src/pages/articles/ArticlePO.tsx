import React from 'react';

interface ArticleProps {
  onBackToIndex: () => void;
  onNextArticle: () => void;
}

export const ArticlePO: React.FC<ArticleProps> = ({ onBackToIndex, onNextArticle }) => {
  return (
    <article className="page-article">
      <h1 className="article-title">Cara Membuat Penerimaan Barang yang Berasal dari Pesanan Pembelian</h1>
      <div className="article-meta">
        <span className="author-badge">Senior Solution Architect</span>
        <span className="dot">•</span>
        <span>Dipublikasikan: 05 Mei 2025</span>
        <span className="dot">•</span>
        <span>Diperbarui: 15 Juli 2026</span>
      </div>

      <div className="article-body">
        <p>Alur ini digunakan apabila perusahaan Anda sudah membuat dokumen <strong>Pesanan Pembelian (PO)</strong> terlebih dahulu ke pihak supplier, kemudian barang pesanan tersebut datang ke gudang.</p>
        
        {/* VIDEO TUTORIAL EMBED BOX */}
        <div className="video-tutorial-box">
          <div className="video-card-header">
            <div className="video-badge">
              <span className="play-icon">▶</span>
              <strong>Video Tutorial</strong>
            </div>
            <span className="video-duration">2.5 Menit</span>
          </div>
          <div className="video-player-placeholder">
            <div className="play-button-circle">
              <span className="play-triangle">▶</span>
            </div>
            <p className="video-title">Penerimaan Barang Berbasis Pesanan Pembelian (PO)</p>
            <span className="video-sub">Tarik otomatis nomor PO agar kuantitas dan harga satuan presisi tanpa input ulang</span>
          </div>
        </div>

        <div className="callout-box info">
          <strong>Otomatisasi Sistem:</strong>
          <p>Dengan menarik nomor PO, sistem CashFlow akan secara otomatis menghitung sisa kuantitas barang yang belum terkirim dan mencegah duplikasi penerimaan barang ganda.</p>
        </div>

        <h2>Langkah-langkah pembuatan:</h2>
        
        <div className="step-section">
          <h3>1. Buka formulir Penerimaan Barang dan Pilih Supplier</h3>
          <p>Buka menu <strong>Pembelian ➔ Penerimaan Barang</strong>. Pada kolom <em>Pemasok</em>, pilih nama pemasok yang sesuai dengan dokumen pesanan.</p>
          <div className="img-wrapper">
            <img src="/assets/step1-menu-pembelian.png" alt="Form Penerimaan Pesanan Baru" />
            <span className="img-caption">Gambar 1: Form penerimaan barang dalam status baru dengan pemilihan supplier</span>
          </div>
        </div>

        <div className="step-section">
          <h3>2. Klik tombol "Ambil" ➔ Pilih "Pesanan"</h3>
          <p>Pada bar navigasi formulir di bagian kanan, klik tombol menu <strong>Ambil</strong> lalu klik pilihan <strong>Pesanan</strong>.</p>
          <div className="img-wrapper">
            <img src="/assets/step2-ambil-dari-po.png" alt="Opsi Ambil Pesanan Pembelian" />
            <span className="img-caption">Gambar 2: Mengambil data barang yang masuk dari nomor PO yang sudah ada</span>
          </div>
        </div>

        <div className="step-section">
          <h3>3. Pilih Nomor Transaksi PO dan Barang</h3>
          <p>Pilih nomor formulir PO yang akan diterima barangnya, centang daftar barang yang diterima fisik di gudang, lalu klik <strong>Lanjut</strong>.</p>
          <div className="img-wrapper">
            <img src="/assets/step2-salin-pesanan-modal.png" alt="Modal Salin Pesanan Pembelian" />
            <span className="img-caption">Gambar 3: Modal pemilihan daftar nomor pesanan pembelian dan konfirmasi rincian barang</span>
          </div>
        </div>

        <div className="step-section">
          <h3>4. Simpan Dokumen</h3>
          <p>Pastikan kuantitas barang masuk cocok dengan surat jalan fisik, kemudian klik tombol <strong>Simpan 💾</strong>.</p>
        </div>

        {/* BOTTOM PAGINATION */}
        <div className="pagination-bar">
          <button className="pag-btn prev" onClick={onBackToIndex}>« Cara membuat penerimaan barang langsung</button>
          <button className="pag-btn next" onClick={onNextArticle}>Cara mengatasi error jumlah pengeluaran tidak boleh nol »</button>
        </div>
      </div>
    </article>
  );
};
