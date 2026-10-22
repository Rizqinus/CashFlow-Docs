import React from 'react';

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

          {/* MEMULAI CASHFLOW ONLINE */}
          <div className="sidebar-category">
            <div className="sidebar-item" onClick={() => toggleCategory('memulai')}>
              <span>Memulai CashFlow Online</span>
              <span className={`arrow ${openCategories.memulai ? 'down' : ''}`}>
                {openCategories.memulai ? '⌄' : '›'}
              </span>
            </div>
            {openCategories.memulai && (
              <div className="category-children">
                <div className={`sub-item ${currentModule === 'Pendaftaran Akun' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Pendaftaran Akun')}>Pendaftaran Akun</div>
                <div className={`sub-item ${currentModule === 'Setup Awal Perusahaan' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Setup Awal Perusahaan')}>Setup Awal Perusahaan</div>
                <div className={`sub-item ${currentModule === 'Import Data Excel' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Import Data Excel')}>Import Data Master</div>
              </div>
            )}
          </div>

          {/* CASHFLOW STORE */}
          <div className="sidebar-category">
            <div className="sidebar-item" onClick={() => toggleCategory('store')}>
              <span>CashFlow Store</span>
              <span className={`arrow ${openCategories.store ? 'down' : ''}`}>
                {openCategories.store ? '⌄' : '›'}
              </span>
            </div>
            {openCategories.store && (
              <div className="category-children">
                <div className={`sub-item ${currentModule === 'Aplikasi Kasir POS' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Aplikasi Kasir POS')}>Aplikasi Kasir POS</div>
                <div className={`sub-item ${currentModule === 'Integrasi Bank & Payment' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Integrasi Bank & Payment')}>Integrasi Bank & Payment</div>
              </div>
            )}
          </div>

          {/* FITUR CASHFLOW ONLINE */}
          <div className={`sidebar-category ${openCategories.fitur ? 'open' : ''}`}>
            <div className="category-header" onClick={() => toggleCategory('fitur')}>
              <span>Fitur CashFlow Online</span>
              <span className={`arrow ${openCategories.fitur ? 'down' : ''}`}>
                {openCategories.fitur ? '⌄' : '›'}
              </span>
            </div>

            {openCategories.fitur && (
              <div className="category-children">
                {/* DASHBOARD */}
                <div className="module-group">
                  <div className="module-header" onClick={() => toggleCategory('dashboard')}>
                    <span>Dashboard</span>
                    <span className={`arrow ${openCategories.dashboard ? 'down' : ''}`}>
                      {openCategories.dashboard ? '⌄' : '›'}
                    </span>
                  </div>
                  {openCategories.dashboard && (
                    <div className="module-children">
                      <div className={`leaf-item ${currentModule === 'Widget Dashboard' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Widget Dashboard')}>Widget Dashboard</div>
                      <div className={`leaf-item ${currentModule === 'Analisis Arus Kas' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Analisis Arus Kas')}>Analisis Arus Kas</div>
                    </div>
                  )}
                </div>

                {/* PENGATURAN */}
                <div className="module-group">
                  <div className="module-header" onClick={() => toggleCategory('pengaturan')}>
                    <span>Pengaturan</span>
                    <span className={`arrow ${openCategories.pengaturan ? 'down' : ''}`}>
                      {openCategories.pengaturan ? '⌄' : '›'}
                    </span>
                  </div>
                  {openCategories.pengaturan && (
                    <div className="module-children">
                      <div className={`leaf-item ${currentModule === 'Preferensi Akun' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Preferensi Akun')}>Preferensi Akun</div>
                      <div className={`leaf-item ${currentModule === 'Hak Akses Pengguna' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Hak Akses Pengguna')}>Hak Akses Pengguna</div>
                      <div className={`leaf-item ${currentModule === 'Desain Cetakan Formulir' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Desain Cetakan Formulir')}>Desain Cetakan Formulir</div>
                    </div>
                  )}
                </div>

                {/* PERUSAHAAN */}
                <div className="module-group">
                  <div className="module-header" onClick={() => toggleCategory('perusahaan')}>
                    <span>Perusahaan</span>
                    <span className={`arrow ${openCategories.perusahaan ? 'down' : ''}`}>
                      {openCategories.perusahaan ? '⌄' : '›'}
                    </span>
                  </div>
                  {openCategories.perusahaan && (
                    <div className="module-children">
                      <div className={`leaf-item ${currentModule === 'Informasi Perusahaan' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Informasi Perusahaan')}>Informasi Perusahaan</div>
                      <div className={`leaf-item ${currentModule === 'Cabang / Multi-Outlet' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Cabang / Multi-Outlet')}>Cabang / Multi-Outlet</div>
                      <div className={`leaf-item ${currentModule === 'Mata Uang' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Mata Uang')}>Mata Uang</div>
                    </div>
                  )}
                </div>

                {/* BUKU BESAR */}
                <div className="module-group">
                  <div className="module-header" onClick={() => toggleCategory('bukubesar')}>
                    <span>Buku Besar</span>
                    <span className={`arrow ${openCategories.bukubesar ? 'down' : ''}`}>
                      {openCategories.bukubesar ? '⌄' : '›'}
                    </span>
                  </div>
                  {openCategories.bukubesar && (
                    <div className="module-children">
                      <div className={`leaf-item ${currentModule === 'Akun Perkiraan (COA)' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Akun Perkiraan (COA)')}>Akun Perkiraan (COA)</div>
                      <div className={`leaf-item ${currentModule === 'Pencatatan Gaji' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Pencatatan Gaji')}>Pencatatan Gaji</div>
                      <div className={`leaf-item ${currentModule === 'Jurnal Umum' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Jurnal Umum')}>Jurnal Umum</div>
                      <div className={`leaf-item ${currentModule === 'Histori Buku Besar' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Histori Buku Besar')}>Histori Buku Besar</div>
                    </div>
                  )}
                </div>

                {/* KAS & BANK */}
                <div className="module-group">
                  <div className="module-header" onClick={() => toggleCategory('kasbank')}>
                    <span>Kas & Bank</span>
                    <span className={`arrow ${openCategories.kasbank ? 'down' : ''}`}>
                      {openCategories.kasbank ? '⌄' : '›'}
                    </span>
                  </div>
                  {openCategories.kasbank && (
                    <div className="module-children">
                      <div className={`leaf-item ${currentModule === 'Pembayaran' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Pembayaran')}>Pembayaran</div>
                      <div className={`leaf-item ${currentModule === 'Penerimaan' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Penerimaan')}>Penerimaan</div>
                      <div className={`leaf-item ${currentModule === 'Transfer Kas' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Transfer Kas')}>Transfer Kas</div>
                      <div className={`leaf-item ${currentModule === 'Rekonsiliasi Bank' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Rekonsiliasi Bank')}>Rekonsiliasi Bank</div>
                    </div>
                  )}
                </div>

                {/* PENJUALAN */}
                <div className="module-group">
                  <div className="module-header" onClick={() => toggleCategory('penjualan')}>
                    <span>Penjualan</span>
                    <span className={`arrow ${openCategories.penjualan ? 'down' : ''}`}>
                      {openCategories.penjualan ? '⌄' : '›'}
                    </span>
                  </div>
                  {openCategories.penjualan && (
                    <div className="module-children">
                      <div className={`leaf-item ${currentModule === 'Penawaran Penjualan' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Penawaran Penjualan')}>Penawaran Penjualan</div>
                      <div className={`leaf-item ${currentModule === 'Pesanan Penjualan' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Pesanan Penjualan')}>Pesanan Penjualan</div>
                      <div className={`leaf-item ${currentModule === 'Pengiriman Pesanan' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Pengiriman Pesanan')}>Pengiriman Pesanan</div>
                      <div className={`leaf-item ${currentModule === 'Faktur Penjualan' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Faktur Penjualan')}>Faktur Penjualan</div>
                      <div className={`leaf-item ${currentModule === 'Penerimaan Penjualan' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Penerimaan Penjualan')}>Penerimaan Penjualan</div>
                      <div className={`leaf-item ${currentModule === 'Retur Penjualan' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Retur Penjualan')}>Retur Penjualan</div>
                    </div>
                  )}
                </div>

                {/* ACTIVE MODULE: PEMBELIAN */}
                <div className="module-group active">
                  <div className="module-header" onClick={() => toggleCategory('pembelian')}>
                    <span>Pembelian</span>
                    <span className={`arrow ${openCategories.pembelian ? 'down' : ''}`}>
                      {openCategories.pembelian ? '⌄' : '›'}
                    </span>
                  </div>
                  
                  {openCategories.pembelian && (
                    <div className="module-children">
                      {/* SUB-MODUL PESANAN PEMBELIAN */}
                      <div className="submodule-group active">
                        <div 
                          className={`submodule-header ${currentModule === 'Pesanan Pembelian' && activeTab === 'po-index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Pesanan Pembelian');
                            toggleCategory('pesanan');
                          }}
                        >
                          <span>Pesanan Pembelian</span>
                          <span className={`arrow ${openCategories.pesanan ? 'down' : ''}`}>
                            {openCategories.pesanan ? '⌄' : '›'}
                          </span>
                        </div>

                        {openCategories.pesanan && (
                          <div className="article-links">
                            <div 
                              className={`article-link ${activeTab === 'po-create' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pesanan Pembelian');
                                setActiveTab('po-create');
                              }}
                            >
                              Cara membuat pesanan pembelian
                            </div>
                            <div 
                              className={`article-link ${activeTab === 'po-dp' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pesanan Pembelian');
                                setActiveTab('po-dp');
                              }}
                            >
                              Cara membuat pesanan pembelian dengan uang muka
                            </div>
                            <div 
                              className={`article-link ${activeTab === 'po-cancel' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Pesanan Pembelian');
                                setActiveTab('po-cancel');
                              }}
                            >
                              Cara membatalkan pesanan pembelian
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* SUB-MODUL PENERIMAAN BARANG */}
                      <div className="submodule-group active">
                        <div 
                          className={`submodule-header ${currentModule === 'Penerimaan Barang' && activeTab === 'index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Penerimaan Barang');
                            toggleCategory('penerimaan');
                          }}
                        >
                          <span>Penerimaan Barang</span>
                          <span className={`arrow ${openCategories.penerimaan ? 'down' : ''}`}>
                            {openCategories.penerimaan ? '⌄' : '›'}
                          </span>
                        </div>

                        {openCategories.penerimaan && (
                          <div className="article-links">
                            <div 
                              className={`article-link ${activeTab === 'art1' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penerimaan Barang');
                                setActiveTab('art1');
                              }}
                            >
                              Cara membuat penerimaan barang
                            </div>
                            <div 
                              className={`article-link ${activeTab === 'art2' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penerimaan Barang');
                                setActiveTab('art2');
                              }}
                            >
                              Cara membuat penerimaan barang yang berasal dari pesanan
                            </div>
                            <div 
                              className={`article-link ${activeTab === 'art3' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Penerimaan Barang');
                                setActiveTab('art3');
                              }}
                            >
                              Cara mengatasi error pengeluaran nol aset tetap
                            </div>
                          </div>
                        )}
                      </div>

                      <div className={`leaf-item ${currentModule === 'Uang Muka Pembelian' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Uang Muka Pembelian')}>Uang Muka Pembelian</div>
                      {/* SUB-MODUL FAKTUR PEMBELIAN */}
                      <div className="submodule-group active">
                        <div 
                          className={`submodule-header ${currentModule === 'Faktur Pembelian' && activeTab === 'faktur-index' ? 'selected' : ''}`}
                          onClick={() => {
                            handleSelectModule('Faktur Pembelian');
                            toggleCategory('faktur');
                          }}
                        >
                          <span>Faktur Pembelian</span>
                          <span className={`arrow ${openCategories.faktur ? 'down' : ''}`}>
                            {openCategories.faktur ? '⌄' : '›'}
                          </span>
                        </div>

                        {openCategories.faktur && (
                          <div className="article-links">
                            <div 
                              className={`article-link ${activeTab === 'faktur-create' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Pembelian');
                                setActiveTab('faktur-create');
                              }}
                            >
                              Cara membuat faktur pembelian
                            </div>
                            <div 
                              className={`article-link ${activeTab === 'faktur-po' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Pembelian');
                                setActiveTab('faktur-po');
                              }}
                            >
                              Cara memproses PO menjadi tagihan supplier
                            </div>
                            <div 
                              className={`article-link ${activeTab === 'faktur-terima' ? 'active' : ''}`}
                              onClick={() => {
                                setCurrentModule('Faktur Pembelian');
                                setActiveTab('faktur-terima');
                              }}
                            >
                              Cara membuat invoice dari penerimaan barang
                            </div>
                          </div>
                        )}
                      </div>
                      <div className={`leaf-item ${currentModule === 'Pembayaran Pembelian' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Pembayaran Pembelian')}>Pembayaran Pembelian</div>
                      <div className={`leaf-item ${currentModule === 'Retur Pembelian' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Retur Pembelian')}>Retur Pembelian</div>
                      <div className={`leaf-item ${currentModule === 'Harga Pemasok' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Harga Pemasok')}>Harga Pemasok</div>
                      <div className={`leaf-item ${currentModule === 'Klaim Pemasok' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Klaim Pemasok')}>Klaim Pemasok</div>
                      <div className={`leaf-item ${currentModule === 'Kategori Pemasok' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Kategori Pemasok')}>Kategori Pemasok</div>
                      <div className={`leaf-item ${currentModule === 'Pemasok' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Pemasok')}>Pemasok</div>
                      <div className={`leaf-item ${currentModule === 'Perintah Pembayaran' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Perintah Pembayaran')}>Perintah Pembayaran</div>
                      <div className={`leaf-item ${currentModule === 'Transfer Pemasok' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Transfer Pemasok')}>Transfer Pemasok</div>

                      {/* ARTIKEL LEPAS DI BAWAH MODUL PEMBELIAN */}
                      <div className={`leaf-item ${currentModule === 'Cara mencatat pembelian yang dilunasi pihak lain' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Cara mencatat pembelian yang dilunasi pihak lain')}>Cara mencatat pembelian yang dilunasi pihak lain</div>
                      <div className={`leaf-item ${currentModule === 'Cara mencatat kelebihan pembayaran pembelian' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Cara mencatat kelebihan pembayaran pembelian')}>Cara mencatat kelebihan pembayaran pembelian</div>
                      <div className={`leaf-item ${currentModule === 'Cara mengatur akun pembulatan pada faktur pembelian' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Cara mengatur akun pembulatan pada faktur pembelian')}>Cara mengatur akun pembulatan pada faktur pembelian</div>
                    </div>
                  )}
                </div>

                {/* PERSEDIAAN */}
                <div className="module-group">
                  <div className="module-header" onClick={() => toggleCategory('persediaan')}>
                    <span>Persediaan</span>
                    <span className={`arrow ${openCategories.persediaan ? 'down' : ''}`}>
                      {openCategories.persediaan ? '⌄' : '›'}
                    </span>
                  </div>
                  {openCategories.persediaan && (
                    <div className="module-children">
                      <div className={`leaf-item ${currentModule === 'Barang & Jasa' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Barang & Jasa')}>Barang & Jasa</div>
                      <div className={`leaf-item ${currentModule === 'Penyesuaian Persediaan' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Penyesuaian Persediaan')}>Penyesuaian Persediaan</div>
                      <div className={`leaf-item ${currentModule === 'Pemindahan Barang' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Pemindahan Barang')}>Pemindahan Barang</div>
                      <div className={`leaf-item ${currentModule === 'Gudang' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Gudang')}>Gudang</div>
                    </div>
                  )}
                </div>

                {/* ASET TETAP */}
                <div className="module-group">
                  <div className="module-header" onClick={() => toggleCategory('asettetap')}>
                    <span>Aset Tetap</span>
                    <span className={`arrow ${openCategories.asettetap ? 'down' : ''}`}>
                      {openCategories.asettetap ? '⌄' : '›'}
                    </span>
                  </div>
                  {openCategories.asettetap && (
                    <div className="module-children">
                      <div className={`leaf-item ${currentModule === 'Daftar Aset Tetap' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Daftar Aset Tetap')}>Daftar Aset Tetap</div>
                      <div className={`leaf-item ${currentModule === 'Perubahan Aset' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Perubahan Aset')}>Perubahan Aset</div>
                      <div className={`leaf-item ${currentModule === 'Disposisi Aset' ? 'active-sub' : ''}`} onClick={() => handleSelectModule('Disposisi Aset')}>Disposisi Aset</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};
