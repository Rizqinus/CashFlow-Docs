import React from 'react';
import { FileText } from 'lucide-react';

interface ModuleIndexProps {
  currentModule: string;
  setActiveTab: (tab: string) => void;
  handleSelectModule: (modName: string) => void;
}

export const ModuleIndex: React.FC<ModuleIndexProps> = ({
  currentModule,
  setActiveTab,
  handleSelectModule
}) => {
  return (
    <div className="page-index">
      <h1 className="page-title">{currentModule}</h1>
      <p className="page-subtitle">Kumpulan tutorial mengelola penerimaan barang di CashFlow Online</p>

      <div className="articles-grid">
        <div className="card" onClick={() => setActiveTab('art1')}>
          <div className="card-header-icon">
            <FileText size={20} className="doc-icon-svg" />
            <h3>Cara mencatat barang masuk dari supplier</h3>
          </div>
          <p>Barang sudah sampai gudang tapi masih bingung cara mencatatnya agar rapi dan otomatis masuk ke sistem? Fitur Penerimaan...</p>
        </div>

        <div className="card" onClick={() => setActiveTab('art2')}>
          <div className="card-header-icon">
            <FileText size={20} className="doc-icon-svg" />
            <h3>Cara menerima barang dari pesanan pembelian yang sudah dibuat</h3>
          </div>
          <p>Gak mau ribet cocokkan pesanan dan barang? Gunakan fitur Penerimaan Barang dari Pesanan (PO) di CashFlow...</p>
        </div>

        <div className="card" onClick={() => setActiveTab('art3')}>
          <div className="card-header-icon">
            <FileText size={20} className="doc-icon-svg" />
            <h3>Cara Mengatasi Pesan Error: Jumlah Pengeluaran Tidak Boleh Nol</h3>
          </div>
          <p>Saat Anda menyimpan transaksi Penerimaan Barang atau Faktur Pembelian yang terdapat barang bertipe Aset Tetap...</p>
        </div>
      </div>

      {/* DUAL CARD NAVIGATION BOTTOM PREVIOUS & NEXT */}
      <div className="doc-nav-grid">
        <div className="doc-nav-card prev" onClick={() => handleSelectModule('Pesanan Pembelian')}>
          <span className="doc-nav-label">Previous</span>
          <strong className="doc-nav-title">« Cara menghapus banyak pesanan pembelian sekaligus</strong>
        </div>
        <div className="doc-nav-card next" onClick={() => setActiveTab('art1')}>
          <span className="doc-nav-label">Next</span>
          <strong className="doc-nav-title">Cara mencatat barang masuk dari supplier »</strong>
        </div>
      </div>
    </div>
  );
};
