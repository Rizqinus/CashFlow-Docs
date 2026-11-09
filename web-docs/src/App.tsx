import React, { useState } from 'react';
import { Home } from 'lucide-react';
import './App.css';

// Modular Components
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';

// Modular Pages
import { ModuleIndex } from './pages/ModuleIndex';

// Sub-Modul 01: Pesanan Barang (.tsx)
import { CaraMembatalkanPesanan, cara_membatalkan_pesanan_meta } from './pages/pembelian/01-pesanan-barang/cara-membatalkan-pesanan';
import { CaraMencatatDpKeSupplier, cara_mencatat_dp_ke_supplier_meta } from './pages/pembelian/01-pesanan-barang/cara-mencatat-dp-ke-supplier';
import { CaraOrderBarangKeSupplier, cara_order_barang_ke_supplier_meta } from './pages/pembelian/01-pesanan-barang/cara-order-barang-ke-supplier';
import { HapusBanyakPesananSekaligus, hapus_banyak_pesanan_sekaligus_meta } from './pages/pembelian/01-pesanan-barang/hapus-banyak-pesanan-sekaligus';
import { InputPembelianDariExcel, input_pembelian_dari_excel_meta } from './pages/pembelian/01-pesanan-barang/input-pembelian-dari-excel';
import { InputPembelianLuarNegeriExcel, input_pembelian_luar_negeri_excel_meta } from './pages/pembelian/01-pesanan-barang/input-pembelian-luar-negeri-excel';
import { OrderDariPesananPelanggan, order_dari_pesanan_pelanggan_meta } from './pages/pembelian/01-pesanan-barang/order-dari-pesanan-pelanggan';
import { PesananDariPermintaanBarang, pesanan_dari_permintaan_barang_meta } from './pages/pembelian/01-pesanan-barang/pesanan-dari-permintaan-barang';

// Sub-Modul 02: Penerimaan Barang (.tsx)
import { CaraMembuatPenerimaanBarang, cara_membuat_penerimaan_barang_meta } from './pages/pembelian/02-penerimaan-barang/cara-membuat-penerimaan-barang';
import { ErrorPengeluaranNolAsetTetap, error_pengeluaran_nol_aset_tetap_meta } from './pages/pembelian/02-penerimaan-barang/error-pengeluaran-nol-aset-tetap';
import { PenerimaanBarangDariPesanan, penerimaan_barang_dari_pesanan_meta } from './pages/pembelian/02-penerimaan-barang/penerimaan-barang-dari-pesanan';

// Sub-Modul 03: Faktur Pembelian (.tsx)
import { BebanPembelianKeCostPersediaan, beban_pembelian_ke_cost_persediaan_meta } from './pages/pembelian/03-faktur-pembelian/beban-pembelian-ke-cost-persediaan';
import { BiayaOngkirForwarderKeHpp, biaya_ongkir_forwarder_ke_hpp_meta } from './pages/pembelian/03-faktur-pembelian/biaya-ongkir-forwarder-ke-hpp';
import { CaraMembuatFakturPembelian, cara_membuat_faktur_pembelian_meta } from './pages/pembelian/03-faktur-pembelian/cara-membuat-faktur-pembelian';
import { DiskonTidakMunculDiJurnal, diskon_tidak_muncul_di_jurnal_meta } from './pages/pembelian/03-faktur-pembelian/diskon-tidak-muncul-di-jurnal';
import { ErrorAkunPembulatanBelumDiisi, error_akun_pembulatan_belum_diisi_meta } from './pages/pembelian/03-faktur-pembelian/error-akun-pembulatan-belum-diisi';
import { ErrorTidakDapatMemperbaruiBiaya, error_tidak_dapat_memperbarui_biaya_meta } from './pages/pembelian/03-faktur-pembelian/error-tidak-dapat-memperbarui-biaya';
import { InvoiceDariBarangSudahDiterima, invoice_dari_barang_sudah_diterima_meta } from './pages/pembelian/03-faktur-pembelian/invoice-dari-barang-sudah-diterima';
import { InvoiceSupplierSebelumBarangDatang, invoice_supplier_sebelum_barang_datang_meta } from './pages/pembelian/03-faktur-pembelian/invoice-supplier-sebelum-barang-datang';
import { KurangiTagihanPotonganSupplier, kurangi_tagihan_potongan_supplier_meta } from './pages/pembelian/03-faktur-pembelian/kurangi-tagihan-potongan-supplier';
import { PajakJasaRenovasiPerorangan, pajak_jasa_renovasi_perorangan_meta } from './pages/pembelian/03-faktur-pembelian/pajak-jasa-renovasi-perorangan';
import { PotongFakturDenganUangMuka, potong_faktur_dengan_uang_muka_meta } from './pages/pembelian/03-faktur-pembelian/potong-faktur-dengan-uang-muka';
import { ProsesPoMenjadiTagihanSupplier, proses_po_menjadi_tagihan_supplier_meta } from './pages/pembelian/03-faktur-pembelian/proses-po-menjadi-tagihan-supplier';
import { TagihanSupplierSebelumBarangDiterima, tagihan_supplier_sebelum_barang_diterima_meta } from './pages/pembelian/03-faktur-pembelian/tagihan-supplier-sebelum-barang-diterima';
import { UploadFakturPembelianDariExcel, upload_faktur_pembelian_dari_excel_meta } from './pages/pembelian/03-faktur-pembelian/upload-faktur-pembelian-dari-excel';

