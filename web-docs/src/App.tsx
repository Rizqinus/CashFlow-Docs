import React, { useState } from 'react';
import { Home } from 'lucide-react';
import './App.css';

// Modular Components
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { ArticleTemplate } from './components/ArticleTemplate';
import { ArticleData } from './types/article';

// Modular Pages
import { ModuleIndex } from './pages/ModuleIndex';

// Sub-Modul 01: Pesanan Barang (.ts)
import { caraMembatalkanPesananData } from './pages/pembelian/01-pesanan-barang/cara-membatalkan-pesanan';
import { caraMencatatDpKeSupplierData } from './pages/pembelian/01-pesanan-barang/cara-mencatat-dp-ke-supplier';
import { caraOrderBarangKeSupplierData } from './pages/pembelian/01-pesanan-barang/cara-order-barang-ke-supplier';
import { hapusBanyakPesananSekaligusData } from './pages/pembelian/01-pesanan-barang/hapus-banyak-pesanan-sekaligus';
import { inputPembelianDariExcelData } from './pages/pembelian/01-pesanan-barang/input-pembelian-dari-excel';
import { inputPembelianLuarNegeriExcelData } from './pages/pembelian/01-pesanan-barang/input-pembelian-luar-negeri-excel';
import { orderDariPesananPelangganData } from './pages/pembelian/01-pesanan-barang/order-dari-pesanan-pelanggan';
import { pesananDariPermintaanBarangData } from './pages/pembelian/01-pesanan-barang/pesanan-dari-permintaan-barang';

// Sub-Modul 02: Penerimaan Barang (.ts)
import { articleManual } from './pages/pembelian/02-penerimaan-barang/cara-membuat-penerimaan-barang';
import { articleErrorZero } from './pages/pembelian/02-penerimaan-barang/error-pengeluaran-nol-aset-tetap';
import { articlePO } from './pages/pembelian/02-penerimaan-barang/penerimaan-barang-dari-pesanan';

// Sub-Modul 03: Faktur Pembelian (.ts)
import { bebanPembelianKeCostPersediaanData } from './pages/pembelian/03-faktur-pembelian/beban-pembelian-ke-cost-persediaan';
import { biayaOngkirForwarderKeHppData } from './pages/pembelian/03-faktur-pembelian/biaya-ongkir-forwarder-ke-hpp';
import { caraMembuatFakturPembelianData } from './pages/pembelian/03-faktur-pembelian/cara-membuat-faktur-pembelian';
import { diskonTidakMunculDiJurnalData } from './pages/pembelian/03-faktur-pembelian/diskon-tidak-muncul-di-jurnal';
import { errorAkunPembulatanBelumDiisiData } from './pages/pembelian/03-faktur-pembelian/error-akun-pembulatan-belum-diisi';
import { errorTidakDapatMemperbaruiBiayaData } from './pages/pembelian/03-faktur-pembelian/error-tidak-dapat-memperbarui-biaya';
import { invoiceDariBarangSudahDiterimaData } from './pages/pembelian/03-faktur-pembelian/invoice-dari-barang-sudah-diterima';
import { invoiceSupplierSebelumBarangDatangData } from './pages/pembelian/03-faktur-pembelian/invoice-supplier-sebelum-barang-datang';
import { kurangiTagihanPotonganSupplierData } from './pages/pembelian/03-faktur-pembelian/kurangi-tagihan-potongan-supplier';
import { pajakJasaRenovasiPeroranganData } from './pages/pembelian/03-faktur-pembelian/pajak-jasa-renovasi-perorangan';
import { potongFakturDenganUangMukaData } from './pages/pembelian/03-faktur-pembelian/potong-faktur-dengan-uang-muka';
import { prosesPoMenjadiTagihanSupplierData } from './pages/pembelian/03-faktur-pembelian/proses-po-menjadi-tagihan-supplier';
import { tagihanSupplierSebelumBarangDiterimaData } from './pages/pembelian/03-faktur-pembelian/tagihan-supplier-sebelum-barang-diterima';
import { uploadFakturPembelianDariExcelData } from './pages/pembelian/03-faktur-pembelian/upload-faktur-pembelian-dari-excel';

