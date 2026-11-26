import React from 'react';
import { ChevronRight } from 'lucide-react';
import { pembelianTopModules, pembelianLainnyaModules, pembelianLainnyaArticleMetas } from '../data/pembelianModules';

interface SidebarProps {
  currentModule: string;
  activeTab: string;
  openCategories: Record<string, boolean>;
  toggleCategory: (cat: string) => void;
  handleSelectModule: (modName: string) => void;
  setActiveTab: (tab: string) => void;
  setCurrentModule: (modName: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentModule,
  activeTab,
  openCategories,
  toggleCategory,
  handleSelectModule,
  setActiveTab,
  setCurrentModule
}) => {
  const [closedNodes, setClosedNodes] = React.useState<Record<string, boolean>>({});
  const inPembelianLainnya = currentModule === 'Lainnya' || pembelianLainnyaModules.some((m) => m.name === currentModule);

  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <div className="sidebar-group">
          {/* HEADER ROOT SECTION */}
          <div 
            className={`sidebar-header-root ${currentModule === 'CashFlow Online' ? 'selected-root' : ''}`}
            onClick={() => handleSelectModule('CashFlow Online')}
          >
            <span className="root-bullet">•</span> CashFlow Online
          </div>

          {/* 1. MEMULAI CASHFLOW ONLINE */}
          <div className="sidebar-category">
            <div 
              className={`sidebar-item ${currentModule === 'Memulai CashFlow Online' ? 'active-sub' : ''}`}
              onClick={() => {
                toggleCategory('memulai');
                handleSelectModule('Memulai CashFlow Online');
              }}
            >
              <span>Memulai CashFlow Online</span>
              <span className={`arrow ${openCategories.memulai ? 'down' : ''}`}>
                <ChevronRight size={14} strokeWidth={2} />
              </span>
            </div>
            {openCategories.memulai && (
              <div className="category-children">
                <div 
                  className={`sub-item ${currentModule === 'Mengelola Akun' ? 'active-sub' : ''}`} 
                  onClick={() => handleSelectModule('Mengelola Akun')}
                >
                  Mengelola Akun
                </div>
                <div 
                  className={`sub-item ${currentModule === 'Mengelola data usaha' ? 'active-sub' : ''}`} 
                  onClick={() => handleSelectModule('Mengelola data usaha')}
                >
                  Mengelola data usaha
                </div>
                <div 
                  className={`sub-item ${currentModule === 'Area Penagihan' ? 'active-sub' : ''}`} 
                  onClick={() => handleSelectModule('Area Penagihan')}
                >
                  Area Penagihan
                </div>
                <div 
                  className={`sub-item ${currentModule === 'Navigasi Umum' ? 'active-sub' : ''}`} 
                  onClick={() => handleSelectModule('Navigasi Umum')}
                >
                  Navigasi Umum
                </div>
              </div>
            )}
          </div>

          {/* 2. CASHFLOW STORE */}
          <div className="sidebar-category">
            <div 
              className={`sidebar-item ${currentModule === 'CashFlow Store' ? 'active-sub' : ''}`} 
              onClick={() => {
                toggleCategory('store');
                handleSelectModule('CashFlow Store');
              }}
            >
              <span>CashFlow Store</span>
              <span className={`arrow ${openCategories.store ? 'down' : ''}`}>
                <ChevronRight size={14} strokeWidth={2} />
              </span>
            </div>
            {openCategories.store && (
              <div className="category-children">
                <div className={`sub-item ${currentModule === 'Cara Menambah dan Mengaktifkan Add On' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Cara Menambah dan Mengaktifkan Add On')}>Cara menambah dan mengaktifkan Add On</div>
                <div className={`sub-item ${currentModule === 'Cara Menonaktifkan Integrasi API' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Cara Menonaktifkan Integrasi API')}>Cara menonaktifkan integrasi API</div>
                <div className={`sub-item ${currentModule === 'Cara Menghubungkan Payment Gateway Xendit' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Cara Menghubungkan Payment Gateway Xendit')}>Cara Menghubungkan Payment Gateway Xendit</div>
                <div className={`sub-item ${currentModule === 'Cara Menghubungkan Xendit Disbursement' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Cara Menghubungkan Xendit Disbursement')}>Cara menghubungkan Xendit Disbursement</div>
                <div className={`sub-item ${currentModule === 'Cara Menghubungkan Virtual Account UOB' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Cara Menghubungkan Virtual Account UOB')}>Cara menghubungkan Virtual Account UOB</div>
                <div className={`sub-item ${currentModule === 'Cara Menghubungkan Pajak.io' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Cara Menghubungkan Pajak.io')}>Cara menghubungkan Pajak.io</div>
                <div className={`sub-item ${currentModule === 'Cara Menghubungkan Tokopedia E-Invoicing' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Cara Menghubungkan Tokopedia E-Invoicing')}>Cara menghubungkan Tokopedia E-Invoicing</div>
                <div className={`sub-item ${currentModule === 'Biaya Layanan Tokopedia E-Invoicing' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Biaya Layanan Tokopedia E-Invoicing')}>Biaya layanan Tokopedia E-Invoicing</div>
                <div className={`sub-item ${currentModule === 'Cara Menghubungkan OY! Payment Link' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Cara Menghubungkan OY! Payment Link')}>Cara menghubungkan OY! Payment Link</div>
                <div className={`sub-item ${currentModule === 'Cara Menghubungkan OY Disbursement' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Cara Menghubungkan OY Disbursement')}>Cara menghubungkan OY Disbursement</div>
                <div className={`sub-item ${currentModule === 'Cara Menghubungkan Paper.id Payment Link' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Cara Menghubungkan Paper.id Payment Link')}>Cara Menghubungkan Paper.id Payment Link</div>
                <div className={`sub-item ${currentModule === 'Cara Menghubungkan Paper Disbursement' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Cara Menghubungkan Paper Disbursement')}>Cara menghubungkan Paper Disbursement</div>
                <div className={`sub-item ${currentModule === 'Cara Menghubungkan VIDA E-Meterai' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Cara Menghubungkan VIDA E-Meterai')}>Cara Menghubungkan VIDA E-Meterai</div>
                <div className={`sub-item ${currentModule === 'Cara Menonaktifkan Cabang (Multi-Branch)' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Cara Menonaktifkan Cabang (Multi-Branch)')}>Cara menonaktifkan cabang (multi branch)</div>
                <div className={`sub-item ${currentModule === 'Cara Menghubungkan Qios FNB' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Cara Menghubungkan Qios FNB')}>Cara menghubungkan Qios FNB</div>
              </div>
            )}
          </div>

          {/* 3. FITUR CASHFLOW ONLINE (CORE FEATURES) */}
          <div className={`sidebar-category ${openCategories.fitur ? 'open' : ''}`}>
            <div 
              className={`category-header ${currentModule === 'Fitur CashFlow Online' ? 'active-sub' : ''}`}
              onClick={() => {
                toggleCategory('fitur');
                handleSelectModule('Fitur CashFlow Online');
              }}
            >
              <span>Fitur CashFlow Online</span>
              <span className={`arrow ${openCategories.fitur ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
            </div>

            {openCategories.fitur && (
              <div className="category-children">
                {/* 3.1 DASHBOARD */}
                <div className="module-group">
                  <div 
                    className={`module-header ${currentModule === 'Dashboard' ? 'active-sub' : ''}`} 
                    onClick={() => {
                      toggleCategory('dashboard');
                      handleSelectModule('Dashboard');
                    }}
                  >
                    <span>Dashboard</span>
                    <span className={`arrow ${openCategories.dashboard ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                  </div>
                  {openCategories.dashboard && (
                    <div className="module-children">
                      <div className={`leaf-item ${activeTab === 'dash-arus-kas' ? 'active-sub' : ''}`} onClick={() =>{ setCurrentModule('Dashboard'); setActiveTab('dash-arus-kas'); }}><span>Cara melihat arus kas (cash flow) di dashboard</span></div>
                      <div className={`leaf-item ${activeTab === 'dash-beban' ? 'active-sub' : ''}`} onClick={() =>{ setCurrentModule('Dashboard'); setActiveTab('dash-beban'); }}><span>Cara melihat beban perusahaan di dashboard</span></div>
                      <div className={`leaf-item ${activeTab === 'dash-faktur-terlewat' ? 'active-sub' : ''}`} onClick={() =>{ setCurrentModule('Dashboard'); setActiveTab('dash-faktur-terlewat'); }}><span>Cara melihat faktur yang belum dibayar di dashboard</span></div>
                      <div className={`leaf-item ${activeTab === 'dash-kas-bank' ? 'active-sub' : ''}`} onClick={() =>{ setCurrentModule('Dashboard'); setActiveTab('dash-kas-bank'); }}><span>Cara melihat saldo kas &amp; bank di dashboard</span></div>
                      <div className={`leaf-item ${activeTab === 'dash-laba-rugi' ? 'active-sub' : ''}`} onClick={() =>{ setCurrentModule('Dashboard'); setActiveTab('dash-laba-rugi'); }}><span>Cara melihat laba rugi bisnis di dashboard</span></div>
                      <div className={`leaf-item ${activeTab === 'dash-piutang' ? 'active-sub' : ''}`} onClick={() =>{ setCurrentModule('Dashboard'); setActiveTab('dash-piutang'); }}><span>Cara melihat pelanggan yang masih berutang di dashboard</span></div>
                      <div className={`leaf-item ${activeTab === 'dash-penjualan' ? 'active-sub' : ''}`} onClick={() =>{ setCurrentModule('Dashboard'); setActiveTab('dash-penjualan'); }}><span>Cara melihat aktivitas penjualan di dashboard</span></div>
                      <div className={`leaf-item ${activeTab === 'dash-permintaan-barang' ? 'active-sub' : ''}`} onClick={() =>{ setCurrentModule('Dashboard'); setActiveTab('dash-permintaan-barang'); }}><span>Cara memantau permintaan barang antar cabang di dashboard</span></div>
                      <div className={`leaf-item ${activeTab === 'dash-pesanan-penjualan' ? 'active-sub' : ''}`} onClick={() =>{ setCurrentModule('Dashboard'); setActiveTab('dash-pesanan-penjualan'); }}><span>Cara melihat pesanan penjualan di dashboard</span></div>
                      <div className={`leaf-item ${activeTab === 'dash-monitoring-hpp' ? 'active-sub' : ''}`} onClick={() =>{ setCurrentModule('Dashboard'); setActiveTab('dash-monitoring-hpp'); }}><span>Cara melihat HPP dan margin keuntungan barang di dashboard</span></div>
                      <div className={`leaf-item ${activeTab === 'dash-laba-cabang' ? 'active-sub' : ''}`} onClick={() =>{ setCurrentModule('Dashboard'); setActiveTab('dash-laba-cabang'); }}><span>Cara melihat laba setiap cabang dari dashboard</span></div>
                    </div>
                  )}
                </div>

                {/* 3.2 PENGATURAN */}
                <div className="module-group">
                  <div 
                    className={`module-header ${currentModule === 'Pengaturan' ? 'active-sub' : ''}`} 
                    onClick={() => {
                      toggleCategory('pengaturan');
                      handleSelectModule('Pengaturan');
                    }}
                  >
                    <span>Pengaturan</span>
                    <span className={`arrow ${openCategories.pengaturan ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                  </div>
                  {openCategories.pengaturan && (
                    <div className="module-children">
                      <div className={`leaf-item ${currentModule === 'Preferensi' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Preferensi') setClosedNodes(s => ({ ...s, ["Preferensi"]: !s["Preferensi"] })); else { setClosedNodes(s => ({ ...s, ["Preferensi"]: false })); handleSelectModule('Preferensi'); } }}><span>Preferensi</span><span className={`arrow ${currentModule === 'Preferensi' && !closedNodes["Preferensi"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Preferensi' && !closedNodes["Preferensi"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['pref-buka', 'Cara membuka dan mengatur preferensi'],
                            ['pref-perusahaan', 'Cara mengisi data perusahaan'],
                            ['pref-fitur', 'Cara mengaktifkan dan mengatur fitur'],
                            ['pref-pajak', 'Cara mengisi NPWP dan data pajak'],
                            ['pref-penjualan', 'Cara mengatur transaksi penjualan'],
                            ['pref-pembelian', 'Cara mengatur transaksi pembelian'],
                            ['pref-akses', 'Cara mengatur pembatasan akses'],
                            ['pref-persetujuan', 'Cara mengaktifkan persetujuan'],
                            ['pref-atribut', 'Cara menambahkan kolom tambahan'],
                            ['pref-akun-default', 'Cara mengatur akun default'],
                            ['pref-lain', 'Cara mengatur format angka, umur piutang'],
                            ['pref-efaktur-cabang', 'Cara menampilkan cabang di E-Faktur'],
                            ['pref-po-autoclose', 'Cara menutup PO otomatis'],
                            ['pref-pelanggan-ppn', 'Pelanggan baru otomatis PPN'],
                            ['pref-error-selisih', 'Error akun selisih pembelian'],
                            ['pref-kategori-keuangan', 'Laba rugi per kategori'],
                            ['pref-error-tanggal', 'Error tanggal transaksi'],
                          ].map(([tab, label]) => (
                            <div
                              key={tab}
                              className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`}
                              style={{ fontSize: '12.5px' }}
                              onClick={() => { setCurrentModule('Preferensi'); setActiveTab(tab); }}
                            ><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Akses Grup' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Akses Grup') setClosedNodes(s => ({ ...s, ["Akses Grup"]: !s["Akses Grup"] })); else { setClosedNodes(s => ({ ...s, ["Akses Grup"]: false })); handleSelectModule('Akses Grup'); } }}><span>Akses Grup</span><span className={`arrow ${currentModule === 'Akses Grup' && !closedNodes["Akses Grup"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Akses Grup' && !closedNodes["Akses Grup"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['ag-hak-akses', 'Cara mengatur hak akses pengguna'],
                            ['ag-batas-anggaran', 'Batas anggaran operator'],
                            ['ag-menu-tidak-tampil', 'Menu tidak tampil di operator'],
                            ['ag-akses-dibatasi', 'Akses operator dibatasi'],
                            ['ag-error-bayar-beban', 'Error bayar beban'],
                            ['ag-penangguhan', 'Batasi penangguhan'],
                            ['ag-pemindahan-barang', 'Error pemindahan barang'],
                            ['ag-harga-standar', 'Batasi harga standar'],
                            ['ag-min-jual-beli', 'Hak minimum jual/beli'],
                            ['ag-checkin', 'Batasi check in penjual'],
                            ['ag-bahan-baku', 'Batasi pengambilan bahan baku'],
                          ].map(([tab, label]) => (
                            <div
                              key={tab}
                              className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`}
                              style={{ fontSize: '12.5px' }}
                              onClick={() => { setCurrentModule('Akses Grup'); setActiveTab(tab); }}
                            ><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Pengguna' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Pengguna') setClosedNodes(s => ({ ...s, ["Pengguna"]: !s["Pengguna"] })); else { setClosedNodes(s => ({ ...s, ["Pengguna"]: false })); handleSelectModule('Pengguna'); } }}><span>Pengguna</span><span className={`arrow ${currentModule === 'Pengguna' && !closedNodes["Pengguna"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Pengguna' && !closedNodes["Pengguna"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          <div className={`leaf-item ${activeTab === 'user-tambah' ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Pengguna'); setActiveTab('user-tambah'); }}><span>Tambah karyawan baru</span></div>
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Penomoran' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Penomoran') setClosedNodes(s => ({ ...s, ["Penomoran"]: !s["Penomoran"] })); else { setClosedNodes(s => ({ ...s, ["Penomoran"]: false })); handleSelectModule('Penomoran'); } }}><span>Penomoran</span><span className={`arrow ${currentModule === 'Penomoran' && !closedNodes["Penomoran"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Penomoran' && !closedNodes["Penomoran"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['nomor-otomatis', 'Penomoran otomatis'],
                            ['nomor-romawi', 'Format bulan Romawi'],
                            ['nomor-counter', 'Lanjutkan nomor lama'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Penomoran'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Desain Cetakan' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Desain Cetakan') setClosedNodes(s => ({ ...s, ["Desain Cetakan"]: !s["Desain Cetakan"] })); else { setClosedNodes(s => ({ ...s, ["Desain Cetakan"]: false })); handleSelectModule('Desain Cetakan'); } }}><span>Desain Cetakan</span><span className={`arrow ${currentModule === 'Desain Cetakan' && !closedNodes["Desain Cetakan"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Desain Cetakan' && !closedNodes["Desain Cetakan"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['cetak-01', 'template invoice, faktur & transaksi lai'],
                            ['cetak-02', 'terbilang'],
                            ['cetak-03', 'terbilang'],
                            ['cetak-04', 'faktur ukuran A5'],
                            ['cetak-05', 'printer thermal'],
                            ['cetak-06', 'sisa piutang'],
                            ['cetak-07', 'logo'],
                            ['cetak-08', 'template email transaksi'],
                            ['cetak-09', 'total qty barang'],
                            ['cetak-10', 'kolom debit kredit'],
                            ['cetak-11', 'header hanya'],
                            ['cetak-12', 'error ada elemen yang berada'],
                            ['cetak-13', 'ref. kode pajak barang'],
                            ['cetak-14', 'DPP'],
                            ['cetak-15', 'tanggal & waktu cetak'],
                            ['cetak-16', 'barcode'],
                            ['cetak-17', 'total debit dan kredit'],
                            ['cetak-18', 'dan menggunakan e-Meterai'],
                            ['cetak-19', 'JHT, JKK, dan JKM'],
                            ['cetak-20', 'tanda persen'],
                            ['cetak-21', 'barang persediaan'],
                            ['cetak-22', 'tanggal jatuh tempo'],
                            ['cetak-23', 'sisa tagihan pelanggan'],
                            ['cetak-24', 'nominal terbilang'],
                            ['cetak-25', 'nomor pajak'],
                            ['cetak-26', 'nol'],
                            ['cetak-27', 'uang muka'],
                            ['cetak-28', 'nilai'],
                            ['cetak-29', 'nomor seri'],
                            ['cetak-30', 'nominal gaji dalam bentuk tulisan'],
                            ['cetak-31', 'dpp nilai lain'],
                            ['cetak-32', 'bahasa terbilang'],
                            ['cetak-33', 'DP'],
                            ['cetak-34', 'angka minus dalam tanda kurung'],
                            ['cetak-35', 'pph 23'],
                            ['cetak-36', 'pajak lebih bayar'],
                            ['cetak-37', 'total nilai dan terbilang'],
                            ['cetak-38', 'diskon'],
                            ['cetak-39', 'debit, kredit, dan total'],
                            ['cetak-40', 'gambar barang/jasa didesain cetakan'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Desain Cetakan'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Penyetuju Transaksi' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Penyetuju Transaksi') setClosedNodes(s => ({ ...s, ["Penyetuju Transaksi"]: !s["Penyetuju Transaksi"] })); else { setClosedNodes(s => ({ ...s, ["Penyetuju Transaksi"]: false })); handleSelectModule('Penyetuju Transaksi'); } }}><span>Penyetuju Transaksi</span><span className={`arrow ${currentModule === 'Penyetuju Transaksi' && !closedNodes["Penyetuju Transaksi"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Penyetuju Transaksi' && !closedNodes["Penyetuju Transaksi"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          <div className={`leaf-item ${activeTab === 'setuju-approval' ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Penyetuju Transaksi'); setActiveTab('setuju-approval'); }}><span>Atur approval transaksi</span></div>
                        </div>
                      )}

                    </div>
                  )}
                </div>

                {/* 3.3 PERUSAHAAN */}
                <div className="module-group">
                  <div 
                    className={`module-header ${currentModule === 'Perusahaan' ? 'active-sub' : ''}`} 
                    onClick={() => {
                      toggleCategory('perusahaan');
                      handleSelectModule('Perusahaan');
                    }}
                  >
                    <span>Perusahaan</span>
                    <span className={`arrow ${openCategories.perusahaan ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                  </div>
                  {openCategories.perusahaan && (
                    <div className="module-children">
                      <div className={`leaf-item ${currentModule === 'Mata Uang' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Mata Uang') setClosedNodes(s => ({ ...s, ["Mata Uang"]: !s["Mata Uang"] })); else { setClosedNodes(s => ({ ...s, ["Mata Uang"]: false })); handleSelectModule('Mata Uang'); } }}><span>Mata Uang</span><span className={`arrow ${currentModule === 'Mata Uang' && !closedNodes["Mata Uang"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Mata Uang' && !closedNodes["Mata Uang"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['per-01', 'Cara menambahkan dan menggunakan mata uang'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Mata Uang'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Cabang' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Cabang') setClosedNodes(s => ({ ...s, ["Cabang"]: !s["Cabang"] })); else { setClosedNodes(s => ({ ...s, ["Cabang"]: false })); handleSelectModule('Cabang'); } }}><span>Cabang</span><span className={`arrow ${currentModule === 'Cabang' && !closedNodes["Cabang"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Cabang' && !closedNodes["Cabang"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['per-02', 'Cara mengaktifkan dan menggunakan fitur ca'],
                            ['per-03', 'Cara mengatasi cabang tidak bisa dihapus'],
                            ['per-04', 'Cara menambahkan NITKU cabang'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Cabang'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Pajak' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Pajak') setClosedNodes(s => ({ ...s, ["Pajak"]: !s["Pajak"] })); else { setClosedNodes(s => ({ ...s, ["Pajak"]: false })); handleSelectModule('Pajak'); } }}><span>Pajak</span><span className={`arrow ${currentModule === 'Pajak' && !closedNodes["Pajak"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Pajak' && !closedNodes["Pajak"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['per-05', 'Cara menambahkan pajak baru'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Pajak'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Syarat Pembayaran' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Syarat Pembayaran') setClosedNodes(s => ({ ...s, ["Syarat Pembayaran"]: !s["Syarat Pembayaran"] })); else { setClosedNodes(s => ({ ...s, ["Syarat Pembayaran"]: false })); handleSelectModule('Syarat Pembayaran'); } }}><span>Syarat Pembayaran</span><span className={`arrow ${currentModule === 'Syarat Pembayaran' && !closedNodes["Syarat Pembayaran"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Syarat Pembayaran' && !closedNodes["Syarat Pembayaran"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['per-06', 'Fungsi dan manfaat fitur syarat pembayaran'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Syarat Pembayaran'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Pengiriman' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Pengiriman') setClosedNodes(s => ({ ...s, ["Pengiriman"]: !s["Pengiriman"] })); else { setClosedNodes(s => ({ ...s, ["Pengiriman"]: false })); handleSelectModule('Pengiriman'); } }}><span>Pengiriman</span><span className={`arrow ${currentModule === 'Pengiriman' && !closedNodes["Pengiriman"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Pengiriman' && !closedNodes["Pengiriman"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['per-07', 'Fungsi dan cara menggunakan fitur pengirim'],
                            ['per-08', 'Cara import data pengiriman dari excel ke '],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Pengiriman'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'FOB' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'FOB') setClosedNodes(s => ({ ...s, ["FOB"]: !s["FOB"] })); else { setClosedNodes(s => ({ ...s, ["FOB"]: false })); handleSelectModule('FOB'); } }}><span>FOB</span><span className={`arrow ${currentModule === 'FOB' && !closedNodes["FOB"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'FOB' && !closedNodes["FOB"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['per-09', 'Mengenal fungsi, manfaat, dan cara kerja f'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('FOB'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Gaji dan Tunjangan' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Gaji dan Tunjangan') setClosedNodes(s => ({ ...s, ["Gaji dan Tunjangan"]: !s["Gaji dan Tunjangan"] })); else { setClosedNodes(s => ({ ...s, ["Gaji dan Tunjangan"]: false })); handleSelectModule('Gaji dan Tunjangan'); } }}><span>Gaji dan Tunjangan</span><span className={`arrow ${currentModule === 'Gaji dan Tunjangan' && !closedNodes["Gaji dan Tunjangan"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Gaji dan Tunjangan' && !closedNodes["Gaji dan Tunjangan"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['per-10', 'Cara menambahkan gaji dan tunjangan karyaw'],
                            ['per-11', 'Cara mengatasi pesan error: akun beban gaj'],
                            ['per-12', 'Cara mengatasi error saat menghapus akun p'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Gaji dan Tunjangan'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Karyawan' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Karyawan') setClosedNodes(s => ({ ...s, ["Karyawan"]: !s["Karyawan"] })); else { setClosedNodes(s => ({ ...s, ["Karyawan"]: false })); handleSelectModule('Karyawan'); } }}><span>Karyawan</span><span className={`arrow ${currentModule === 'Karyawan' && !closedNodes["Karyawan"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Karyawan' && !closedNodes["Karyawan"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['per-13', 'Menambahkan data karyawan untuk payroll da'],
                            ['per-14', 'Cara menambahkan sales atau tenaga penjual'],
                            ['per-15', 'Cara menghitung pajak PPh 21 karyawan hari'],
                            ['per-16', 'Cara mengimpor data karyawan dari excel'],
                            ['per-17', 'Cara mencatat karyawan resign dan hitung P'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Karyawan'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Transaksi Berulang' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Transaksi Berulang') setClosedNodes(s => ({ ...s, ["Transaksi Berulang"]: !s["Transaksi Berulang"] })); else { setClosedNodes(s => ({ ...s, ["Transaksi Berulang"]: false })); handleSelectModule('Transaksi Berulang'); } }}><span>Transaksi Berulang</span><span className={`arrow ${currentModule === 'Transaksi Berulang' && !closedNodes["Transaksi Berulang"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Transaksi Berulang' && !closedNodes["Transaksi Berulang"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['per-18', 'Cara mencatat biaya bulanan secara otomati'],
                            ['per-19', 'Cara menjalankan banyak transaksi berulang'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Transaksi Berulang'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Proses Akhir Bulan' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Proses Akhir Bulan') setClosedNodes(s => ({ ...s, ["Proses Akhir Bulan"]: !s["Proses Akhir Bulan"] })); else { setClosedNodes(s => ({ ...s, ["Proses Akhir Bulan"]: false })); handleSelectModule('Proses Akhir Bulan'); } }}><span>Proses Akhir Bulan</span><span className={`arrow ${currentModule === 'Proses Akhir Bulan' && !closedNodes["Proses Akhir Bulan"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Proses Akhir Bulan' && !closedNodes["Proses Akhir Bulan"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['per-20', 'Cara tutup buku bulanan'],
                            ['per-21', 'Cara mencegah proses akhir bulan gagal kar'],
                            ['per-22', 'Cara melakukan penyusutan aset tetap'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Proses Akhir Bulan'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Kontak' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Kontak') setClosedNodes(s => ({ ...s, ["Kontak"]: !s["Kontak"] })); else { setClosedNodes(s => ({ ...s, ["Kontak"]: false })); handleSelectModule('Kontak'); } }}><span>Kontak</span><span className={`arrow ${currentModule === 'Kontak' && !closedNodes["Kontak"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Kontak' && !closedNodes["Kontak"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['per-23', 'Mengenal fitur kontak dan Manfaatnya untuk'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Kontak'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Transaksi Favorit' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Transaksi Favorit') setClosedNodes(s => ({ ...s, ["Transaksi Favorit"]: !s["Transaksi Favorit"] })); else { setClosedNodes(s => ({ ...s, ["Transaksi Favorit"]: false })); handleSelectModule('Transaksi Favorit'); } }}><span>Transaksi Favorit</span><span className={`arrow ${currentModule === 'Transaksi Favorit' && !closedNodes["Transaksi Favorit"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Transaksi Favorit' && !closedNodes["Transaksi Favorit"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['per-24', 'Cara menyimpan template transaksi'],
                            ['per-25', 'Cara menghapus transaksi favorit'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Transaksi Favorit'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Approval' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Approval') setClosedNodes(s => ({ ...s, ["Approval"]: !s["Approval"] })); else { setClosedNodes(s => ({ ...s, ["Approval"]: false })); handleSelectModule('Approval'); } }}><span>Approval</span><span className={`arrow ${currentModule === 'Approval' && !closedNodes["Approval"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Approval' && !closedNodes["Approval"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['per-26', 'Mengenal fungsi fitur persetujuan (approva'],
                            ['per-27', 'Cara menyetujui banyak transaksi sekaligus'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Approval'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Kalender' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Kalender') setClosedNodes(s => ({ ...s, ["Kalender"]: !s["Kalender"] })); else { setClosedNodes(s => ({ ...s, ["Kalender"]: false })); handleSelectModule('Kalender'); } }}><span>Kalender</span><span className={`arrow ${currentModule === 'Kalender' && !closedNodes["Kalender"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Kalender' && !closedNodes["Kalender"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['per-28', 'Cara menggunakan fitur kalender'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Kalender'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Log Aktivitas' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Log Aktivitas') setClosedNodes(s => ({ ...s, ["Log Aktivitas"]: !s["Log Aktivitas"] })); else { setClosedNodes(s => ({ ...s, ["Log Aktivitas"]: false })); handleSelectModule('Log Aktivitas'); } }}><span>Log Aktivitas</span><span className={`arrow ${currentModule === 'Log Aktivitas' && !closedNodes["Log Aktivitas"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Log Aktivitas' && !closedNodes["Log Aktivitas"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['per-29', 'Cara melihat riwayat perubahan data dan tr'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Log Aktivitas'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Cara membuat departemen dan proyek' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Cara membuat departemen dan proyek') setClosedNodes(s => ({ ...s, ["Cara membuat departemen dan proyek"]: !s["Cara membuat departemen dan proyek"] })); else { setClosedNodes(s => ({ ...s, ["Cara membuat departemen dan proyek"]: false })); handleSelectModule('Cara membuat departemen dan proyek'); } }}><span>Cara membuat departemen dan proyek</span><span className={`arrow ${currentModule === 'Cara membuat departemen dan proyek' && !closedNodes["Cara membuat departemen dan proyek"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Cara membuat departemen dan proyek' && !closedNodes["Cara membuat departemen dan proyek"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          <div className={`leaf-item ${activeTab === 'per-30' ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Cara membuat departemen dan proyek'); setActiveTab('per-30'); }}><span>Buat departemen dan proyek</span></div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* 3.4 BUKU BESAR */}
                <div className="module-group">
                  <div 
                    className={`module-header ${currentModule === 'Buku Besar' ? 'active-sub' : ''}`} 
                    onClick={() => {
                      toggleCategory('bukubesar');
                      handleSelectModule('Buku Besar');
                    }}
                  >
                    <span>Buku Besar</span>
                    <span className={`arrow ${openCategories.bukubesar ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                  </div>
                  {openCategories.bukubesar && (
                    <div className="module-children">
                      <div className={`leaf-item ${currentModule === 'Akun Perkiraan' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Akun Perkiraan') setClosedNodes(s => ({ ...s, ["Akun Perkiraan"]: !s["Akun Perkiraan"] })); else { setClosedNodes(s => ({ ...s, ["Akun Perkiraan"]: false })); handleSelectModule('Akun Perkiraan'); } }}><span>Akun Perkiraan</span><span className={`arrow ${currentModule === 'Akun Perkiraan' && !closedNodes["Akun Perkiraan"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Akun Perkiraan' && !closedNodes["Akun Perkiraan"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['bb-01', 'Cara membuat, mengubah, dan menghapus akun'],
                            ['bb-02', 'Cara membuat akun mata uang asing'],
                            ['bb-03', 'Solusi error tidak bisa membuat akun perki'],
                            ['bb-04', 'Cara membuat equitas saldo awal menjadi 0 '],
                            ['bb-05', 'Cara memasukkan saldo awal modal dan laba '],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Akun Perkiraan'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Pencatatan Beban' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Pencatatan Beban') setClosedNodes(s => ({ ...s, ["Pencatatan Beban"]: !s["Pencatatan Beban"] })); else { setClosedNodes(s => ({ ...s, ["Pencatatan Beban"]: false })); handleSelectModule('Pencatatan Beban'); } }}><span>Pencatatan Beban</span><span className={`arrow ${currentModule === 'Pencatatan Beban' && !closedNodes["Pencatatan Beban"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Pencatatan Beban' && !closedNodes["Pencatatan Beban"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['bb-06', 'Cara mencatat biaya atau pengeluaran perus'],
                            ['bb-07', 'Cara mencatat tagihan yang belum dibayar'],
                            ['bb-08', 'Cara mencatat piutang karyawan'],
                            ['bb-09', 'Cara memotong cicilan pinjaman karyawan da'],
                            ['bb-10', 'Cara menghapus pencatatan beban secara mas'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Pencatatan Beban'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Pencatatan Gaji' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Pencatatan Gaji') setClosedNodes(s => ({ ...s, ["Pencatatan Gaji"]: !s["Pencatatan Gaji"] })); else { setClosedNodes(s => ({ ...s, ["Pencatatan Gaji"]: false })); handleSelectModule('Pencatatan Gaji'); } }}><span>Pencatatan Gaji</span><span className={`arrow ${currentModule === 'Pencatatan Gaji' && !closedNodes["Pencatatan Gaji"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Pencatatan Gaji' && !closedNodes["Pencatatan Gaji"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['bb-11', 'Cara mencatat beban gaji karyawan'],
                            ['bb-12', 'Cara menghitung dan mencatat PPh 21 karyaw'],
                            ['bb-13', 'Cara mencatat THR atau bonus karyawan yang'],
                            ['bb-14', 'Cara mencatat dan menghitung PPh 21 karyaw'],
                            ['bb-15', 'Cara mencatat gaji agar masuk ke SPT PPh 2'],
                            ['bb-16', 'Menghitung PPh 21 karyawan tetap di bulan '],
                            ['bb-17', 'Cara mengatasi error periode pencatatan PP'],
                            ['bb-18', 'Cara mengatasi error kelebihan PPh saat me'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Pencatatan Gaji'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Jurnal Umum' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Jurnal Umum') setClosedNodes(s => ({ ...s, ["Jurnal Umum"]: !s["Jurnal Umum"] })); else { setClosedNodes(s => ({ ...s, ["Jurnal Umum"]: false })); handleSelectModule('Jurnal Umum'); } }}><span>Jurnal Umum</span><span className={`arrow ${currentModule === 'Jurnal Umum' && !closedNodes["Jurnal Umum"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Jurnal Umum' && !closedNodes["Jurnal Umum"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['bb-19', 'Cara membuat jurnal umum'],
                            ['bb-20', 'Cara mencatat transaksi mata uang asing'],
                            ['bb-21', 'Cara mencatat pembagian dividen ke pemegan'],
                            ['bb-22', 'Cara import jurnal umum dari excel ke Accu'],
                            ['bb-23', 'Cara menghapus jurnal umum secara massal'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Jurnal Umum'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Monitor Anggaran' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Monitor Anggaran') setClosedNodes(s => ({ ...s, ["Monitor Anggaran"]: !s["Monitor Anggaran"] })); else { setClosedNodes(s => ({ ...s, ["Monitor Anggaran"]: false })); handleSelectModule('Monitor Anggaran'); } }}><span>Monitor Anggaran</span><span className={`arrow ${currentModule === 'Monitor Anggaran' && !closedNodes["Monitor Anggaran"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Monitor Anggaran' && !closedNodes["Monitor Anggaran"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['bb-24', 'Cara cek penggunaan anggaran perusahaan'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Monitor Anggaran'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Transfer Anggaran' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Transfer Anggaran') setClosedNodes(s => ({ ...s, ["Transfer Anggaran"]: !s["Transfer Anggaran"] })); else { setClosedNodes(s => ({ ...s, ["Transfer Anggaran"]: false })); handleSelectModule('Transfer Anggaran'); } }}><span>Transfer Anggaran</span><span className={`arrow ${currentModule === 'Transfer Anggaran' && !closedNodes["Transfer Anggaran"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Transfer Anggaran' && !closedNodes["Transfer Anggaran"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['bb-25', 'Cara mengalihkan budget ke anggaran lain'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Transfer Anggaran'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Anggaran' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Anggaran') setClosedNodes(s => ({ ...s, ["Anggaran"]: !s["Anggaran"] })); else { setClosedNodes(s => ({ ...s, ["Anggaran"]: false })); handleSelectModule('Anggaran'); } }}><span>Anggaran</span><span className={`arrow ${currentModule === 'Anggaran' && !closedNodes["Anggaran"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Anggaran' && !closedNodes["Anggaran"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['bb-26', 'Cara membuat dan menghapus anggaran'],
                            ['bb-27', 'Cara mengatasi error akun perkiraan diguna'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Anggaran'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Histori Akun' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Histori Akun') setClosedNodes(s => ({ ...s, ["Histori Akun"]: !s["Histori Akun"] })); else { setClosedNodes(s => ({ ...s, ["Histori Akun"]: false })); handleSelectModule('Histori Akun'); } }}><span>Histori Akun</span><span className={`arrow ${currentModule === 'Histori Akun' && !closedNodes["Histori Akun"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Histori Akun' && !closedNodes["Histori Akun"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['bb-28', 'Cara melihat riwayat transaksi akun perkir'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Histori Akun'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Log Aktivitas Jurnal' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Log Aktivitas Jurnal') setClosedNodes(s => ({ ...s, ["Log Aktivitas Jurnal"]: !s["Log Aktivitas Jurnal"] })); else { setClosedNodes(s => ({ ...s, ["Log Aktivitas Jurnal"]: false })); handleSelectModule('Log Aktivitas Jurnal'); } }}><span>Log Aktivitas Jurnal</span><span className={`arrow ${currentModule === 'Log Aktivitas Jurnal' && !closedNodes["Log Aktivitas Jurnal"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Log Aktivitas Jurnal' && !closedNodes["Log Aktivitas Jurnal"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['bb-29', 'Cara melihat riwayat perubahan jurnal'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Log Aktivitas Jurnal'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Pinjaman Karyawan' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Pinjaman Karyawan') setClosedNodes(s => ({ ...s, ["Pinjaman Karyawan"]: !s["Pinjaman Karyawan"] })); else { setClosedNodes(s => ({ ...s, ["Pinjaman Karyawan"]: false })); handleSelectModule('Pinjaman Karyawan'); } }}><span>Pinjaman Karyawan</span><span className={`arrow ${currentModule === 'Pinjaman Karyawan' && !closedNodes["Pinjaman Karyawan"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Pinjaman Karyawan' && !closedNodes["Pinjaman Karyawan"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['bb-30', 'Cara memberikan pinjaman ke karyawan dan m'],
                            ['bb-31', 'Cara mencatat angsuran pinjaman karyawan m'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Pinjaman Karyawan'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* 3.5 KAS & BANK */}
                <div className="module-group">
                  <div 
                    className={`module-header ${currentModule === 'Kas & Bank' ? 'active-sub' : ''}`} 
                    onClick={() => {
                      toggleCategory('kasbank');
                      handleSelectModule('Kas & Bank');
                    }}
                  >
                    <span>Kas &amp; Bank</span>
                    <span className={`arrow ${openCategories.kasbank ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                  </div>
                  {openCategories.kasbank && (
                    <div className="module-children">
                      <div className={`leaf-item ${currentModule === 'Pembayaran' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Pembayaran') setClosedNodes(s => ({ ...s, ["Pembayaran"]: !s["Pembayaran"] })); else { setClosedNodes(s => ({ ...s, ["Pembayaran"]: false })); handleSelectModule('Pembayaran'); } }}><span>Pembayaran</span><span className={`arrow ${currentModule === 'Pembayaran' && !closedNodes["Pembayaran"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Pembayaran' && !closedNodes["Pembayaran"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['kb-01', 'Fungsi dan manfaat fitur pembayaran'],
                            ['kb-02', 'Cara membayar gaji yang sudah dicatat'],
                            ['kb-03', 'Cara mencatat pembayaran dalam mata uang a'],
                            ['kb-04', 'Cara impor pembayaran transaksi dari Excel'],
                            ['kb-05', 'Cara mencatat biaya dibayar di muka'],
                            ['kb-06', 'Cara mencatat biaya dibayar di muka dengan'],
                            ['kb-07', 'Cara mencatat cicilan pinjaman bank'],
                            ['kb-08', 'Cara mengisi NTPN saat mencatat pembayaran'],
                            ['kb-09', 'Mengisi departemen atau proyek yang kosong'],
                            ['kb-10', 'Cara mencatat pembayaran operasional perus'],
                            ['kb-11', 'Cara mengimpor pembayaran operasional dari'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Pembayaran'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Penerimaan' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Penerimaan') setClosedNodes(s => ({ ...s, ["Penerimaan"]: !s["Penerimaan"] })); else { setClosedNodes(s => ({ ...s, ["Penerimaan"]: false })); handleSelectModule('Penerimaan'); } }}><span>Penerimaan</span><span className={`arrow ${currentModule === 'Penerimaan' && !closedNodes["Penerimaan"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Penerimaan' && !closedNodes["Penerimaan"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['kb-12', 'Cara mencatat uang masuk ke kas atau bank'],
                            ['kb-13', 'Cara mencatat uang masuk dalam mata uang a'],
                            ['kb-14', 'Cara import transaksi kas masuk dari excel'],
                            ['kb-15', 'Cara mencatat pinjaman pinjaman bank'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Penerimaan'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Transfer Bank' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Transfer Bank') setClosedNodes(s => ({ ...s, ["Transfer Bank"]: !s["Transfer Bank"] })); else { setClosedNodes(s => ({ ...s, ["Transfer Bank"]: false })); handleSelectModule('Transfer Bank'); } }}><span>Transfer Bank</span><span className={`arrow ${currentModule === 'Transfer Bank' && !closedNodes["Transfer Bank"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Transfer Bank' && !closedNodes["Transfer Bank"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['kb-16', 'Cara mencatat transfer antar rekening bank'],
                            ['kb-17', 'Cara mencatat biaya transfer bank'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Transfer Bank'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Smartlink E-Banking' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Smartlink E-Banking') setClosedNodes(s => ({ ...s, ["Smartlink E-Banking"]: !s["Smartlink E-Banking"] })); else { setClosedNodes(s => ({ ...s, ["Smartlink E-Banking"]: false })); handleSelectModule('Smartlink E-Banking'); } }}><span>Smartlink E-Banking</span><span className={`arrow ${currentModule === 'Smartlink E-Banking' && !closedNodes["Smartlink E-Banking"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Smartlink E-Banking' && !closedNodes["Smartlink E-Banking"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['kb-18', 'Cara menghubungkan internet banking'],
                            ['kb-19', 'Cara mengimpor mutasi bank dengan format e'],
                            ['kb-20', 'Cara menghubungkan KlikBCA Bisnis'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Smartlink E-Banking'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Rekening Koran' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Rekening Koran') setClosedNodes(s => ({ ...s, ["Rekening Koran"]: !s["Rekening Koran"] })); else { setClosedNodes(s => ({ ...s, ["Rekening Koran"]: false })); handleSelectModule('Rekening Koran'); } }}><span>Rekening Koran</span><span className={`arrow ${currentModule === 'Rekening Koran' && !closedNodes["Rekening Koran"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Rekening Koran' && !closedNodes["Rekening Koran"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['kb-21', 'Cara mengimpor mutasi bank ke Accurate Onl'],
                            ['kb-22', 'Cara menghapus mutasi rekening koran'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Rekening Koran'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Histori Bank' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Histori Bank') setClosedNodes(s => ({ ...s, ["Histori Bank"]: !s["Histori Bank"] })); else { setClosedNodes(s => ({ ...s, ["Histori Bank"]: false })); handleSelectModule('Histori Bank'); } }}><span>Histori Bank</span><span className={`arrow ${currentModule === 'Histori Bank' && !closedNodes["Histori Bank"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Histori Bank' && !closedNodes["Histori Bank"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['kb-23', 'Cara melihat mutasi bank'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Histori Bank'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Rekonsiliasi Bank' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Rekonsiliasi Bank') setClosedNodes(s => ({ ...s, ["Rekonsiliasi Bank"]: !s["Rekonsiliasi Bank"] })); else { setClosedNodes(s => ({ ...s, ["Rekonsiliasi Bank"]: false })); handleSelectModule('Rekonsiliasi Bank'); } }}><span>Rekonsiliasi Bank</span><span className={`arrow ${currentModule === 'Rekonsiliasi Bank' && !closedNodes["Rekonsiliasi Bank"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Rekonsiliasi Bank' && !closedNodes["Rekonsiliasi Bank"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['kb-24', 'Cara mencocokkan mutasi bank dengan transa'],
                            ['kb-25', 'Cara mencocokkan banyak transaksi bank sek'],
                            ['kb-26', 'Cara menghapus banyak mutasi bank sekaligu'],
                            ['kb-27', 'Cara mencocokkan beberapa mutasi bank ke s'],
                            ['kb-28', 'Mengatasi saldo bank tidak sama dengan Acc'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Rekonsiliasi Bank'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Smartlink Virtual Account' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Smartlink Virtual Account') setClosedNodes(s => ({ ...s, ["Smartlink Virtual Account"]: !s["Smartlink Virtual Account"] })); else { setClosedNodes(s => ({ ...s, ["Smartlink Virtual Account"]: false })); handleSelectModule('Smartlink Virtual Account'); } }}><span>Smartlink Virtual Account</span><span className={`arrow ${currentModule === 'Smartlink Virtual Account' && !closedNodes["Smartlink Virtual Account"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Smartlink Virtual Account' && !closedNodes["Smartlink Virtual Account"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['kb-29', 'Cara setting virtual account'],
                            ['kb-30', 'Cara menerima pembayaran lewat virtual acc'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Smartlink Virtual Account'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Smartlink E-Payment' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Smartlink E-Payment') setClosedNodes(s => ({ ...s, ["Smartlink E-Payment"]: !s["Smartlink E-Payment"] })); else { setClosedNodes(s => ({ ...s, ["Smartlink E-Payment"]: false })); handleSelectModule('Smartlink E-Payment'); } }}><span>Smartlink E-Payment</span><span className={`arrow ${currentModule === 'Smartlink E-Payment' && !closedNodes["Smartlink E-Payment"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Smartlink E-Payment' && !closedNodes["Smartlink E-Payment"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['kb-31', 'Mengenal menerima pembayaran online secara'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Smartlink E-Payment'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Pencairan Pinjaman' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Pencairan Pinjaman') setClosedNodes(s => ({ ...s, ["Pencairan Pinjaman"]: !s["Pencairan Pinjaman"] })); else { setClosedNodes(s => ({ ...s, ["Pencairan Pinjaman"]: false })); handleSelectModule('Pencairan Pinjaman'); } }}><span>Pencairan Pinjaman</span><span className={`arrow ${currentModule === 'Pencairan Pinjaman' && !closedNodes["Pencairan Pinjaman"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Pencairan Pinjaman' && !closedNodes["Pencairan Pinjaman"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['kb-32', 'Cara mencairkan pinjaman karyawan'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Pencairan Pinjaman'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Pembayaran Angsuran' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Pembayaran Angsuran') setClosedNodes(s => ({ ...s, ["Pembayaran Angsuran"]: !s["Pembayaran Angsuran"] })); else { setClosedNodes(s => ({ ...s, ["Pembayaran Angsuran"]: false })); handleSelectModule('Pembayaran Angsuran'); } }}><span>Pembayaran Angsuran</span><span className={`arrow ${currentModule === 'Pembayaran Angsuran' && !closedNodes["Pembayaran Angsuran"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Pembayaran Angsuran' && !closedNodes["Pembayaran Angsuran"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['kb-33', 'Cara mencatat pembayaran cicilan pinjaman '],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Pembayaran Angsuran'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                      <div className={`leaf-item ${currentModule === 'Pelunasan Pinjaman' ? 'active-sub' : ''}`} onClick={() => { if (currentModule === 'Pelunasan Pinjaman') setClosedNodes(s => ({ ...s, ["Pelunasan Pinjaman"]: !s["Pelunasan Pinjaman"] })); else { setClosedNodes(s => ({ ...s, ["Pelunasan Pinjaman"]: false })); handleSelectModule('Pelunasan Pinjaman'); } }}><span>Pelunasan Pinjaman</span><span className={`arrow ${currentModule === 'Pelunasan Pinjaman' && !closedNodes["Pelunasan Pinjaman"] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span></div>
                      {currentModule === 'Pelunasan Pinjaman' && !closedNodes["Pelunasan Pinjaman"] && (
                        <div className="module-children" style={{ paddingLeft: '14px' }}>
                          {[
                            ['kb-34', 'Cara mencatat pelunasan pinjaman'],
                          ].map(([tab, label]) => (
                            <div key={tab} className={`leaf-item ${activeTab === tab ? 'active-sub' : ''}`} style={{ fontSize: '12.5px' }} onClick={() => { setCurrentModule('Pelunasan Pinjaman'); setActiveTab(tab); }}><span>{label}</span></div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* 3.6 PEMBELIAN */}
                <div className="module-group">
                  <div
                    className={`module-header ${currentModule === 'Pembelian' ? 'active-sub' : ''}`}
                    onClick={() => {
                      toggleCategory('pembelian');
                      handleSelectModule('Pembelian');
                    }}
                  >
                    <span>Pembelian</span>
                    <span className={`arrow ${openCategories.pembelian ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                  </div>
                  {openCategories.pembelian && (
                    <div className="module-children">
                      {pembelianTopModules.map((mod) => (
                        mod.name === 'Lainnya' ? (
                          <React.Fragment key="Lainnya">
                            <div
                              className={`leaf-item ${inPembelianLainnya ? 'active-sub' : ''}`}
                              onClick={() => {
                                if (currentModule === 'Lainnya') {
                                  setClosedNodes((prev) => ({ ...prev, Lainnya: !prev.Lainnya }));
                                } else {
                                  setClosedNodes((prev) => ({ ...prev, Lainnya: false }));
                                  handleSelectModule('Lainnya');
                                }
                              }}
                            >
                              <span>Lainnya</span>
                              <span className={`arrow ${inPembelianLainnya && !closedNodes['Lainnya'] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                            </div>
                            {inPembelianLainnya && !closedNodes['Lainnya'] && (
                              <div className="module-children" style={{ paddingLeft: '14px' }}>
                                {pembelianLainnyaModules.map((sub) => (
                                  <React.Fragment key={sub.name}>
                                    <div
                                      className={`leaf-item ${currentModule === sub.name ? 'active-sub' : ''}`}
                                      onClick={() => {
                                        if (currentModule === sub.name) {
                                          setClosedNodes((prev) => ({ ...prev, [sub.name]: !prev[sub.name] }));
                                        } else {
                                          setClosedNodes((prev) => ({ ...prev, [sub.name]: false }));
                                          handleSelectModule(sub.name);
                                        }
                                      }}
                                    >
                                      <span>{sub.name}</span>
                                      <span className={`arrow ${currentModule === sub.name && !closedNodes[sub.name] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                                    </div>
                                    {currentModule === sub.name && !closedNodes[sub.name] && (
                                      <div className="module-children" style={{ paddingLeft: '14px' }}>
                                        {sub.articles.map((art) => (
                                          <div
                                            key={art.id}
                                            className={`leaf-item ${activeTab === art.id ? 'active-sub' : ''}`}
                                            style={{ fontSize: '12.5px' }}
                                            onClick={() => { setCurrentModule(sub.name); setActiveTab(art.id); }}
                                          >
                                            <span>{art.title}</span>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </React.Fragment>
                                ))}
                                {pembelianLainnyaArticleMetas.map((art) => (
                                  <div
                                    key={art.id}
                                    className={`leaf-item ${activeTab === art.id ? 'active-sub' : ''}`}
                                    style={{ fontSize: '12.5px' }}
                                    onClick={() => { setCurrentModule('Lainnya'); setActiveTab(art.id); }}
                                  >
                                    <span>{art.title}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </React.Fragment>
                        ) : (
                          <React.Fragment key={mod.name}>
                            <div
                              className={`leaf-item ${currentModule === mod.name ? 'active-sub' : ''}`}
                              onClick={() => {
                                if (currentModule === mod.name) {
                                  setClosedNodes((prev) => ({ ...prev, [mod.name]: !prev[mod.name] }));
                                } else {
                                  setClosedNodes((prev) => ({ ...prev, [mod.name]: false }));
                                  handleSelectModule(mod.name);
                                }
                              }}
                            >
                              <span>{mod.name}</span>
                              <span className={`arrow ${currentModule === mod.name && !closedNodes[mod.name] ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                            </div>
                            {currentModule === mod.name && !closedNodes[mod.name] && (
                              <div className="module-children" style={{ paddingLeft: '14px' }}>
                                {mod.articles.map((art) => (
                                  <div
                                    key={art.id}
                                    className={`leaf-item ${activeTab === art.id ? 'active-sub' : ''}`}
                                    style={{ fontSize: '12.5px' }}
                                    onClick={() => { setCurrentModule(mod.name); setActiveTab(art.id); }}
                                  >
                                    <span>{art.title}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </React.Fragment>
                        )
                      ))}
                    </div>
                  )}
                </div>

                <div className="module-group">
                  <div 
                    className={`module-header ${currentModule === 'Penjualan' ? 'active-sub' : ''}`} 
                    onClick={() => {
                      toggleCategory('penjualan');
                      handleSelectModule('Penjualan');
                    }}
                  >
                    <span>Penjualan</span>
                    <span className={`arrow ${openCategories.penjualan ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                  </div>
                  {openCategories.penjualan && (
                    <div className="module-children">
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Penawaran Penjualan' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Penawaran Penjualan');
                            toggleCategory('jual0');
                          }}
                        >
                          <span>Penawaran Penjualan</span>
                          <span className={`arrow ${openCategories.jual0 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.jual0 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'penawaran-create' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penawaran Penjualan');
                                setActiveTab('penawaran-create');
                              }}
                            >
                              { "Cara Membuat Penawaran Harga (Quotation)" }
                            </div>
                            <div
                              className={`article-link ${activeTab === 'penawaran-pkp-biaya' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penawaran Penjualan');
                                setActiveTab('penawaran-pkp-biaya');
                              }}
                            >
                              { "Cara Membuat Penawaran Harga (Quotation) dengan PPN dan Biaya Tambahan Lain" }
                            </div>
                            <div
                              className={`article-link ${activeTab === 'impor-penawaran-penjualan-excel-ke-accurate' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penawaran Penjualan');
                                setActiveTab('impor-penawaran-penjualan-excel-ke-accurate');
                              }}
                            >
                              { "Cara Impor Penawaran Penjualan dari Excel ke CashFlow Online" }
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Pesanan Penjualan' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Pesanan Penjualan');
                            toggleCategory('jual1');
                          }}
                        >
                          <span>Pesanan Penjualan</span>
                          <span className={`arrow ${openCategories.jual1 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.jual1 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'so-create' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pesanan Penjualan');
                                setActiveTab('so-create');
                              }}
                            >
                              { "Cara Membuat Pesanan Penjualan (Sales Order)" }
                            </div>
                            <div
                              className={`article-link ${activeTab === 'so-dp' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pesanan Penjualan');
                                setActiveTab('so-dp');
                              }}
                            >
                              { "Cara Membuat Pesanan Penjualan dengan Uang Muka (Down Payment)" }
                            </div>
                            <div
                              className={`article-link ${activeTab === 'so-dari-penawaran' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pesanan Penjualan');
                                setActiveTab('so-dari-penawaran');
                              }}
                            >
                              { "Cara Membuat Pesanan Penjualan dari Penawaran Penjualan" }
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-001' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pesanan Penjualan');
                                setActiveTab('pn-001');
                              }}
                            >
                              Cara menutup pesanan penjualan (sales order)
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-002' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pesanan Penjualan');
                                setActiveTab('pn-002');
                              }}
                            >
                              Cara impor pesanan penjualan valas dari excel
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-003' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pesanan Penjualan');
                                setActiveTab('pn-003');
                              }}
                            >
                              Cara mengimpor transaksi pesanan penjualan
                            </div>
                          { "Cara menutup pesanan penjualan (sales order)" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Pengiriman Pesanan' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Pengiriman Pesanan');
                            toggleCategory('jual2');
                          }}
                        >
                          <span>Pengiriman Pesanan</span>
                          <span className={`arrow ${openCategories.jual2 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.jual2 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'pn-004' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pengiriman Pesanan');
                                setActiveTab('pn-004');
                              }}
                            >
                              Cara membuat pengiriman pesanan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-005' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pengiriman Pesanan');
                                setActiveTab('pn-005');
                              }}
                            >
                              Membuat pengiriman pesanan dari penawaran penjualan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-006' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pengiriman Pesanan');
                                setActiveTab('pn-006');
                              }}
                            >
                              Cara membuat pengiriman pesanan dari sales order
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-007' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pengiriman Pesanan');
                                setActiveTab('pn-007');
                              }}
                            >
                              Membuat pengiriman pesanan dari faktur penjualan dimuka
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-008' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pengiriman Pesanan');
                                setActiveTab('pn-008');
                              }}
                            >
                              Menghapus transaksi pengiriman pesanan secara massal
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-009' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pengiriman Pesanan');
                                setActiveTab('pn-009');
                              }}
                            >
                              Solusi error pengiriman barang dari pesanan penjualan
                            </div>
                          { "Cara membuat pengiriman pesanan" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Uang Muka Penjualan' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Uang Muka Penjualan');
                            toggleCategory('jual3');
                          }}
                        >
                          <span>Uang Muka Penjualan</span>
                          <span className={`arrow ${openCategories.jual3 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.jual3 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'pn-010' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Uang Muka Penjualan');
                                setActiveTab('pn-010');
                              }}
                            >
                              Cara mencatat uang muka penjualan (DP Pelanggan)
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-011' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Uang Muka Penjualan');
                                setActiveTab('pn-011');
                              }}
                            >
                              Cara memotong faktur dengan DP pelanggan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-012' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Uang Muka Penjualan');
                                setActiveTab('pn-012');
                              }}
                            >
                              Cara mencatat uang muka (DP) dibayar dengan barang
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-013' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Uang Muka Penjualan');
                                setActiveTab('pn-013');
                              }}
                            >
                              Cara mencatat saldo awal uang muka pelanggan
                            </div>
                          { "Cara mencatat uang muka penjualan (DP Pelanggan)" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Faktur Penjualan' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Faktur Penjualan');
                            toggleCategory('jual4');
                          }}
                        >
                          <span>Faktur Penjualan</span>
                          <span className={`arrow ${openCategories.jual4 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.jual4 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'pn-014' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-014');
                              }}
                            >
                              Cara membuat faktur penjualan (invoice)
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-015' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-015');
                              }}
                            >
                              Cara menghapus faktur penjualan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-016' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-016');
                              }}
                            >
                              Cara membuat faktur penjualan dari penawaran
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-017' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-017');
                              }}
                            >
                              Cara membuat faktur penjualan dari pengiriman barang
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-018' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-018');
                              }}
                            >
                              Cara mengubah pesanan menjadi invoice
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-019' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-019');
                              }}
                            >
                              Cara memotong invoice dengan uang muka (DP)
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-020' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-020');
                              }}
                            >
                              Cara membuat faktur penjualan sebelum barang dikirim
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-021' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-021');
                              }}
                            >
                              Menghitung PPN harga sudah termasuk pajak + diskon faktu
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-022' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-022');
                              }}
                            >
                              Cara mencetak banyak faktur penjualan sekaligus
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-023' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-023');
                              }}
                            >
                              Melihat transaksi Accurate POS yang belum masuk
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-024' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-024');
                              }}
                            >
                              Cara mengambil data faktur pembelian ke faktur penjualan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-025' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-025');
                              }}
                            >
                              Cara Accurate Online membagi diskon faktur ke setiap bar
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-026' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-026');
                              }}
                            >
                              Cara menghitung PPN transaksi mata uang asing
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-027' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-027');
                              }}
                            >
                              Cara menambahkan status lunas di invoice
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-028' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-028');
                              }}
                            >
                              Mengatasi HPP tidak muncul pada faktur penjualan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-029' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-029');
                              }}
                            >
                              Cara Mencatat Pembayaran Cicilan Pelanggan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-030' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-030');
                              }}
                            >
                              Cara membatasi diskon penjualan dengan approval
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-031' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-031');
                              }}
                            >
                              Arti Kolom Umur (hr) pada Faktur Penjualan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-032' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-032');
                              }}
                            >
                              Cara mengatasi error harga jual di bawah harga beli
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-033' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-033');
                              }}
                            >
                              Cara melihat faktur dimuka yang belum dikirim
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-034' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-034');
                              }}
                            >
                              Cara mengirim tagihan ke Whatsapp pelanggan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-035' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-035');
                              }}
                            >
                              Cara mengatur PPN keluaran dari tab biaya lainnya
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-036' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-036');
                              }}
                            >
                              Cara memasukkan pencairan dana TikTok Shop
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-037' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-037');
                              }}
                            >
                              Cara memasukkan pencairan dana Tokopedia
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-038' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Penjualan');
                                setActiveTab('pn-038');
                              }}
                            >
                              Cara mengimpor faktur penjualan dari data pengiriman pes
                            </div>
                          { "Cara membuat faktur penjualan (invoice)" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Penerimaan Penjualan' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Penerimaan Penjualan');
                            toggleCategory('jual5');
                          }}
                        >
                          <span>Penerimaan Penjualan</span>
                          <span className={`arrow ${openCategories.jual5 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.jual5 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'pn-039' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penerimaan Penjualan');
                                setActiveTab('pn-039');
                              }}
                            >
                              Cara mencatat pembayaran dari pelanggan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-040' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penerimaan Penjualan');
                                setActiveTab('pn-040');
                              }}
                            >
                              Cara mencatat pembayaran invoice pelanggan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-041' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penerimaan Penjualan');
                                setActiveTab('pn-041');
                              }}
                            >
                              Mencatat pembayaran pelanggan dengan potongan biaya
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-042' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penerimaan Penjualan');
                                setActiveTab('pn-042');
                              }}
                            >
                              Cara menghapus pembayaran dari pelanggan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-043' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penerimaan Penjualan');
                                setActiveTab('pn-043');
                              }}
                            >
                              Cara mencatat piutang pelanggan yang tidak bisa ditagih
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-044' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penerimaan Penjualan');
                                setActiveTab('pn-044');
                              }}
                            >
                              Cara mencatat overpay pelanggan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-045' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penerimaan Penjualan');
                                setActiveTab('pn-045');
                              }}
                            >
                              Cara mencatat biaya admin bank
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-046' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penerimaan Penjualan');
                                setActiveTab('pn-046');
                              }}
                            >
                              Cara uengembalikan uang retur penjualan yang sudah lunas
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-047' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penerimaan Penjualan');
                                setActiveTab('pn-047');
                              }}
                            >
                              Cara membatalkan pembayaran karena cek atau giro ditolak
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-048' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penerimaan Penjualan');
                                setActiveTab('pn-048');
                              }}
                            >
                              Mencatat kelebihan pembayaran pelanggan ke akun lain
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-049' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penerimaan Penjualan');
                                setActiveTab('pn-049');
                              }}
                            >
                              Cara import pembayaran VA bca ke penerimaan penjualan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-050' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penerimaan Penjualan');
                                setActiveTab('pn-050');
                              }}
                            >
                              Cara impor penerimaan penjualan dari excel
                            </div>
                          { "Cara mencatat pembayaran dari pelanggan" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Retur Penjualan' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Retur Penjualan');
                            toggleCategory('jual6');
                          }}
                        >
                          <span>Retur Penjualan</span>
                          <span className={`arrow ${openCategories.jual6 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.jual6 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'pn-051' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Retur Penjualan');
                                setActiveTab('pn-051');
                              }}
                            >
                              Mengenal fitur retur penjualan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-052' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Retur Penjualan');
                                setActiveTab('pn-052');
                              }}
                            >
                              Cara mencatat retur barang ditukar barang lain
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-053' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Retur Penjualan');
                                setActiveTab('pn-053');
                              }}
                            >
                              Cara retur barang dari faktur yang sudah lunas
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-054' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Retur Penjualan');
                                setActiveTab('pn-054');
                              }}
                            >
                              Cara membuat retur penjualan tanpa faktur
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-055' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Retur Penjualan');
                                setActiveTab('pn-055');
                              }}
                            >
                              Cara mengembalikan uang pelanggan setelah retur barang
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-056' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Retur Penjualan');
                                setActiveTab('pn-056');
                              }}
                            >
                              Retur penjualan untuk mengurangi faktur belum lunas
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-057' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Retur Penjualan');
                                setActiveTab('pn-057');
                              }}
                            >
                              Membuat retur penjualan dari faktur penjualan dimuka
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-058' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Retur Penjualan');
                                setActiveTab('pn-058');
                              }}
                            >
                              Cara mengembalikan DP pelanggan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-059' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Retur Penjualan');
                                setActiveTab('pn-059');
                              }}
                            >
                              Cara mengembalikan DP pelanggan yang sudah lunas
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-060' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Retur Penjualan');
                                setActiveTab('pn-060');
                              }}
                            >
                              Cara mengembalikan sebagian barang penjualan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-061' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Retur Penjualan');
                                setActiveTab('pn-061');
                              }}
                            >
                              Cara mencatat retur penjualan jasa
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-062' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Retur Penjualan');
                                setActiveTab('pn-062');
                              }}
                            >
                              Cara retur penjualan saat barang tidak dikembalikan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-063' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Retur Penjualan');
                                setActiveTab('pn-063');
                              }}
                            >
                              Cara mengatasi error nomor seri tidak ditemukan di faktu
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-064' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Retur Penjualan');
                                setActiveTab('pn-064');
                              }}
                            >
                              Cara mengatur biaya barang retur penjualan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-065' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Retur Penjualan');
                                setActiveTab('pn-065');
                              }}
                            >
                              Cara retur penjualan tanpa faktur
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-066' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Retur Penjualan');
                                setActiveTab('pn-066');
                              }}
                            >
                              Cara mengatur nilai barang retur penjualan
                            </div>
                          { "Mengenal fitur retur penjualan" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Tukar Faktur' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Tukar Faktur');
                            toggleCategory('jual7');
                          }}
                        >
                          <span>Tukar Faktur</span>
                          <span className={`arrow ${openCategories.jual7 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.jual7 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'pn-067' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Tukar Faktur');
                                setActiveTab('pn-067');
                              }}
                            >
                              Cara mencatat penagihan piutang dengan tukar faktur
                            </div>
                          { "Cara mencatat penagihan piutang dengan tukar faktur" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Klaim Pelanggan' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Klaim Pelanggan');
                            toggleCategory('jual8');
                          }}
                        >
                          <span>Klaim Pelanggan</span>
                          <span className={`arrow ${openCategories.jual8 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.jual8 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'pn-068' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Klaim Pelanggan');
                                setActiveTab('pn-068');
                              }}
                            >
                              Cara mencatat klaim garansi pelanggan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-069' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Klaim Pelanggan');
                                setActiveTab('pn-069');
                              }}
                            >
                              Cara mengirim barang pengganti klaim garansi
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-070' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Klaim Pelanggan');
                                setActiveTab('pn-070');
                              }}
                            >
                              Cara mengatasi pesan error akun persediaan klaim
                            </div>
                          { "Cara mencatat klaim garansi pelanggan" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Pengepakan Barang' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Pengepakan Barang');
                            toggleCategory('jual9');
                          }}
                        >
                          <span>Pengepakan Barang</span>
                          <span className={`arrow ${openCategories.jual9 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.jual9 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'pn-071' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pengepakan Barang');
                                setActiveTab('pn-071');
                              }}
                            >
                              Cara membuat pengepakan barang
                            </div>
                          { "Cara membuat pengepakan barang" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Kategori Pelanggan' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Kategori Pelanggan');
                            toggleCategory('jual10');
                          }}
                        >
                          <span>Kategori Pelanggan</span>
                          <span className={`arrow ${openCategories.jual10 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.jual10 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'pn-072' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Kategori Pelanggan');
                                setActiveTab('pn-072');
                              }}
                            >
                              Cara mengelompokkan data pelanggan
                            </div>
                          { "Cara mengelompokkan data pelanggan" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Kategori Penjualan' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Kategori Penjualan');
                            toggleCategory('jual11');
                          }}
                        >
                          <span>Kategori Penjualan</span>
                          <span className={`arrow ${openCategories.jual11 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.jual11 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'pn-073' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Kategori Penjualan');
                                setActiveTab('pn-073');
                              }}
                            >
                              Cara membuat kategori penjualan
                            </div>
                          { "Cara membuat kategori penjualan" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Pelanggan' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Pelanggan');
                            toggleCategory('jual12');
                          }}
                        >
                          <span>Pelanggan</span>
                          <span className={`arrow ${openCategories.jual12 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.jual12 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'pn-074' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pelanggan');
                                setActiveTab('pn-074');
                              }}
                            >
                              Cara membuat data pelanggan baru
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-075' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pelanggan');
                                setActiveTab('pn-075');
                              }}
                            >
                              Nama Sales Saldo Awal
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-076' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pelanggan');
                                setActiveTab('pn-076');
                              }}
                            >
                              Cara mengisi saldo awal piutang multi mata uang
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-077' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pelanggan');
                                setActiveTab('pn-077');
                              }}
                            >
                              Cara mengisi nama sales di saldo awal piutang
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-078' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pelanggan');
                                setActiveTab('pn-078');
                              }}
                            >
                              Cara impor pelanggan dengan banyak akun piutang
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-079' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pelanggan');
                                setActiveTab('pn-079');
                              }}
                            >
                              Cara mengimpor alamat pengiriman pelanggan dari excel
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-080' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pelanggan');
                                setActiveTab('pn-080');
                              }}
                            >
                              Cara impor data pelanggan dari excel
                            </div>
                          { "Cara membuat data pelanggan baru" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Penyesuaian Harga atau Diskon' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Penyesuaian Harga atau Diskon');
                            toggleCategory('jual13');
                          }}
                        >
                          <span>Penyesuaian Harga atau Diskon</span>
                          <span className={`arrow ${openCategories.jual13 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.jual13 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'pn-081' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penyesuaian Harga atau Diskon');
                                setActiveTab('pn-081');
                              }}
                            >
                              Cara mengubah harga jual dan diskon produk
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-082' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penyesuaian Harga atau Diskon');
                                setActiveTab('pn-082');
                              }}
                            >
                              Cara mengubah harga dan diskon produk secara massal
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-083' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penyesuaian Harga atau Diskon');
                                setActiveTab('pn-083');
                              }}
                            >
                              Mengatasi error diskon barang dimasukkan lebih dari satu
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-084' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penyesuaian Harga atau Diskon');
                                setActiveTab('pn-084');
                              }}
                            >
                              Cara menghapus promo yang sudah tidak berlaku
                            </div>
                          { "Cara mengubah harga jual dan diskon produk" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Komisi Penjualan' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Komisi Penjualan');
                            toggleCategory('jual14');
                          }}
                        >
                          <span>Komisi Penjualan</span>
                          <span className={`arrow ${openCategories.jual14 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.jual14 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'pn-085' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Komisi Penjualan');
                                setActiveTab('pn-085');
                              }}
                            >
                              Membuat komisi sales berdasarkan penjualannya
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-086' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Komisi Penjualan');
                                setActiveTab('pn-086');
                              }}
                            >
                              Cara membagi komisi beberapa sales
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-087' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Komisi Penjualan');
                                setActiveTab('pn-087');
                              }}
                            >
                              Cara menghitung bonus sales per faktur
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-088' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Komisi Penjualan');
                                setActiveTab('pn-088');
                              }}
                            >
                              Cara menghitung komisi sales berdasarkan target penjuala
                            </div>
                          { "Membuat komisi sales berdasarkan penjualannya" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Target Penjualan' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Target Penjualan');
                            toggleCategory('jual15');
                          }}
                        >
                          <span>Target Penjualan</span>
                          <span className={`arrow ${openCategories.jual15 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.jual15 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'pn-089' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Target Penjualan');
                                setActiveTab('pn-089');
                              }}
                            >
                              Mengenal fitur target penjualan dan mengaktifkannya
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-090' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Target Penjualan');
                                setActiveTab('pn-090');
                              }}
                            >
                              Cara membuat target penjualan produk
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-091' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Target Penjualan');
                                setActiveTab('pn-091');
                              }}
                            >
                              Cara membuat target penjualan untuk tim sales
                            </div>
                          { "Mengenal fitur target penjualan dan mengaktifkannya" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'SmartLink E-Commerce' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('SmartLink E-Commerce');
                            toggleCategory('jual16');
                          }}
                        >
                          <span>SmartLink E-Commerce</span>
                          <span className={`arrow ${openCategories.jual16 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.jual16 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'pn-092' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('SmartLink E-Commerce');
                                setActiveTab('pn-092');
                              }}
                            >
                              Mengenal fitur smartlink e-commerce
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-093' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('SmartLink E-Commerce');
                                setActiveTab('pn-093');
                              }}
                            >
                              Cara setting smartLink Tokopedia
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-094' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('SmartLink E-Commerce');
                                setActiveTab('pn-094');
                              }}
                            >
                              Cara setting smartLink Shopee
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-095' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('SmartLink E-Commerce');
                                setActiveTab('pn-095');
                              }}
                            >
                              Cara setting smartLink Lazada
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-096' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('SmartLink E-Commerce');
                                setActiveTab('pn-096');
                              }}
                            >
                              Cara setting smartLink Blibli
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-097' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('SmartLink E-Commerce');
                                setActiveTab('pn-097');
                              }}
                            >
                              Cara setting smartLink TikTok Shop
                            </div>
                          { "Mengenal fitur smartlink e-commerce" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Checkin' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Checkin');
                            toggleCategory('jual17');
                          }}
                        >
                          <span>Checkin</span>
                          <span className={`arrow ${openCategories.jual17 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.jual17 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'pn-098' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Checkin');
                                setActiveTab('pn-098');
                              }}
                            >
                              Cara mengetahui sales sudah mengunjungi pelanggan
                            </div>
                          { "Cara mengetahui sales sudah mengunjungi pelanggan" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Trade Portal (Beta)' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Trade Portal (Beta)');
                            toggleCategory('jual18');
                          }}
                        >
                          <span>Trade Portal (Beta)</span>
                          <span className={`arrow ${openCategories.jual18 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.jual18 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'pn-099' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Trade Portal (Beta)');
                                setActiveTab('pn-099');
                              }}
                            >
                              Cara instal aplikasi Trade Portal Accurate Online
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-100' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Trade Portal (Beta)');
                                setActiveTab('pn-100');
                              }}
                            >
                              Cara login ke trade portal setelah menerima undangan age
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-101' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Trade Portal (Beta)');
                                setActiveTab('pn-101');
                              }}
                            >
                              Cara membuat katalog produk di Trade Portal
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-102' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Trade Portal (Beta)');
                                setActiveTab('pn-102');
                              }}
                            >
                              Cara membuat etalase Trade Portal
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-103' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Trade Portal (Beta)');
                                setActiveTab('pn-103');
                              }}
                            >
                              Cara membuat koleksi produk di Trade Portal
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-104' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Trade Portal (Beta)');
                                setActiveTab('pn-104');
                              }}
                            >
                              Cara mengundang agen atau reseller
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-105' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Trade Portal (Beta)');
                                setActiveTab('pn-105');
                              }}
                            >
                              Cara pesan barang di Trade Portal
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-106' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Trade Portal (Beta)');
                                setActiveTab('pn-106');
                              }}
                            >
                              Cara membuat pesanan tempo
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-107' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Trade Portal (Beta)');
                                setActiveTab('pn-107');
                              }}
                            >
                              Cara memproses pesanan dari Trade Portal
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-108' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Trade Portal (Beta)');
                                setActiveTab('pn-108');
                              }}
                            >
                              Cara membayar dan membatalkan pesanan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-109' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Trade Portal (Beta)');
                                setActiveTab('pn-109');
                              }}
                            >
                              Cara membatalkan pesanan yang sudah masuk
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-110' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Trade Portal (Beta)');
                                setActiveTab('pn-110');
                              }}
                            >
                              Cara membuat pengiriman pesanan dari Trade Portal
                            </div>
                          { "Cara instal aplikasi Trade Portal Accurate Online" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Artikel Tambahan' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Artikel Tambahan');
                            toggleCategory('jual19');
                          }}
                        >
                          <span>Artikel Tambahan</span>
                          <span className={`arrow ${openCategories.jual19 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.jual19 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'pn-111' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('pn-111');
                              }}
                            >
                              Cara mencatat penjualan gift voucher
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-112' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('pn-112');
                              }}
                            >
                              Cara membuat harga grosir berdasarkan kuantitas penjuala
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-113' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('pn-113');
                              }}
                            >
                              Cara mencatat uang muka yang dikenakan PPh 23
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-114' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('pn-114');
                              }}
                            >
                              Cara mencatat pelunasan faktur dengan mata uang yang ber
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-115' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('pn-115');
                              }}
                            >
                              Cara membuat diskon bertingkat
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-116' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('pn-116');
                              }}
                            >
                              Cara menggunakan retur faktur lunas untuk potong faktur 
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-117' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('pn-117');
                              }}
                            >
                              Cara mengatur tanggal kadaluarsa e-payment Xendit
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-118' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('pn-118');
                              }}
                            >
                              Cara memisahkan laporan penjualan per marketplace
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-119' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('pn-119');
                              }}
                            >
                              Cara mengatasi notifikasi harga tidak wajar
                            </div>
                            <div
                              className={`article-link ${activeTab === 'pn-120' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('pn-120');
                              }}
                            >
                              Cara mencatat pengembalian overpay dengan potongan admin
                            </div>
                          { "Cara mencatat penjualan gift voucher" }
                            </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="module-group">
                  <div 
                    className={`module-header ${currentModule === 'Persediaan' ? 'active-sub' : ''}`} 
                    onClick={() => {
                      toggleCategory('persediaan');
                      handleSelectModule('Persediaan');
                    }}
                  >
                    <span>Persediaan</span>
                    <span className={`arrow ${openCategories.persediaan ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                  </div>
                  {openCategories.persediaan && (
                    <div className="module-children">
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Permintaan Barang' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Permintaan Barang');
                            toggleCategory('sdp0');
                          }}
                        >
                          <span>Permintaan Barang</span>
                          <span className={`arrow ${openCategories.sdp0 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdp0 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'ps-001' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Permintaan Barang');
                                setActiveTab('ps-001');
                              }}
                            >
                              Cara membuat permintaan barang antar gudang
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-002' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Permintaan Barang');
                                setActiveTab('ps-002');
                              }}
                            >
                              Cara membuat permintaan kirim barang antar gudang
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-003' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Permintaan Barang');
                                setActiveTab('ps-003');
                              }}
                            >
                              Cara menampilkan perkiraan harga barang
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-004' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Permintaan Barang');
                                setActiveTab('ps-004');
                              }}
                            >
                              Cara menghapus banyak permintaan barang sekaligus
                            </div>
                          { "Cara membuat permintaan barang antar gudang" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Pemindahan Barang' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Pemindahan Barang');
                            toggleCategory('sdp1');
                          }}
                        >
                          <span>Pemindahan Barang</span>
                          <span className={`arrow ${openCategories.sdp1 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdp1 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'ps-005' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pemindahan Barang');
                                setActiveTab('ps-005');
                              }}
                            >
                              Cara memindahkan stok antar gudang
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-006' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pemindahan Barang');
                                setActiveTab('ps-006');
                              }}
                            >
                              Cara impor pemindahan barang antar gudang dari excel
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-007' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pemindahan Barang');
                                setActiveTab('ps-007');
                              }}
                            >
                              Cara memindahkan stok barang rusak ke gudang khusus
                            </div>
                          { "Cara memindahkan stok antar gudang" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Penyesuaian Persediaan' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Penyesuaian Persediaan');
                            toggleCategory('sdp2');
                          }}
                        >
                          <span>Penyesuaian Persediaan</span>
                          <span className={`arrow ${openCategories.sdp2 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdp2 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'ps-008' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penyesuaian Persediaan');
                                setActiveTab('ps-008');
                              }}
                            >
                              Cara mengubah nilai persediaan tanpa mengubah stok
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-009' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penyesuaian Persediaan');
                                setActiveTab('ps-009');
                              }}
                            >
                              Cara Mengatasi Error Akun Penyesuaian Persediaan
                            </div>
                          { "Cara mengubah nilai persediaan tanpa mengubah stok" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Pekerjaan Pesanan' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Pekerjaan Pesanan');
                            toggleCategory('sdp3');
                          }}
                        >
                          <span>Pekerjaan Pesanan</span>
                          <span className={`arrow ${openCategories.sdp3 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdp3 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'ps-010' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pekerjaan Pesanan');
                                setActiveTab('ps-010');
                              }}
                            >
                              Cara mencatat proses produksi barang
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-011' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pekerjaan Pesanan');
                                setActiveTab('ps-011');
                              }}
                            >
                              Solusi error alokasi biaya penyelesaian pesanan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-012' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pekerjaan Pesanan');
                                setActiveTab('ps-012');
                              }}
                            >
                              Penyebab dan cara mengatasi selisih biaya pekerjaan pesa
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-013' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pekerjaan Pesanan');
                                setActiveTab('ps-013');
                              }}
                            >
                              Cara mengatasi error akun biaya sama dengan akun persedi
                            </div>
                          { "Cara mencatat proses produksi barang" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Hasil Stok Opname' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Hasil Stok Opname');
                            toggleCategory('sdp4');
                          }}
                        >
                          <span>Hasil Stok Opname</span>
                          <span className={`arrow ${openCategories.sdp4 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdp4 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'ps-014' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Hasil Stok Opname');
                                setActiveTab('ps-014');
                              }}
                            >
                              Cara menginput stok hasil stok opname
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-015' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Hasil Stok Opname');
                                setActiveTab('ps-015');
                              }}
                            >
                              Cara menghapus transaksi stok opname
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-016' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Hasil Stok Opname');
                                setActiveTab('ps-016');
                              }}
                            >
                              Cara mengimpor hasil stok opname dari excel
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-017' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Hasil Stok Opname');
                                setActiveTab('ps-017');
                              }}
                            >
                              Penyebab stok opname tidak sama dengan barang dan jasa
                            </div>
                          { "Cara menginput stok hasil stok opname" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Penambahan Bahan Baku' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Penambahan Bahan Baku');
                            toggleCategory('sdp5');
                          }}
                        >
                          <span>Penambahan Bahan Baku</span>
                          <span className={`arrow ${openCategories.sdp5 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdp5 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'ps-018' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penambahan Bahan Baku');
                                setActiveTab('ps-018');
                              }}
                            >
                              Cara menambah stok bahan baku tanpa pembelian
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-019' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penambahan Bahan Baku');
                                setActiveTab('ps-019');
                              }}
                            >
                              Cara retur bahan baku saat produksi berlebih atau tidak 
                            </div>
                          { "Cara menambah stok bahan baku tanpa pembelian" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Barang dan Jasa' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Barang dan Jasa');
                            toggleCategory('sdp6');
                          }}
                        >
                          <span>Barang dan Jasa</span>
                          <span className={`arrow ${openCategories.sdp6 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdp6 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'ps-020' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Barang dan Jasa');
                                setActiveTab('ps-020');
                              }}
                            >
                              Pengertian fitur barang dan jasa
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-021' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Barang dan Jasa');
                                setActiveTab('ps-021');
                              }}
                            >
                              Mengatasi pesan error satuan pembelian diluar unit baran
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-022' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Barang dan Jasa');
                                setActiveTab('ps-022');
                              }}
                            >
                              Cara mengatur harga jual otomatis per satuan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-023' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Barang dan Jasa');
                                setActiveTab('ps-023');
                              }}
                            >
                              Cara mencari data dengan dua kata kunci
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-024' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Barang dan Jasa');
                                setActiveTab('ps-024');
                              }}
                            >
                              Cara mengimpor barang grup di Accurate Online dari Excel
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-025' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Barang dan Jasa');
                                setActiveTab('ps-025');
                              }}
                            >
                              Cara membuat barang varian
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-026' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Barang dan Jasa');
                                setActiveTab('ps-026');
                              }}
                            >
                              Impor barang dengan saldo awal per gudang dan cost berbe
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-027' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Barang dan Jasa');
                                setActiveTab('ps-027');
                              }}
                            >
                              Cara mengimpor nomor seri atau batch barang dari excel
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-028' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Barang dan Jasa');
                                setActiveTab('ps-028');
                              }}
                            >
                              Cara mengatasi error tidak dapat menonaktifkan nomor ser
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-029' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Barang dan Jasa');
                                setActiveTab('ps-029');
                              }}
                            >
                              Cara mengganti barang saat stok habis
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-030' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Barang dan Jasa');
                                setActiveTab('ps-030');
                              }}
                            >
                              Cara impor data barang & jasa dari excel
                            </div>
                          { "Pengertian fitur barang dan jasa" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Gudang' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Gudang');
                            toggleCategory('sdp7');
                          }}
                        >
                          <span>Gudang</span>
                          <span className={`arrow ${openCategories.sdp7 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdp7 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'ps-031' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Gudang');
                                setActiveTab('ps-031');
                              }}
                            >
                              Cara membuat gudang baru
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-032' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Gudang');
                                setActiveTab('ps-032');
                              }}
                            >
                              Cara membuat gudang barang rusak
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-033' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Gudang');
                                setActiveTab('ps-033');
                              }}
                            >
                              Cara mencatat barang rusak atau hilang saat kirim antar 
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-034' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Gudang');
                                setActiveTab('ps-034');
                              }}
                            >
                              Cara kerja pemilihan gudang secara otomatis
                            </div>
                          { "Cara membuat gudang baru" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Satuan barang' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Satuan barang');
                            toggleCategory('sdp8');
                          }}
                        >
                          <span>Satuan barang</span>
                          <span className={`arrow ${openCategories.sdp8 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdp8 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'ps-035' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Satuan barang');
                                setActiveTab('ps-035');
                              }}
                            >
                              Cara membuat satuan dan multi satuan barang
                            </div>
                          { "Cara membuat satuan dan multi satuan barang" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Kategori Barang' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Kategori Barang');
                            toggleCategory('sdp9');
                          }}
                        >
                          <span>Kategori Barang</span>
                          <span className={`arrow ${openCategories.sdp9 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdp9 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'ps-036' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Kategori Barang');
                                setActiveTab('ps-036');
                              }}
                            >
                              Cara mengelompokkan barang dengan fitur kategori barang
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-037' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Kategori Barang');
                                setActiveTab('ps-037');
                              }}
                            >
                              Cara menginput banyak kategori barang dari Excel
                            </div>
                          { "Cara mengelompokkan barang dengan fitur kategori barang" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Merek Barang' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Merek Barang');
                            toggleCategory('sdp10');
                          }}
                        >
                          <span>Merek Barang</span>
                          <span className={`arrow ${openCategories.sdp10 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdp10 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'ps-038' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Merek Barang');
                                setActiveTab('ps-038');
                              }}
                            >
                              Cara menambahkan brand produk
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-039' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Merek Barang');
                                setActiveTab('ps-039');
                              }}
                            >
                              Cara menginput merek atau brand pada produk
                            </div>
                          { "Cara menambahkan brand produk" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Pemenuhan Pesanan' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Pemenuhan Pesanan');
                            toggleCategory('sdp11');
                          }}
                        >
                          <span>Pemenuhan Pesanan</span>
                          <span className={`arrow ${openCategories.sdp11 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdp11 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'ps-040' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pemenuhan Pesanan');
                                setActiveTab('ps-040');
                              }}
                            >
                              Cara membuat pemenuhan pesanan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-041' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pemenuhan Pesanan');
                                setActiveTab('ps-041');
                              }}
                            >
                              Cara mencatat pengiriman barang ke pelanggan
                            </div>
                          { "Cara membuat pemenuhan pesanan" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Barang Per Gudang' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Barang Per Gudang');
                            toggleCategory('sdp12');
                          }}
                        >
                          <span>Barang Per Gudang</span>
                          <span className={`arrow ${openCategories.sdp12 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdp12 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'ps-042' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Barang Per Gudang');
                                setActiveTab('ps-042');
                              }}
                            >
                              Cara cek stok barang di setiap gudang
                            </div>
                          { "Cara cek stok barang di setiap gudang" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Pengisian Nomor Seri' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Pengisian Nomor Seri');
                            toggleCategory('sdp13');
                          }}
                        >
                          <span>Pengisian Nomor Seri</span>
                          <span className={`arrow ${openCategories.sdp13 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdp13 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'ps-043' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pengisian Nomor Seri');
                                setActiveTab('ps-043');
                              }}
                            >
                              Cara mengisi nomor seri barang
                            </div>
                          { "Cara mengisi nomor seri barang" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Penyelesaian Pesanan' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Penyelesaian Pesanan');
                            toggleCategory('sdp14');
                          }}
                        >
                          <span>Penyelesaian Pesanan</span>
                          <span className={`arrow ${openCategories.sdp14 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdp14 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'ps-044' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penyelesaian Pesanan');
                                setActiveTab('ps-044');
                              }}
                            >
                              Cara membuat penyelesaian pesanan dari produksi
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-045' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penyelesaian Pesanan');
                                setActiveTab('ps-045');
                              }}
                            >
                              Cara menambah stok barang jadi dari produksi
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-046' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penyelesaian Pesanan');
                                setActiveTab('ps-046');
                              }}
                            >
                              Cara menyelesaikan pekerjaan pesanan ke akun
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-047' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penyelesaian Pesanan');
                                setActiveTab('ps-047');
                              }}
                            >
                              Cara mencatat penyelesaian pesanan multi produk
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-048' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penyelesaian Pesanan');
                                setActiveTab('ps-048');
                              }}
                            >
                              Cara mengimpor penyelesaian pesanan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-049' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penyelesaian Pesanan');
                                setActiveTab('ps-049');
                              }}
                            >
                              Cara mengatasi error bahan baku
                            </div>
                          { "Cara membuat penyelesaian pesanan dari produksi" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Perintah Stok Opname' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Perintah Stok Opname');
                            toggleCategory('sdp15');
                          }}
                        >
                          <span>Perintah Stok Opname</span>
                          <span className={`arrow ${openCategories.sdp15 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdp15 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'ps-050' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Perintah Stok Opname');
                                setActiveTab('ps-050');
                              }}
                            >
                              Cara menghitung dan menyesuaikan stok barang
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-051' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Perintah Stok Opname');
                                setActiveTab('ps-051');
                              }}
                            >
                              Mengatasi error tidak bisa hapus perintah stok opname
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-052' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Perintah Stok Opname');
                                setActiveTab('ps-052');
                              }}
                            >
                              Cara mengatasi error selisih stok
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-053' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Perintah Stok Opname');
                                setActiveTab('ps-053');
                              }}
                            >
                              Penyebab selisih stok opname
                            </div>
                          { "Cara menghitung dan menyesuaikan stok barang" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Barang Stok Minimum' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Barang Stok Minimum');
                            toggleCategory('sdp16');
                          }}
                        >
                          <span>Barang Stok Minimum</span>
                          <span className={`arrow ${openCategories.sdp16 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdp16 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'ps-054' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Barang Stok Minimum');
                                setActiveTab('ps-054');
                              }}
                            >
                              Cara mengatur stok minimum barang
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-055' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Barang Stok Minimum');
                                setActiveTab('ps-055');
                              }}
                            >
                              Cara membuat pesanan pembelian dari stok minimum
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-056' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Barang Stok Minimum');
                                setActiveTab('ps-056');
                              }}
                            >
                              Cara membuat permintaan barang dari stok minimum
                            </div>
                          { "Cara mengatur stok minimum barang" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Artikel Tambahan' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Artikel Tambahan');
                            toggleCategory('sdp17');
                          }}
                        >
                          <span>Artikel Tambahan</span>
                          <span className={`arrow ${openCategories.sdp17 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdp17 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'ps-057' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('ps-057');
                              }}
                            >
                              Cara menjadikan aset tetap sebagai stok barang
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-058' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('ps-058');
                              }}
                            >
                              Cara membeli barang saat stok mau habis
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-059' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('ps-059');
                              }}
                            >
                              Cara mencatat produksi vendor atau maklun
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-060' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('ps-060');
                              }}
                            >
                              Cara mencatat barang sampel dari gudang
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-061' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('ps-061');
                              }}
                            >
                              Cara menghitung FIFO dan Average di Accurate Online
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-062' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('ps-062');
                              }}
                            >
                              Cara mencatat barang yang hilang saat pengiriman
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-063' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('ps-063');
                              }}
                            >
                              Cara menghitung stok yang minus dengan metode average
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-064' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('ps-064');
                              }}
                            >
                              Cara menginput saldo awal delivery order
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-065' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('ps-065');
                              }}
                            >
                              Solusi error tidak dapat menghapus penyesuaian persediaa
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-066' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('ps-066');
                              }}
                            >
                              Cara mengatasi perintah stok opname tidak muncul
                            </div>
                            <div
                              className={`article-link ${activeTab === 'ps-067' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('ps-067');
                              }}
                            >
                              Cara mengatasi error pekerjaan pesanan tidak dapat diuba
                            </div>
                          { "Cara menjadikan aset tetap sebagai stok barang" }
                            </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="module-group">
                  <div 
                    className={`module-header ${currentModule === 'Asset Tetap' ? 'active-sub' : ''}`} 
                    onClick={() => {
                      toggleCategory('assettetap');
                      handleSelectModule('Asset Tetap');
                    }}
                  >
                    <span>Asset Tetap</span>
                    <span className={`arrow ${openCategories.assettetap ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                  </div>
                  {openCategories.assettetap && (
                    <div className="module-children">
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Aset Tetap' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Aset Tetap');
                            toggleCategory('sda0');
                          }}
                        >
                          <span>Aset Tetap</span>
                          <span className={`arrow ${openCategories.sda0 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sda0 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'at-001' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Aset Tetap');
                                setActiveTab('at-001');
                              }}
                            >
                              Cara mencatat aset perusahaan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'at-002' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Aset Tetap');
                                setActiveTab('at-002');
                              }}
                            >
                              Cara mengimpor aset tetap dari excel
                            </div>
                            <div
                              className={`article-link ${activeTab === 'at-003' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Aset Tetap');
                                setActiveTab('at-003');
                              }}
                            >
                              Cara mencatat pembelian aset tetap melalui pembayaran
                            </div>
                            <div
                              className={`article-link ${activeTab === 'at-004' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Aset Tetap');
                                setActiveTab('at-004');
                              }}
                            >
                              Cara mencatat pembelian aset perusahaan yang belum dibay
                            </div>
                            <div
                              className={`article-link ${activeTab === 'at-005' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Aset Tetap');
                                setActiveTab('at-005');
                              }}
                            >
                              Cara mencatat pembelian aset tetap secara tunai
                            </div>
                            <div
                              className={`article-link ${activeTab === 'at-006' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Aset Tetap');
                                setActiveTab('at-006');
                              }}
                            >
                              Cara menghapus aset tetap
                            </div>
                            <div
                              className={`article-link ${activeTab === 'at-007' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Aset Tetap');
                                setActiveTab('at-007');
                              }}
                            >
                              Cara mencatat pembelian aset tetap dengan biaya tambahan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'at-008' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Aset Tetap');
                                setActiveTab('at-008');
                              }}
                            >
                              Cara mengatasi penyusutan aset yang tidak jalan
                            </div>
                          { "Cara mencatat aset perusahaan" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Kategori Aset Tetap' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Kategori Aset Tetap');
                            toggleCategory('sda1');
                          }}
                        >
                          <span>Kategori Aset Tetap</span>
                          <span className={`arrow ${openCategories.sda1 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sda1 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'at-009' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Kategori Aset Tetap');
                                setActiveTab('at-009');
                              }}
                            >
                              Cara mengelompokkan aset tetap
                            </div>
                          { "Cara mengelompokkan aset tetap" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Kategori Aset Tetap Pajak' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Kategori Aset Tetap Pajak');
                            toggleCategory('sda2');
                          }}
                        >
                          <span>Kategori Aset Tetap Pajak</span>
                          <span className={`arrow ${openCategories.sda2 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sda2 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'at-010' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Kategori Aset Tetap Pajak');
                                setActiveTab('at-010');
                              }}
                            >
                              Cara membuat kategori aset tetap pajak
                            </div>
                            <div
                              className={`article-link ${activeTab === 'at-011' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Kategori Aset Tetap Pajak');
                                setActiveTab('at-011');
                              }}
                            >
                              Cara melihat laporan penyusutan aset pajak
                            </div>
                          { "Cara membuat kategori aset tetap pajak" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Perubahan Aset Tetap' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Perubahan Aset Tetap');
                            toggleCategory('sda3');
                          }}
                        >
                          <span>Perubahan Aset Tetap</span>
                          <span className={`arrow ${openCategories.sda3 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sda3 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'at-012' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Perubahan Aset Tetap');
                                setActiveTab('at-012');
                              }}
                            >
                              Fungsi dan manfaat Fitur Perubahan Aset Tetap
                            </div>
                            <div
                              className={`article-link ${activeTab === 'at-013' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Perubahan Aset Tetap');
                                setActiveTab('at-013');
                              }}
                            >
                              Cara mengubah data aset tetap
                            </div>
                            <div
                              className={`article-link ${activeTab === 'at-014' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Perubahan Aset Tetap');
                                setActiveTab('at-014');
                              }}
                            >
                              Cara mengoreksi nilai aset tetap
                            </div>
                          { "Fungsi dan manfaat Fitur Perubahan Aset Tetap" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Disposisi Aset Tetap' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Disposisi Aset Tetap');
                            toggleCategory('sda4');
                          }}
                        >
                          <span>Disposisi Aset Tetap</span>
                          <span className={`arrow ${openCategories.sda4 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sda4 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'at-015' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Disposisi Aset Tetap');
                                setActiveTab('at-015');
                              }}
                            >
                              Cara menghapus aset tetap
                            </div>
                            <div
                              className={`article-link ${activeTab === 'at-016' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Disposisi Aset Tetap');
                                setActiveTab('at-016');
                              }}
                            >
                              Cara mengaktifkan kembali aset tetap
                            </div>
                          { "Cara menghapus aset tetap" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Pindah Aset Tetap' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Pindah Aset Tetap');
                            toggleCategory('sda5');
                          }}
                        >
                          <span>Pindah Aset Tetap</span>
                          <span className={`arrow ${openCategories.sda5 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sda5 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'at-017' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pindah Aset Tetap');
                                setActiveTab('at-017');
                              }}
                            >
                              Cara memindahkan aset tetap
                            </div>
                          { "Cara memindahkan aset tetap" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Aset Per Lokasi' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Aset Per Lokasi');
                            toggleCategory('sda6');
                          }}
                        >
                          <span>Aset Per Lokasi</span>
                          <span className={`arrow ${openCategories.sda6 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sda6 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'at-018' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Aset Per Lokasi');
                                setActiveTab('at-018');
                              }}
                            >
                              Cara melihat aset tetap berdasarkan lokasi
                            </div>
                          { "Cara melihat aset tetap berdasarkan lokasi" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Artikel Tambahan' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Artikel Tambahan');
                            toggleCategory('sda7');
                          }}
                        >
                          <span>Artikel Tambahan</span>
                          <span className={`arrow ${openCategories.sda7 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sda7 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'at-019' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('at-019');
                              }}
                            >
                              Cara mengubah persediaan menjadi aset tetap
                            </div>
                            <div
                              className={`article-link ${activeTab === 'at-020' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('at-020');
                              }}
                            >
                              Cara mencatat sewa gedung dibayar dimuka
                            </div>
                            <div
                              className={`article-link ${activeTab === 'at-021' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('at-021');
                              }}
                            >
                              Cara biaya membangun gedung menjadi aset
                            </div>
                          { "Cara mengubah persediaan menjadi aset tetap" }
                            </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="module-group">
                  <div 
                    className={`module-header ${currentModule === 'Manufaktur' ? 'active-sub' : ''}`} 
                    onClick={() => {
                      toggleCategory('manufaktur');
                      handleSelectModule('Manufaktur');
                    }}
                  >
                    <span>Manufaktur</span>
                    <span className={`arrow ${openCategories.manufaktur ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                  </div>
                  {openCategories.manufaktur && (
                    <div className="module-children">
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Onboarding Manufaktur' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Onboarding Manufaktur');
                            toggleCategory('sdm0');
                          }}
                        >
                          <span>Onboarding Manufaktur</span>
                          <span className={`arrow ${openCategories.sdm0 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdm0 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'mf-001' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Onboarding Manufaktur');
                                setActiveTab('mf-001');
                              }}
                            >
                              Cara mengaktifkan fitur manufaktur
                            </div>
                          { "Cara mengaktifkan fitur manufaktur" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Standar Biaya Produksi' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Standar Biaya Produksi');
                            toggleCategory('sdm1');
                          }}
                        >
                          <span>Standar Biaya Produksi</span>
                          <span className={`arrow ${openCategories.sdm1 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdm1 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'mf-002' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Standar Biaya Produksi');
                                setActiveTab('mf-002');
                              }}
                            >
                              Cara menentukan HPP produksi
                            </div>
                            <div
                              className={`article-link ${activeTab === 'mf-003' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Standar Biaya Produksi');
                                setActiveTab('mf-003');
                              }}
                            >
                              Cara mengaktifkan produksi tanpa bahan baku
                            </div>
                            <div
                              className={`article-link ${activeTab === 'mf-004' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Standar Biaya Produksi');
                                setActiveTab('mf-004');
                              }}
                            >
                              Cara upload daftar harga bahan baku
                            </div>
                          { "Cara menentukan HPP produksi" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Formula Produksi' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Formula Produksi');
                            toggleCategory('sdm2');
                          }}
                        >
                          <span>Formula Produksi</span>
                          <span className={`arrow ${openCategories.sdm2 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdm2 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'mf-005' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Formula Produksi');
                                setActiveTab('mf-005');
                              }}
                            >
                              Cara menentukan bahan baku produksi
                            </div>
                            <div
                              className={`article-link ${activeTab === 'mf-006' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Formula Produksi');
                                setActiveTab('mf-006');
                              }}
                            >
                              Cara mencatat produksi dengan multi tahapan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'mf-007' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Formula Produksi');
                                setActiveTab('mf-007');
                              }}
                            >
                              Cara mengatasi error harga standar harus lebih besar dar
                            </div>
                            <div
                              className={`article-link ${activeTab === 'mf-008' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Formula Produksi');
                                setActiveTab('mf-008');
                              }}
                            >
                              Cara mengatasi error kualitas produk kedua
                            </div>
                          { "Cara menentukan bahan baku produksi" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Rencana Produksi' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Rencana Produksi');
                            toggleCategory('sdm3');
                          }}
                        >
                          <span>Rencana Produksi</span>
                          <span className={`arrow ${openCategories.sdm3 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdm3 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'mf-009' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Rencana Produksi');
                                setActiveTab('mf-009');
                              }}
                            >
                              Cara menyusun rencana produksi
                            </div>
                            <div
                              className={`article-link ${activeTab === 'mf-010' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Rencana Produksi');
                                setActiveTab('mf-010');
                              }}
                            >
                              Cara produksi barang sesuai pesanan customer
                            </div>
                          { "Cara menyusun rencana produksi" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Perintah Kerja' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Perintah Kerja');
                            toggleCategory('sdm4');
                          }}
                        >
                          <span>Perintah Kerja</span>
                          <span className={`arrow ${openCategories.sdm4 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdm4 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'mf-011' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Perintah Kerja');
                                setActiveTab('mf-011');
                              }}
                            >
                              Cara mencatat produksi barang
                            </div>
                            <div
                              className={`article-link ${activeTab === 'mf-012' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Perintah Kerja');
                                setActiveTab('mf-012');
                              }}
                            >
                              Cara mengatur proses produksi bertahap
                            </div>
                            <div
                              className={`article-link ${activeTab === 'mf-013' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Perintah Kerja');
                                setActiveTab('mf-013');
                              }}
                            >
                              Cara menghitung progress produksi
                            </div>
                            <div
                              className={`article-link ${activeTab === 'mf-014' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Perintah Kerja');
                                setActiveTab('mf-014');
                              }}
                            >
                              Cara melihat proses akhir bulan pada laporan produksi
                            </div>
                            <div
                              className={`article-link ${activeTab === 'mf-015' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Perintah Kerja');
                                setActiveTab('mf-015');
                              }}
                            >
                              Cara membuat perintah kerja dari rencana produksi
                            </div>
                            <div
                              className={`article-link ${activeTab === 'mf-016' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Perintah Kerja');
                                setActiveTab('mf-016');
                              }}
                            >
                              Cara menutup perintah kerja yang belum selesai
                            </div>
                          { "Cara mencatat produksi barang" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Pengambilan Bahan Baku' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Pengambilan Bahan Baku');
                            toggleCategory('sdm5');
                          }}
                        >
                          <span>Pengambilan Bahan Baku</span>
                          <span className={`arrow ${openCategories.sdm5 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdm5 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'mf-017' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pengambilan Bahan Baku');
                                setActiveTab('mf-017');
                              }}
                            >
                              Cara mencatat pengambilan bahan baku
                            </div>
                            <div
                              className={`article-link ${activeTab === 'mf-018' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pengambilan Bahan Baku');
                                setActiveTab('mf-018');
                              }}
                            >
                              Cara mengeluarkan bahan baku untuk produksi
                            </div>
                            <div
                              className={`article-link ${activeTab === 'mf-019' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pengambilan Bahan Baku');
                                setActiveTab('mf-019');
                              }}
                            >
                              Mengatasi Error Perintah Kerja Belum Pengambilan Bahan B
                            </div>
                            <div
                              className={`article-link ${activeTab === 'mf-020' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pengambilan Bahan Baku');
                                setActiveTab('mf-020');
                              }}
                            >
                              Cara impor bahan baku perintah kerja dari excel
                            </div>
                            <div
                              className={`article-link ${activeTab === 'mf-021' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pengambilan Bahan Baku');
                                setActiveTab('mf-021');
                              }}
                            >
                              Cara membatasi pengambilan bahan baku
                            </div>
                            <div
                              className={`article-link ${activeTab === 'mf-022' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pengambilan Bahan Baku');
                                setActiveTab('mf-022');
                              }}
                            >
                              Cara mengatasi error akun biaya sama dengan akun persedi
                            </div>
                          { "Cara mencatat pengambilan bahan baku" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Persiapan Bahan Baku' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Persiapan Bahan Baku');
                            toggleCategory('sdm6');
                          }}
                        >
                          <span>Persiapan Bahan Baku</span>
                          <span className={`arrow ${openCategories.sdm6 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdm6 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'mf-023' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Persiapan Bahan Baku');
                                setActiveTab('mf-023');
                              }}
                            >
                              Cara membuat persiapan bahan baku
                            </div>
                          { "Cara membuat persiapan bahan baku" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Tahapan Proses' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Tahapan Proses');
                            toggleCategory('sdm7');
                          }}
                        >
                          <span>Tahapan Proses</span>
                          <span className={`arrow ${openCategories.sdm7 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdm7 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'mf-024' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Tahapan Proses');
                                setActiveTab('mf-024');
                              }}
                            >
                              Cara mencatat proses produksi
                            </div>
                          { "Cara mencatat proses produksi" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Penyelesaian Barang Jadi' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Penyelesaian Barang Jadi');
                            toggleCategory('sdm8');
                          }}
                        >
                          <span>Penyelesaian Barang Jadi</span>
                          <span className={`arrow ${openCategories.sdm8 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdm8 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'mf-025' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penyelesaian Barang Jadi');
                                setActiveTab('mf-025');
                              }}
                            >
                              Cara mencatat hasil produksi
                            </div>
                            <div
                              className={`article-link ${activeTab === 'mf-026' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penyelesaian Barang Jadi');
                                setActiveTab('mf-026');
                              }}
                            >
                              Cara membatasi user proses produksi
                            </div>
                          { "Cara mencatat hasil produksi" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Alokasi Biaya Produksi' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Alokasi Biaya Produksi');
                            toggleCategory('sdm9');
                          }}
                        >
                          <span>Alokasi Biaya Produksi</span>
                          <span className={`arrow ${openCategories.sdm9 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdm9 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'mf-027' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Alokasi Biaya Produksi');
                                setActiveTab('mf-027');
                              }}
                            >
                              Cara memasukkan biaya produksi
                            </div>
                            <div
                              className={`article-link ${activeTab === 'mf-028' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Alokasi Biaya Produksi');
                                setActiveTab('mf-028');
                              }}
                            >
                              Cara mengatasi error alokasi biaya produksi sudah ada
                            </div>
                          { "Cara memasukkan biaya produksi" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Jadwal Produksi' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Jadwal Produksi');
                            toggleCategory('sdm10');
                          }}
                        >
                          <span>Jadwal Produksi</span>
                          <span className={`arrow ${openCategories.sdm10 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdm10 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'mf-029' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Jadwal Produksi');
                                setActiveTab('mf-029');
                              }}
                            >
                              Cara melihat jadwal produksi
                            </div>
                          { "Cara melihat jadwal produksi" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Pemenuhan Bahan Baku' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Pemenuhan Bahan Baku');
                            toggleCategory('sdm11');
                          }}
                        >
                          <span>Pemenuhan Bahan Baku</span>
                          <span className={`arrow ${openCategories.sdm11 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdm11 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'mf-030' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pemenuhan Bahan Baku');
                                setActiveTab('mf-030');
                              }}
                            >
                              Cara mengecek ketersediaan bahan baku produksi
                            </div>
                            <div
                              className={`article-link ${activeTab === 'mf-031' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pemenuhan Bahan Baku');
                                setActiveTab('mf-031');
                              }}
                            >
                              Cara membuat pesanan pembelian bahan baku
                            </div>
                          { "Cara mengecek ketersediaan bahan baku produksi" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Monitor Perintah Kerja' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Monitor Perintah Kerja');
                            toggleCategory('sdm12');
                          }}
                        >
                          <span>Monitor Perintah Kerja</span>
                          <span className={`arrow ${openCategories.sdm12 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdm12 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'mf-032' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Monitor Perintah Kerja');
                                setActiveTab('mf-032');
                              }}
                            >
                              Cara cek progres produksi
                            </div>
                          { "Cara cek progres produksi" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Histori Perintah Kerja' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Histori Perintah Kerja');
                            toggleCategory('sdm13');
                          }}
                        >
                          <span>Histori Perintah Kerja</span>
                          <span className={`arrow ${openCategories.sdm13 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdm13 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'mf-033' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Histori Perintah Kerja');
                                setActiveTab('mf-033');
                              }}
                            >
                              Cara melihat riwayat produksi barang
                            </div>
                          { "Cara melihat riwayat produksi barang" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Tahapan Produksi' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Tahapan Produksi');
                            toggleCategory('sdm14');
                          }}
                        >
                          <span>Tahapan Produksi</span>
                          <span className={`arrow ${openCategories.sdm14 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdm14 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'mf-034' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Tahapan Produksi');
                                setActiveTab('mf-034');
                              }}
                            >
                              Cara membuat proses produksi bertahap
                            </div>
                          { "Cara membuat proses produksi bertahap" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Penanggung Jawab' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Penanggung Jawab');
                            toggleCategory('sdm15');
                          }}
                        >
                          <span>Penanggung Jawab</span>
                          <span className={`arrow ${openCategories.sdm15 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdm15 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'mf-035' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penanggung Jawab');
                                setActiveTab('mf-035');
                              }}
                            >
                              Cara menambahkan penanggung jawab produksi
                            </div>
                          { "Cara menambahkan penanggung jawab produksi" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Subkon Biaya Produksi' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Subkon Biaya Produksi');
                            toggleCategory('sdm16');
                          }}
                        >
                          <span>Subkon Biaya Produksi</span>
                          <span className={`arrow ${openCategories.sdm16 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdm16 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'mf-036' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Subkon Biaya Produksi');
                                setActiveTab('mf-036');
                              }}
                            >
                              Cara mencatat biaya produksi dari vendor
                            </div>
                          { "Cara mencatat biaya produksi dari vendor" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Perhitungan Nilai Variance' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Perhitungan Nilai Variance');
                            toggleCategory('sdm17');
                          }}
                        >
                          <span>Perhitungan Nilai Variance</span>
                          <span className={`arrow ${openCategories.sdm17 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdm17 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'mf-037' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Perhitungan Nilai Variance');
                                setActiveTab('mf-037');
                              }}
                            >
                              Cara menghitung nilai variance biaya produksi
                            </div>
                            <div
                              className={`article-link ${activeTab === 'mf-038' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Perhitungan Nilai Variance');
                                setActiveTab('mf-038');
                              }}
                            >
                              Cara menghitung selisih biaya produksi
                            </div>
                            <div
                              className={`article-link ${activeTab === 'mf-039' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Perhitungan Nilai Variance');
                                setActiveTab('mf-039');
                              }}
                            >
                              Menghitung variance yang tidak dialokasikan ke produk
                            </div>
                          { "Cara menghitung nilai variance biaya produksi" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Artikel Tambahan' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Artikel Tambahan');
                            toggleCategory('sdm18');
                          }}
                        >
                          <span>Artikel Tambahan</span>
                          <span className={`arrow ${openCategories.sdm18 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdm18 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'mf-040' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('mf-040');
                              }}
                            >
                              Cara Membaca Laporan HPP Produksi
                            </div>
                          { "Cara Membaca Laporan HPP Produksi" }
                            </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="module-group">
                  <div 
                    className={`module-header ${currentModule === 'Proyek Kontraktor' ? 'active-sub' : ''}`} 
                    onClick={() => {
                      toggleCategory('kontraktor');
                      handleSelectModule('Proyek Kontraktor');
                    }}
                  >
                    <span>Proyek Kontraktor</span>
                    <span className={`arrow ${openCategories.kontraktor ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                  </div>
                  {openCategories.kontraktor && (
                    <div className="module-children">
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Rencana Anggaran' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Rencana Anggaran');
                            toggleCategory('sdk0');
                          }}
                        >
                          <span>Rencana Anggaran</span>
                          <span className={`arrow ${openCategories.sdk0 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdk0 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'kt-001' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Rencana Anggaran');
                                setActiveTab('kt-001');
                              }}
                            >
                              Cara membuat rencana anggaran
                            </div>
                          { "Cara membuat rencana anggaran" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Bahan Baku Terpakai' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Bahan Baku Terpakai');
                            toggleCategory('sdk1');
                          }}
                        >
                          <span>Bahan Baku Terpakai</span>
                          <span className={`arrow ${openCategories.sdk1 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdk1 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'kt-002' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Bahan Baku Terpakai');
                                setActiveTab('kt-002');
                              }}
                            >
                              Cara menggunakan fitur bahan baku terpakai
                            </div>
                          { "Cara menggunakan fitur bahan baku terpakai" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Survey Proyek' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Survey Proyek');
                            toggleCategory('sdk2');
                          }}
                        >
                          <span>Survey Proyek</span>
                          <span className={`arrow ${openCategories.sdk2 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdk2 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'kt-003' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Survey Proyek');
                                setActiveTab('kt-003');
                              }}
                            >
                              Cara membuat survey proyek
                            </div>
                          { "Cara membuat survey proyek" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Penyelesaian Proyek' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Penyelesaian Proyek');
                            toggleCategory('sdk3');
                          }}
                        >
                          <span>Penyelesaian Proyek</span>
                          <span className={`arrow ${openCategories.sdk3 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdk3 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'kt-004' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penyelesaian Proyek');
                                setActiveTab('kt-004');
                              }}
                            >
                              Cara membuat penyelesaian proyek
                            </div>
                          { "Cara membuat penyelesaian proyek" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Monitoring Kontraktor' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Monitoring Kontraktor');
                            toggleCategory('sdk4');
                          }}
                        >
                          <span>Monitoring Kontraktor</span>
                          <span className={`arrow ${openCategories.sdk4 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdk4 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'kt-005' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Monitoring Kontraktor');
                                setActiveTab('kt-005');
                              }}
                            >
                              Cara melihat monitoring kontraktor
                            </div>
                          { "Cara melihat monitoring kontraktor" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Timeline Kontraktor' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Timeline Kontraktor');
                            toggleCategory('sdk5');
                          }}
                        >
                          <span>Timeline Kontraktor</span>
                          <span className={`arrow ${openCategories.sdk5 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdk5 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'kt-006' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Timeline Kontraktor');
                                setActiveTab('kt-006');
                              }}
                            >
                              Cara melihat timeline kontraktor
                            </div>
                          { "Cara melihat timeline kontraktor" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Alokasi Bahan Proyek' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Alokasi Bahan Proyek');
                            toggleCategory('sdk6');
                          }}
                        >
                          <span>Alokasi Bahan Proyek</span>
                          <span className={`arrow ${openCategories.sdk6 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdk6 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'kt-007' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Alokasi Bahan Proyek');
                                setActiveTab('kt-007');
                              }}
                            >
                              Cara mencatat alokasi bahan proyek
                            </div>
                          { "Cara mencatat alokasi bahan proyek" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Artikel Tambahan' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Artikel Tambahan');
                            toggleCategory('sdk7');
                          }}
                        >
                          <span>Artikel Tambahan</span>
                          <span className={`arrow ${openCategories.sdk7 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sdk7 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'kt-008' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('kt-008');
                              }}
                            >
                              Cara membuat proyek kontraktor
                            </div>
                            <div
                              className={`article-link ${activeTab === 'kt-009' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('kt-009');
                              }}
                            >
                              Cara install dan setup Proyek Kontraktor
                            </div>
                            <div
                              className={`article-link ${activeTab === 'kt-010' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('kt-010');
                              }}
                            >
                              Cara melihat laporan proyek kontraktor
                            </div>
                            <div
                              className={`article-link ${activeTab === 'kt-011' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Artikel Tambahan');
                                setActiveTab('kt-011');
                              }}
                            >
                              Cara membuat formula pekerjaan dan biaya proyek
                            </div>
                          { "Cara membuat proyek kontraktor" }
                            </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="module-group">
                  <div 
                    className={`module-header ${currentModule === 'Smartlink Tax' ? 'active-sub' : ''}`} 
                    onClick={() => {
                      toggleCategory('smartlink');
                      handleSelectModule('Smartlink Tax');
                    }}
                  >
                    <span>Smartlink Tax</span>
                    <span className={`arrow ${openCategories.smartlink ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                  </div>
                  {openCategories.smartlink && (
                    <div className="module-children">
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'E-Faktur Legacy' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('E-Faktur Legacy');
                            toggleCategory('sl0');
                          }}
                        >
                          <span>E-Faktur Legacy</span>
                          <span className={`arrow ${openCategories.sl0 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sl0 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'st-001' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('E-Faktur Legacy');
                                setActiveTab('st-001');
                              }}
                            >
                              Cara lapor PPN dari Accurate
                            </div>
                          { "Cara lapor PPN dari Accurate" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'E-Faktur CTAS' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('E-Faktur CTAS');
                            toggleCategory('sl1');
                          }}
                        >
                          <span>E-Faktur CTAS</span>
                          <span className={`arrow ${openCategories.sl1 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sl1 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'st-002' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('E-Faktur CTAS');
                                setActiveTab('st-002');
                              }}
                            >
                              Cara beralih ke e-faktur CTAS
                            </div>
                          { "Cara beralih ke e-faktur CTAS" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'E-mail Faktur Pajak' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('E-mail Faktur Pajak');
                            toggleCategory('sl2');
                          }}
                        >
                          <span>E-mail Faktur Pajak</span>
                          <span className={`arrow ${openCategories.sl2 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.sl2 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'st-003' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('E-mail Faktur Pajak');
                                setActiveTab('st-003');
                              }}
                            >
                              Cara kirim faktur pajak ke customer
                            </div>
                          { "Cara kirim faktur pajak ke customer" }
                            </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="module-group">
                  <div 
                    className={`module-header ${currentModule === 'Laporan' ? 'active-sub' : ''}`} 
                    onClick={() => {
                      toggleCategory('laporan');
                      handleSelectModule('Laporan');
                    }}
                  >
                    <span>Laporan</span>
                    <span className={`arrow ${openCategories.laporan ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                  </div>
                  {openCategories.laporan && (
                    <div className="module-children">
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Daftar Laporan' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Daftar Laporan');
                            toggleCategory('lp0');
                          }}
                        >
                          <span>Daftar Laporan</span>
                          <span className={`arrow ${openCategories.lp0 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.lp0 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'lp-001' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-001');
                              }}
                            >
                              Cara melihat laporan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-002' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-002');
                              }}
                            >
                              Cara membuat laporan penjualan per kategori
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-003' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-003');
                              }}
                            >
                              Cara menyimpan format laporan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-004' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-004');
                              }}
                            >
                              Cara cek sisa pinjaman karyawan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-005' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-005');
                              }}
                            >
                              Cara melihat laba bersih setelah pajak
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-006' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-006');
                              }}
                            >
                              Cara melihat barang yang belum diproses di delivery orde
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-007' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-007');
                              }}
                            >
                              Cara cek pesanan pelanggan yang belum diproses
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-008' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-008');
                              }}
                            >
                              Cara mengatasi selisih penjualan laba rugi
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-009' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-009');
                              }}
                            >
                              Cara menampilkan tanggal jatuh tempo
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-010' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-010');
                              }}
                            >
                              Cara melihat daftar utang dan piutang yang belum lunas
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-011' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-011');
                              }}
                            >
                              Cara melihat kekayaan bersih perusahaan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-012' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-012');
                              }}
                            >
                              Cara melihat total transaksi penjualan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-013' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-013');
                              }}
                            >
                              Cara melihat keuntungan tiap barang
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-014' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-014');
                              }}
                            >
                              Cara melihat asal nilai laba tahun ini
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-015' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-015');
                              }}
                            >
                              Cara melihat sisa pesanan pembelian belum diterima
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-016' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-016');
                              }}
                            >
                              Cara melihat perubahan stok barang setelah koreksi
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-017' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-017');
                              }}
                            >
                              Cara mengatasi laporan pdf terpotong
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-018' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-018');
                              }}
                            >
                              Cara melihat piutang yang sudah jatuh tempo
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-019' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-019');
                              }}
                            >
                              Pengaruh stok minus terhadap persediaan dan BPP
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-020' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-020');
                              }}
                            >
                              Cara Mengetahui Lama Pembayaran Pelanggan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-021' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-021');
                              }}
                            >
                              Cara melihat penjualan terbesar
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-022' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-022');
                              }}
                            >
                              Cara memberikan nomor urut di laporan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-023' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-023');
                              }}
                            >
                              Cara melihat stok barang box dan pcs
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-024' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-024');
                              }}
                            >
                              Penyebab total laporan laba rugi proyek berbeda
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-025' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-025');
                              }}
                            >
                              Cara melihat jeda pembayaran faktur pembelian
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-026' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-026');
                              }}
                            >
                              Cara melihat tagihan pelanggan per departemen
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-027' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-027');
                              }}
                            >
                              Cara melihat keuntungan setiap produk
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-028' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-028');
                              }}
                            >
                              Cara mengatasi pesan error skrip kolom tidak valid
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-029' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-029');
                              }}
                            >
                              Cara membuat kolom tanda tangan di laporan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-030' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-030');
                              }}
                            >
                              Cara mengubah format laporan keuangan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-031' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-031');
                              }}
                            >
                              Cara melihat harga bersih penjualan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-032' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-032');
                              }}
                            >
                              Cara melihat total nilai stok per kategori barang
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-033' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-033');
                              }}
                            >
                              Cara mengubah kts belum terproses menjadi 0
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-034' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-034');
                              }}
                            >
                              Cara cek piutang pelanggan
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-035' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-035');
                              }}
                            >
                              Cara melihat permintaan barang belum diproses per katego
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-036' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-036');
                              }}
                            >
                              Cara cek barang yang dibeli dari setiap supplier
                            </div>
                            <div
                              className={`article-link ${activeTab === 'lp-037' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Daftar Laporan');
                                setActiveTab('lp-037');
                              }}
                            >
                              Cara membuat format tanggal laporan menjadi DD/MM/YYYY
                            </div>
                          { "Cara melihat laporan" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'SPT Masa PPN / PPN Bm' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('SPT Masa PPN / PPN Bm');
                            toggleCategory('lp1');
                          }}
                        >
                          <span>SPT Masa PPN / PPN Bm</span>
                          <span className={`arrow ${openCategories.lp1 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.lp1 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'lp-038' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('SPT Masa PPN / PPN Bm');
                                setActiveTab('lp-038');
                              }}
                            >
                              Cara membuat laporan SPT Masa PPN
                            </div>
                          { "Cara membuat laporan SPT Masa PPN" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Formulir 1721' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Formulir 1721');
                            toggleCategory('lp2');
                          }}
                        >
                          <span>Formulir 1721</span>
                          <span className={`arrow ${openCategories.lp2 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.lp2 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'lp-039' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Formulir 1721');
                                setActiveTab('lp-039');
                              }}
                            >
                              Cara membuat formulir 1721-i bulanan
                            </div>
                          { "Cara membuat formulir 1721-i bulanan" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Formulir 1721 A1' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Formulir 1721 A1');
                            toggleCategory('lp3');
                          }}
                        >
                          <span>Formulir 1721 A1</span>
                          <span className={`arrow ${openCategories.lp3 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.lp3 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'lp-040' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Formulir 1721 A1');
                                setActiveTab('lp-040');
                              }}
                            >
                              Cara membuat bukti potong pajak karyawan 1721-A1
                            </div>
                          { "Cara membuat bukti potong pajak karyawan 1721-A1" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Formulir SPT PPh PS.21' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Formulir SPT PPh PS.21');
                            toggleCategory('lp4');
                          }}
                        >
                          <span>Formulir SPT PPh PS.21</span>
                          <span className={`arrow ${openCategories.lp4 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.lp4 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'lp-041' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Formulir SPT PPh PS.21');
                                setActiveTab('lp-041');
                              }}
                            >
                              Cara membuat SPT PPh 21
                            </div>
                          { "Cara membuat SPT PPh 21" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'Bukti Potong PPh PS.21' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Bukti Potong PPh PS.21');
                            toggleCategory('lp5');
                          }}
                        >
                          <span>Bukti Potong PPh PS.21</span>
                          <span className={`arrow ${openCategories.lp5 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.lp5 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'lp-042' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Bukti Potong PPh PS.21');
                                setActiveTab('lp-042');
                              }}
                            >
                              Cara membuat bukti potong pajak karyawan
                            </div>
                          { "Cara membuat bukti potong pajak karyawan" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'ePPh 2326 dan ePPh 1771' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('ePPh 2326 dan ePPh 1771');
                            toggleCategory('lp6');
                          }}
                        >
                          <span>ePPh 2326 dan ePPh 1771</span>
                          <span className={`arrow ${openCategories.lp6 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.lp6 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'lp-043' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('ePPh 2326 dan ePPh 1771');
                                setActiveTab('lp-043');
                              }}
                            >
                              Cara ekspor data PPh 23 ke ePPh 2326 dan ePPh 1771
                            </div>
                          { "Cara ekspor data PPh 23 ke ePPh 2326 dan ePPh 1771" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'SPT PPh Ps. 23' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('SPT PPh Ps. 23');
                            toggleCategory('lp7');
                          }}
                        >
                          <span>SPT PPh Ps. 23</span>
                          <span className={`arrow ${openCategories.lp7 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.lp7 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'lp-044' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('SPT PPh Ps. 23');
                                setActiveTab('lp-044');
                              }}
                            >
                              Cara membuat bukti potong pajak PPh 23
                            </div>
                          { "Cara membuat bukti potong pajak PPh 23" }
                            </div>
                        )}
                      </div>
                      <div className="submodule-group">
                        <div
                          className={`submodule-header ${currentModule === 'SPT PPh Ps. 15' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('SPT PPh Ps. 15');
                            toggleCategory('lp8');
                          }}
                        >
                          <span>SPT PPh Ps. 15</span>
                          <span className={`arrow ${openCategories.lp8 ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
                        </div>
                        {openCategories.lp8 && (
                          <div className="article-links">
                            <div
                              className={`article-link ${activeTab === 'lp-045' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('SPT PPh Ps. 15');
                                setActiveTab('lp-045');
                              }}
                            >
                              Cara cetak bukti potong PPh 15 dan SPT PPh 15
                            </div>
                          { "Cara cetak bukti potong PPh 15 dan SPT PPh 15" }
                            </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                {/* ARTIKEL PILIHAN FITUR GLOBAL */}
                <div className="article-links" style={{ marginTop: '14px', borderTop: '1px solid #f1f5f9', paddingTop: '8px' }}>
                  <div className="article-link" onClick={() => handleSelectModule('Cara mengaktifkan fitur Verifikasi 2 Langkah (2FA)')}>Cara mengaktifkan fitur Verifikasi 2 Langkah (2FA)</div>
                  <div className="article-link" onClick={() => handleSelectModule('Cara menonaktifkan Google Authentication')}>Cara menonaktifkan Google Authentication</div>
                  <div className="article-link" onClick={() => handleSelectModule('Cara mengatur PPN 12%')}>Cara mengatur PPN 12%</div>
                  <div className="article-link" onClick={() => handleSelectModule('Cara menganalisis laporan keuangan dengan Ailita')}>Cara menganalisis laporan keuangan dengan Ailita</div>
                </div>
              </div>
            )}
          </div>

          {/* 4. CASHFLOW INSIGHT */}
          <div className="sidebar-category">
            <div 
              className={`sidebar-item ${currentModule === 'CashFlow Insight' ? 'active-sub' : ''}`} 
              onClick={() => {
                toggleCategory('insight');
                handleSelectModule('CashFlow Insight');
              }}
            >
              <span>CashFlow Insight</span>
              <span className={`arrow ${openCategories.insight ? 'down' : ''}`}><ChevronRight size={14} strokeWidth={2} /></span>
            </div>
            {openCategories.insight && (
              <div className="category-children">
                <div className="sub-item" onClick={() => handleSelectModule('Cara mencatat barang titipan')}>Cara mencatat barang titipan</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara menerima dan mencatat barang titipan')}>Cara menerima dan mencatat barang titipan</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mencatat selisih PPN keluaran dan PPN masukan')}>Cara mencatat selisih PPN keluaran dan PPN masukan</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mencatat pajak UMKM 0,5%')}>Cara mencatat pajak UMKM 0,5%</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mencatat pembelian impor, PPN impor, dan PPh 22')}>Cara mencatat pembelian impor, PPN impor, dan PPh 22</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mencatat pembelian jasa yang dikenakan PPh 23')}>Cara mencatat pembelian jasa yang dikenakan PPh 23</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mencatat penjualan yang dikenakan PPh 22')}>Cara mencatat penjualan yang dikenakan PPh 22</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mencatat pembayaran jasa freelance yang dipotong PPh 21')}>Cara mencatat pembayaran jasa freelance yang dipotong PPh 21</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mencatat pendapatan diterima di muka dan beban dibayar')}>Cara mencatat pendapatan diterima di muka dan beban dibayar</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mencatat penjualan jasa yang dipotong PPh 23')}>Cara mencatat penjualan jasa yang dipotong PPh 23</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mencatat pajak perusahaan PPh 29')}>Cara mencatat pajak perusahaan PPh 29</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mengatasi error anda tidak memiliki hak buat karyawan')}>Cara mengatasi error anda tidak memiliki hak buat karyawan</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mengatasi error tidak dapat menjurnal akun')}>Cara mengatasi error tidak dapat menjurnal akun</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mencatat pajak marketplace')}>Cara mencatat pajak marketplace</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mengatasi error barang diproses lebih dari satu kali')}>Cara mengatasi error barang diproses lebih dari satu kali</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara menggunakan lebih dari satu akun piutang untuk pelanggan')}>Cara menggunakan lebih dari satu akun piutang untuk pelanggan</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mencatat gaji dan lembur agar tidak terhitung dua kali')}>Cara mencatat gaji dan lembur agar tidak terhitung dua kali</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mencatat usaha rental mobil di CashFlow Online')}>Cara mencatat usaha rental mobil di CashFlow Online</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mengatasi error tidak ada harga beli barang')}>Cara mengatasi error tidak ada harga beli barang</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mencatat produksi ayam potong')}>Cara mencatat produksi ayam potong</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara membatasi piutang pelanggan')}>Cara membatasi piutang pelanggan</div>
                <div className="sub-item" onClick={() => handleSelectModule('PPh 21 Karyawan Terlalu Tinggi? Cek NPWP')}>PPh 21 Karyawan Terlalu Tinggi? Cek NPWP</div>
                <div className="sub-item" onClick={() => handleSelectModule('Pelanggan tidak muncul di CashFlow Online? Ini penyebabnya')}>Pelanggan tidak muncul di CashFlow Online? Ini penyebabnya</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara Mengalihkan Uang Muka Antar Pelanggan')}>Cara Mengalihkan Uang Muka Antar Pelanggan</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mencatat tukar tambah aset tetap')}>Cara mencatat tukar tambah aset tetap</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mencatat faktur pajak digunggung')}>Cara mencatat faktur pajak digunggung</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mengubah persediaan menjadi aset tetap')}>Cara mengubah persediaan menjadi aset tetap</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara membagi biaya penyusutan aset ke beberapa proyek')}>Cara membagi biaya penyusutan aset ke beberapa proyek</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mengatasi error akun perkiraan tipe persediaan')}>Cara mengatasi error akun perkiraan tipe persediaan</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mencatat PPN masukan di CashFlow Online')}>Cara mencatat PPN masukan di CashFlow Online</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara melunasi utang pemasok dengan piutang pelanggan')}>Cara melunasi utang pemasok dengan piutang pelanggan</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mengatasi nomor faktur tidak muncul saat ekspor spt ppn')}>Cara mengatasi nomor faktur tidak muncul saat ekspor spt ppn</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mencatat kasbon pemasok di CashFlow Online')}>Cara mencatat kasbon pemasok di CashFlow Online</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mencatat pembayaran dengan barang dan uang tunai')}>Cara mencatat pembayaran dengan barang dan uang tunai</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mengatur PPh 22 penjualan')}>Cara mengatur PPh 22 penjualan</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara menggunakan uang muka untuk melunasi utang saldo awal')}>Cara menggunakan uang muka untuk melunasi utang saldo awal</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara mengatasi nama penjual tidak muncul di default penjual')}>Cara mengatasi nama penjual tidak muncul di default penjual</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara cek harga jual sebelum harga berubah')}>Cara cek harga jual sebelum harga berubah</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara menggunakan barcode scanner')}>Cara menggunakan barcode scanner</div>
                <div className="sub-item" onClick={() => handleSelectModule('Cara memindahkan sisa kredit pelanggan ke pelanggan lain')}>Cara memindahkan sisa kredit pelanggan ke pelanggan lain</div>
                <div className="sub-item" onClick={() => handleSelectModule('Perlakuan akun Equitas Saldo Awal')}>Perlakuan akun Equitas Saldo Awal</div>
                <div className="sub-item" onClick={() => handleSelectModule('Error: akun perkiraan tidak dapat dihapus karena digunakan di pajak')}>Error: akun perkiraan tidak dapat dihapus karena digunakan di pajak</div>
                <div className="sub-item" onClick={() => handleSelectModule('Error: akun perkiraan digunakan di default akun utang/piutang')}>Error: akun perkiraan digunakan di default akun utang/piutang</div>
                <div className="sub-item" onClick={() => handleSelectModule('Error: transaksi/jurnal sudah terkait dengan saldo awal')}>Error: transaksi/jurnal sudah terkait dengan saldo awal</div>
                <div className="sub-item" onClick={() => handleSelectModule('Error: sesi login Anda telah berakhir')}>Error: sesi login Anda telah berakhir</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};