interface ArticleMeta {
  id: string;
  title: string;
  category: string;
  readTime: string;
  steps: { num: number; title: string }[];
}

const articleComponentMap: Record<string, React.ComponentType<{ onBack: () => void }>> = {
  // 01 Pesanan
  'po-create': CaraOrderBarangKeSupplier,
  'po-dp': CaraMencatatDpKeSupplier,
  'po-cancel': CaraMembatalkanPesanan,
  'po-so': OrderDariPesananPelanggan,
  'po-excel': InputPembelianDariExcel,
  'po-valas': InputPembelianLuarNegeriExcel,
  'po-pr': PesananDariPermintaanBarang,
  'po-delete-batch': HapusBanyakPesananSekaligus,

  // 02 Penerimaan
  'art1': CaraMembuatPenerimaanBarang,
  'art2': PenerimaanBarangDariPesanan,
  'art3': ErrorPengeluaranNolAsetTetap,

  // 03 Faktur
  'faktur-create': CaraMembuatFakturPembelian,
  'faktur-po': ProsesPoMenjadiTagihanSupplier,
  'faktur-sebelum-datang': InvoiceSupplierSebelumBarangDatang,
  'faktur-beban-cost': BebanPembelianKeCostPersediaan,
  'faktur-cost-persediaan': BebanPembelianKeCostPersediaan,
  'faktur-terima': InvoiceDariBarangSudahDiterima,
  'faktur-tagihan-sebelum-terima': TagihanSupplierSebelumBarangDiterima,
  'faktur-dimuka': TagihanSupplierSebelumBarangDiterima,
  'faktur-error-update-cost': ErrorTidakDapatMemperbaruiBiaya,
  'faktur-error-biaya': ErrorTidakDapatMemperbaruiBiaya,
  'faktur-pajak-renovasi': PajakJasaRenovasiPerorangan,
  'faktur-ongkir-hpp': BiayaOngkirForwarderKeHpp,
  'faktur-diskon-jurnal': DiskonTidakMunculDiJurnal,
  'faktur-upload-excel': UploadFakturPembelianDariExcel,
  'faktur-potong-dp': PotongFakturDenganUangMuka,
  'faktur-akun-pembulatan': ErrorAkunPembulatanBelumDiisi,
  'faktur-error-pembulatan': ErrorAkunPembulatanBelumDiisi,
  'faktur-kurangi-tagihan': KurangiTagihanPotonganSupplier,
  'faktur-potongan-supplier': KurangiTagihanPotonganSupplier,
  'po-delete': HapusBanyakPesananSekaligus,
  'po-import': InputPembelianDariExcel,
  'art-beli-pembulatan': ErrorAkunPembulatanBelumDiisi,
};

