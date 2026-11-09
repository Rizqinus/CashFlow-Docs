import React from 'react';
import { ArrowLeft, Clock, Play, Camera } from 'lucide-react';

interface ArticleProps {
  onBack: () => void;
}

export const ErrorPengeluaranNolAsetTetap: React.FC<ArticleProps> = ({ onBack }) => {
  return (
    <article className="article-container">
      <div className="article-header">
        <button onClick={onBack} className="btn-back">
          <ArrowLeft size={16} /> Kembali ke {"Penerimaan Barang"}
        </button>
        <h1 className="article-title">{"Cara Mengatasi Error Jumlah Pengeluaran Tidak Boleh Nol"}</h1>
        <div className="article-meta">
          <span className="author-badge">{"Nibras Ratna Fauziah, A.Md.A.K, CAP"}</span>
          <span className="dot">•</span>
          <span className="author-badge">{"Product Enablement Consultant"}</span>
          <span className="dot">•</span>
          <span className="badge-category">{"Penerimaan Barang"}</span>
          <span className="dot">•</span>
          <span className="meta-time"><Clock size={14} /> Waktu baca: {"3 Menit"}</span>
          <span className="dot">•</span>
          <span className="meta-time">Diperbarui: {"17 Juli 2026"}</span>
        </div>
      </div>

      <div className="video-tutorial-box">
        <div className="video-tutorial-badge">
          <Play size={14} fill="#0284c7" color="#0284c7" />
          <span>Video Tutorial: {"Cara Mengatasi Error Jumlah Pengeluaran Tidak Boleh Nol"}</span>
        </div>
        <div className="video-tutorial-preview">
          <div className="video-play-btn">
            <Play size={24} fill="#ffffff" color="#ffffff" />
          </div>
          <span className="video-duration">{"3 Menit"}</span>
        </div>
      </div>

      <div className="article-content">
        <p className="article-summary">{"Saat memproses transaksi Penerimaan Barang dari pesanan pembelian aset tetap di CashFlow Online, terkadang muncul pesan error: “Jumlah Pengeluaran Tidak Boleh Nol”. Pesan ini biasanya muncul ketika nilai atau harga pembelian pada transaksi Pesanan Pembelian Aset belum diisi atau masih bernilai nol (0). Karena sistem membutuhkan nilai nominal untuk membentuk jurnal dan pengakuan aset, transaksi tidak dapat disimpan jika total pengeluaran masih nol."}</p>

        <div className="steps-container">
          <div key={1} className="step-section">
            <h3 className="step-title">1. Klik Edit pada Notifikasi Error</h3>
            <p className="step-description">Saat pesan error muncul, klik tombol Edit pada notifikasi tersebut. Langkah ini akan membawa Anda kembali ke transaksi terkait agar dapat dilakukan pengecekan dan perbaikan data.</p>
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
              <img src="/images/pembelian/error_nol_klik_edit.png" alt="Klik Edit pada Notifikasi Error" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ padding: '8px 12px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', fontSize: '13px', color: '#64748b' }}>Gambar 1: Kotak dialog notifikasi error — klik tombol Edit di sudut kanan bawah pop-up</div>
            </div>
          </div>

          <div key={2} className="step-section">
            <h3 className="step-title">2. Buka Menu Pesanan Pembelian Aset</h3>
            <p className="step-description">Selanjutnya, akses kembali transaksi pesanan pembelian yang menjadi sumber masalah. Masuk ke menu Pembelian pada sidebar kiri, lalu pilih Pesanan Pembelian.</p>
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
              <img src="/images/pembelian/error_nol_menu_pesanan.png" alt="Buka Menu Pesanan Pembelian Aset" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ padding: '8px 12px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', fontSize: '13px', color: '#64748b' }}>Gambar 2: Navigasi menu Pembelian ➔ Pesanan Pembelian</div>
            </div>
          </div>

          <div key={3} className="step-section">
            <h3 className="step-title">3. Pilih Transaksi Pesanan Aset yang Dimaksud</h3>
            <p className="step-description">Setelah masuk ke daftar Pesanan Pembelian, cari dan pilih transaksi pesanan pembelian aset yang akan diproses penerimaannya (contoh: nomor PO.2026.02.00001 atas nama Pemasok Aset dengan total 0).</p>
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
              <img src="/images/pembelian/error_nol_daftar_po_nol.png" alt="Pilih Transaksi Pesanan Aset yang Dimaksud" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ padding: '8px 12px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', fontSize: '13px', color: '#64748b' }}>Gambar 3: Memilih dokumen PO aset yang bernilai Total 0 (Menunggu diproses)</div>
            </div>
          </div>

          <div key={4} className="step-section">
            <h3 className="step-title">4. Isi Nilai atau Harga pada Rincian Barang</h3>
            <p className="step-description">Setelah formulir transaksi terbuka, klik bagian tab Rincian Barang. Masukkan nilai atau harga aset yang dimaksud (contoh: Rp 5.000.000), klik Lanjut, lalu simpan kembali transaksi Pesanan Pembelian tersebut.</p>
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
              <img src="/images/pembelian/error_nol_penyebab_po_kosong.png" alt="Isi Nilai atau Harga pada Rincian Barang" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ padding: '8px 12px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', fontSize: '13px', color: '#64748b' }}>Gambar 4: Kolom @Harga pada modal Rincian Barang sebelum diisi nilai perolehan aset</div>
            </div>
          </div>

          <div key={5} className="step-section">
            <h3 className="step-title">5. Simpan Kembali Penerimaan Barang atau Faktur</h3>
            <p className="step-description">Setelah nilai pada Pesanan Pembelian sudah diperbaiki, kembali ke transaksi Penerimaan Barang atau Faktur Pembelian yang sebelumnya mengalami error, lalu klik Simpan kembali.</p>
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
              <img src="/images/pembelian/error_nol_rincian_po_diisi.png" alt="Simpan Kembali Penerimaan Barang atau Faktur" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ padding: '8px 12px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', fontSize: '13px', color: '#64748b' }}>Gambar 5: Nilai @Harga telah diisi sebesar 5.000.000 pada dokumen PO sehingga transaksi penerimaan dapat disimpan normal</div>
            </div>
          </div>
        </div>
        <div className="callout-box warning" style={{ borderLeft: '4px solid #f59e0b', backgroundColor: '#fffbeb', padding: '14px 18px', margin: '24px 0', borderRadius: '6px' }}>
          <strong style={{ color: '#b45309', display: 'block', marginBottom: '6px' }}>Catatan Penting:</strong>
          <p style={{ margin: 0, fontSize: '14px', color: '#78350f', lineHeight: 1.6 }}>{"Error ini juga dapat terjadi apabila Anda langsung memproses Pesanan Pembelian dengan nilai nol (0) ke Faktur Pembelian tanpa terlebih dahulu mengisi harga atau nilai aset. Pastikan setiap transaksi pembelian aset memiliki nilai nominal sebelum diproses ke tahap penerimaan atau penagihan."}</p>
        </div>
      </div>
    </article>
  );
};

export const error_pengeluaran_nol_aset_tetap_meta = {
  id: "art3",
  title: "Cara Mengatasi Error Jumlah Pengeluaran Tidak Boleh Nol",
  category: "Penerimaan Barang",
  readTime: "3 Menit",
  steps: [{"num":1,"title":"Klik Edit pada Notifikasi Error"},{"num":2,"title":"Buka Menu Pesanan Pembelian Aset"},{"num":3,"title":"Pilih Transaksi Pesanan Aset yang Dimaksud"},{"num":4,"title":"Isi Nilai atau Harga pada Rincian Barang"},{"num":5,"title":"Simpan Kembali Penerimaan Barang atau Faktur"}]
};

export default ErrorPengeluaranNolAsetTetap;
