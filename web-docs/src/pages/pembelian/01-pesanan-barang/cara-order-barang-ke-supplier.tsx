import React from 'react';
import { ArrowLeft, Clock, Play, Camera } from 'lucide-react';

interface ArticleProps {
  onBack: () => void;
}

export const CaraOrderBarangKeSupplier: React.FC<ArticleProps> = ({ onBack }) => {
  return (
    <article className="article-container">
      <div className="article-header">
        <button onClick={onBack} className="btn-back">
          <ArrowLeft size={16} /> Kembali ke {"Pesanan Pembelian"}
        </button>
        <h1 className="article-title">{"Cara Order Barang ke Supplier dan Mencatatnya di CashFlow Online"}</h1>
        <div className="article-meta">
          <span className="badge-category">{"Pesanan Pembelian"}</span>
          <span className="dot">•</span>
          <span className="meta-time"><Clock size={14} /> Waktu baca: {"3 Menit"}</span>
        </div>
      </div>

      <div className="video-tutorial-box">
        <div className="video-tutorial-badge">
          <Play size={14} fill="#0284c7" color="#0284c7" />
          <span>Video Tutorial: {"Cara Order Barang ke Supplier dan Mencatatnya di CashFlow Online"}</span>
        </div>
        <div className="video-tutorial-preview">
          <div className="video-play-btn">
            <Play size={24} fill="#ffffff" color="#ffffff" />
          </div>
          <span className="video-duration">{"3 Menit"}</span>
        </div>
      </div>

      <div className="article-content">
        <p className="article-summary">{"Pesanan Pembelian (Purchase Order / PO) adalah dokumen pemesanan formal yang dibuat untuk memesan barang/jasa kepada pemasok sebelum barang dikirim dan sebelum faktur diterbitkan."}</p>

        <div className="steps-container">
          <div key={1} className="step-section">
            <h3 className="step-title">1. Buka Menu Pesanan Pembelian</h3>
            <p className="step-description">Masuk ke navigasi utama menu Pembelian lalu pilih modul Pesanan Pembelian untuk membuka formulir pesanan baru.</p>
            <div className="capture-image-frame" style={{ marginTop: '14px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #cbd5e1', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.08)' }}>
              <div className="capture-header-bar">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-address-pill">
                  appcashflow.id/pesanan-pembelian
                </div>
              </div>
              <img src="/images/pembelian/cashflow_po_langkah_1.png" alt="Buka Menu Pesanan Pembelian" style={{ width: '100%', height: 'auto', display: 'block' }} />
              
            </div>
          </div>

          <div key={2} className="step-section">
            <h3 className="step-title">2. Pilih Pemasok dan Informasi Pengiriman</h3>
            <p className="step-description">Tentukan nama pemasok dari daftar yang tersedia, lengkapi mata uang, tanggal transaksi pemesanan, serta nomor order.</p>
            <div className="capture-image-frame" style={{ marginTop: '14px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #cbd5e1', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.08)' }}>
              <div className="capture-header-bar">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-address-pill">
                  appcashflow.id/pesanan-pembelian
                </div>
              </div>
              <img src="/images/pembelian/cashflow_po_langkah_2.png" alt="Pilih Pemasok dan Informasi Pengiriman" style={{ width: '100%', height: 'auto', display: 'block' }} />
              
            </div>
          </div>

          <div key={3} className="step-section">
            <h3 className="step-title">3. Pilih Barang yang Dipesan</h3>
            <p className="step-description">Ketik nama barang atau barcode pada kolom pencarian 'Scan / Cari Barang...' lalu pilih item produk dari daftar yang tampil.</p>
            <div className="capture-image-frame" style={{ marginTop: '14px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #cbd5e1', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.08)' }}>
              <div className="capture-header-bar">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-address-pill">
                  appcashflow.id/pesanan-pembelian
                </div>
              </div>
              <img src="/images/pembelian/cashflow_po_langkah_3.png" alt="Pilih Barang yang Dipesan" style={{ width: '100%', height: 'auto', display: 'block' }} />
              
            </div>
          </div>

          <div key={4} className="step-section">
            <h3 className="step-title">4. Atur Kuantitas dan Tambahkan Barang</h3>
            <p className="step-description">Pada modal pop-up 'Tambah Barang', tentukan kuantitas pesanan serta periksa harga satuan, lalu klik tombol 'Tambahkan' untuk memasukkan item ke daftar transaksi.</p>
            <div className="capture-image-frame" style={{ marginTop: '14px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #cbd5e1', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.08)' }}>
              <div className="capture-header-bar">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-address-pill">
                  appcashflow.id/pesanan-pembelian
                </div>
              </div>
              <img src="/images/pembelian/cashflow_po_langkah_4.png" alt="Atur Kuantitas dan Tambahkan Barang" style={{ width: '100%', height: 'auto', display: 'block' }} />
              
            </div>
          </div>

          <div key={5} className="step-section">
            <h3 className="step-title">5. Tambahkan Informasi Tambahan</h3>
            <p className="step-description">Kemudian pada tab Info Lainnya (1), silakan isi detail sesuai kebutuhan seperti Cabang, Syarat Pembayaran (2), dan alamat perusahaan Kamu.</p>
            <div className="capture-image-frame" style={{ marginTop: '14px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #cbd5e1', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.08)' }}>
              <div className="capture-header-bar">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-address-pill">
                  appcashflow.id/pesanan-pembelian
                </div>
              </div>
              <img src="/images/pembelian/cashflow_po_langkah_5.png" alt="Tambahkan Informasi Tambahan" style={{ width: '100%', height: 'auto', display: 'block' }} />
              
            </div>
          </div>

          <div key={6} className="step-section">
            <h3 className="step-title">6. Simpan Pesanan Pembelian</h3>
            <p className="step-description">Jika informasi semua sudah lengkap, silakan simpan dengan klik tombol Simpan pada pojok kanan atas formulir.</p>
            <div className="capture-image-frame" style={{ marginTop: '14px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #cbd5e1', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.08)' }}>
              <div className="capture-header-bar">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-address-pill">
                  appcashflow.id/pesanan-pembelian
                </div>
              </div>
              <img src="/images/pembelian/cashflow_po_langkah_6.png" alt="Simpan Pesanan Pembelian" style={{ width: '100%', height: 'auto', display: 'block' }} />
              
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const cara_order_barang_ke_supplier_meta = {
  id: "cara-order-barang-ke-supplier",
  title: "Cara Order Barang ke Supplier dan Mencatatnya di CashFlow Online",
  category: "Pesanan Pembelian",
  readTime: "3 Menit",
  steps: [{"num":1,"title":"Buka Menu Pesanan Pembelian"},{"num":2,"title":"Pilih Pemasok dan Informasi Pengiriman"},{"num":3,"title":"Pilih Barang yang Dipesan"},{"num":4,"title":"Atur Kuantitas dan Tambahkan Barang"},{"num":5,"title":"Tambahkan Informasi Tambahan"},{"num":6,"title":"Simpan Pesanan Pembelian"}]
};

export default CaraOrderBarangKeSupplier;
