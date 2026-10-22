import React, { useState } from 'react';
import { Home } from 'lucide-react';
import './App.css';

// Modular Components
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';

// Modular Pages
import { ModuleIndex } from './pages/ModuleIndex';
import { ArticleManual } from './pages/articles/ArticleManual';
import { ArticlePO } from './pages/articles/ArticlePO';
import { ArticleErrorZero } from './pages/articles/ArticleErrorZero';

// Halaman Baru Sesuai Help CashFlow (Pesanan & Faktur)
import { ArticlePesananPembelian } from './pages/articles/ArticlePesananPembelian';
import { ArticlePOUangMuka } from './pages/articles/ArticlePOUangMuka';
import { ArticlePOBatal } from './pages/articles/ArticlePOBatal';
import { ArticleFakturPembelian } from './pages/articles/ArticleFakturPembelian';
import { ArticleFakturDariPO } from './pages/articles/ArticleFakturDariPO';
import { ArticleFakturDariPenerimaan } from './pages/articles/ArticleFakturDariPenerimaan';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('index');
  const [currentModule, setCurrentModule] = useState('Penerimaan Barang');
  const [searchQuery, setSearchQuery] = useState('');
  const [showProdukDropdown, setShowProdukDropdown] = useState(false);
  
  // State accordion sidebar
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    memulai: false,
    store: false,
    fitur: true,
    dashboard: false,
    pengaturan: false,
    perusahaan: false,
    bukubesar: false,
    kasbank: false,
    penjualan: false,
    pembelian: true,
    persediaan: false,
    asettetap: false,
    penerimaan: true,
    pesanan: true,
    faktur: true
  });

  const toggleCategory = (cat: string) => {
    setOpenCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  const handleSelectModule = (modName: string) => {
    setCurrentModule(modName);
    if (modName === 'Penerimaan Barang') {
      setActiveTab('index');
    } else {
      setActiveTab('placeholder');
    }
  };

  return (
    <div className="doc-app">
      {/* 1. TOP NAVBAR */}
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

          {activeTab === 'art1' && (
            <ArticleManual 
              onBackToIndex={() => setActiveTab('index')}
              onNextArticle={() => setActiveTab('art2')}
            />
          )}

          {activeTab === 'art2' && (
            <ArticlePO 
              onBackToIndex={() => setActiveTab('index')}
              onNextArticle={() => setActiveTab('art3')}
            />
          )}

          {activeTab === 'art3' && (
            <ArticleErrorZero 
              onBackToIndex={() => setActiveTab('index')}
              onPrevArticle={() => setActiveTab('art2')}
            />
          )}

          {/* HALAMAN ARTIKEL PESANAN PEMBELIAN */}
          {activeTab === 'po-create' && (
            <ArticlePesananPembelian onBack={() => setActiveTab('index')} />
          )}
          {activeTab === 'po-dp' && (
            <ArticlePOUangMuka onBack={() => setActiveTab('index')} />
          )}
          {activeTab === 'po-cancel' && (
            <ArticlePOBatal onBack={() => setActiveTab('index')} />
          )}

          {/* HALAMAN ARTIKEL FAKTUR PEMBELIAN */}
          {activeTab === 'faktur-create' && (
            <ArticleFakturPembelian onBack={() => setActiveTab('index')} />
          )}
          {activeTab === 'faktur-po' && (
            <ArticleFakturDariPO onBack={() => setActiveTab('index')} />
          )}
          {activeTab === 'faktur-terima' && (
            <ArticleFakturDariPenerimaan onBack={() => setActiveTab('index')} />
          )}
        </main>

        {/* RIGHT TABLE OF CONTENTS (HANYA MUNCUL DI ARTIKEL DETAIL SESUAI CASHFLOW DOCS) */}
        {activeTab !== 'index' && activeTab !== 'placeholder' && (
          <aside className="toc-sidebar">
            <div className="toc-header">On this page</div>
            {activeTab === 'art1' && (
              <ul className="toc-list">
                <li className="active">Cara mencatat barang masuk</li>
                <li>1. Buka modul Pembelian</li>
                <li>2. Mengisi informasi penting</li>
              </ul>
            )}
            {activeTab === 'art2' && (
              <ul className="toc-list">
                <li className="active">Penerimaan dari PO</li>
                <li>1. Buka form Penerimaan</li>
                <li>2. Ambil dari Pesanan Pembelian</li>
              </ul>
            )}
            {activeTab === 'art3' && (
              <ul className="toc-list">
                <li className="active">Mengatasi Error Nilai Nol</li>
                <li>1. Periksa Nilai Total</li>
                <li>2. Periksa Dokumen Asal</li>
                <li>3. Tarik Ulang & Simpan</li>
              </ul>
            )}
          </aside>
        )}
      </div>

      {/* 3. FOOTER RESMI */}
      <Footer />
    </div>
  );
}