const articleDataMap: Record<string, ArticleData> = {
  // 01 Pesanan
  'po-create': caraOrderBarangKeSupplierData,
  'po-dp': caraMencatatDpKeSupplierData,
  'po-cancel': caraMembatalkanPesananData,
  'po-so': orderDariPesananPelangganData,
  'po-excel': inputPembelianDariExcelData,
  'po-valas': inputPembelianLuarNegeriExcelData,
  'po-pr': pesananDariPermintaanBarangData,
  'po-delete-batch': hapusBanyakPesananSekaligusData,

  // 02 Penerimaan
  'art1': articleManual,
  'art2': articlePO,
  'art3': articleErrorZero,

  // 03 Faktur
  'faktur-create': caraMembuatFakturPembelianData,
  'faktur-po': prosesPoMenjadiTagihanSupplierData,
  'faktur-sebelum-datang': invoiceSupplierSebelumBarangDatangData,
  'faktur-beban-cost': bebanPembelianKeCostPersediaanData,
  'faktur-terima': invoiceDariBarangSudahDiterimaData,
  'faktur-tagihan-sebelum-terima': tagihanSupplierSebelumBarangDiterimaData,
  'faktur-error-update-cost': errorTidakDapatMemperbaruiBiayaData,
  'faktur-pajak-renovasi': pajakJasaRenovasiPeroranganData,
  'faktur-ongkir-hpp': biayaOngkirForwarderKeHppData,
  'faktur-diskon-jurnal': diskonTidakMunculDiJurnalData,
  'faktur-upload-excel': uploadFakturPembelianDariExcelData,
  'faktur-potong-dp': potongFakturDenganUangMukaData,
  'faktur-akun-pembulatan': errorAkunPembulatanBelumDiisiData,
  'faktur-kurangi-tagihan': kurangiTagihanPotonganSupplierData,
};

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('index');
  const [currentModule, setCurrentModule] = useState('Penerimaan Barang');
  const [searchQuery, setSearchQuery] = useState('');
  const [showProdukDropdown, setShowProdukDropdown] = useState(false);

  // Accordion state
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    fitur: true,
    pembelian: true,
    pesanan: true,
    penerimaan: true,
    faktur: true,
    memulai: false,
    store: false,
    dashboard: false,
    pengaturan: false,
    perusahaan: false,
    bukubesar: false,
    kasbank: false,
    penjualan: false,
    persediaan: false
  });

  const toggleCategory = (cat: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [cat]: !prev[cat]
    }));
  };

  const handleSelectModule = (modName: string) => {
    setCurrentModule(modName);
    setActiveTab('index');
  };

  return (
    <div className="layout-root">
      {/* 1. TOP HEADER / NAVBAR */}
      <Navbar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showProdukDropdown={showProdukDropdown}
        setShowProdukDropdown={setShowProdukDropdown}
        onHomeClick={() => handleSelectModule('Penerimaan Barang')}
      />

      {/* 2. MAIN LAYOUT (SIDEBAR + CONTENT + TOC) */}
      <div className="layout-body">
        {/* SIDEBAR NAVIGATION */}
        <Sidebar 
          currentModule={currentModule}
          activeTab={activeTab}
          openCategories={openCategories}
          toggleCategory={toggleCategory}
          handleSelectModule={handleSelectModule}
          setActiveTab={(tab) => setActiveTab(tab as any)}
          setCurrentModule={setCurrentModule}
        />

        {/* CONTENT AREA */}
        <main className="content-container">
          {/* Breadcrumbs */}
          <div className="breadcrumbs">
            <Home size={15} className="home-icon" onClick={() => handleSelectModule('Penerimaan Barang')} />
            <span className="sep">›</span>
            <span>CashFlow Online</span>
            <span className="sep">›</span>
            <span>Fitur CashFlow Online</span>
            <span className="sep">›</span>
            <span>Pembelian</span>
            <span className="sep">›</span>
            <span className="bc-current">{currentModule}</span>
          </div>

          {/* VIEW ROUTING */}
          {activeTab === 'placeholder' && (
            <div className="page-index">
              <h1 className="page-title">{currentModule}</h1>
              <p className="page-subtitle">Modul dokumentasi resmi untuk {currentModule} di CashFlow Online.</p>

              <div className="empty-state-box">
                <img src="/assets/empty-box.png" alt="Empty" className="empty-img" />
                <h3>Dokumentasi Sedang Disusun</h3>
                <p>Panduan langkah demi langkah untuk modul <strong>{currentModule}</strong> sedang dalam proses integrasi.</p>
                <button className="pag-btn" onClick={() => handleSelectModule('Penerimaan Barang')}>
                  Kembali ke Penerimaan Barang ➔
                </button>
              </div>
            </div>
          )}

          {activeTab === 'index' && (
            <ModuleIndex 
              currentModule={currentModule}
              setActiveTab={(tab) => setActiveTab(tab as any)}
              handleSelectModule={handleSelectModule}
            />
          )}

          {/* RENDER DYNAMIC ARTICLE TEMPLATE */}
          {articleDataMap[activeTab] && (
            <ArticleTemplate 
              article={articleDataMap[activeTab]}
              onBack={() => setActiveTab('index')}
            />
          )}
        </main>

        {/* RIGHT SIDEBAR: TABLE OF CONTENTS (TOC) */}
        <aside className="toc-sidebar">
          <div className="toc-title">DAFTAR ISI</div>
          <ul className="toc-list">
            {articleDataMap[activeTab] ? (
              articleDataMap[activeTab].steps.map((st) => (
                <li key={st.num} className="toc-item active">
                  <a href={`#step-${st.num}`}>{st.num}. {st.title}</a>
                </li>
              ))
            ) : (
              <>
                <li className="toc-item active">
                  <a href="#overview">Ikhtisar Modul</a>
                </li>
                <li className="toc-item">
                  <a href="#daftar-panduan">Daftar Panduan</a>
                </li>
              </>
            )}
          </ul>
        </aside>
      </div>

      {/* 3. FOOTER */}
      <Footer />
    </div>
  );
}