const articleMetaMap: Record<string, ArticleMeta> = {
  // 01 Pesanan
  'po-create': cara_order_barang_ke_supplier_meta,
  'po-dp': cara_mencatat_dp_ke_supplier_meta,
  'po-cancel': cara_membatalkan_pesanan_meta,
  'po-so': order_dari_pesanan_pelanggan_meta,
  'po-excel': input_pembelian_dari_excel_meta,
  'po-valas': input_pembelian_luar_negeri_excel_meta,
  'po-pr': pesanan_dari_permintaan_barang_meta,
  'po-delete-batch': hapus_banyak_pesanan_sekaligus_meta,

  // 02 Penerimaan
  'art1': cara_membuat_penerimaan_barang_meta,
  'art2': penerimaan_barang_dari_pesanan_meta,
  'art3': error_pengeluaran_nol_aset_tetap_meta,

  // 03 Faktur
  'faktur-create': cara_membuat_faktur_pembelian_meta,
  'faktur-po': proses_po_menjadi_tagihan_supplier_meta,
  'faktur-sebelum-datang': invoice_supplier_sebelum_barang_datang_meta,
  'faktur-beban-cost': beban_pembelian_ke_cost_persediaan_meta,
  'faktur-cost-persediaan': beban_pembelian_ke_cost_persediaan_meta,
  'faktur-terima': invoice_dari_barang_sudah_diterima_meta,
  'faktur-tagihan-sebelum-terima': tagihan_supplier_sebelum_barang_diterima_meta,
  'faktur-dimuka': tagihan_supplier_sebelum_barang_diterima_meta,
  'faktur-error-update-cost': error_tidak_dapat_memperbarui_biaya_meta,
  'faktur-error-biaya': error_tidak_dapat_memperbarui_biaya_meta,
  'faktur-pajak-renovasi': pajak_jasa_renovasi_perorangan_meta,
  'faktur-ongkir-hpp': biaya_ongkir_forwarder_ke_hpp_meta,
  'faktur-diskon-jurnal': diskon_tidak_muncul_di_jurnal_meta,
  'faktur-upload-excel': upload_faktur_pembelian_dari_excel_meta,
  'faktur-potong-dp': potong_faktur_dengan_uang_muka_meta,
  'faktur-akun-pembulatan': error_akun_pembulatan_belum_diisi_meta,
  'faktur-error-pembulatan': error_akun_pembulatan_belum_diisi_meta,
  'faktur-kurangi-tagihan': kurangi_tagihan_potongan_supplier_meta,
  'faktur-potongan-supplier': kurangi_tagihan_potongan_supplier_meta,
  'po-delete': hapus_banyak_pesanan_sekaligus_meta,
  'po-import': input_pembelian_dari_excel_meta,
  'art-beli-pembulatan': error_akun_pembulatan_belum_diisi_meta,
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

  const ActiveArticle = articleComponentMap[activeTab];
  const activeMeta = articleMetaMap[activeTab];

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

          {/* RENDER ACTIVE ARTICLE COMPONENT (.TSX) */}
          {ActiveArticle ? (
            <ActiveArticle 
              onBack={() => setActiveTab('index')}
            />
          ) : (activeTab !== 'index' && activeTab !== 'placeholder') && (
            <div className="page-index">
              <h1 className="page-title">{currentModule}</h1>
              <p className="page-subtitle">Modul dokumentasi resmi untuk {currentModule} di CashFlow Online.</p>

              <div className="empty-state-box">
                <img src="/assets/empty-box.png" alt="Empty" className="empty-img" />
                <h3>Dokumentasi Sedang Disusun</h3>
                <p>Panduan langkah demi langkah untuk topik ini sedang dalam proses integrasi.</p>
                <button className="pag-btn" onClick={() => handleSelectModule('Penerimaan Barang')}>
                  Kembali ke Penerimaan Barang ➔
                </button>
              </div>
            </div>
          )}
        </main>

        {/* RIGHT SIDEBAR: TABLE OF CONTENTS (TOC) */}
        <aside className="toc-sidebar">
          <div className="toc-title">DAFTAR ISI</div>
          <ul className="toc-list">
            {activeMeta ? (
              activeMeta.steps.map((st) => (
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
