import React from 'react';
import { Sparkles } from 'lucide-react';

// Daftar sub-modul mengikuti struktur referensi help.accurate.id.
// Modul tanpa panduan tetap ditampilkan agar strukturnya lengkap, dengan status "Segera hadir".
const plannedSubModules: Record<string, string[]> = {
  Dashboard: [
    'Cara melihat arus kas (cash flow) di dashboard',
    'Cara melihat beban perusahaan di dashboard',
    'Cara melihat faktur yang belum dibayar di dashboard',
    'Cara melihat saldo kas & bank di dashboard',
    'Cara melihat laba rugi bisnis di dashboard',
    'Cara melihat pelanggan yang masih berutang di dashboard',
    'Cara melihat aktivitas penjualan di dashboard',
    'Cara memantau permintaan barang antar cabang di dashboard',
    'Cara melihat pesanan penjualan di dashboard',
    'Cara melihat HPP dan margin keuntungan barang di dashboard',
    'Cara melihat laba setiap cabang dari dashboard',
  ],
  Pengaturan: ['Preferensi', 'Akses Grup', 'Pengguna', 'Penomoran', 'Desain Cetakan', 'Penyetuju Transaksi'],
  Perusahaan: [
    'Mata Uang', 'Cabang', 'Pajak', 'Syarat Pembayaran', 'Pengiriman', 'FOB',
    'Gaji dan Tunjangan', 'Karyawan', 'Transaksi Berulang', 'Proses Akhir Bulan',
    'Kontak', 'Transaksi Favorit', 'Approval', 'Kalender', 'Log Aktivitas',
    'Cara membuat departemen dan proyek',
  ],
  'Buku Besar': [
    'Akun Perkiraan', 'Pencatatan Beban', 'Pencatatan Gaji', 'Jurnal Umum',
    'Monitor Anggaran', 'Transfer Anggaran', 'Anggaran', 'Histori Akun',
    'Log Aktivitas Jurnal', 'Pinjaman Karyawan',
  ],
  'Kas & Bank': [
    'Pembayaran', 'Penerimaan', 'Transfer Bank', 'Smartlink E-Banking',
    'Rekening Koran', 'Histori Bank', 'Rekonsiliasi Bank',
    'Smartlink Virtual Account', 'Smartlink E-Payment', 'Pencairan Pinjaman',
    'Pembayaran Angsuran', 'Pelunasan Pinjaman',
  ],
  Persediaan: [
    'Permintaan Barang', 'Pemindahan Barang', 'Penyesuaian Persediaan',
    'Pekerjaan Pesanan', 'Hasil Stok Opname', 'Penambahan Bahan Baku',
    'Barang dan Jasa', 'Gudang', 'Satuan barang', 'Kategori Barang', 'Merek Barang',
    'Pemenuhan Pesanan', 'Barang Per Gudang', 'Pengisian Nomor Seri',
    'Penyelesaian Pesanan', 'Perintah Stok Opname', 'Barang Stok Minimum',
    'Artikel Tambahan',
  ],
  'Asset Tetap': [
    'Aset Tetap', 'Kategori Aset Tetap', 'Kategori Aset Tetap Pajak',
    'Perubahan Aset Tetap', 'Disposisi Aset Tetap', 'Pindah Aset Tetap',
    'Aset Per Lokasi', 'Artikel Tambahan',
  ],
  Manufaktur: [
    'Onboarding Manufaktur', 'Standar Biaya Produksi', 'Formula Produksi',
    'Rencana Produksi', 'Perintah Kerja', 'Pengambilan Bahan Baku',
    'Persiapan Bahan Baku', 'Tahapan Proses', 'Penyelesaian Barang Jadi',
    'Alokasi Biaya Produksi', 'Jadwal Produksi', 'Pemenuhan Bahan Baku',
    'Monitor Perintah Kerja', 'Histori Perintah Kerja', 'Tahapan Produksi',
    'Penanggung Jawab', 'Subkon Biaya Produksi', 'Perhitungan Nilai Variance', 'Artikel Tambahan',
  ],
  'Proyek Kontraktor': [
    'Rencana Anggaran', 'Bahan Baku Terpakai', 'Survey Proyek',
    'Penyelesaian Proyek', 'Monitoring Kontraktor', 'Timeline Kontraktor',
    'Alokasi Bahan Proyek', 'Artikel Tambahan',
  ],
  'Smartlink Tax': ['E-Faktur Legacy', 'E-Faktur CTAS', 'E-mail Faktur Pajak'],
  Laporan: [
    'Daftar Laporan', 'SPT Masa PPN / PPN Bm', 'Formulir 1721',
    'Formulir 1721 A1', 'Formulir SPT PPh PS.21', 'Bukti Potong PPh PS.21',
    'ePPh 2326 dan ePPh 1771', 'SPT PPh Ps. 23', 'SPT PPh Ps. 15',
  ],
};

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
  // 1. ROOT PRODUCT: CashFlow Online (Exact match to https://help.accurate.id/product/accurate-online)
  if (currentModule === 'CashFlow Online') {
    return (
      <div className="page-index">
        <h1 className="page-title">CashFlow Online</h1>
        <p className="page-subtitle">Kumpulan tutorial CashFlow Online</p>

        <div className="articles-grid">
          <div className="folder-card" onClick={() => handleSelectModule('Memulai CashFlow Online')}>
            <div className="folder-card-header">
              <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
              <h3>Memulai CashFlow Online</h3>
            </div>
            <p className="folder-card-meta">4 items</p>
          </div>

          <div className="folder-card" onClick={() => handleSelectModule('CashFlow Store')}>
            <div className="folder-card-header">
              <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
              <h3>CashFlow Store</h3>
            </div>
            <p className="folder-card-meta">15 items</p>
          </div>

          <div className="folder-card" onClick={() => handleSelectModule('Fitur CashFlow Online')}>
            <div className="folder-card-header">
              <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
              <h3>Fitur CashFlow Online</h3>
            </div>
            <p className="folder-card-meta">17 items</p>
          </div>

          <div className="folder-card" onClick={() => handleSelectModule('CashFlow Insight')}>
            <div className="folder-card-header">
              <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
              <h3>CashFlow Insight</h3>
            </div>
            <p className="folder-card-meta">45 items</p>
          </div>
        </div>

        {/* BOTTOM NAVIGATION NEXT */}
        <div className="doc-nav-grid" style={{ gridTemplateColumns: '1fr' }}>
          <div className="doc-nav-card next" onClick={() => handleSelectModule('Memulai CashFlow Online')}>
            <span className="doc-nav-label">Next</span>
            <strong className="doc-nav-title">Memulai CashFlow Online »</strong>
          </div>
        </div>
      </div>
    );
  }

  // 2. CATEGORY: Memulai CashFlow Online (Exact match to https://help.accurate.id/product/memulai-aol)
  if (currentModule === 'Memulai CashFlow Online') {
    return (
      <div className="page-index">
        <h1 className="page-title">Memulai CashFlow Online</h1>
        <p className="page-subtitle">Panduan awal konfigurasi akun dan data master usaha di CashFlow Online</p>

        <div className="articles-grid">
          <div className="folder-card" onClick={() => handleSelectModule('Pendaftaran Akun')}>
            <div className="folder-card-header">
              <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
              <h3>Mengelola Akun</h3>
            </div>
            <p className="folder-card-meta">4 items</p>
          </div>

          <div className="folder-card" onClick={() => handleSelectModule('Setup Awal Perusahaan')}>
            <div className="folder-card-header">
              <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
              <h3>Mengelola data usaha</h3>
            </div>
            <p className="folder-card-meta">7 items</p>
          </div>

          <div className="folder-card" onClick={() => handleSelectModule('Area Penagihan')}>
            <div className="folder-card-header">
              <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
              <h3>Area Penagihan</h3>
            </div>
            <p className="folder-card-meta">15 items</p>
          </div>

          <div className="folder-card" onClick={() => handleSelectModule('Navigasi Umum')}>
            <div className="folder-card-header">
              <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
              <h3>Navigasi Umum</h3>
            </div>
            <p className="folder-card-meta">2 items</p>
          </div>
        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule('CashFlow Online')}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« CashFlow Online</strong>
          </div>
          <div className="doc-nav-card next" onClick={() => handleSelectModule('Fitur CashFlow Online')}>
            <span className="doc-nav-label">Next</span>
            <strong className="doc-nav-title">Fitur CashFlow Online »</strong>
          </div>
        </div>
      </div>
    );
  }

  // 3. CATEGORY: CashFlow Store
  if (currentModule === 'CashFlow Store') {
    return (
      <div className="page-index">
        <h1 className="page-title">CashFlow Store</h1>
        <p className="page-subtitle">Ekosistem aplikasi pelengkap dan integrasi pihak ketiga CashFlow Online</p>

        <div className="articles-grid">
          <div className="folder-card" onClick={() => handleSelectModule('Aplikasi Kasir POS')}>
            <div className="folder-card-header">
              <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
              <h3>Aplikasi Kasir POS</h3>
            </div>
            <p className="folder-card-meta">5 items</p>
          </div>

          <div className="folder-card" onClick={() => handleSelectModule('Integrasi Bank & Payment')}>
            <div className="folder-card-header">
              <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
              <h3>Integrasi Bank & Payment Gateway</h3>
            </div>
            <p className="folder-card-meta">4 items</p>
          </div>

          <div className="folder-card" onClick={() => handleSelectModule('Integrasi E-Commerce')}>
            <div className="folder-card-header">
              <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
              <h3>Integrasi Marketplace E-Commerce</h3>
            </div>
            <p className="folder-card-meta">6 items</p>
          </div>
        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule('Memulai CashFlow Online')}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« Memulai CashFlow Online</strong>
          </div>
          <div className="doc-nav-card next" onClick={() => handleSelectModule('Fitur CashFlow Online')}>
            <span className="doc-nav-label">Next</span>
            <strong className="doc-nav-title">Fitur CashFlow Online »</strong>
          </div>
        </div>
      </div>
    );
  }

  // 4. CATEGORY: Fitur CashFlow Online — struktur lengkap, status sesuai ketersediaan
  if (currentModule === 'Fitur CashFlow Online') {
    // [jumlah panduan, jumlah submodul yang sudah punya panduan]
    const ready: Record<string, [number, number]> = { Dashboard: [11, 11], Pengaturan: [73, 6], Perusahaan: [30, 16], 'Buku Besar': [31, 10], 'Kas & Bank': [34, 12], Persediaan: [67, 18], 'Asset Tetap': [21, 8], Manufaktur: [40, 19], 'Proyek Kontraktor': [11, 8], 'Smartlink Tax': [3, 3], Laporan: [45, 9] };

    const modulesList = [
      { name: 'Pembelian', items: 34, subsReady: 5, subsTotal: 5 },
      { name: 'Penjualan', items: 126, subsReady: 20, subsTotal: 20 },
      ...Object.keys(plannedSubModules).map((name) => ({
        name,
        items: ready[name]?.[0] ?? 0,
        subsReady: ready[name]?.[1] ?? 0,
        subsTotal: plannedSubModules[name].length,
      })),
    ];

    return (
      <div className="page-index">
        <h1 className="page-title">Fitur CashFlow Online</h1>
        <p className="page-subtitle">Struktur modul mengikuti referensi; status menyesuaikan ketersediaan panduan CashFlow.</p>

        <div className="articles-grid">
          {modulesList.map((m) => (
            <div key={m.name} className="folder-card" onClick={() => handleSelectModule(m.name)}>
              <div className="folder-card-header">
                <span className="theme-doc-card-icon" role="img" aria-label="folder">
                  {m.subsReady > 0 ? '🗃' : '🚧'}
                </span>
                <h3>{m.name}</h3>
              </div>
              <p className="folder-card-meta">
                {m.subsReady > 0
                  ? `${m.items} panduan`
                  : 'Belum tersedia'}
              </p>
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: 700, marginTop: '36px', marginBottom: '16px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={18} color="#0284c7" /> Artikel Pilihan
        </h3>
        <div className="articles-grid">
          <div className="card" onClick={() => handleSelectModule('Penerimaan Barang')}>
            <div className="card-header-icon">
              <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
              <h3>Cara Mencatat Barang Masuk dari Supplier</h3>
            </div>
            <p>Panduan mencatat penerimaan barang agar stok dan jurnal otomatis tersinkron.</p>
          </div>

          <div className="card" onClick={() => handleSelectModule('Penawaran Penjualan')}>
            <div className="card-header-icon">
              <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
              <h3>Cara Membuat Penawaran Harga (Quotation)</h3>
            </div>
            <p>Buat penawaran harga lengkap dengan pajak dan biaya tambahan untuk pelanggan.</p>
          </div>
        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule('CashFlow Store')}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« CashFlow Store</strong>
          </div>
          <div className="doc-nav-card next" onClick={() => handleSelectModule('Pembelian')}>
            <span className="doc-nav-label">Next</span>
            <strong className="doc-nav-title">Pembelian »</strong>
          </div>
        </div>
      </div>
    );
  }

  // 5. MODULE: Dashboard — 11 panduan widget sesuai referensi
  if (currentModule === 'Dashboard') {
    const dashboardArticles = [
      { id: 'dash-arus-kas', title: 'Cara Melihat Arus Kas di Dashboard CashFlow Online', desc: 'Tampilkan Widget Arus Kas untuk memantau dana masuk dan keluar secara real-time.' },
      { id: 'dash-beban', title: 'Cara Melihat Beban Perusahaan di Dashboard CashFlow Online', desc: 'Pantau ringkasan beban bisnis dan bandingkan pengeluaran antar cabang.' },
      { id: 'dash-faktur-terlewat', title: 'Cara Melihat Faktur yang Belum Dibayar di Dashboard CashFlow Online', desc: 'Widget Faktur Terlambat membantu menentukan prioritas penagihan.' },
      { id: 'dash-kas-bank', title: 'Cara Melihat Saldo Kas & Bank di Dashboard CashFlow Online', desc: 'Widget Ketersediaan Kas menampilkan posisi saldo tanpa membuka laporan.' },
      { id: 'dash-laba-rugi', title: 'Cara Melihat Laba Rugi Bisnis di Dashboard CashFlow Online', desc: 'Widget Laba/Rugi Tahun Ini merangkum kinerja keuangan year-to-date.' },
      { id: 'dash-piutang', title: 'Cara Melihat Pelanggan yang Masih Berutang di Dashboard CashFlow Online', desc: 'Pantau daftar piutang pelanggan agar penagihan lebih terarah.' },
      { id: 'dash-penjualan', title: 'Cara Melihat Aktivitas Penjualan di Dashboard CashFlow Online', desc: 'Widget Penjualan menampilkan transaksi terbaru dan performa cabang.' },
      { id: 'dash-permintaan-barang', title: 'Cara Memantau Permintaan Barang Antar Cabang di Dashboard CashFlow Online', desc: 'Lihat permintaan barang yang masih menunggu proses dari dashboard.' },
      { id: 'dash-pesanan-penjualan', title: 'Cara Melihat Pesanan Penjualan di Dashboard CashFlow Online', desc: 'Pantau order pelanggan yang belum diproses atau belum dikirim.' },
      { id: 'dash-monitoring-hpp', title: 'Cara Melihat HPP dan Margin Keuntungan Barang di Dashboard CashFlow Online', desc: 'Widget Monitoring HPP menampilkan harga beli, harga jual, dan margin.' },
      { id: 'dash-laba-cabang', title: 'Cara Melihat Laba Setiap Cabang dari Dashboard CashFlow Online', desc: 'Bandingkan kinerja laba tiap cabang dari satu tampilan dashboard.' },
    ];

    return (
      <div className="page-index">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Kumpulan panduan menampilkan dan mengatur widget di dashboard CashFlow Online</p>

        <div className="articles-grid">
          {dashboardArticles.map((art) => (
            <div key={art.id} className="card" onClick={() => setActiveTab(art.id)}>
              <div className="card-header-icon">
                <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
                <h3>{art.title}</h3>
              </div>
              <p>{art.desc}</p>
            </div>
          ))}
        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule('Fitur CashFlow Online')}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« Fitur CashFlow Online</strong>
          </div>
          <div className="doc-nav-card next" onClick={() => handleSelectModule('Pengaturan')}>
            <span className="doc-nav-label">Next</span>
            <strong className="doc-nav-title">Pengaturan »</strong>
          </div>
        </div>
      </div>
    );
  }

  // 6. MODULE: Pembelian — hanya sub-modul yang punya panduan
  if (currentModule === 'Pembelian') {
    return (
      <div className="page-index">
        <h1 className="page-title">Pembelian</h1>
        <p className="page-subtitle">Kumpulan modul dan tutorial alur pengadaan & pembelian di CashFlow Online</p>

        <div className="articles-grid">
          <div className="folder-card" onClick={() => handleSelectModule('Pesanan Pembelian')}>
            <div className="folder-card-header">
              <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
              <h3>Pesanan Pembelian</h3>
            </div>
            <p className="folder-card-meta">8 panduan</p>
          </div>

          <div className="folder-card" onClick={() => handleSelectModule('Penerimaan Barang')}>
            <div className="folder-card-header">
              <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
              <h3>Penerimaan Barang</h3>
            </div>
            <p className="folder-card-meta">3 panduan</p>
          </div>

          <div className="folder-card" onClick={() => handleSelectModule('Faktur Pembelian')}>
            <div className="folder-card-header">
              <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
              <h3>Faktur Pembelian</h3>
            </div>
            <p className="folder-card-meta">14 panduan</p>
          </div>

          <div className="folder-card" onClick={() => handleSelectModule('Retur Pembelian')}>
            <div className="folder-card-header">
              <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
              <h3>Retur Pembelian</h3>
            </div>
            <p className="folder-card-meta">7 panduan</p>
          </div>

          <div className="folder-card" onClick={() => handleSelectModule('Lainnya')}>
            <div className="folder-card-header">
              <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
              <h3>Lainnya</h3>
            </div>
            <p className="folder-card-meta">2 panduan</p>
          </div>

        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule('Fitur CashFlow Online')}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« Fitur CashFlow Online</strong>
          </div>
          <div className="doc-nav-card next" onClick={() => handleSelectModule('Pesanan Pembelian')}>
            <span className="doc-nav-label">Next</span>
            <strong className="doc-nav-title">Pesanan Pembelian »</strong>
          </div>
        </div>
      </div>
    );
  }

  // 6. SUB-MODULE: Pesanan Pembelian
  if (currentModule === 'Pesanan Pembelian') {
    const poArticles = [
      { id: 'po-create', title: 'Cara Order Barang ke Supplier (Pesanan Pembelian)', desc: 'Panduan langkah demi langkah membuat pesanan pembelian (PO) resmi ke pihak vendor...' },
      { id: 'po-dp', title: 'Cara Mencatat Uang Muka (DP) Pembelian ke Supplier', desc: 'Kelola pembayaran termin awal atau DP pemesanan barang agar tercatat rapi di jurnal...' },
      { id: 'po-cancel', title: 'Cara Membatalkan Pesanan Pembelian', desc: 'Prosedur menutup atau membatalkan PO yang belum terbit faktur atau barang batal dikirim...' },
      { id: 'po-so', title: 'Cara Order Barang dari Pesanan Penjualan', desc: 'Metode back-to-back ordering otomatis dari SO pelanggan langsung menjadi PO vendor...' },
      { id: 'po-excel', title: 'Cara Input Banyak Data Pembelian dari Excel', desc: 'Gunakan template spreadsheet untuk mengimpor puluhan baris pesanan sekaligus...' },
      { id: 'po-valas', title: 'Cara Memasukkan Data Pembelian Valas Luar Negeri', desc: 'Kelola order barang impor dengan multi-currency dan kurs transaksi terkini...' },
      { id: 'po-pr', title: 'Membuat Pesanan Pembelian dari Permintaan Barang', desc: 'Konversi Purchase Requisition (PR) divisi internal menjadi PO resmi yang disetujui...' },
      { id: 'po-delete-batch', title: 'Cara Menghapus Banyak Pesanan Pembelian Sekaligus', desc: 'Fitur penghapusan massal untuk merapikan draft pesanan yang sudah tidak berlaku...' },
    ];

    return (
      <div className="page-index">
        <h1 className="page-title">Pesanan Pembelian</h1>
        <p className="page-subtitle">Panduan pembuatan, persetujuan, dan pengelolaan pesanan pembelian (PO) ke supplier</p>

        <div className="articles-grid">
          {poArticles.map((art) => (
            <div key={art.id} className="card" onClick={() => setActiveTab(art.id)}>
              <div className="card-header-icon">
                <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
                <h3>{art.title}</h3>
              </div>
              <p>{art.desc}</p>
            </div>
          ))}
        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule('Pembelian')}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« Pembelian</strong>
          </div>
          <div className="doc-nav-card next" onClick={() => handleSelectModule('Penerimaan Barang')}>
            <span className="doc-nav-label">Next</span>
            <strong className="doc-nav-title">Penerimaan Barang »</strong>
          </div>
        </div>
      </div>
    );
  }

  // 7. SUB-MODULE: Penerimaan Barang
  if (currentModule === 'Penerimaan Barang') {
    return (
      <div className="page-index">
        <h1 className="page-title">Penerimaan Barang</h1>
        <p className="page-subtitle">Kumpulan tutorial mengelola penerimaan barang di gudang CashFlow Online</p>

        <div className="articles-grid">
          <div className="card" onClick={() => setActiveTab('art1')}>
            <div className="card-header-icon">
              <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
              <h3>Cara mencatat barang masuk dari supplier</h3>
            </div>
            <p>Barang sudah sampai gudang tapi masih bingung cara mencatatnya agar rapi dan otomatis masuk ke sistem? Fitur Penerimaan...</p>
          </div>

          <div className="card" onClick={() => setActiveTab('art2')}>
            <div className="card-header-icon">
              <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
              <h3>Cara Menerima Barang dari Pesanan Pembelian yang Sudah Dibuat</h3>
            </div>
            <p>Gunakan fitur Penerimaan Barang dari Pesanan (PO) di CashFlow untuk mencocokkan data barang datang dengan Purchase Order yang telah disetujui sebelumnya.</p>
          </div>

          <div className="card" onClick={() => setActiveTab('art3')}>
            <div className="card-header-icon">
              <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
              <h3>Cara Mengatasi Pesan Error: Jumlah Pengeluaran Tidak Boleh Nol</h3>
            </div>
            <p>Saat Anda menyimpan transaksi Penerimaan Barang atau Faktur Pembelian yang terdapat barang bertipe Aset Tetap...</p>
          </div>
        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule('Pesanan Pembelian')}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« Pesanan Pembelian</strong>
          </div>
          <div className="doc-nav-card next" onClick={() => handleSelectModule('Faktur Pembelian')}>
            <span className="doc-nav-label">Next</span>
            <strong className="doc-nav-title">Faktur Pembelian »</strong>
          </div>
        </div>
      </div>
    );
  }

  // 8. SUB-MODULE: Faktur Pembelian
  if (currentModule === 'Faktur Pembelian') {
    const fakturArticles = [
      { id: 'faktur-create', title: 'Cara Membuat Faktur Pembelian', desc: 'Panduan lengkap mencatat faktur tagihan dari vendor baik secara langsung maupun bertahap...' },
      { id: 'faktur-po', title: 'Proses Pesanan Pembelian Menjadi Tagihan Supplier', desc: 'Tarik data dari PO yang sudah disetujui untuk langsung menerbitkan faktur utang usaha...' },
      { id: 'faktur-terima', title: 'Invoice Dari Barang yang Sudah Diterima', desc: 'Mencatat faktur tagihan supplier berdasarkan nomor Surat Jalan/Penerimaan Barang gudang...' },
      { id: 'faktur-sebelum-datang', title: 'Invoice Supplier Sebelum Barang Datang', desc: 'Kelola pembayaran di muka atas faktur sebelum fisik barang tiba di lokasi gudang...' },
      { id: 'faktur-tagihan-sebelum-terima', title: 'Tagihan Supplier Sebelum Barang Diterima', desc: 'Pengaturan akun perantara untuk transaksi tagihan yang terbit lebih awal dari logistik...' },
      { id: 'faktur-beban-cost', title: 'Alokasi Beban Pembelian ke Cost Persediaan', desc: 'Bebankan biaya pengiriman, bongkar muat, atau asuransi langsung ke HPP nilai barang...' },
      { id: 'faktur-ongkir-hpp', title: 'Alokasi Biaya Ongkir Forwarder ke HPP', desc: 'Cara mencatat ongkir dari ekspedisi pihak ketiga agar otomatis menambah nilai persediaan...' },
      { id: 'faktur-potong-dp', title: 'Potong Faktur Pembelian dengan Uang Muka', desc: 'Kurangkan saldo DP yang pernah disetor ke supplier pada saat pelunasan faktur tagihan...' },
      { id: 'faktur-kurangi-tagihan', title: 'Kurangi Tagihan dengan Potongan Supplier', desc: 'Pencatatan diskon termin atau potongan khusus dari vendor pada formulir faktur...' },
      { id: 'faktur-upload-excel', title: 'Upload Faktur Pembelian dari File Excel', desc: 'Import massal puluhan tagihan supplier menggunakan format template Excel CashFlow...' },
      { id: 'faktur-pajak-renovasi', title: 'Pajak Jasa Renovasi Perorangan pada Faktur Pembelian', desc: 'Pemotongan PPh 21/23 atas jasa tukang atau perorangan yang ditagihkan di faktur...' },
      { id: 'faktur-diskon-jurnal', title: 'Solusi Diskon Tidak Muncul di Jurnal Faktur Pembelian', desc: 'Diagnosa penyebab selisih akun diskon pembelian yang tidak tampak di buku besar...' },
      { id: 'faktur-akun-pembulatan', title: 'Mengatasi Error Akun Pembulatan Belum Diisi', desc: 'Solusi cepat ketika sistem meminta akun penampung selisih desimal pembulatan harga...' },
      { id: 'faktur-error-update-cost', title: 'Mengatasi Error Tidak Dapat Memperbarui Biaya Persediaan', desc: 'Langkah pemecahan masalah saat tanggal transaksi mendahului tanggal saldo awal stok...' },
    ];

    return (
      <div className="page-index">
        <h1 className="page-title">Faktur Pembelian</h1>
        <p className="page-subtitle">Panduan pencatatan tagihan supplier, faktur pembelian, dan biaya logistik di CashFlow Online</p>

        <div className="articles-grid">
          {fakturArticles.map((art) => (
            <div key={art.id} className="card" onClick={() => setActiveTab(art.id)}>
              <div className="card-header-icon">
                <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
                <h3>{art.title}</h3>
              </div>
              <p>{art.desc}</p>
            </div>
          ))}
        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule('Penerimaan Barang')}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« Penerimaan Barang</strong>
          </div>
          <div className="doc-nav-card next" onClick={() => handleSelectModule('Lainnya')}>
            <span className="doc-nav-label">Next</span>
            <strong className="doc-nav-title">Lainnya »</strong>
          </div>
        </div>
      </div>
    );
  }

  const penjualanFolders: string[] = ["Penawaran Penjualan", "Pesanan Penjualan", "Pengiriman Pesanan", "Uang Muka Penjualan", "Faktur Penjualan", "Penerimaan Penjualan", "Retur Penjualan", "Tukar Faktur", "Klaim Pelanggan", "Pengepakan Barang", "Kategori Pelanggan", "Kategori Penjualan", "Pelanggan", "Penyesuaian Harga atau Diskon", "Komisi Penjualan", "Target Penjualan", "SmartLink E-Commerce", "Checkin", "Trade Portal (Beta)", "Artikel Tambahan"];

  const persediaanFolders: string[] = ["Permintaan Barang", "Pemindahan Barang", "Penyesuaian Persediaan", "Pekerjaan Pesanan", "Hasil Stok Opname", "Penambahan Bahan Baku", "Barang dan Jasa", "Gudang", "Satuan barang", "Kategori Barang", "Merek Barang", "Pemenuhan Pesanan", "Barang Per Gudang", "Pengisian Nomor Seri", "Penyelesaian Pesanan", "Perintah Stok Opname", "Barang Stok Minimum", "Artikel Tambahan"];

  // MODULE: Laporan — 9 kelompok (45 panduan)
  const laporanFolders: string[] = ["Daftar Laporan", "SPT Masa PPN / PPN Bm", "Formulir 1721", "Formulir 1721 A1", "Formulir SPT PPh PS.21", "Bukti Potong PPh PS.21", "ePPh 2326 dan ePPh 1771", "SPT PPh Ps. 23", "SPT PPh Ps. 15"];
  if (currentModule === 'Laporan' || laporanFolders.includes(currentModule)) {
    const info: Record<string, { count: number; ids: string[]; titles: string[]; descs: string[] }> = {
    'Daftar Laporan': { count: 37, ids: ["lp-001", "lp-002", "lp-003", "lp-004", "lp-005", "lp-006", "lp-007", "lp-008", "lp-009", "lp-010", "lp-011", "lp-012", "lp-013", "lp-014", "lp-015", "lp-016", "lp-017", "lp-018", "lp-019", "lp-020", "lp-021", "lp-022", "lp-023", "lp-024", "lp-025", "lp-026", "lp-027", "lp-028", "lp-029", "lp-030", "lp-031", "lp-032", "lp-033", "lp-034", "lp-035", "lp-036", "lp-037"], titles: ["Cara melihat laporan", "Cara membuat laporan penjualan per kategori", "Cara menyimpan format laporan", "Cara cek sisa pinjaman karyawan", "Cara melihat laba bersih setelah pajak", "Cara melihat barang yang belum diproses di delivery order", "Cara cek pesanan pelanggan yang belum diproses", "Cara mengatasi selisih penjualan laba rugi", "Cara menampilkan tanggal jatuh tempo", "Cara melihat daftar utang dan piutang yang belum lunas", "Cara melihat kekayaan bersih perusahaan", "Cara melihat total transaksi penjualan", "Cara melihat keuntungan tiap barang", "Cara melihat asal nilai laba tahun ini", "Cara melihat sisa pesanan pembelian belum diterima", "Cara melihat perubahan stok barang setelah koreksi", "Cara mengatasi laporan pdf terpotong", "Cara melihat piutang yang sudah jatuh tempo", "Pengaruh stok minus terhadap persediaan dan BPP", "Cara Mengetahui Lama Pembayaran Pelanggan", "Cara melihat penjualan terbesar", "Cara memberikan nomor urut di laporan", "Cara melihat stok barang box dan pcs", "Penyebab total laporan laba rugi proyek berbeda", "Cara melihat jeda pembayaran faktur pembelian", "Cara melihat tagihan pelanggan per departemen", "Cara melihat keuntungan setiap produk", "Cara mengatasi pesan error skrip kolom tidak valid", "Cara membuat kolom tanda tangan di laporan", "Cara mengubah format laporan keuangan", "Cara melihat harga bersih penjualan", "Cara melihat total nilai stok per kategori barang", "Cara mengubah kts belum terproses menjadi 0", "Cara cek piutang pelanggan", "Cara melihat permintaan barang belum diproses per kategori", "Cara cek barang yang dibeli dari setiap supplier", "Cara membuat format tanggal laporan menjadi DD/MM/YYYY"], descs: ["Begini cara cara melihat laporan laba rugi, neraca, arus kas, dan berbagai laporan bisnis lainnya di Accurate Online dengan mudah.", "Begini cara mudah membuat laporan penjualan per kategori barang di Accurate Online untuk analisis bisnis yang lebih efektif!", "Simpan format laporan yang sudah dimodifikasi agar bisa digunakan kembali kapan saja tanpa setting ulang. Praktis untuk UMKM dan admin keuangan.", "Ingin mengetahui sisa pinjaman setiap karyawan? Pelajari cara cek laporan pinjaman karyawan di Accurate Online dengan mudah.", "Begini  cara melihat laba bersih setelah pajak di Accurate Online agar laporan keuangan bisnis lebih lengkap dan mudah dipahami.", "Ingin tahu barang mana yang belum diproses dari Delivery Order (DO)? Begini cara menampilkan sisa kuantitas yang belum diproses pada laporan Delivery Order Accurate Onlin", "Masih ada pesanan pelanggan yang belum diproses? Ikuti cara cek jumlah pesanan yang belum dikirim di Accurate Online agar proses penjualan lebih terkontrol.", "Laporan Laba Rugi dan Laporan Penjualan di Accurate Online berbeda? Ketahui penyebab selisihnya dan ikuti langkah mudah untuk menemukan transaksi yang membuat nilainya ti", "Ingin melihat tanggal jatuh tempo di laporan faktur penjualan Accurate Online? Begini caranya!", "Cara melihat laporan umur piutang dan utang di Accurate Online untuk memantau perputaran pembayaran pelanggan dan pemasok.", "Ketahui nilai kekayaan bersih bisnis melalui Grafik Harta Bersih di Accurate Online. Begini cara menghitungnya dari total aset dan kewajiban secara mudah.", "Cara menampilkan jumlah transaksi pada Laporan Daftar Faktur Penjualan di Accurate Online dengan modifikasi skrip khusus.", "Cara menampilkan margin laba kotor penjualan per barang di Accurate Online dengan modifikasi laporan dan rumus skrip khusus", "Ingin tahu dari mana nilai Laba Tahun Ini di Laporan Neraca berasal? Pelajari cara mengeceknya melalui Laporan Laba/Rugi di Accurate Online.", "Begini cara melihat sisa pesanan pembelian yang belum diterima meskipun Purchase Order sudah ditutup menggunakan laporan di Accurate Online.", "Begini cara mengetahui perubahan stok barang setelah proses koreksi atau penyesuaian stok di Accurate Online. Lengkap dengan cara melihat stok akhir setiap barang.", "Pelajari cara mengatur ekspor laporan Accurate Online ke PDF agar tidak terpotong dengan mengubah ukuran kertas dan orientasi halaman laporan.", "Cara menampilkan umur piutang berdasarkan jatuh tempo Tukar Faktur pada laporan Faktur Belum Lunas di Accurate Online.", "Ini pengaruh stok minus terhadap persediaan dan BPP pada laporan keuangan Accurate Online serta cara memahami penyesuaiannya.", "Begini cara melihat dan menghitung rata-rata lama pembayaran pelanggan di Accurate Online untuk membantu analisis piutang bisnis.", "Cari tahu cara menampilkan penjualan dengan nilai terbesar di Accurate Online agar lebih mudah menganalisis transaksi yang paling berpengaruh.", "Begini cara memberi nomor urut pada setiap baris laporan di Accurate Online agar proses pengecekan dan analisis data menjadi lebih mudah.", "Begini cara melihat stok barang dalam Box dan PCS sekaligus di Accurate Online agar informasi persediaan lebih mudah dipahami.", "Cari tahu penyebab total laporan Laba Rugi Proyek terlihat berbeda di Accurate Online dan pahami pengaruh Proyek Induk terhadap perhitungan total.", "Begini cara melihat jeda waktu pembayaran faktur pembelian di Accurate Online agar proses pengelolaan utang lebih mudah dipantau.", "Begini cara melihat tagihan pelanggan berdasarkan departemen di Accurate Online untuk memudahkan monitoring pembayaran.", "Ingin mengetahui keuntungan setiap produk yang dijual? Begini cara menampilkannya di Accurate Online dengan mudah.", "Mengalami error Skrip Kolom Tidak Valid saat membuat Kolom Skrip Khusus di Accurate Online? Ketahui penyebabnya dan cara mengatasinya agar laporan dapat ditampilkan tanpa", "Ingin laporan Accurate Online memiliki tempat tanda tangan? Ikuti langkah mudah untuk membuat kolom tanda tangan pada laporan agar siap dicetak.", "Begini cara mengubah format Laporan Keuangan di Accurate Online, mulai dari mengatur struktur akun, label, perhitungan, hingga menyimpan tampilan laporan sesuai kebutuhan", "Ingin mengetahui harga bersih setelah diskon pada setiap transaksi? Simak cara menampilkan harga bersih penjualan di laporan Accurate Online.", "Panduan memodifikasi laporan Nilai Persediaan agar tampil per Kategori Barang di Accurate Online untuk analisis stok lebih detail.", "Panduan menampilkan Kts Belum Terproses 0 saat Pesanan Pembelian ditutup pada laporan Rincian Pesanan Pembelian di Accurate Online.", "Ingin mengetahui siapa pelanggan yang masih memiliki utang? Simak cara cek piutang pelanggan di Accurate Online lengkap dengan saldo dan riwayat pembayarannya.", "Begini cara menampilkan laporan permintaan barang yang masih berstatus Menunggu Diproses per kategori di Accurate Online agar proses pembelian dan pengadaan lebih terkont", "Mau tahu barang apa saja yang dibeli dari masing-masing supplier? Ikuti panduan menampilkan laporan pembelian per supplier di Accurate Online.", "Ingin format tanggal laporan tampil DD/MM/YYYY? Ikuti langkah-langkah mengubah tampilan tanggal di Accurate Online dengan mudah."] },
    'SPT Masa PPN / PPN Bm': { count: 1, ids: ["lp-038"], titles: ["Cara membuat laporan SPT Masa PPN"], descs: ["Begini cara mudah membuat SPT Masa PPN/PPNBm di Accurate Online: akses menu Laporan, atur periode dan tipe, edit transaksi, lalu ekspor CSV untuk e‑Faktur DJP. Simak pand"] },
    'Formulir 1721': { count: 1, ids: ["lp-039"], titles: ["Cara membuat formulir 1721-i bulanan"], descs: ["Begini cara membuat Formulir 1721-I Bulanan di Accurate Online sebagai bukti potong PPh 21 karyawan dengan langkah yang mudah diikuti."] },
    'Formulir 1721 A1': { count: 1, ids: ["lp-040"], titles: ["Cara membuat bukti potong pajak karyawan 1721-A1"], descs: ["Begini cara membuat Bukti Potong Pajak Karyawan (Formulir 1721-A1) di Accurate Online untuk kebutuhan pelaporan PPh 21 tahunan."] },
    'Formulir SPT PPh PS.21': { count: 1, ids: ["lp-041"], titles: ["Cara membuat SPT PPh 21"], descs: ["Inilah cara mudah membuat dan mencetak SPT PPh 21 di Accurate Online. Cukup buka modul Laporan, isi data NPWP dan jenis SPT, lalu cetak file siap dilaporkan—langsung dan "] },
    'Bukti Potong PPh PS.21': { count: 1, ids: ["lp-042"], titles: ["Cara membuat bukti potong pajak karyawan"], descs: ["Begini cara membuat bukti potong pajak karyawan (PPh 21) di Accurate Online menggunakan Formulir 1721-A1 dan 1721-VI. Cocok untuk HR, payroll, dan pemilik usaha."] },
    'ePPh 2326 dan ePPh 1771': { count: 1, ids: ["lp-043"], titles: ["Cara ekspor data PPh 23 ke ePPh 2326 dan ePPh 1771"], descs: ["Begini cara ekspor data PPh 23 dari Accurate Online ke ePPh 2326 dan ePPh 1771 dalam format CSV."] },
    'SPT PPh Ps. 23': { count: 1, ids: ["lp-044"], titles: ["Cara membuat bukti potong pajak PPh 23"], descs: ["Begini Pelajari cara cepat membuat SPT PPh Ps. 23 dan mencetak bukti potongan secara otomatis di Accurate Online. Ikuti langkah: akses menu Laporan, pilih tab SPT dan tab"] },
    'SPT PPh Ps. 15': { count: 1, ids: ["lp-045"], titles: ["Cara cetak bukti potong PPh 15 dan SPT PPh 15"], descs: ["Butuh mencetak Bukti Potong PPh 15 atau membuat SPT PPh 15? Simak panduan lengkap menggunakan Accurate Online beserta langkah-langkahnya."] }
  };
    const isFolder = currentModule !== 'Laporan';
    const folder = isFolder ? info[currentModule] : null;

    return (
      <div className="page-index">
        <h1 className="page-title">{currentModule}</h1>
        <p className="page-subtitle">
          {isFolder
            ? `Panduan ${currentModule} pada modul Laporan CashFlow Online`
            : 'Kumpulan panduan laporan keuangan dan formulir pajak CashFlow Online'}
        </p>

        <div className="articles-grid">
          {isFolder && folder
            ? folder.ids.map((id, i) => (
                <div key={id} className="card" onClick={() => setActiveTab(id)}>
                  <div className="card-header-icon">
                    <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
                    <h3>{folder.titles[i]}</h3>
                  </div>
                  <p>{folder.descs[i]}</p>
                </div>
              ))
            : Object.entries(info).map(([name, d]) => (
                <div key={name} className="folder-card" onClick={() => handleSelectModule(name)}>
                  <div className="folder-card-header">
                    <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
                    <h3>{name}</h3>
                  </div>
                  <p className="folder-card-meta">{d.count} panduan</p>
                </div>
              ))}
        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule('Smartlink Tax')}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« Smartlink Tax</strong>
          </div>
        </div>
      </div>
    );
  }

  // MODULE: Smartlink Tax — 3 kelompok (3 panduan)
  const smartlinkFolders: string[] = ["E-Faktur Legacy", "E-Faktur CTAS", "E-mail Faktur Pajak"];
  if (currentModule === 'Smartlink Tax' || smartlinkFolders.includes(currentModule)) {
    const info: Record<string, { count: number; ids: string[]; titles: string[]; descs: string[] }> = {
    'E-Faktur Legacy': { count: 1, ids: ["st-001"], titles: ["Cara lapor PPN dari Accurate"], descs: ["Ingin lapor PPN langsung dari Accurate Online? Pelajari cara menginstal e-Faktur Legacy dan menghubungkannya ke aplikasi PJAP."] },
    'E-Faktur CTAS': { count: 1, ids: ["st-002"], titles: ["Cara beralih ke e-faktur CTAS"], descs: ["Sedang migrasi ke Coretax DJP? Ikuti panduan e-Faktur CTAS di Accurate Online agar proses upload Faktur Pajak berjalan lebih mudah."] },
    'E-mail Faktur Pajak': { count: 1, ids: ["st-003"], titles: ["Cara kirim faktur pajak ke customer"], descs: ["Begini cara mengirim Faktur Pajak ke customer lewat email langsung dari Accurate Online dengan proses yang cepat dan praktis"] }
  };
    const isFolder = currentModule !== 'Smartlink Tax';
    const folder = isFolder ? info[currentModule] : null;

    return (
      <div className="page-index">
        <h1 className="page-title">{currentModule}</h1>
        <p className="page-subtitle">
          {isFolder
            ? `Panduan ${currentModule} pada modul Smartlink Tax CashFlow Online`
            : 'Kumpulan panduan e-Faktur Legacy, CTAS, dan e-mail faktur pajak CashFlow Online'}
        </p>

        <div className="articles-grid">
          {isFolder && folder
            ? folder.ids.map((id, i) => (
                <div key={id} className="card" onClick={() => setActiveTab(id)}>
                  <div className="card-header-icon">
                    <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
                    <h3>{folder.titles[i]}</h3>
                  </div>
                  <p>{folder.descs[i]}</p>
                </div>
              ))
            : Object.entries(info).map(([name, d]) => (
                <div key={name} className="folder-card" onClick={() => handleSelectModule(name)}>
                  <div className="folder-card-header">
                    <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
                    <h3>{name}</h3>
                  </div>
                  <p className="folder-card-meta">{d.count} panduan</p>
                </div>
              ))}
        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule('Proyek Kontraktor')}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« Proyek Kontraktor</strong>
          </div>
          <div className="doc-nav-card next" onClick={() => handleSelectModule('Laporan')}>
            <span className="doc-nav-label">Next</span>
            <strong className="doc-nav-title">Laporan »</strong>
          </div>
        </div>
      </div>
    );
  }

  // MODULE: Proyek Kontraktor — 8 kelompok (11 panduan)
  const kontraktorFolders: string[] = ["Rencana Anggaran", "Bahan Baku Terpakai", "Survey Proyek", "Penyelesaian Proyek", "Monitoring Kontraktor", "Timeline Kontraktor", "Alokasi Bahan Proyek", "Artikel Tambahan"];
  if (currentModule === 'Proyek Kontraktor' || kontraktorFolders.includes(currentModule)) {
    const info: Record<string, { count: number; ids: string[]; titles: string[]; descs: string[] }> = {
    'Rencana Anggaran': { count: 1, ids: ["kt-001"], titles: ["Cara membuat rencana anggaran"], descs: ["Susun Rencana Anggaran Biaya proyek kontraktor di Accurate Online, mulai dari grup, pekerjaan, bahan, biaya, hingga fee kontraktor dan PPN."] },
    'Bahan Baku Terpakai': { count: 1, ids: ["kt-002"], titles: ["Cara menggunakan fitur bahan baku terpakai"], descs: ["Catat pemakaian dan pengembalian bahan baku proyek kontraktor dengan fitur Bahan Baku Terpakai di Accurate Online agar stok gudang selalu sesuai."] },
    'Survey Proyek': { count: 1, ids: ["kt-003"], titles: ["Cara membuat survey proyek"], descs: ["Catat progres pekerjaan dari hasil survei lapangan dengan fitur Survei Proyek di Accurate Online. Pantau perkembangan proyek dibanding rencananya."] },
    'Penyelesaian Proyek': { count: 1, ids: ["kt-004"], titles: ["Cara membuat penyelesaian proyek"], descs: ["Proyek kontraktor sudah rampung? Catat Penyelesaian Proyek di Accurate Online, termasuk sisa barang yang kembali ke gudang, dengan cara berikut."] },
    'Monitoring Kontraktor': { count: 1, ids: ["kt-005"], titles: ["Cara melihat monitoring kontraktor"], descs: ["Pantau perkembangan proyek lewat History Proyek, Progress Proyek, dan Kurva S di Monitoring Kontraktor Accurate Online. Simak caranya di sini."] },
    'Timeline Kontraktor': { count: 1, ids: ["kt-006"], titles: ["Cara melihat timeline kontraktor"], descs: ["Pantau jadwal, urutan pekerjaan, dan potensi keterlambatan proyek lewat Timeline Kontraktor di Accurate Online. Simak cara menampilkannya di sini."] },
    'Alokasi Bahan Proyek': { count: 1, ids: ["kt-007"], titles: ["Cara mencatat alokasi bahan proyek"], descs: ["Cadangkan stok bahan agar tidak terpakai proyek lain. Ikuti cara mencatat Alokasi Bahan Proyek di modul Kontraktor Accurate Online berikut ini."] },
    'Artikel Tambahan': { count: 4, ids: ["kt-008", "kt-009", "kt-010", "kt-011"], titles: ["Cara membuat proyek kontraktor", "Cara install dan setup Proyek Kontraktor", "Cara melihat laporan proyek kontraktor", "Cara membuat formula pekerjaan dan biaya proyek"], descs: ["Buat data Proyek Kontraktor di Accurate Online, mulai dari info proyek, kontrak, penanggung jawab, hingga akun, agar biaya dan pendapatan terpantau.", "Panduan install add-on Kontraktor dari Accurate Store dan mengatur preferensi Proyek Kontraktor, mulai dari akun proyek hingga opsi substitusi.", "Pantau progres, biaya, dan laba rugi proyek lewat Laporan Proyek Kontraktor di Accurate Online. Ikuti cara menampilkannya dalam empat tahap mudah.", "Kenali Biaya Proyek dan Formula Pekerjaan di add-on Kontraktor Accurate Online, beserta cara membuatnya lewat Barang & Jasa dan rincian bahannya."] }
  };
    const isFolder = currentModule !== 'Proyek Kontraktor';
    const folder = isFolder ? info[currentModule] : null;

    return (
      <div className="page-index">
        <h1 className="page-title">{currentModule}</h1>
        <p className="page-subtitle">
          {isFolder
            ? `Panduan ${currentModule} pada modul Proyek Kontraktor CashFlow Online`
            : 'Kumpulan panduan anggaran, survey, dan penyelesaian proyek kontraktor CashFlow Online'}
        </p>

        <div className="articles-grid">
          {isFolder && folder
            ? folder.ids.map((id, i) => (
                <div key={id} className="card" onClick={() => setActiveTab(id)}>
                  <div className="card-header-icon">
                    <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
                    <h3>{folder.titles[i]}</h3>
                  </div>
                  <p>{folder.descs[i]}</p>
                </div>
              ))
            : Object.entries(info).map(([name, d]) => (
                <div key={name} className="folder-card" onClick={() => handleSelectModule(name)}>
                  <div className="folder-card-header">
                    <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
                    <h3>{name}</h3>
                  </div>
                  <p className="folder-card-meta">{d.count} panduan</p>
                </div>
              ))}
        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule('Manufaktur')}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« Manufaktur</strong>
          </div>
          <div className="doc-nav-card next" onClick={() => handleSelectModule('Smartlink Tax')}>
            <span className="doc-nav-label">Next</span>
            <strong className="doc-nav-title">Smartlink Tax »</strong>
          </div>
        </div>
      </div>
    );
  }

  // MODULE: Manufaktur — 19 kelompok (40 panduan)
  const manufakturFolders: string[] = ["Onboarding Manufaktur", "Standar Biaya Produksi", "Formula Produksi", "Rencana Produksi", "Perintah Kerja", "Pengambilan Bahan Baku", "Persiapan Bahan Baku", "Tahapan Proses", "Penyelesaian Barang Jadi", "Alokasi Biaya Produksi", "Jadwal Produksi", "Pemenuhan Bahan Baku", "Monitor Perintah Kerja", "Histori Perintah Kerja", "Tahapan Produksi", "Penanggung Jawab", "Subkon Biaya Produksi", "Perhitungan Nilai Variance", "Artikel Tambahan"];
  if (currentModule === 'Manufaktur' || manufakturFolders.includes(currentModule)) {
    const info: Record<string, { count: number; ids: string[]; titles: string[]; descs: string[] }> = {
    'Onboarding Manufaktur': { count: 1, ids: ["mf-001"], titles: ["Cara mengaktifkan fitur manufaktur"], descs: ["Inilah fungsi fitur Manufaktur di Accurate Online serta cara mengaktifkan dan mengaturnya untuk mencatat proses produksi secara akurat."] },
    'Standar Biaya Produksi': { count: 3, ids: ["mf-002", "mf-003", "mf-004"], titles: ["Cara menentukan HPP produksi", "Cara mengaktifkan produksi tanpa bahan baku", "Cara upload daftar harga bahan baku"], descs: ["Ingin tahu estimasi biaya produksi sebelum proses produksi dimulai? Gunakan fitur Standar Biaya Produksi di Accurate Online dan hitung HPP lebih akurat.", "Begini cara mengaktifkan fitur Produksi Tanpa Bahan Baku di Accurate Online untuk mencatat produksi jasa atau produksi yang hanya menggunakan biaya tenaga kerja dan overh", "Begini cara upload daftar harga bahan baku dari Excel ke Accurate Online agar data biaya produksi bisa diperbarui lebih cepat tanpa input manual."] },
    'Formula Produksi': { count: 4, ids: ["mf-005", "mf-006", "mf-007", "mf-008"], titles: ["Cara menentukan bahan baku produksi", "Cara mencatat produksi dengan multi tahapan", "Cara mengatasi error harga standar harus lebih besar dari 0", "Cara mengatasi error kualitas produk kedua"], descs: ["Bingung mengatur bahan baku dan biaya produksi? Begini cara membuat Formula Produksi di Accurate Online agar proses manufaktur lebih rapi dan biaya lebih terkontrol.", "Begini cara mencatat produksi multi tahap di Accurate Online mulai dari membuat tahapan produksi, bahan baku, biaya produksi, hingga proses subkon.", "Muncul error “Harga Standar Harus Lebih Besar dari 0” saat menyimpan Formula Produksi? Ini penyebab dan cara mengatasinya di Accurate Online.", "Muncul error Kualitas produk kedua tidak boleh sama dengan bahan baku saat membuat Formula Produksi? Simak penyebab dan cara mengatasinya di Accurate Online."] },
    'Rencana Produksi': { count: 2, ids: ["mf-009", "mf-010"], titles: ["Cara menyusun rencana produksi", "Cara produksi barang sesuai pesanan customer"], descs: ["Susun rencana produksi dengan mudah di Accurate Online. Cocok untuk UMKM manufaktur yang ingin mengatur jadwal produksi dan perintah kerja lebih efektif.", "Kelola produksi berdasarkan pesanan customer agar stok lebih terkontrol. Pelajari caranya di Accurate Online dengan mudah."] },
    'Perintah Kerja': { count: 6, ids: ["mf-011", "mf-012", "mf-013", "mf-014", "mf-015", "mf-016"], titles: ["Cara mencatat produksi barang", "Cara mengatur proses produksi bertahap", "Cara menghitung progress produksi", "Cara melihat proses akhir bulan pada laporan produksi", "Cara membuat perintah kerja dari rencana produksi", "Cara menutup perintah kerja yang belum selesai"], descs: ["Ingin mencatat proses produksi barang dengan rapi? Begini cara menggunakan fitur Perintah Kerja di Accurate Online untuk mengelola bahan baku, biaya, dan hasil produksi.", "Kelola proses produksi yang terdiri dari beberapa tahapan dengan lebih mudah. Pelajari cara mengatur tahapan produksi di Accurate Online.", "Bingung progress produksi di Accurate Online dihitung dari mana? Begini cara menghitung progress SPK berdasarkan bahan baku, tahapan produksi, dan finishing secara lengka", "Belum menemukan informasi Proses Akhir Bulan di laporan produksi? Bgini cara mudah untuk menampilkannya di Accurate Online.", "Panduan membuat Perintah Kerja dari Rencana Produksi di Accurate Online agar proses produksi lebih terstruktur dan mudah dipantau.", "Panduan menutup Perintah Kerja yang belum selesai di Accurate Online agar proses produksi dihentikan dan tidak dapat diproses kembali."] },
    'Pengambilan Bahan Baku': { count: 6, ids: ["mf-017", "mf-018", "mf-019", "mf-020", "mf-021", "mf-022"], titles: ["Cara mencatat pengambilan bahan baku", "Cara mengeluarkan bahan baku untuk produksi", "Mengatasi Error Perintah Kerja Belum Pengambilan Bahan Baku", "Cara impor bahan baku perintah kerja dari excel", "Cara membatasi pengambilan bahan baku", "Cara mengatasi error akun biaya sama dengan akun persediaan"], descs: ["Begini cara mengambil bahan baku untuk proses produksi di Accurate Online. Lengkap dengan langkah-langkah, retur bahan baku, dan tips agar stok tetap akurat.", "Begini cara mengeluarkan bahan baku sesuai tahapan produksi di Accurate Online agar stok dan biaya produksi tercatat lebih akurat.", "Muncul error saat Proses Akhir Bulan karena Perintah Kerja belum melakukan Pengambilan Bahan Baku? Pelajari penyebab dan cara mengatasinya di Accurate Online.", "Masukkan daftar bahan baku dari Excel ke Accurate Online tanpa input satu per satu. Cocok untuk produksi dengan banyak material.", "Begini cara membatasi pengguna agar tidak bisa mengambil bahan baku melebihi jumlah pada Perintah Kerja melalui pengaturan hak akses di Accurate Online.", "Panduan mengatasi error akun biaya sama dengan akun persediaan saat menyimpan transaksi Pengambilan Bahan Baku di Accurate Online."] },
    'Persiapan Bahan Baku': { count: 1, ids: ["mf-023"], titles: ["Cara membuat persiapan bahan baku"], descs: ["Ingin tahu bahan baku apa saja yang harus disiapkan sebelum produksi? Begini cara membuat daftar kebutuhan bahan baku di Accurate Online dengan mudah."] },
    'Tahapan Proses': { count: 1, ids: ["mf-024"], titles: ["Cara mencatat proses produksi"], descs: ["Begini cara mencatat proses produksi dari tahap mulai hingga selesai di Accurate Online agar pekerjaan produksi lebih mudah dipantau."] },
    'Penyelesaian Barang Jadi': { count: 2, ids: ["mf-025", "mf-026"], titles: ["Cara mencatat hasil produksi", "Cara membatasi user proses produksi"], descs: ["Sudah selesai produksi? Begini cara memasukkan hasil produksi ke stok barang di Accurate Online agar persediaan dan laporan keuangan otomatis diperbarui.", "Atur hak akses pengguna di Accurate Online agar proses produksi tidak bisa diselesaikan sebelum bahan baku diambil sesuai prosedur."] },
    'Alokasi Biaya Produksi': { count: 2, ids: ["mf-027", "mf-028"], titles: ["Cara memasukkan biaya produksi", "Cara mengatasi error alokasi biaya produksi sudah ada"], descs: ["Biaya listrik, air, atau overhead belum masuk ke HPP? Begini cara mengalokasikan biaya produksi dengan benar di Accurate Online.", "Cara mengatasi error Alokasi Biaya Produksi tidak bisa dibuat karena sudah ada periode selanjutnya di Accurate Online."] },
    'Jadwal Produksi': { count: 1, ids: ["mf-029"], titles: ["Cara melihat jadwal produksi"], descs: ["Lihat jadwal produksi berdasarkan Rencana Produksi di Accurate Online. Pantau produksi per bulan dan tahun agar proses manufaktur lebih terencana."] },
    'Pemenuhan Bahan Baku': { count: 2, ids: ["mf-030", "mf-031"], titles: ["Cara mengecek ketersediaan bahan baku produksi", "Cara membuat pesanan pembelian bahan baku"], descs: ["Pastikan stok bahan baku cukup sebelum produksi dimulai. Begini cara mengeceknya dan membuat Permintaan Barang di Accurate Online.", "Stok bahan baku tidak mencukupi? Buat Pesanan Pembelian langsung dari Accurate Online agar produksi tetap berjalan tanpa hambatan."] },
    'Monitor Perintah Kerja': { count: 1, ids: ["mf-032"], titles: ["Cara cek progres produksi"], descs: ["Pantau progres produksi dengan mudah di Accurate Online, mulai dari jadwal produksi hingga barang selesai diproduksi."] },
    'Histori Perintah Kerja': { count: 1, ids: ["mf-033"], titles: ["Cara melihat riwayat produksi barang"], descs: ["Lihat riwayat produksi barang dari perintah kerja yang sudah diproses di Accurate Online."] },
    'Tahapan Produksi': { count: 1, ids: ["mf-034"], titles: ["Cara membuat proses produksi bertahap"], descs: ["Kelola setiap tahapan produksi di Accurate Online, mulai dari cutting, menjahit hingga finishing dalam satu alur produksi."] },
    'Penanggung Jawab': { count: 1, ids: ["mf-035"], titles: ["Cara menambahkan penanggung jawab produksi"], descs: ["Begini cara menambahkan penanggung jawab pada Perintah Kerja di Accurate Online agar proses produksi lebih terkontrol dan mudah dipantau."] },
    'Subkon Biaya Produksi': { count: 1, ids: ["mf-036"], titles: ["Cara mencatat biaya produksi dari vendor"], descs: ["Begini cara mencatat biaya produksi vendor atau subkon di Accurate Online agar biaya otomatis masuk ke Harga Pokok Produksi."] },
    'Perhitungan Nilai Variance': { count: 3, ids: ["mf-037", "mf-038", "mf-039"], titles: ["Cara menghitung nilai variance biaya produksi", "Cara menghitung selisih biaya produksi", "Menghitung variance yang tidak dialokasikan ke produk"], descs: ["Begini cara nilai variance biaya produksi di Accurate Online, waktu pemrosesan, dan opsi pengakuannya saat Proses Akhir Bulan.", "Begini cara menghitung alokasi selisih biaya produksi ke HPP produk berdasarkan Formula Produksi di Accurate Online.", "Begini cara pencatatan nilai variance yang tidak dialokasikan ke produk di Accurate Online dan melihat jurnalnya di Buku Besar."] },
    'Artikel Tambahan': { count: 1, ids: ["mf-040"], titles: ["Cara Membaca Laporan HPP Produksi"], descs: ["Bingung dengan angka di laporan HPP Produksi? Pelajari cara membaca laporan Harga Pokok Produksi di Accurate Online beserta penjelasan setiap komponennya."] }
  };
    const isFolder = currentModule !== 'Manufaktur';
    const folder = isFolder ? info[currentModule] : null;

    return (
      <div className="page-index">
        <h1 className="page-title">{currentModule}</h1>
        <p className="page-subtitle">
          {isFolder
            ? `Panduan ${currentModule} pada modul Manufaktur CashFlow Online`
            : 'Kumpulan panduan formula, perintah kerja, dan proses produksi CashFlow Online'}
        </p>

        <div className="articles-grid">
          {isFolder && folder
            ? folder.ids.map((id, i) => (
                <div key={id} className="card" onClick={() => setActiveTab(id)}>
                  <div className="card-header-icon">
                    <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
                    <h3>{folder.titles[i]}</h3>
                  </div>
                  <p>{folder.descs[i]}</p>
                </div>
              ))
            : Object.entries(info).map(([name, d]) => (
                <div key={name} className="folder-card" onClick={() => handleSelectModule(name)}>
                  <div className="folder-card-header">
                    <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
                    <h3>{name}</h3>
                  </div>
                  <p className="folder-card-meta">{d.count} panduan</p>
                </div>
              ))}
        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule('Asset Tetap')}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« Asset Tetap</strong>
          </div>
          <div className="doc-nav-card next" onClick={() => handleSelectModule('Proyek Kontraktor')}>
            <span className="doc-nav-label">Next</span>
            <strong className="doc-nav-title">Proyek Kontraktor »</strong>
          </div>
        </div>
      </div>
    );
  }

  // MODULE: Asset Tetap — 8 kelompok (21 panduan)
  const assetTetapFolders: string[] = ["Aset Tetap", "Kategori Aset Tetap", "Kategori Aset Tetap Pajak", "Perubahan Aset Tetap", "Disposisi Aset Tetap", "Pindah Aset Tetap", "Aset Per Lokasi", "Artikel Tambahan"];
  if (currentModule === 'Asset Tetap' || assetTetapFolders.includes(currentModule)) {
    const info: Record<string, { count: number; ids: string[]; titles: string[]; descs: string[] }> = {
    'Aset Tetap': { count: 8, ids: ["at-001", "at-002", "at-003", "at-004", "at-005", "at-006", "at-007", "at-008"], titles: ["Cara mencatat aset perusahaan", "Cara mengimpor aset tetap dari excel", "Cara mencatat pembelian aset tetap melalui pembayaran", "Cara mencatat pembelian aset perusahaan yang belum dibayar", "Cara mencatat pembelian aset tetap secara tunai", "Cara menghapus aset tetap", "Cara mencatat pembelian aset tetap dengan biaya tambahan", "Cara mengatasi penyusutan aset yang tidak jalan"], descs: ["Punya mobil, laptop, atau mesin kantor? Ini cara mudah mencatat aset perusahaan di Accurate Online agar laporan keuangan rapi.", "Cara mengimpor aset tetap di Accurate Online menggunakan Excel agar input data aset perusahaan lebih cepat, rapi, dan minim kesalahan.", "Begini cara mencatat pembelian aset tetap seperti mobil atau laptop melalui pembayaran di Accurate Online secara mudah dan otomatis.", "Beli aset tapi bayar belakangan? Ini cara mudah mencatat pembelian aset kantor lewat faktur pembelian di Accurate Online.", "Begini cara mencatat pembelian aset tetap secara tunai di Accurate Online agar jurnal otomatis terbentuk dan aset tercatat dengan benar.", "Cara menghapus aset tetap di Accurate Online, termasuk jika sudah disusutkan melalui Proses Akhir Bulan", "Begini cara mencatat pembelian aset tetap beserta biaya tambahan seperti ongkos kirim, instalasi, dan pemasangan di Accurate Online.", "Begini cara mudah mengatasi aset tetap yang tidak terdisusutkan saat proses akhir bulan di Accurate Online. Ikuti tutorial lengkap untuk laporan keuangan akurat."] },
    'Kategori Aset Tetap': { count: 1, ids: ["at-009"], titles: ["Cara mengelompokkan aset tetap"], descs: ["Kelola aset kantor, kendaraan, dan peralatan lebih mudah dengan membuat kategori aset tetap di Accurate Online. Simak panduannya di sini."] },
    'Kategori Aset Tetap Pajak': { count: 2, ids: ["at-010", "at-011"], titles: ["Cara membuat kategori aset tetap pajak", "Cara melihat laporan penyusutan aset pajak"], descs: ["Melalui fitur tax fixed asset category, Anda bisa mengatur pengelompokan aset tetap sesuai ketentuan perpajakan yang berlaku dengan lebih mudah. Pelajari caranya di sini!", "Lihat laporan penyusutan aset tetap pajak di Accurate Online lewat menu Laporan untuk kemudahan rekap data fiskal tanpa repot hitung manual."] },
    'Perubahan Aset Tetap': { count: 3, ids: ["at-012", "at-013", "at-014"], titles: ["Fungsi dan manfaat Fitur Perubahan Aset Tetap", "Cara mengubah data aset tetap", "Cara mengoreksi nilai aset tetap"], descs: ["Penjelasan fungsi fitur Perubahan Aset Tetap di Accurate Online. Catat perubahan nilai, umur, metode penyusutan, dan info aset.", "Begini cara mengubah data aset tetap di Accurate Online, mulai dari metode penyusutan, informasi aset, hingga penyesuaian data aset yang sudah tercatat.", "Butuh mengubah nilai aset tetap karena renovasi atau penyesuaian harga? Pelajari cara revaluasi aset tetap di Accurate Online dengan mudah."] },
    'Disposisi Aset Tetap': { count: 2, ids: ["at-015", "at-016"], titles: ["Cara menghapus aset tetap", "Cara mengaktifkan kembali aset tetap"], descs: ["Begini cara menghapus aset tetap yang rusak, hilang, atau sudah tidak digunakan lagi di Accurate Online melalui fitur Disposisi Aset Tetap.", "Aset tetap sudah terlanjur didisposisi? Begini cara mengaktifkan kembali aset tetap di Accurate Online hanya dengan menghapus transaksi disposisi."] },
    'Pindah Aset Tetap': { count: 1, ids: ["at-017"], titles: ["Cara memindahkan aset tetap"], descs: ["Begini cara memindahkan aset tetap ke lokasi, gudang, cabang, atau departemen lain di Accurate Online agar riwayat perpindahan aset tercatat dengan rapi."] },
    'Aset Per Lokasi': { count: 1, ids: ["at-018"], titles: ["Cara melihat aset tetap berdasarkan lokasi"], descs: ["Begini cara melihat daftar aset tetap berdasarkan lokasi, cabang, atau departemen di Accurate Online agar pengelolaan aset lebih mudah dan terkontrol."] },
    'Artikel Tambahan': { count: 3, ids: ["at-019", "at-020", "at-021"], titles: ["Cara mengubah persediaan menjadi aset tetap", "Cara mencatat sewa gedung dibayar dimuka", "Cara biaya membangun gedung menjadi aset"], descs: ["Punya barang gudang yang jadi aset tetap? Ini cara mengubah persediaan menjadi aset di Accurate Online dengan langkah mudah dan akurat.", "Begini cara mencatat sewa gedung dibayar dimuka di Accurate Online sebagai aset tak berwujud lengkap dengan jurnal dan amortisasi mudah.", "Bangun gedung atau renovasi kantor? Ini cara mencatat biaya pembangunan jadi aset tetap di Accurate Online dengan mudah."] }
  };
    const isFolder = currentModule !== 'Asset Tetap';
    const folder = isFolder ? info[currentModule] : null;

    return (
      <div className="page-index">
        <h1 className="page-title">{currentModule}</h1>
        <p className="page-subtitle">
          {isFolder
            ? `Panduan ${currentModule} pada modul Asset Tetap CashFlow Online`
            : 'Kumpulan panduan pengelolaan aset tetap, penyusutan, dan disposisi CashFlow Online'}
        </p>

        <div className="articles-grid">
          {isFolder && folder
            ? folder.ids.map((id, i) => (
                <div key={id} className="card" onClick={() => setActiveTab(id)}>
                  <div className="card-header-icon">
                    <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
                    <h3>{folder.titles[i]}</h3>
                  </div>
                  <p>{folder.descs[i]}</p>
                </div>
              ))
            : Object.entries(info).map(([name, d]) => (
                <div key={name} className="folder-card" onClick={() => handleSelectModule(name)}>
                  <div className="folder-card-header">
                    <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
                    <h3>{name}</h3>
                  </div>
                  <p className="folder-card-meta">{d.count} panduan</p>
                </div>
              ))}
        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule('Persediaan')}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« Persediaan</strong>
          </div>
          <div className="doc-nav-card next" onClick={() => handleSelectModule('Manufaktur')}>
            <span className="doc-nav-label">Next</span>
            <strong className="doc-nav-title">Manufaktur »</strong>
          </div>
        </div>
      </div>
    );
  }

  // MODULE: Persediaan — 18 kelompok (67 panduan)
  if (currentModule === 'Persediaan' || persediaanFolders.includes(currentModule)) {
    const info: Record<string, { count: number; ids: string[]; titles: string[]; descs: string[] }> = {
    'Permintaan Barang': { count: 4, ids: ["ps-001", "ps-002", "ps-003", "ps-004"], titles: ["Cara membuat permintaan barang antar gudang", "Cara membuat permintaan kirim barang antar gudang", "Cara menampilkan perkiraan harga barang", "Cara menghapus banyak permintaan barang sekaligus"], descs: ["Butuh stok dari gudang pusat atau cabang lain? Pelajari cara membuat Permintaan Barang di Accurate Online agar distribusi stok lebih rapi dan terkontrol.", "Begini Cara mencatat dan memproses permintaan kirim barang di Accurate Online menggunakan fitur Permintaan Barang dan Pemindahan Barang.", "Mau tahu perkiraan biaya sebelum barang dibeli? Yuk aktifkan fitur harga estimasi di Permintaan Barang Accurate Online dengan langkah mudah ini.", "unya banyak transaksi Permintaan Barang yang salah atau tidak terpakai? Pelajari cara menghapusnya sekaligus di Accurate Online tanpa perlu hapus satu per satu."] },
    'Pemindahan Barang': { count: 3, ids: ["ps-005", "ps-006", "ps-007"], titles: ["Cara memindahkan stok antar gudang", "Cara impor pemindahan barang antar gudang dari excel", "Cara memindahkan stok barang rusak ke gudang khusus"], descs: ["Butuh memindahkan stok dari satu gudang ke gudang lain? Pelajari cara mencatat perpindahan stok antar gudang di Accurate Online agar jumlah stok tetap akurat dan terkontr", "Punya banyak barang yang harus dipindahkan antar gudang? Pelajari cara impor pemindahan barang dari Excel di Accurate Online agar proses transfer stok lebih cepat dan min", "Panduan memindahkan stok barang rusak ke Gudang Rusak di Accurate Online agar stok layak jual tetap akurat dan terkontrol."] },
    'Penyesuaian Persediaan': { count: 2, ids: ["ps-008", "ps-009"], titles: ["Cara mengubah nilai persediaan tanpa mengubah stok", "Cara Mengatasi Error Akun Penyesuaian Persediaan"], descs: ["Catat perubahan harga barang tanpa ubah jumlah stok di Accurate Online. Gunakan fitur penyesuaian untuk perbaikan laporan persediaan.", "Muncul error Akun Penyesuaian Persediaan Tidak Sama Dengan Akun Persediaan Barang? Ini penyebab dan cara mengatasinya di Accurate Online dengan mudah."] },
    'Pekerjaan Pesanan': { count: 4, ids: ["ps-010", "ps-011", "ps-012", "ps-013"], titles: ["Cara mencatat proses produksi barang", "Solusi error alokasi biaya penyelesaian pesanan", "Penyebab dan cara mengatasi selisih biaya pekerjaan pesanan", "Cara mengatasi error akun biaya sama dengan akun persediaan"], descs: ["Ingin mencatat proses produksi dari bahan baku menjadi barang jadi? Begini cara lengkap menggunakan fitur produksi di Accurate Online.", "Mengalami error Alokasi Biaya harus lebih besar dari 0 saat menyimpan Penyelesaian Pesanan di Accurate Online? Simak penyebab dan cara mudah memperbaikinya di sini.", "Pekerjaan Pesanan di Accurate Online muncul selisih biaya? Pelajari penyebab umum seperti perubahan harga bahan baku dan cara sistem menghitungnya secara otomatis.", "Tidak bisa simpan Pekerjaan Pesanan di Accurate Online karena error akun biaya sama dengan akun persediaan? Ini penyebab dan cara mengatasinya dengan cepat."] },
    'Hasil Stok Opname': { count: 4, ids: ["ps-014", "ps-015", "ps-016", "ps-017"], titles: ["Cara menginput stok hasil stok opname", "Cara menghapus transaksi stok opname", "Cara mengimpor hasil stok opname dari excel", "Penyebab stok opname tidak sama dengan barang dan jasa"], descs: ["Sudah hitung stok di gudang tapi belum update di sistem? Begini cara menginput hasil stok opname di Accurate Online agar stok sesuai kondisi nyata dan laporan tetap akura", "Stok opname tidak bisa dihapus di Accurate Online? Begini cara menghapus transaksi penyesuaian, hasil, hingga perintah stok opname dengan urutan yang benar agar error ter", "Capek input stok satu per satu? Pelajari cara import hasil stok opname dari Excel ke Accurate Online agar lebih cepat, rapi, dan langsung otomatis ke sistem.", "Data stok opname tidak sesuai dengan daftar barang di Accurate Online? Inilah penyebab kenapa barang tidak muncul dan bagaimana sistem menentukan data stok opname."] },
    'Penambahan Bahan Baku': { count: 2, ids: ["ps-018", "ps-019"], titles: ["Cara menambah stok bahan baku tanpa pembelian", "Cara retur bahan baku saat produksi berlebih atau tidak terpakai"], descs: ["Tambah stok bahan baku di Accurate Online tanpa transaksi pembelian. Gunakan fitur penyesuaian untuk update jumlah barang secara cepat.", "Begini cara mencatat pengembalian bahan baku (retur barang) pada transaksi Pekerjaan Pesanan di Accurate Online agar stok tetap akurat."] },
    'Barang dan Jasa': { count: 11, ids: ["ps-020", "ps-021", "ps-022", "ps-023", "ps-024", "ps-025", "ps-026", "ps-027", "ps-028", "ps-029", "ps-030"], titles: ["Pengertian fitur barang dan jasa", "Mengatasi pesan error satuan pembelian diluar unit barang", "Cara mengatur harga jual otomatis per satuan", "Cara mencari data dengan dua kata kunci", "Cara mengimpor barang grup di Accurate Online dari Excel", "Cara membuat barang varian", "Impor barang dengan saldo awal per gudang dan cost berbeda", "Cara mengimpor nomor seri atau batch barang dari excel", "Cara mengatasi error tidak dapat menonaktifkan nomor seri", "Cara mengganti barang saat stok habis", "Cara impor data barang & jasa dari excel"], descs: ["Masih bingung fungsi Barang & Jasa di Accurate Online? Pelajari pengertian, cara menambah, dan perannya dalam stok & laporan keuangan bisnis kamu.", "Muncul error Satuan Pembelian diluar unit barang di Accurate Online? Ini penyebab dan cara cepat mengatasinya agar data barang bisa disimpan normal kembali.", "Kesulitan mengatur harga jual berbeda untuk PCS dan lusin? Pelajari cara setting harga jual otomatis per satuan di Accurate Online agar harga langsung menyesuaikan saat t", "Kesulitan mencari barang atau data di Accurate Online? Gunakan trik 2 kata kunci dengan tanda % agar hasil pencarian lebih cepat, spesifik, dan tidak ribet!", "Capek input barang satu per satu? Pelajari cara import barang grup di Accurate Online lewat Excel. Lebih cepat, rapi, dan bisa upload data sekaligus tanpa ribet!", "Jual produk dengan banyak variasi seperti warna dan ukuran? Begini cara membuat barang varian di Accurate Online dan POS agar stok dan transaksi lebih rapi dan otomatis.", "Impor barang sekaligus saldo awal per gudang dengan nilai cost berbeda di Accurate Online lewat Excel. Lebih cepat, rapi, dan minim salah input.", "Punya barang dengan nomor seri atau batch? Pelajari cara import serial number di Accurate Online lewat Excel agar tracking stok lebih rapi, cepat, dan tidak input manual.", "Tidak bisa menonaktifkan nomor seri barang di Accurate Online? Pelajari penyebab dan cara mengatasi error ini dengan menghapus transaksi terkait secara benar.", "Pelajari cara menggunakan barang substitusi di Accurate Online untuk mengganti barang yang stoknya habis saat proses penjualan.", "Impor barang sekaligus saldo awal per gudang dengan nilai cost berbeda di Accurate Online lewat Excel. Lebih cepat, rapi, dan minim salah input."] },
    'Gudang': { count: 4, ids: ["ps-031", "ps-032", "ps-033", "ps-034"], titles: ["Cara membuat gudang baru", "Cara membuat gudang barang rusak", "Cara mencatat barang rusak atau hilang saat kirim antar gudang", "Cara kerja pemilihan gudang secara otomatis"], descs: ["Ingin pisahkan stok per lokasi? Begini cara membuat gudang baru di Accurate Online agar pengelolaan persediaan lebih rapi dan akurat.", "Stok barang rusak bikin data berantakan? Pelajari cara membuat gudang barang rusak di Accurate Online agar stok lebih rapi dan akurat.", "Stok barang hilang atau rusak saat kirim antar gudang? Pelajari cara mencatatnya di Accurate Online agar stok tetap akurat dan laporan tidak selisih.", "Pelajari cara Accurate Online memilih gudang secara otomatis agar stok tidak salah dan laporan bisnis UMKM lebih akurat dan rapi."] },
    'Satuan barang': { count: 1, ids: ["ps-035"], titles: ["Cara membuat satuan dan multi satuan barang"], descs: ["Begini cara membuat satuan dan multi satuan barang di Accurate Online agar pembelian, penjualan, dan pengelolaan stok dengan berbagai ukuran atau kemasan dapat tercatat s"] },
    'Kategori Barang': { count: 2, ids: ["ps-036", "ps-037"], titles: ["Cara mengelompokkan barang dengan fitur kategori barang", "Cara menginput banyak kategori barang dari Excel"], descs: ["Sekarang, mengelompokkan barang bisa dilakukan otomatis dengan fitur Kategori Barang Accurate Online. Data makin rapi, laporan detail, bisnis makin terstruktur!", "Begini cara lengkap impor kategori barang dari file Excel di Accurate Online untuk input data massal yang cepat dan rapi."] },
    'Merek Barang': { count: 2, ids: ["ps-038", "ps-039"], titles: ["Cara menambahkan brand produk", "Cara menginput merek atau brand pada produk"], descs: ["Atur produk berdasarkan brand atau merek di Accurate Online agar pencarian barang, pengaturan harga, dan promo menjadi lebih mudah.", "Ingin produk lebih rapi dan mudah dicari? Ini cara memberi merek atau brand pada produk di Accurate Online dengan langkah yang mudah."] },
    'Pemenuhan Pesanan': { count: 2, ids: ["ps-040", "ps-041"], titles: ["Cara membuat pemenuhan pesanan", "Cara mencatat pengiriman barang ke pelanggan"], descs: ["Jangan biarkan pesanan pelanggan tertunda. Begini cara mengecek stok dan membuat pesanan pembelian otomatis melalui fitur Pemenuhan Pesanan.", "Cara membuat Pengiriman Pesanan melalui Pemenuhan Pesanan di Accurate Online untuk pengiriman bertahap dan akurat."] },
    'Barang Per Gudang': { count: 1, ids: ["ps-042"], titles: ["Cara cek stok barang di setiap gudang"], descs: ["Ingin tahu stok barang di masing-masing gudang? Begini cara cek stok per gudang di Accurate Online dengan cepat dan akurat."] },
    'Pengisian Nomor Seri': { count: 1, ids: ["ps-043"], titles: ["Cara mengisi nomor seri barang"], descs: ["Begini cara mengisi nomor seri barang di Accurate Online secara manual, scan barcode, atau impor Excel agar tracking produk lebih akurat."] },
    'Penyelesaian Pesanan': { count: 6, ids: ["ps-044", "ps-045", "ps-046", "ps-047", "ps-048", "ps-049"], titles: ["Cara membuat penyelesaian pesanan dari produksi", "Cara menambah stok barang jadi dari produksi", "Cara menyelesaikan pekerjaan pesanan ke akun", "Cara mencatat penyelesaian pesanan multi produk", "Cara mengimpor penyelesaian pesanan", "Cara mengatasi error bahan baku"], descs: ["Bingung cara menutup order di Accurate Online? Simak langkah mudah menyelesaikan pesanan, update status pengiriman, hingga pencatatan barang jadi agar laporan bisnis kamu", "Begini cara mencatat penyelesaian pekerjaan pesanan menjadi barang di Accurate Online untuk menambah stok dan mencatat hasil produksi secara akurat.", "Begini cara menyelesaikan pekerjaan pesanan ke akun di Accurate Online untuk mencatat biaya jasa atau proyek dengan lebih rapi dan akurat.", "Begini cara mencatat penyelesaian pesanan multi produk di Accurate Online agar proses produksi banyak barang jadi lebih cepat dan efisien.", "Panduan impor Penyelesaian Pesanan di Accurate Online menggunakan file Excel atau CSV dengan langkah yang mudah dan cepat.", "Begini cara mengatasi error bahan baku tidak bisa diselesaikan ke barang di Accurate Online agar transaksi produksi dapat disimpan dengan benar."] },
    'Perintah Stok Opname': { count: 4, ids: ["ps-050", "ps-051", "ps-052", "ps-053"], titles: ["Cara menghitung dan menyesuaikan stok barang", "Mengatasi error tidak bisa hapus perintah stok opname", "Cara mengatasi error selisih stok", "Penyebab selisih stok opname"], descs: ["Begini cara mudah menghitung dan menyesuaikan stok barang di Accurate Online agar data gudang dan sistem selalu cocok.", "Muncul pesan error tidak dapat menghapus Perintah Stok Opname di Accurate Online? Ini cara menghapusnya lengkap mulai dari penyesuaian hingga hasil stok opname.", "Stok opname error di Accurate Online? Pelajari cara mudah mengatasi akun beban selisih stok belum didefinisikan dengan langkah cepat & jelas.", "Hasil stok opname berbeda dengan laporan di Accurate Online? Ini penyebab selisih kuantitas stok dan cara menelusuri transaksi yang mempengaruhi."] },
    'Barang Stok Minimum': { count: 3, ids: ["ps-054", "ps-055", "ps-056"], titles: ["Cara mengatur stok minimum barang", "Cara membuat pesanan pembelian dari stok minimum", "Cara membuat permintaan barang dari stok minimum"], descs: ["Hindari kehabisan stok barang dengan fitur Stok Minimum di Accurate Online. Pantau persediaan dan lakukan pembelian ulang tepat waktu.", "Begini cara membuat pesanan pembelian otomatis dari stok minimum di Accurate Online agar proses reorder barang lebih cepat dan efisien.", "Jangan sampai kehabisan stok. Begini cara mengajukan permintaan barang otomatis dari stok minimum di Accurate Online dengan mudah."] },
    'Artikel Tambahan': { count: 11, ids: ["ps-057", "ps-058", "ps-059", "ps-060", "ps-061", "ps-062", "ps-063", "ps-064", "ps-065", "ps-066", "ps-067"], titles: ["Cara menjadikan aset tetap sebagai stok barang", "Cara membeli barang saat stok mau habis", "Cara mencatat produksi vendor atau maklun", "Cara mencatat barang sampel dari gudang", "Cara menghitung FIFO dan Average di Accurate Online", "Cara mencatat barang yang hilang saat pengiriman", "Cara menghitung stok yang minus dengan metode average", "Cara menginput saldo awal delivery order", "Solusi error tidak dapat menghapus penyesuaian persediaan", "Cara mengatasi perintah stok opname tidak muncul", "Cara mengatasi error pekerjaan pesanan tidak dapat diubah"], descs: ["Aset perusahaan ingin dijual sebagai barang dagangan? Simak cara menjadikan aset tetap sebagai stok barang di Accurate Online dengan pencatatan yang benar.", "Begini cara mengetahui barang yang stoknya hampir habis dan langsung membuat pesanan pembelian otomatis di Accurate Online.", "Produksi barang dilakukan oleh vendor? Pelajari cara mencatat bahan baku, biaya maklun, dan hasil produksi di Accurate Online dengan mudah.", "Sering memberikan barang gratis atau sampel ke pelanggan? Begini cara mencatat pengurangan stok barang sampel di Accurate Online dengan mudah.", "Begini cara menghitung persediaan dengan metode FIFO dan Average di Accurate Online. Lengkap dengan contoh perhitungan HPP dan nilai persediaan yang mudah dipahami.", "Begini cara mengeluarkan stok barang yang hilang atau rusak saat pengiriman dari transaksi Pindah Barang di Accurate Online.", "Bingung nilai HPP berubah saat stok minus? Pelajari cara Accurate Online menghitung persediaan dan HPP stok minus menggunakan metode Average Cost.", "Punya Delivery Order yang masih outstanding saat migrasi? Pelajari cara mencatat saldo awal DO di Accurate Online agar laporan tetap akurat.", "Muncul pesan Tidak Dapat Menghapus Penyesuaian Persediaan? Ini penyebabnya dan cara menghapus saldo awal barang agar transaksi bisa dihapus.", "Perintah Stok Opname tidak muncul saat akan input hasil stok opname? Ini penyebabnya dan cara menampilkan kembali transaksi tersebut.", "Begini cara mengatasi error Pekerjaan pesanan tidak dapat diubah karena status selesai di Accurate Online. Mudah dipahami untuk pemula."] }
  };
    const isFolder = currentModule !== 'Persediaan';
    const folder = isFolder ? info[currentModule] : null;

    return (
      <div className="page-index">
        <h1 className="page-title">{currentModule}</h1>
        <p className="page-subtitle">
          {isFolder
            ? `Panduan ${currentModule} pada modul Persediaan CashFlow Online`
            : 'Kumpulan panduan barang, gudang, stok, dan pesanan CashFlow Online'}
        </p>

        <div className="articles-grid">
          {isFolder && folder
            ? folder.ids.map((id, i) => (
                <div key={id} className="card" onClick={() => setActiveTab(id)}>
                  <div className="card-header-icon">
                    <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
                    <h3>{folder.titles[i]}</h3>
                  </div>
                  <p>{folder.descs[i]}</p>
                </div>
              ))
            : Object.entries(info).map(([name, d]) => (
                <div key={name} className="folder-card" onClick={() => handleSelectModule(name)}>
                  <div className="folder-card-header">
                    <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
                    <h3>{name}</h3>
                  </div>
                  <p className="folder-card-meta">{d.count} panduan</p>
                </div>
              ))}
        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule('Kas & Bank')}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« Kas & Bank</strong>
          </div>
          <div className="doc-nav-card next" onClick={() => handleSelectModule('Asset Tetap')}>
            <span className="doc-nav-label">Next</span>
            <strong className="doc-nav-title">Asset Tetap »</strong>
          </div>
        </div>
      </div>
    );
  }

  // MODULE: Penjualan — 20 kelompok (126 panduan)
  if (currentModule === 'Penjualan' || penjualanFolders.includes(currentModule)) {
    const info: Record<string, { count: number; ids: string[]; titles: string[]; descs: string[] }> = {
    'Penawaran Penjualan': { count: 3, ids: ["penawaran-create", "penawaran-pkp-biaya", "impor-penawaran-penjualan-excel-ke-accurate"], titles: ["Cara Membuat Penawaran Harga (Quotation)", "Cara Membuat Penawaran Harga (Quotation) dengan PPN dan Biaya Tambahan Lain", "Cara Impor Penawaran Penjualan dari Excel ke CashFlow Online"], descs: ["Pelajari cara membuat penawaran harga di CashFlow Online untuk mencatat proposal harga kepada pelanggan sebelum transaksi terjadi.", "Buat penawaran harga lengkap dengan PPN dan biaya tambahan lain agar proposal ke pelanggan lebih akurat.", "Jika Anda memiliki banyak transaksi penawaran penjualan (quotation) yang sudah disusun di spreadsheet Excel, Anda tidak perlu menginputnya satu per satu secara manual. CashFlow Online menyediakan fitur impor transaksi dari Excel yang cepat, akurat, dan langsung terintegrasi dengan daftar pelanggan serta master data barang."] },
    'Pesanan Penjualan': { count: 6, ids: ["so-create", "so-dp", "so-dari-penawaran", "pn-001", "pn-002", "pn-003"], titles: ["Cara Membuat Pesanan Penjualan (Sales Order)", "Cara Membuat Pesanan Penjualan dengan Uang Muka (Down Payment)", "Cara Membuat Pesanan Penjualan dari Penawaran Penjualan", "Cara menutup pesanan penjualan (sales order)", "Cara impor pesanan penjualan valas dari excel", "Cara mengimpor transaksi pesanan penjualan"], descs: ["Catat pesanan pelanggan lewat Sales Order agar proses pengiriman dan penagihan lebih tertib.", "Catat uang muka pelanggan pada Sales Order dan pantau sisa tagihannya dengan rapi.", "Lanjutkan penawaran harga yang sudah disetujui menjadi pesanan penjualan tanpa input ulang.", "Masih ada sisa pesanan yang tidak akan dikirim atau difaktur? Pelajari cara menutup Pesanan Penjualan di Accurate Online agar data stok dan laporan tetap akurat.", "Begini cara impor pesanan penjualan mata uang asing dari file Excel ke Accurate Online. Cocok untuk transaksi USD, EUR, JPY, dan mata uang lainnya dengan proses yang cepa", "Begini cara impor pesanan penjualan dari Excel ke Accurate Online menggunakan template khusus. Input banyak transaksi sekaligus tanpa perlu input manual."] },
    'Pengiriman Pesanan': { count: 6, ids: ["pn-004", "pn-005", "pn-006", "pn-007", "pn-008", "pn-009"], titles: ["Cara membuat pengiriman pesanan", "Membuat pengiriman pesanan dari penawaran penjualan", "Cara membuat pengiriman pesanan dari sales order", "Membuat pengiriman pesanan dari faktur penjualan dimuka", "Menghapus transaksi pengiriman pesanan secara massal", "Solusi error pengiriman barang dari pesanan penjualan"], descs: ["Begini cara membuat pengiriman pesanan di Accurate Online untuk mencatat barang yang dikirim ke pelanggan, mengelola stok, dan memantau proses pengiriman dengan lebih rap", "Tidak perlu input ulang data penjualan. Pelajari cara mengubah penawaran penjualan menjadi pengiriman barang di Accurate Online secara cepat dan otomatis.", "Buat pengiriman pesanan langsung dari Sales Order di Accurate Online tanpa input ulang data. Pelajari langkah-langkahnya agar stok dan pengiriman tercatat otomatis.", "Sudah membuat faktur penjualan dimuka? Pelajari cara membuat pengiriman pesanan dari faktur dimuka di Accurate Online agar stok, pengiriman, dan transaksi tercatat otomat", "Begini cara menghapus transaksi Pengiriman Pesanan secara massal di Accurate Online dengan langkah cepat dan mudah.", "Muncul error Tidak Dapat Membuat Pengiriman Barang dari Pesanan Penjualan? Ketahui penyebabnya dan cara mengatasinya di sini"] },
    'Uang Muka Penjualan': { count: 4, ids: ["pn-010", "pn-011", "pn-012", "pn-013"], titles: ["Cara mencatat uang muka penjualan (DP Pelanggan)", "Cara memotong faktur dengan DP pelanggan", "Cara mencatat uang muka (DP) dibayar dengan barang", "Cara mencatat saldo awal uang muka pelanggan"], descs: ["Ingin mencatat DP pelanggan di Accurate Online? Ikuti langkah mudah untuk input uang muka penjualan dan menghubungkannya ke transaksi penjualan.", "Gunakan sebagian DP pelanggan untuk mengurangi tagihan faktur penjualan di Accurate Online. Simak langkah mudahnya agar saldo uang muka tetap akurat.", "Ingin menerima DP pelanggan dalam bentuk barang? Simak cara mencatatnya di Accurate Online agar nilai uang muka, stok, dan transaksi tetap tercatat dengan benar.", "Sudah menerima uang muka pelanggan sebelum menggunakan Accurate Online? Pelajari cara mencatat saldo awal uang muka pelanggan agar bisa digunakan untuk mengurangi tagihan"] },
    'Faktur Penjualan': { count: 25, ids: ["pn-014", "pn-015", "pn-016", "pn-017", "pn-018", "pn-019", "pn-020", "pn-021", "pn-022", "pn-023", "pn-024", "pn-025", "pn-026", "pn-027", "pn-028", "pn-029", "pn-030", "pn-031", "pn-032", "pn-033", "pn-034", "pn-035", "pn-036", "pn-037", "pn-038"], titles: ["Cara membuat faktur penjualan (invoice)", "Cara menghapus faktur penjualan", "Cara membuat faktur penjualan dari penawaran", "Cara membuat faktur penjualan dari pengiriman barang", "Cara mengubah pesanan menjadi invoice", "Cara memotong invoice dengan uang muka (DP)", "Cara membuat faktur penjualan sebelum barang dikirim", "Menghitung PPN harga sudah termasuk pajak + diskon faktur", "Cara mencetak banyak faktur penjualan sekaligus", "Melihat transaksi Accurate POS yang belum masuk", "Cara mengambil data faktur pembelian ke faktur penjualan", "Cara Accurate Online membagi diskon faktur ke setiap barang", "Cara menghitung PPN transaksi mata uang asing", "Cara menambahkan status lunas di invoice", "Mengatasi HPP tidak muncul pada faktur penjualan", "Cara Mencatat Pembayaran Cicilan Pelanggan", "Cara membatasi diskon penjualan dengan approval", "Arti Kolom Umur (hr) pada Faktur Penjualan", "Cara mengatasi error harga jual di bawah harga beli", "Cara melihat faktur dimuka yang belum dikirim", "Cara mengirim tagihan ke Whatsapp pelanggan", "Cara mengatur PPN keluaran dari tab biaya lainnya", "Cara memasukkan pencairan dana TikTok Shop", "Cara memasukkan pencairan dana Tokopedia", "Cara mengimpor faktur penjualan dari data pengiriman pesanan barang"], descs: ["Butuh membuat invoice untuk pelanggan? Ikuti langkah mudah membuat invoice penjualan di Accurate Online agar proses penagihan lebih cepat dan profesional.", "Salah membuat invoice atau faktur penjualan? Pelajari cara menghapus faktur penjualan di Accurate Online dengan aman agar data transaksi tetap rapi dan akurat.", "Sudah membuat penawaran dan disetujui pelanggan? Ubah penawaran menjadi invoice di Accurate Online hanya dalam beberapa langkah tanpa input ulang.", "Barang sudah dikirim ke pelanggan? Buat faktur penjualan (invoice) langsung dari pengiriman barang di Accurate Online tanpa input ulang data dan minim kesalahan.", "Sudah menerima pesanan pelanggan? Ubah pesanan menjadi invoice di Accurate Online tanpa perlu memasukkan ulang data barang dan pelanggan.", "Gunakan uang muka pelanggan untuk mengurangi nilai tagihan pada faktur penjualan di Accurate Online tanpa perlu perhitungan manual.", "Perlu menagih pelanggan sebelum barang dikirim? Pelajari cara membuat faktur penjualan atau invoice sebelum pengiriman di Accurate Online dengan langkah yang mudah dan pr", "Bingung menghitung PPN saat harga jual sudah termasuk pajak dan ada diskon faktur? Pelajari rumus, contoh perhitungan, dan cara pencatatannya di Accurate Online.", "Ingin mencetak banyak faktur penjualan dalam satu proses? Pelajari cara cetak faktur penjualan sekaligus di Accurate Online agar lebih cepat, praktis, dan hemat waktu.", "Transaksi Accurate POS tidak muncul di Accurate Online? Begini cara melihat daftar transaksi yang belum terimpor, gagal sinkron, atau masih pending dengan mudah.", "Tidak perlu buat faktur dari nol. Beginicara mengambil data dari faktur pembelian ke faktur penjualan di Accurate Online hanya dalam beberapa langkah.", "Bingung kenapa nilai diskon tiap barang berbeda? Begini cara Accurate Online membagi diskon faktur secara proporsional ke setiap item beserta contoh perhitungannya.", "Bingung menghitung PPN pada penjualan dalam USD atau mata uang asing? Simak cara perhitungannya di Accurate Online beserta contoh lengkapnya.", "Ingin invoice menampilkan status Lunas atau Belum Lunas secara otomatis? Pelajari cara menambahkan status pembayaran pada cetakan faktur penjualan di Accurate Online.", "HPP tidak muncul saat membuat faktur penjualan? Ini penyebab dan cara mengatasinya di Accurate Online agar jurnal penjualan dan laporan laba rugi kembali akurat.", "Bingung mencatat penjualan dengan pembayaran bertahap? Pelajari cara membuat penjualan cicilan dan menerima pembayaran cicilan pelanggan di Accurate Online.", "Ingin diskon besar tidak bisa diberikan sembarangan? Pelajari cara membatasi diskon penjualan menggunakan fitur approval di Accurate Online.", "Cari tahu alasan umur faktur penjualan terus bertambah di Accurate Online. Pahami cara kerja kolom Umur (hr) dan dasar perhitungannya secara lengkap di sini", "Muncul error harga jual di bawah harga beli saat simpan faktur penjualan? Ketahui penyebabnya dan cara mengatasinya berdasarkan harga beli terakhir di Accurate Online.", "Cek status faktur di muka dengan mudah di sini. Ketahui apakah transaksi sudah dikirim, masih menunggu pengiriman, atau lihat histori proses penjualannya.", "Ingin kirim tagihan langsung ke WhatsApp pelanggan? Ikuti langkah mudah mengirim faktur penjualan melalui WhatsApp di Accurate Online.", "Begini cara mengatur dan menyesuaikan nilai PPN Keluaran melalui tab Biaya Lainnya pada Faktur Penjualan Accurate Online.", "Bingung mencatat pencairan dana TikTok Shop? Ikuti cara memasukkan data settlement TikTok ke Accurate Online dengan mudah dan cepat.", "Bingung mencatat pencairan dana Tokopedia? Ikuti panduan memasukkan data settlement Tokopedia ke Accurate Online agar laporan keuangan tetap akurat.", "Panduan impor Faktur Penjualan dari Pengiriman Pesanan di Accurate Online menggunakan file Excel agar input transaksi lebih cepat."] },
    'Penerimaan Penjualan': { count: 12, ids: ["pn-039", "pn-040", "pn-041", "pn-042", "pn-043", "pn-044", "pn-045", "pn-046", "pn-047", "pn-048", "pn-049", "pn-050"], titles: ["Cara mencatat pembayaran dari pelanggan", "Cara mencatat pembayaran invoice pelanggan", "Mencatat pembayaran pelanggan dengan potongan biaya", "Cara menghapus pembayaran dari pelanggan", "Cara mencatat piutang pelanggan yang tidak bisa ditagih", "Cara mencatat overpay pelanggan", "Cara mencatat biaya admin bank", "Cara uengembalikan uang retur penjualan yang sudah lunas", "Cara membatalkan pembayaran karena cek atau giro ditolak", "Mencatat kelebihan pembayaran pelanggan ke akun lain", "Cara import pembayaran VA bca ke penerimaan penjualan", "Cara impor penerimaan penjualan dari excel"], descs: ["Begini cara mudah input penerimaan penjualan di Accurate Online. Cocok untuk pembayaran penuh/parsial dan pengelolaan arus kas optimal", "Sudah menerima pembayaran dari pelanggan? Begini cara input pembayaran invoice di Accurate Online agar laporan keuangan Kamu tetap akurat.", "Catat pembayaran pelanggan yang diterima setelah dipotong biaya atau diskon dengan mudah di Accurate Online tanpa perlu perhitungan manual.", "Begini cara menghapus transaksi penerimaan penjualan di Accurate Online untuk memperbaiki data pembayaran yang salah atau duplikat.", "Ada piutang pelanggan yang tidak bisa ditagih lagi? Simak cara menghapus dan mencatatnya dengan benar di Accurate Online.", "Ada kelebihan pembayaran dari pelanggan? Begini cara mencatat overpay pelanggan di Accurate Online agar saldo lebih tersimpan otomatis.", "Pembayaran pelanggan dipotong biaya admin bank? Begini cara mencatat biaya administrasi bank pada penerimaan penjualan di Accurate Online dengan benar.", "Pelanggan mengembalikan barang setelah faktur lunas? begini cara refund atau mengembalikan uang pelanggan dari retur penjualan di Accurate Online.", "Cek atau giro pelanggan ditolak bank? Begini cara membatalkan pembayaran pelanggan agar saldo piutang dan laporan keuangan tetap akurat di Accurate Online.", "Pelanggan membayar lebih dari nilai tagihan? Begini cara mencatat dan mengalokasikan kelebihan pembayaran pelanggan ke akun lain di Accurate Online dengan mudah.", "Begini cara mengimpor pembayaran Virtual Account (VA) BCA ke Penerimaan Penjualan di Accurate Online agar transaksi tercatat otomatis dan rekonsiliasi lebih cepat.", "Catat banyak pembayaran pelanggan sekaligus dengan impor Penerimaan Penjualan dari Excel di Accurate Online. Simak cara isi template dan mulai impor."] },
    'Retur Penjualan': { count: 16, ids: ["pn-051", "pn-052", "pn-053", "pn-054", "pn-055", "pn-056", "pn-057", "pn-058", "pn-059", "pn-060", "pn-061", "pn-062", "pn-063", "pn-064", "pn-065", "pn-066"], titles: ["Mengenal fitur retur penjualan", "Cara mencatat retur barang ditukar barang lain", "Cara retur barang dari faktur yang sudah lunas", "Cara membuat retur penjualan tanpa faktur", "Cara mengembalikan uang pelanggan setelah retur barang", "Retur penjualan untuk mengurangi faktur belum lunas", "Membuat retur penjualan dari faktur penjualan dimuka", "Cara mengembalikan DP pelanggan", "Cara mengembalikan DP pelanggan yang sudah lunas", "Cara mengembalikan sebagian barang penjualan", "Cara mencatat retur penjualan jasa", "Cara retur penjualan saat barang tidak dikembalikan", "Cara mengatasi error nomor seri tidak ditemukan di faktur", "Cara mengatur biaya barang retur penjualan", "Cara retur penjualan tanpa faktur", "Cara mengatur nilai barang retur penjualan"], descs: ["Kenali fitur Retur Penjualan di Accurate Online untuk mencatat barang retur pelanggan, menyesuaikan stok, dan menjaga laporan keuangan tetap akurat.", "Pelanggan ingin menukar barang yang rusak atau tidak sesuai? Pelajari cara mencatat retur barang yang diganti dengan produk lain di Accurate Online secara lengkap.", "Retur dari faktur lunas bisa Kamu catat di Accurate Online dengan mudah. Transaksi tetap tercatat rapi tanpa perlu repot mengubah data lama.", "Pelanggan ingin mengembalikan barang tetapi tidak memiliki faktur? Pelajari cara membuat retur penjualan tanpa faktur di Accurate Online dengan mudah dan tetap rapi.", "Pelanggan melakukan retur dan meminta refund? Begini cara mengembalikan uang pelanggan setelah retur barang di Accurate Online dengan langkah yang mudah dan rapi.", "Pelanggan melakukan retur barang tetapi masih memiliki tagihan? Pelajari cara menggunakan retur penjualan untuk mengurangi nilai faktur yang belum lunas di Accurate Onlin", "Buat retur dari faktur penjualan di muka di Accurate Online saat pelanggan batal atau minta pengembalian, pencatatan tetap rapi dan jelas.", "Pelanggan membatalkan pesanan setelah membayar DP? Pelajari cara mengembalikan uang muka pelanggan dan mencatat retur uang muka dengan benar di Accurate Online.", "Pelanggan membatalkan pesanan setelah melunasi DP? Pelajari cara mengembalikan uang muka yang sudah lunas dan mencatatnya dengan benar di Accurate Online.", "Pelanggan hanya mengembalikan sebagian barang? Pelajari cara membuat retur sebagian dari faktur penjualan di Accurate Online tanpa membatalkan seluruh transaksi.", "Pelanggan membatalkan atau komplain atas jasa yang sudah dibeli? Pelajari cara mencatat retur penjualan jasa dengan benar di Accurate Online.", "Barang diretur tetapi tidak kembali ke gudang? Pelajari cara mencatat retur penjualan tanpa pengembalian barang fisik di Accurate Online.", "Muncul pesan error Nomor Seri Tidak Ditemukan di Faktur saat retur penjualan? Simak penyebab dan cara mengatasinya di Accurate Online.", "Begini cara memperbarui biaya barang saat menyimpan ulang retur penjualan di Accurate Online, pilih nilai persediaan historis atau terbaru!", "Tidak punya faktur atau data transaksi lama? Tenang, Kamu tetap bisa mencatat retur penjualan di Accurate Online dengan mudah dan rapi.", "Bingung kenapa nilai retur berbeda? Begini cara mengatur HPP atau harga beli barang retur agar laporan stok dan keuangan tetap akurat di Accurate Online."] },
    'Tukar Faktur': { count: 1, ids: ["pn-067"], titles: ["Cara mencatat penagihan piutang dengan tukar faktur"], descs: ["Yuk, Gunakan fitur Tukar Faktur untuk mencatat proses penagihan piutang secara rapi dan terdokumentasi di Accurate Online."] },
    'Klaim Pelanggan': { count: 3, ids: ["pn-068", "pn-069", "pn-070"], titles: ["Cara mencatat klaim garansi pelanggan", "Cara mengirim barang pengganti klaim garansi", "Cara mengatasi pesan error akun persediaan klaim"], descs: ["Begini cara mencatat klaim garansi pelanggan di Accurate Online, mulai dari menerima barang klaim hingga pengelolaan stok dan jurnal otomatis.", "Gunakan fitur Klaim Pelanggan untuk mencatat pengiriman barang hasil klaim secara otomatis dan terintegrasi dengan stok di Accurate Online.", "Muncul error akun persediaan klaim saat menyimpan Klaim Pelanggan? Pelajari penyebab dan cara mengatasinya dengan mudah di sini."] },
    'Pengepakan Barang': { count: 1, ids: ["pn-071"], titles: ["Cara membuat pengepakan barang"], descs: ["Buat packing list pengiriman barang dengan mudah di Accurate Online agar proses pengemasan, pengiriman, dan kontrol stok lebih teratur."] },
    'Kategori Pelanggan': { count: 1, ids: ["pn-072"], titles: ["Cara mengelompokkan data pelanggan"], descs: ["Yuk, kelola data customer lebih mudah dengan mengelompokkan pelanggan berdasarkan wilayah, jenis usaha, atau kategori tertentu di Accurate Online."] },
    'Kategori Penjualan': { count: 1, ids: ["pn-073"], titles: ["Cara membuat kategori penjualan"], descs: ["Begini cara membuat kategori penjualan di Accurate Online untuk mengelompokkan pelanggan dan menerapkan harga maupun diskon yang berbeda secara otomatis."] },
    'Pelanggan': { count: 7, ids: ["pn-074", "pn-075", "pn-076", "pn-077", "pn-078", "pn-079", "pn-080"], titles: ["Cara membuat data pelanggan baru", "Nama Sales Saldo Awal", "Cara mengisi saldo awal piutang multi mata uang", "Cara mengisi nama sales di saldo awal piutang", "Cara impor pelanggan dengan banyak akun piutang", "Cara mengimpor alamat pengiriman pelanggan dari excel", "Cara impor data pelanggan dari excel"], descs: ["Buat data pelanggan baru di Accurate Online dengan mudah. Lengkapi informasi kontak, alamat, pengiriman, pajak, hingga saldo piutang dalam satu tempat.", "Panduan lengkap menambahkan nama sales pada saldo awal piutang pelanggan di Accurate Online, baik secara manual maupun melalui impor Excel.", "Begini cara mengisi saldo awal piutang pelanggan dengan lebih dari satu mata uang di Accurate Online tanpa perlu membuat data pelanggan ganda.", "Begini cara mengisi nama sales pada saldo awal piutang pelanggan di Accurate Online, baik secara manual maupun melalui impor Excel.", "Begini cara import data pelanggan dengan lebih dari satu akun piutang melalui Excel di Accurate Online untuk mempermudah migrasi dan pengelolaan piutang.", "Punya banyak alamat kirim pelanggan? Pelajari cara import alamat pengiriman pelanggan dari file Excel atau CSV ke Accurate Online dengan cepat dan tanpa input satu per sa", "Begini cara impor data pelanggan dari Excel ke Accurate Online. Ikuti langkahnya agar Kamu bisa menambahkan banyak pelanggan sekaligus."] },
    'Penyesuaian Harga atau Diskon': { count: 4, ids: ["pn-081", "pn-082", "pn-083", "pn-084"], titles: ["Cara mengubah harga jual dan diskon produk", "Cara mengubah harga dan diskon produk secara massal", "Mengatasi error diskon barang dimasukkan lebih dari satu kali", "Cara menghapus promo yang sudah tidak berlaku"], descs: ["Ingin mengubah harga jual atau memberikan diskon untuk banyak produk sekaligus? Begini cara mengatur harga dan diskon di Accurate Online dengan mudah dan cepat.", "Punya ratusan produk yang perlu diubah harganya? Simak cara update harga dan diskon produk secara massal menggunakan file Excel di Accurate Online.", "Muncul error Diskon barang dimasukkan lebih dari satu kali saat membuat Penyesuaian Harga/Diskon di Accurate Online? Pelajari penyebab dan cara mengatasinya dengan mudah.", "Punya banyak data harga atau diskon yang ingin dihapus? Gunakan fitur hapus massal di Accurate Online dan selesaikan pekerjaan lebih cepat dalam beberapa klik."] },
    'Komisi Penjualan': { count: 4, ids: ["pn-085", "pn-086", "pn-087", "pn-088"], titles: ["Membuat komisi sales berdasarkan penjualannya", "Cara membagi komisi beberapa sales", "Cara menghitung bonus sales per faktur", "Cara menghitung komisi sales berdasarkan target penjualannya"], descs: ["Begini cara membuat komisi penjualan berbasis kuantitas di Accurate Online, otomatis, berbasis syarat, dan fleksibel untuk semua industri!", "Punya lebih dari satu sales dalam satu transaksi? Simak cara membagi komisi secara otomatis dan adil untuk beberapa sales di Accurate Online.", "Masih bingung cara menghitung komisi nilai tetap per faktur? Begini cara kerja, contoh perhitungan, dan pembagian komisi sales di Accurate Online.", "Begini cara menghitung komisi sales berdasarkan target penjualan yang tercapai menggunakan laporan di Accurate Online. Praktis tanpa hitung manual."] },
    'Target Penjualan': { count: 3, ids: ["pn-089", "pn-090", "pn-091"], titles: ["Mengenal fitur target penjualan dan mengaktifkannya", "Cara membuat target penjualan produk", "Cara membuat target penjualan untuk tim sales"], descs: ["Sekarang, mengatur dan memantau target penjualan bisa dilakukan secara otomatis dengan fitur Target Penjualan Accurate Online. Ini tutorialnya!", "Bingung menentukan target penjualan? Simak cara membuat target penjualan produk di Accurate Online agar omzet, performa tim sales, dan pertumbuhan bisnis lebih mudah dipa", "Cara membuat target penjualan sales di Accurate Online untuk memantau dan mengevaluasi pencapaian penjualan setiap tenaga penjual."] },
    'SmartLink E-Commerce': { count: 6, ids: ["pn-092", "pn-093", "pn-094", "pn-095", "pn-096", "pn-097"], titles: ["Mengenal fitur smartlink e-commerce", "Cara setting smartLink Tokopedia", "Cara setting smartLink Shopee", "Cara setting smartLink Lazada", "Cara setting smartLink Blibli", "Cara setting smartLink TikTok Shop"], descs: ["Integrasi secara otomatis pesanan kamu di marketplace dengan fitur Smartlink E-Commerce dari Accurate Online. Bisnis online makin lancar dan laporan keuangan rapi!", "Cara setting SmartLink Tokopedia di Accurate Online untuk impor penjualan, ongkir, fee, dan stok secara otomatis.", "Begini cara setting SmartLink Shopee di Accurate Online, mulai dari pengaturan tab Umum, tab Lainnya, hingga proses impor transaksi agar penjualan Shopee tercatat otomati", "Cara setting SmartLink Lazada di Accurate Online untuk impor penjualan, ongkir, fee, dan stok secara otomatis.", "Begini cara setting SmartLink Blibli di Accurate Online, mulai dari pengaturan tab Umum, tab Lainnya, hingga proses impor transaksi agar penjualan Blibli tercatat otomati", "Begini cara setting SmartLink TikTok Shop di Accurate Online, mulai dari pengaturan tab Umum, tab Lainnya, hingga proses impor transaksi agar penjualan TikTok Shop tercat"] },
    'Checkin': { count: 1, ids: ["pn-098"], titles: ["Cara mengetahui sales sudah mengunjungi pelanggan"], descs: ["Bingung memantau aktivitas sales di lapangan? Begini cara mengetahui kunjungan pelanggan, lokasi, foto toko, dan transaksi sales melalui Accurate Online."] },
    'Trade Portal (Beta)': { count: 12, ids: ["pn-099", "pn-100", "pn-101", "pn-102", "pn-103", "pn-104", "pn-105", "pn-106", "pn-107", "pn-108", "pn-109", "pn-110"], titles: ["Cara instal aplikasi Trade Portal Accurate Online", "Cara login ke trade portal setelah menerima undangan agen", "Cara membuat katalog produk di Trade Portal", "Cara membuat etalase Trade Portal", "Cara membuat koleksi produk di Trade Portal", "Cara mengundang agen atau reseller", "Cara pesan barang di Trade Portal", "Cara membuat pesanan tempo", "Cara memproses pesanan dari Trade Portal", "Cara membayar dan membatalkan pesanan", "Cara membatalkan pesanan yang sudah masuk", "Cara membuat pengiriman pesanan dari Trade Portal"], descs: ["Gunakan Trade Portal Accurate Online untuk menghubungkan agen dan distributor dalam satu sistem. Simak cara instal dan mengaktifkannya di sini.", "Begini cara login ke Trade Portal setelah menerima undangan melalui email atau WhatsApp. Ikuti langkah-langkahnya hingga berhasil masuk dan mulai menggunakan Trade Portal", "Begini cara membuat katalog di Trade Portal Accurate Online untuk mengelompokkan produk berdasarkan kategori penjualan. Cocok untuk agen dan reseller agar produk lebih mu", "Begini cara membuat dan mengatur etalase Trade Portal di Accurate Online. Lengkapi katalog produk, gudang, desain toko, hingga metode pembayaran agar agen dan reseller da", "Atur koleksi produk di Trade Portal Accurate Online agar etalase lebih terstruktur, memudahkan agen menemukan barang, dan meningkatkan pengalaman pemesanan.", "Begini cara mengundang agen atau reseller ke Trade Portal Accurate Online. Berikan akses katalog produk, cek stok real-time, dan pemesanan online secara mandiri hanya dal", "Cara membuat pesanan di Trade Portal Accurate Online mulai dari pilih produk hingga pembayaran dengan langkah mudah dan jelas.", "ngin agen bisa memesan tanpa bayar di awal? Begini cara membuat pesanan dengan pembayaran tempo atau termin di Trade Portal Accurate Online.", "Begini cara memproses pesanan yang masuk dari Trade Portal Accurate Online, baik untuk pembayaran tunai maupun tempo. Lengkap dengan perubahan status pesanan hingga prose", "Ikuti langkah-langkah pembayaran pesanan di Trade Portal, mulai dari upload bukti transfer hingga pesanan berhasil diproses oleh admin.", "Ingin membatalkan order yang sudah masuk? Begini cara membatalkan pesanan di Trade Portal beserta proses konfirmasi pembatalannya.", "Begini cara membuat pengiriman pesanan dari Trade Portal di Accurate Online, mulai dari mengaktifkan Faktur Penjualan Dimuka hingga memperbarui status pesanan menjadi Pro"] },
    'Artikel Tambahan': { count: 10, ids: ["pn-111", "pn-112", "pn-113", "pn-114", "pn-115", "pn-116", "pn-117", "pn-118", "pn-119", "pn-120"], titles: ["Cara mencatat penjualan gift voucher", "Cara membuat harga grosir berdasarkan kuantitas penjualan", "Cara mencatat uang muka yang dikenakan PPh 23", "Cara mencatat pelunasan faktur dengan mata uang yang berbeda", "Cara membuat diskon bertingkat", "Cara menggunakan retur faktur lunas untuk potong faktur lain", "Cara mengatur tanggal kadaluarsa e-payment Xendit", "Cara memisahkan laporan penjualan per marketplace", "Cara mengatasi notifikasi harga tidak wajar", "Cara mencatat pengembalian overpay dengan potongan admin"], descs: ["Bingung mencatat penjualan gift voucher? Ikuti cara menjual, menerima pembayaran, dan memakai saldo gift voucher pelanggan di Accurate Online.", "Atur harga grosir otomatis di Accurate Online berdasarkan jumlah pembelian pelanggan. Pelajari cara setting harga bertingkat tanpa ubah harga manual saat transaksi.", "Bingung cara mencatat uang muka yang dikenakan PPh 23? Pelajari langkah membuat transaksi uang muka, penerimaan pembayaran, hingga pencatatan pajak PPh 23 otomatis di Acc", "Pelanggan membayar dengan mata uang yang berbeda dari mata uang faktur? Pelajari cara mencatat transaksi tersebut di Accurate Online agar saldo dan kurs tetap sesuai.", "Ingin memberikan lebih dari satu diskon dalam satu transaksi? Simak cara input diskon bertingkat atau diskon berlapis di Accurate Online dengan format yang benar.", "Begini cara mudah mencatat retur atas faktur penjualan lunas untuk memotong faktur lain di Accurate Online—mudah, otomatis, dan terintegrasi!", "Atur tanggal kadaluarsa pembayaran Xendit di Accurate Online agar link pembayaran otomatis menyesuaikan jatuh tempo faktur penjualan.", "Pisahkan dan analisis penjualan Shopee, Tokopedia, Lazada, dan marketplace lainnya di Accurate Online menggunakan fitur Departemen.", "Muncul notifikasi Accurate mendeteksi harga yang ditentukan tidak wajar? Ketahui penyebabnya dan cara mengatasinya di sini", "Begini cara mencatat pengembalian overpay atau kelebihan bayar pelanggan dengan potongan biaya admin di Accurate Online agar transaksi dan laporan keuangan tetap akurat."] }
  };
    const isFolder = currentModule !== 'Penjualan';
    const folder = isFolder ? info[currentModule] : null;

    return (
      <div className="page-index">
        <h1 className="page-title">{currentModule}</h1>
        <p className="page-subtitle">
          {isFolder
            ? `Panduan ${currentModule} pada modul Penjualan CashFlow Online`
            : 'Kumpulan panduan alur penjualan di CashFlow Online'}
        </p>

        <div className="articles-grid">
          {isFolder && folder
            ? folder.ids.map((id, i) => (
                <div key={id} className="card" onClick={() => setActiveTab(id)}>
                  <div className="card-header-icon">
                    <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
                    <h3>{folder.titles[i]}</h3>
                  </div>
                  <p>{folder.descs[i]}</p>
                </div>
              ))
            : Object.entries(info).map(([name, d]) => (
                <div key={name} className="folder-card" onClick={() => handleSelectModule(name)}>
                  <div className="folder-card-header">
                    <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
                    <h3>{name}</h3>
                  </div>
                  <p className="folder-card-meta">{d.count} panduan</p>
                </div>
              ))}
        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule('Fitur CashFlow Online')}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« Fitur CashFlow Online</strong>
          </div>
          {!isFolder && (
            <div className="doc-nav-card next" onClick={() => handleSelectModule('Penawaran Penjualan')}>
              <span className="doc-nav-label">Next</span>
              <strong className="doc-nav-title">Penawaran Penjualan »</strong>
            </div>
          )}
        </div>
      </div>
    );
  }

  // MODULE: Lainnya (panduan pembelian di luar PO, penerimaan, dan faktur)
  if (currentModule === 'Lainnya') {
    const lainnyaArticles = [
      {
        id: 'art-beli-lain',
        title: 'Cara Mencatat Pembelian yang Dilunasi Pihak Lain',
        desc: 'Panduan pencatatan transaksi pembelian yang pembayarannya dilakukan oleh pihak ketiga.',
      },
      {
        id: 'art-beli-lebih',
        title: 'Cara Mencatat Kelebihan Pembayaran Pembelian',
        desc: 'Solusi mencatat selisih lebih bayar ke supplier agar saldo dan jurnal tetap seimbang.',
      },
    ];

    return (
      <div className="page-index">
        <h1 className="page-title">Lainnya</h1>
        <p className="page-subtitle">Panduan tambahan di luar alur Pesanan, Penerimaan, dan Faktur Pembelian</p>

        <div className="articles-grid">
          {lainnyaArticles.map((art) => (
            <div key={art.id} className="card" onClick={() => setActiveTab(art.id)}>
              <div className="card-header-icon">
                <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
                <h3>{art.title}</h3>
              </div>
              <p>{art.desc}</p>
            </div>
          ))}
        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule('Faktur Pembelian')}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« Faktur Pembelian</strong>
          </div>
          <div className="doc-nav-card next" onClick={() => handleSelectModule('Retur Pembelian')}>
            <span className="doc-nav-label">Next</span>
            <strong className="doc-nav-title">Retur Pembelian »</strong>
          </div>
        </div>
      </div>
    );
  }

  // MODULE: Retur Pembelian
  if (currentModule === 'Retur Pembelian') {
    const returArticles = [
      { id: 'rp-001', title: 'Fitur Retur Pembelian CashFlow Online dan Fungsinya', desc: 'Pahami fungsi fitur Retur Pembelian untuk mencatat pengembalian barang ke supplier secara otomatis.' },
      { id: 'rp-002', title: 'Cara Mencatat Pengembalian Barang ke Supplier dari Faktur', desc: 'Catat barang rusak atau tidak sesuai langsung dari Faktur Pembelian agar stok dan hutang rapi.' },
      { id: 'rp-003', title: 'Cara Membuat Retur Pembelian Sebagian', desc: 'Retur hanya sebagian barang dari faktur tanpa membatalkan seluruh transaksi.' },
      { id: 'rp-004', title: 'Cara Retur Barang ke Supplier Setelah Pembayaran Lunas', desc: 'Catat retur atas faktur lunas dan kelola pengembalian dana supplier.' },
      { id: 'rp-005', title: 'Cara Mencatat Retur Pembelian untuk Faktur Dimuka', desc: 'Tangani retur untuk faktur dimuka, sebelum maupun setelah barang diterima.' },
      { id: 'rp-006', title: 'Cara Mengembalikan Biaya yang Sudah Ditagihkan Supplier', desc: 'Koreksi biaya pada faktur pembelian memakai barang non persediaan.' },
      { id: 'rp-007', title: 'Cara Retur Pembelian Jasa', desc: 'Catat retur transaksi jasa dari pemasok, lunas maupun belum lunas.' },
    ];
    return (
      <div className="page-index">
        <h1 className="page-title">Retur Pembelian</h1>
        <p className="page-subtitle">Kumpulan tutorial mengelola retur pembelian dan pengembalian barang ke supplier di CashFlow Online</p>

        <div className="articles-grid">
          {returArticles.map((art) => (
            <div key={art.id} className="card" onClick={() => setActiveTab(art.id)}>
              <div className="card-header-icon">
                <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
                <h3>{art.title}</h3>
              </div>
              <p>{art.desc}</p>
            </div>
          ))}
        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule('Lainnya')}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« Lainnya</strong>
          </div>
          <div className="doc-nav-card next" onClick={() => handleSelectModule('Penjualan')}>
            <span className="doc-nav-label">Next</span>
            <strong className="doc-nav-title">Penjualan »</strong>
          </div>
        </div>
      </div>
    );
  }

  // MODULE: Pengaturan — Preferensi & Akses Grup sudah tersedia
  if (currentModule === 'Pengaturan') {
    const comingSoon: string[] = [];

    return (
      <div className="page-index">
        <h1 className="page-title">Pengaturan</h1>
        <p className="page-subtitle">Kumpulan panduan konfigurasi dasar CashFlow Online</p>

        <div className="articles-grid">
          <div className="folder-card" onClick={() => handleSelectModule('Preferensi')}>
            <div className="folder-card-header">
              <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
              <h3>Preferensi</h3>
            </div>
            <p className="folder-card-meta">17 panduan</p>
          </div>

          <div className="folder-card" onClick={() => handleSelectModule('Akses Grup')}>
            <div className="folder-card-header">
              <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
              <h3>Akses Grup</h3>
            </div>
            <p className="folder-card-meta">11 panduan</p>
          </div>

          <div className="folder-card" onClick={() => handleSelectModule('Pengguna')}>
            <div className="folder-card-header">
              <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
              <h3>Pengguna</h3>
            </div>
            <p className="folder-card-meta">1 panduan</p>
          </div>

          <div className="folder-card" onClick={() => handleSelectModule('Penomoran')}>
            <div className="folder-card-header">
              <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
              <h3>Penomoran</h3>
            </div>
            <p className="folder-card-meta">3 panduan</p>
          </div>

          <div className="folder-card" onClick={() => handleSelectModule('Desain Cetakan')}>
            <div className="folder-card-header">
              <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
              <h3>Desain Cetakan</h3>
            </div>
            <p className="folder-card-meta">40 panduan</p>
          </div>

          <div className="folder-card" onClick={() => handleSelectModule('Penyetuju Transaksi')}>
            <div className="folder-card-header">
              <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
              <h3>Penyetuju Transaksi</h3>
            </div>
            <p className="folder-card-meta">1 panduan</p>
          </div>

          {comingSoon.map((sub) => (
            <div key={sub} className="folder-card" style={{ opacity: 0.55, cursor: 'not-allowed' }} aria-disabled="true">
              <div className="folder-card-header">
                <span className="theme-doc-card-icon" role="img" aria-label="folder">🚧</span>
                <h3>{sub}</h3>
              </div>
              <p className="folder-card-meta">Segera hadir</p>
            </div>
          ))}
        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule('Dashboard')}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« Dashboard</strong>
          </div>
          <div className="doc-nav-card next" onClick={() => handleSelectModule('Preferensi')}>
            <span className="doc-nav-label">Next</span>
            <strong className="doc-nav-title">Preferensi »</strong>
          </div>
        </div>
      </div>
    );
  }

  // SUB-MODULE: Preferensi — 17 panduan sesuai referensi help.accurate.id
  if (currentModule === 'Preferensi') {
    const preferensiArticles = [
      { id: 'pref-buka', title: 'Cara Membuka dan Mengatur Preferensi', desc: 'Kenali fungsi setiap tab preferensi: Perusahaan, Pajak, Penjualan, Pembelian, dan Approval.' },
      { id: 'pref-perusahaan', title: 'Cara Mengisi Data Perusahaan', desc: 'Lengkapi nama usaha, alamat, mata uang, periode akuntansi, dan kontak perusahaan.' },
      { id: 'pref-fitur', title: 'Cara Mengaktifkan dan Mengatur Fitur Sesuai Kebutuhan', desc: 'Aktifkan modul penjualan, pembelian, gudang, dan fitur lain sesuai alur bisnis.' },
      { id: 'pref-pajak', title: 'Cara Mengisi NPWP dan Data Pajak Perusahaan', desc: 'Isi NPWP, NITKU, KLU, alamat pajak, serta pengaturan PPN dan e-Faktur.' },
      { id: 'pref-penjualan', title: 'Cara Mengatur Transaksi Penjualan', desc: 'Atur retur penjualan, nilai barang retur, akun pembebanan, dan PPN pelanggan.' },
      { id: 'pref-pembelian', title: 'Cara Mengatur Transaksi Pembelian', desc: 'Atur retur pembelian, uang muka, akun pembebanan, dan PPN pemasok.' },
      { id: 'pref-akses', title: 'Cara Mengatur Pembatasan Akses dan Transaksi', desc: 'Batasi modul per grup pengguna dan tentukan batas nilai transaksi.' },
      { id: 'pref-persetujuan', title: 'Cara Mengaktifkan Persetujuan', desc: 'Aktifkan alur persetujuan dokumen dan tentukan penyetuju transaksi.' },
      { id: 'pref-atribut', title: 'Cara Menambahkan Kolom/Informasi Tambahan', desc: 'Tambahkan atribut seperti warna, ukuran, dan nomor seri pada data barang.' },
      { id: 'pref-akun-default', title: 'Cara Mengatur Akun Default Transaksi', desc: 'Tentukan akun default penjualan, pembelian, persediaan, dan HPP di tab Akun.' },
      { id: 'pref-lain', title: 'Cara Mengatur Format Angka, Umur Piutang, dll.', desc: 'Atur format angka dan tanggal, umur piutang, umur persediaan, serta komisi penjual.' },
      { id: 'pref-efaktur-cabang', title: 'Cara Menampilkan Nama Cabang saat Export E-Faktur', desc: 'Sertakan nama cabang pada kolom referensi e-Faktur untuk perusahaan multi cabang.' },
      { id: 'pref-po-autoclose', title: 'Cara Mengatur PO agar Otomatis Ditutup', desc: 'Tutup otomatis pesanan pembelian yang tidak diproses setelah jangka waktu tertentu.' },
      { id: 'pref-pelanggan-ppn', title: 'Mengatur Pelanggan Baru agar Otomatis Termasuk PPN', desc: 'Pelanggan baru selalu berstatus termasuk pajak tanpa centang manual.' },
      { id: 'pref-error-selisih', title: 'Cara Mengatasi Error Akun Selisih Pembelian Belum Tertagih', desc: 'Perbaiki error saat penerimaan barang dengan mengisi akun selisih pembelian.' },
      { id: 'pref-kategori-keuangan', title: 'Cara Membuat Laporan Laba Rugi per Proyek atau Kategori', desc: 'Kelompokkan transaksi dengan Kategori Keuangan untuk laba rugi per proyek.' },
      { id: 'pref-error-tanggal', title: 'Penyebab dan Cara Mengatasi Error Tanggal Transaksi', desc: 'Atasi tanggal dokumen lebih kecil dari tanggal mulai data perusahaan.' },
    ];

    return (
      <div className="page-index">
        <h1 className="page-title">Preferensi</h1>
        <p className="page-subtitle">Seluruh panduan preferensi CashFlow Online: perusahaan, pajak, transaksi, akses, akun default, dan lainnya</p>

        <div className="articles-grid">
          {preferensiArticles.map((art) => (
            <div key={art.id} className="card" onClick={() => setActiveTab(art.id)}>
              <div className="card-header-icon">
                <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
                <h3>{art.title}</h3>
              </div>
              <p>{art.desc}</p>
            </div>
          ))}
        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule('Pengaturan')}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« Pengaturan</strong>
          </div>
          <div className="doc-nav-card next" onClick={() => handleSelectModule('Akses Grup')}>
            <span className="doc-nav-label">Next</span>
            <strong className="doc-nav-title">Akses Grup »</strong>
          </div>
        </div>
      </div>
    );
  }

  // SUB-MODULE: Akses Grup — 11 panduan sesuai referensi help.accurate.id
  if (currentModule === 'Akses Grup') {
    const aksesGrupArticles = [
      { id: 'ag-hak-akses', title: 'Cara Mengatur Hak Akses Pengguna', desc: 'Atur izin per divisi, jabatan, atau tim agar pengguna hanya mengakses fitur sesuai tugas.' },
      { id: 'ag-batas-anggaran', title: 'Cara Mengatur Batas Anggaran untuk Operator', desc: 'Cegah operator membuat transaksi melebihi batas anggaran.' },
      { id: 'ag-menu-tidak-tampil', title: 'Cara Mengatasi Menu Tidak Tampil di User Operator', desc: 'Sesuaikan hak akses agar menu muncul setelah operator login.' },
      { id: 'ag-akses-dibatasi', title: 'Cara Mengatasi Akses Operator yang Dibatasi', desc: 'Buka kembali akses operator yang dibatasi administrator.' },
      { id: 'ag-error-bayar-beban', title: 'Solusi Error Pembayaran Beban Tidak Diizinkan', desc: 'Atasi error pembayaran beban tanpa melalui utang beban.' },
      { id: 'ag-penangguhan', title: 'Cara Membatasi Operator Melakukan Penangguhan', desc: 'Cegah penangguhan pendapatan dan beban oleh operator.' },
      { id: 'ag-pemindahan-barang', title: 'Cara Mengatasi Error Pemindahan Barang', desc: 'Aktifkan izin pemindahan barang tanpa permintaan barang.' },
      { id: 'ag-harga-standar', title: 'Cara Membatasi Operator Melihat Harga Standar', desc: 'Sembunyikan harga standar pada Formula Produksi dan Perintah Kerja.' },
      { id: 'ag-min-jual-beli', title: 'Cara Memberikan Hak Akses Minimum Jual/Beli', desc: 'Izinkan transaksi di bawah syarat minimum jual atau beli.' },
      { id: 'ag-checkin', title: 'Cara Membatasi Akses Check In Penjual pada Operator', desc: 'Sembunyikan data Check In Penjual dari operator.' },
      { id: 'ag-bahan-baku', title: 'Cara Membatasi Pengambilan Bahan Baku', desc: 'Cegah pengambilan bahan baku melebihi Perintah Kerja.' },
    ];

    return (
      <div className="page-index">
        <h1 className="page-title">Akses Grup</h1>
        <p className="page-subtitle">Panduan mengatur hak akses dan pembatasan transaksi per grup pengguna</p>

        <div className="articles-grid">
          {aksesGrupArticles.map((art) => (
            <div key={art.id} className="card" onClick={() => setActiveTab(art.id)}>
              <div className="card-header-icon">
                <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
                <h3>{art.title}</h3>
              </div>
              <p>{art.desc}</p>
            </div>
          ))}
        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule('Preferensi')}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« Preferensi</strong>
          </div>
          <div className="doc-nav-card next" onClick={() => handleSelectModule('Pengguna')}>
            <span className="doc-nav-label">Next</span>
            <strong className="doc-nav-title">Pengguna »</strong>
          </div>
        </div>
      </div>
    );
  }

  // SUB-MODULE: Pengguna & Penomoran — 1 + 3 panduan sesuai referensi help.accurate.id
  if (currentModule === 'Pengguna' || currentModule === 'Penomoran') {
    const smallModules: Record<string, { desc: string; prev: string; next: string; articles: { id: string; title: string; desc: string }[] }> = {
      Pengguna: {
        desc: 'Panduan menambahkan karyawan dan mengatur aksesnya ke Data Usaha',
        prev: 'Akses Grup',
        next: 'Penomoran',
        articles: [
          { id: 'user-tambah', title: 'Cara Menambahkan Karyawan Baru ke Accurate Online', desc: 'Tambahkan karyawan sebagai Administrator atau Operator beserta grup aksesnya.' },
        ],
      },
      Penomoran: {
        desc: 'Panduan membuat dan melanjutkan penomoran transaksi otomatis',
        prev: 'Pengguna',
        next: 'Desain Cetakan',
        articles: [
          { id: 'nomor-otomatis', title: 'Cara Membuat Penomoran Transaksi Secara Otomatis', desc: 'Sesuaikan format nomor transaksi otomatis dengan kebutuhan usaha.' },
          { id: 'nomor-romawi', title: 'Cara Membuat Nomor Faktur dengan Format Bulan Romawi', desc: 'Tampilkan bulan Romawi pada nomor faktur setiap periode.' },
          { id: 'nomor-counter', title: 'Cara Melanjutkan Nomor Transaksi yang Sudah Berjalan', desc: 'Lanjutkan nomor dari sistem lama agar tidak kembali ke 00001.' },
        ],
      },
    };
    const data = smallModules[currentModule];

    return (
      <div className="page-index">
        <h1 className="page-title">{currentModule}</h1>
        <p className="page-subtitle">{data.desc}</p>

        <div className="articles-grid">
          {data.articles.map((art) => (
            <div key={art.id} className="card" onClick={() => setActiveTab(art.id)}>
              <div className="card-header-icon">
                <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
                <h3>{art.title}</h3>
              </div>
              <p>{art.desc}</p>
            </div>
          ))}
        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule(data.prev)}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« {data.prev}</strong>
          </div>
          <div className="doc-nav-card next" onClick={() => handleSelectModule(data.next)}>
            <span className="doc-nav-label">Next</span>
            <strong className="doc-nav-title">{data.next} »</strong>
          </div>
        </div>
      </div>
    );
  }

  // SUB-MODULE: Desain Cetakan & Penyetuju Transaksi — 40 + 1 panduan sesuai referensi
  if (currentModule === 'Desain Cetakan' || currentModule === 'Penyetuju Transaksi') {
    const subtitles: Record<string, string> = {
      'Desain Cetakan': 'Panduan template, variabel, dan format hasil cetak dokumen CashFlow Online',
      'Penyetuju Transaksi': 'Panduan mengatur alur persetujuan dokumen sebelum diproses',
    };
    const articles = currentModule === 'Desain Cetakan'
      ? [
          { id: 'cetak-01', title: 'Cara membuat template invoice, faktur & transaksi lainnya', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-02', title: 'Cara menampilkan terbilang di faktur penjualan', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-03', title: 'Cara membuat terbilang di faktur penjualan menjadi huruf kapital', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-04', title: 'Cara mencetak faktur ukuran A5 di kertas A4', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-05', title: 'Cara setting printer thermal untuk cetak struk dan faktur', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-06', title: 'Cara melihat sisa piutang di faktur penjualan', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-07', title: 'Cara menambahkan logo di faktur penjualan', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-08', title: 'Cara mengubah template email transaksi', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-09', title: 'Cara menampilkan total qty barang pada purchase order', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-10', title: 'Cara menampilkan kolom debit kredit di cetakan pembayaran', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-11', title: 'Cara menampilkan header hanya di halaman pertama', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-12', title: 'Cara mengatasi error ada elemen yang berada di luar band', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-13', title: 'Cara menampilkan ref. kode pajak barang', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-14', title: 'Cara menampilkan DPP di faktur penjualan', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-15', title: 'Cara menampilkan tanggal & waktu cetak', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-16', title: 'Cara menampilkan barcode di desain cetakan', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-17', title: 'Cara menampilkan total debit dan kredit di desain cetakan', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-18', title: 'Cara mengatur dan menggunakan e-Meterai', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-19', title: 'Cara menampilkan JHT, JKK, dan JKM', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-20', title: 'Cara menampilkan tanda persen pada desain cetakan', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-21', title: 'Cara menampilkan barang persediaan di surat jalan', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-22', title: 'Cara menampilkan tanggal jatuh tempo di pesanan pembelian', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-23', title: 'Cara menampilkan sisa tagihan pelanggan di bukti penerimaan', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-24', title: 'Cara menampilkan nominal terbilang di desain cetakan', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-25', title: 'Cara menampilkan nomor pajak di desain cetakan', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-26', title: 'Cara menambahkan nol di belakang koma di cetakan', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-27', title: 'Cara menampilkan uang muka pada faktur penjualan', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-28', title: 'Cara membulatkan nilai pada desain cetakan', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-29', title: 'Cara menampilkan nomor seri di desain cetakan pengepakan', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-30', title: 'Cara menampilkan nominal gaji dalam bentuk tulisan', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-31', title: 'Cara menampilkan dpp nilai lain pada faktur penjualan', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-32', title: 'Cara mengubah bahasa terbilang pada hasil cetakan', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-33', title: 'Cara menampilkan DP pada faktur penjualan', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-34', title: 'Cara membuat angka minus dalam tanda kurung di cetakan', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-35', title: 'Cara menampilkan pph 23 pada desain cetakan faktur pembelian', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-36', title: 'Cara menampilkan pajak lebih bayar pada slip gaji', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-37', title: 'Cara menampilkan total nilai dan terbilang di jurnal umum', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-38', title: 'Cara menampilkan diskon di bukti penerimaan penjualan', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-39', title: 'Cara menampilkan debit, kredit, dan total di cetakan', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
          { id: 'cetak-40', title: 'Cara menampilkan gambar barang/jasa didesain cetakan', desc: 'Panduan pengaturan desain cetakan dan format dokumen CashFlow Online.' },
      ]
      : [
          { id: 'setuju-approval', title: 'Cara Mengatur Approval Transaksi', desc: 'Tentukan dokumen yang wajib disetujui dan pengguna yang berhak menyetujui.' },
        ];
    const prev = currentModule === 'Desain Cetakan' ? 'Penomoran' : 'Desain Cetakan';

    return (
      <div className="page-index">
        <h1 className="page-title">{currentModule}</h1>
        <p className="page-subtitle">{subtitles[currentModule]}</p>

        <div className="articles-grid">
          {articles.map((art) => (
            <div key={art.id} className="card" onClick={() => setActiveTab(art.id)}>
              <div className="card-header-icon">
                <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
                <h3>{art.title}</h3>
              </div>
              <p>{art.desc}</p>
            </div>
          ))}
        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule(prev)}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« {prev}</strong>
          </div>
          <div className="doc-nav-card next" onClick={() => handleSelectModule('Perusahaan')}>
            <span className="doc-nav-label">Next</span>
            <strong className="doc-nav-title">Perusahaan »</strong>
          </div>
        </div>
      </div>
    );
  }

  const perusahaanFolders: string[] = ["Mata Uang", "Cabang", "Pajak", "Syarat Pembayaran", "Pengiriman", "FOB", "Gaji dan Tunjangan", "Karyawan", "Transaksi Berulang", "Proses Akhir Bulan", "Kontak", "Transaksi Favorit", "Approval", "Kalender", "Log Aktivitas"];

  const bukuBesarFolders: string[] = ["Akun Perkiraan", "Pencatatan Beban", "Pencatatan Gaji", "Jurnal Umum", "Monitor Anggaran", "Transfer Anggaran", "Anggaran", "Histori Akun", "Log Aktivitas Jurnal", "Pinjaman Karyawan"];

  const kasBankFolders: string[] = ["Pembayaran", "Penerimaan", "Transfer Bank", "Smartlink E-Banking", "Rekening Koran", "Histori Bank", "Rekonsiliasi Bank", "Smartlink Virtual Account", "Smartlink E-Payment", "Pencairan Pinjaman", "Pembayaran Angsuran", "Pelunasan Pinjaman"];

  // MODULE: Kas & Bank — 12 submodul (34 panduan)
  if (currentModule === 'Kas & Bank' || kasBankFolders.includes(currentModule)) {
    const info: Record<string, { slug: string; count: number; ids: string[]; titles: string[]; descs: string[] }> = {
    'Pembayaran': { slug: 'pembayaran', count: 11, ids: ["kb-01", "kb-02", "kb-03", "kb-04", "kb-05", "kb-06", "kb-07", "kb-08", "kb-09", "kb-10", "kb-11"], titles: ["Fungsi dan manfaat fitur pembayaran", "Cara membayar gaji yang sudah dicatat", "Cara mencatat pembayaran dalam mata uang asing", "Cara impor pembayaran transaksi dari Excel", "Cara mencatat biaya dibayar di muka", "Cara mencatat biaya dibayar di muka dengan jurnal umum", "Cara mencatat cicilan pinjaman bank", "Cara mengisi NTPN saat mencatat pembayaran PPh", "Mengisi departemen atau proyek yang kosong di pembayaran", "Cara mencatat pembayaran operasional perusahaan", "Cara mengimpor pembayaran operasional dari excel"], descs: ["Cari tahu fungsi fitur Pembayaran di Accurate Online, manfaatnya untuk bisnis, serta kapan fitur ini digunakan dalam proses pembayaran operasional.", "Ikuti langkah mudah membuat pembayaran gaji di Accurate Online setelah proses pencatatan gaji selesai dilakukan di sini!", "Begini cara mencatat pembayaran dalam mata uang asing seperti USD, SGD, atau EUR di Accurate Online lengkap dengan pengaturan kurs dan akun kas/bank valas.", "Sudah punya data pembayaran di Excel? Pelajari cara memasukkan dan mengimpor data tersebut ke Accurate Online dengan mudah dan cepat.", "Begini cara mencatat biaya dibayar di muka seperti sewa, asuransi, atau langganan tahunan di Accurate Online dan mengalokasikannya otomatis setiap bulan.", " Begini cara mencatat biaya dibayar dimuka dan pengakuannya lewat jurnal umum di Accurate Online. Akurat, manual, dan fleksibel", "Begini cara mencatat cicilan pinjaman bank di Accurate Online, termasuk pemisahan nilai pokok pinjaman dan bunga agar saldo utang serta laporan keuangan tetap akurat.", " Begini cara melakukan pembayaran PPh dan pengisian NTPN di Accurate Online. Lengkapi pembayaran gaji, PPh pembelian & penjualan dengan nomor penerimaan negara.", "Masih ada kolom departemen atau proyek yang kosong di transaksi pembayaran? Pelajari cara mengisi hanya kolom yang belum terisi tanpa mengubah data yang sudah ada di Accu", "Catat biaya listrik, internet, dan perlengkapan kantor lewat fitur Pembayaran di Accurate Online agar pengeluaran operasional perusahaan tercatat rapi.", "Catat biaya listrik, internet, dan perlengkapan kantor lewat fitur Pembayaran di Accurate Online agar pengeluaran operasional perusahaan tercatat rapi."] },
    'Penerimaan': { slug: 'penerimaan', count: 4, ids: ["kb-12", "kb-13", "kb-14", "kb-15"], titles: ["Cara mencatat uang masuk ke kas atau bank", "Cara mencatat uang masuk dalam mata uang asing", "Cara import transaksi kas masuk dari excel", "Cara mencatat pinjaman pinjaman bank"], descs: ["Catat setiap pemasukan ke rekening bank dengan mudah di Accurate Online, mulai dari bunga bank hingga pendapatan lainnya yang bukan berasal dari penjualan.", "Catat pemasukan dalam mata uang asing dengan mudah di Accurate Online. Simak langkah-langkah pengaturan kurs dan akun bank valuta asing di sini.", "BInput ratusan transaksi penerimaan kas dan bank hanya dalam beberapa menit dengan fitur import Excel di Accurate Online.", "Bingung mencatat dana pinjaman dari bank? Simak langkah-langkah mencatat pinjaman bank yang masuk ke rekening perusahaan di Accurate Online."] },
    'Transfer Bank': { slug: 'transfer-bank', count: 2, ids: ["kb-16", "kb-17"], titles: ["Cara mencatat transfer antar rekening bank", "Cara mencatat biaya transfer bank"], descs: ["Ikuti panduan ini untuk memindahkan dana antar rekening perusahaan di Accurate Online agar mutasi bank dan arus kas tercatat otomatis.", "Begini cara menampilkan dan mencatat biaya transfer antar bank secara otomatis di Accurate Online. Hemat waktu dan lebih rapi."] },
    'Smartlink E-Banking': { slug: 'smartlink-ebanking', count: 3, ids: ["kb-18", "kb-19", "kb-20"], titles: ["Cara menghubungkan internet banking", "Cara mengimpor mutasi bank dengan format excel", "Cara menghubungkan KlikBCA Bisnis"], descs: ["Begini cara mudah mendaftarkan internet banking di Accurate Online untuk mempercepat rekonsiliasi bank dan efisiensi pembukuan bisnismu", "Ingin memasukkan data mutasi rekening ke Accurate Online? Pelajari cara upload file mutasi bank dan menampilkannya di rekening koran dengan mudah.", "Cara mengunduh public key dan pass key SmartLink e-Banking BCA di Accurate Online untuk kebutuhan pendaftaran SNAP API BCA."] },
    'Rekening Koran': { slug: 'rekening-koran', count: 2, ids: ["kb-21", "kb-22"], titles: ["Cara mengimpor mutasi bank ke Accurate Online", "Cara menghapus mutasi rekening koran"], descs: ["Import mutasi rekening bank ke Accurate Online dalam beberapa klik. Pelajari cara upload rekening koran dan percepat proses rekonsiliasi bank tanpa input manual di sini.", "Ikuti langkah mudah menghapus data rekening koran di Accurate Online, baik secara satuan maupun massal, untuk menjaga data kas dan bank tetap bersih."] },
    'Histori Bank': { slug: 'histori-bank', count: 1, ids: ["kb-23"], titles: ["Cara melihat mutasi bank"], descs: ["Temukan kemudahan memantau arus kas dengan fitur Histori Bank Accurate Online. Lihat mutasi akun Kas/Bank secara terperinci untuk rekonsiliasi yang akurat."] },
    'Rekonsiliasi Bank': { slug: 'rekonsiliasi-bank', count: 5, ids: ["kb-24", "kb-25", "kb-26", "kb-27", "kb-28"], titles: ["Cara mencocokkan mutasi bank dengan transaksi Accurate", "Cara mencocokkan banyak transaksi bank sekaligus", "Cara menghapus banyak mutasi bank sekaligus", "Cara mencocokkan beberapa mutasi bank ke satu transaksi", "Mengatasi saldo bank tidak sama dengan Accurate"], descs: ["Bingung mencocokkan mutasi rekening dengan transaksi pembukuan? Ikuti panduan rekonsiliasi bank di Accurate Online agar saldo dan laporan tetap akurat.", "Punya banyak transaksi bank yang harus dicocokkan? Pelajari cara rekonsiliasi bank secara massal di Accurate Online agar proses pencocokan transaksi lebih cepat dan tidak", "Punya banyak mutasi bank yang salah atau tidak diperlukan? Pelajari cara menghapus banyak mutasi rekening koran sekaligus di Accurate Online dengan cepat dan mudah.", "Punya beberapa mutasi bank yang berasal dari satu transaksi? Pelajari cara mencocokkan beberapa mutasi bank ke satu transaksi di Accurate Online dengan mudah.", "Bingung karena saldo rekening bank berbeda dengan saldo di Accurate Online? Ikuti panduan ini untuk menemukan penyebab selisih saldo dan cara mengeceknya dengan mudah."] },
    'Smartlink Virtual Account': { slug: 'smartlink-virtual-account', count: 2, ids: ["kb-29", "kb-30"], titles: ["Cara setting virtual account", "Cara menerima pembayaran lewat virtual account BCA"], descs: ["Ikuti langkah mudah mengaktifkan Virtual Account di Accurate Online agar pembayaran pelanggan dapat tercatat otomatis dan real-time.", "Ingin pembayaran pelanggan masuk otomatis ke Accurate Online? Pelajari cara mengaktifkan Virtual Account BCA, membuat nomor VA pelanggan, hingga pembayaran tercatat otoma"] },
    'Smartlink E-Payment': { slug: 'smartlink-epayment', count: 1, ids: ["kb-31"], titles: ["Mengenal menerima pembayaran online secara otomatis"], descs: ["Ingin pembayaran online pelanggan tercatat otomatis di Accurate Online? Ikuti cara mengaktifkan Smartlink E-Payment dan hubungkan dengan Xendit, Paper.id, atau Tokopedia "] },
    'Pencairan Pinjaman': { slug: 'pencairan-pinjaman', count: 1, ids: ["kb-32"], titles: ["Cara mencairkan pinjaman karyawan"], descs: ["Ketahui cara mencatat pencairan pinjaman karyawan di Accurate Online agar piutang karyawan dan proses angsuran dapat dipantau dengan mudah."] },
    'Pembayaran Angsuran': { slug: 'pembayaran-angsuran', count: 1, ids: ["kb-33"], titles: ["Cara mencatat pembayaran cicilan pinjaman karyawan"], descs: ["Pelajari cara mencatat pembayaran angsuran pinjaman karyawan di Accurate Online agar saldo pinjaman terupdate otomatis dan laporan akurat."] },
    'Pelunasan Pinjaman': { slug: 'pelunasan-pinjaman', count: 1, ids: ["kb-34"], titles: ["Cara mencatat pelunasan pinjaman"], descs: ["Pelajari cara membuat pelunasan pinjaman di Accurate Online agar saldo pinjaman berkurang otomatis dan laporan keuangan tetap akurat."] }
  };
    const isFolder = currentModule !== 'Kas & Bank';
    const folder = isFolder ? info[currentModule] : null;

    return (
      <div className="page-index">
        <h1 className="page-title">{currentModule}</h1>
        <p className="page-subtitle">
          {isFolder
            ? `Panduan ${currentModule} pada modul Kas & Bank CashFlow Online`
            : 'Kumpulan panduan pembayaran, penerimaan, transfer, dan rekonsiliasi bank'}
        </p>

        <div className="articles-grid">
          {isFolder && folder
            ? folder.ids.map((id, i) => (
                <div key={id} className="card" onClick={() => setActiveTab(id)}>
                  <div className="card-header-icon">
                    <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
                    <h3>{folder.titles[i]}</h3>
                  </div>
                  <p>{folder.descs[i]}</p>
                </div>
              ))
            : Object.entries(info).map(([name, d]) => (
                <div key={name} className="folder-card" onClick={() => handleSelectModule(name)}>
                  <div className="folder-card-header">
                    <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
                    <h3>{name}</h3>
                  </div>
                  <p className="folder-card-meta">{d.count} panduan</p>
                </div>
              ))}
        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule('Buku Besar')}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« Buku Besar</strong>
          </div>
          <div className="doc-nav-card next" onClick={() => handleSelectModule('Persediaan')}>
            <span className="doc-nav-label">Next</span>
            <strong className="doc-nav-title">Persediaan »</strong>
          </div>
        </div>
      </div>
    );
  }


  if (currentModule === 'Buku Besar' || bukuBesarFolders.includes(currentModule)) {
    const info: Record<string, { slug: string; count: number; ids: string[]; titles: string[]; descs: string[] }> = {
    'Akun Perkiraan': { slug: 'akun-perkiraan', count: 5, ids: ["bb-01", "bb-02", "bb-03", "bb-04", "bb-05"], titles: ["Cara membuat, mengubah, dan menghapus akun perkiraan", "Cara membuat akun mata uang asing", "Solusi error tidak bisa membuat akun perkiraan", "Cara membuat equitas saldo awal menjadi 0 (nol)", "Cara memasukkan saldo awal modal dan laba ditahan"], descs: ["Ingin menambah akun baru di Accurate Online? Pelajari cara membuat, mengedit, menonaktifkan, hingga menghapus akun perkiraan (Chart of Accounts) dengan mudah dan cepat.", "Ingin mencatat transaksi dalam USD, SGD, atau mata uang asing lainnya? Pelajari cara membuat akun mata uang asing di Accurate Online lengkap dengan pengaturan saldo awal ", "Muncul error Sudah ada penomoran lain dengan nama... saat membuat akun perkiraan di Accurate Online? Pelajari penyebabnya dan cara menghapus penomoran lama agar akun bisa", "Saldo Equitas Saldo Awal belum nol? Pindahkan saldonya ke akun bertipe Modal di Accurate Online agar neraca per tanggal mulai data balance.", "Pelajari cara input saldo awal modal dan laba ditahan di Accurate Online lewat tab Saldo akun perkiraan agar nilai ekuitas perusahaan tercatat benar."] },
    'Pencatatan Beban': { slug: 'pencatatan-beban', count: 5, ids: ["bb-06", "bb-07", "bb-08", "bb-09", "bb-10"], titles: ["Cara mencatat biaya atau pengeluaran perusahaan", "Cara mencatat tagihan yang belum dibayar", "Cara mencatat piutang karyawan", "Cara memotong cicilan pinjaman karyawan dari gaji", "Cara menghapus pencatatan beban secara massal"], descs: ["Begini cara mencatat biaya operasional, tagihan, dan pengeluaran perusahaan di Accurate Online. Lengkap dengan langkah membuat akun beban, mencatat transaksi, hingga pros", "Punya tagihan yang belum dibayar tetapi ingin tetap dicatat di laporan keuangan? Pelajari cara mencatat tagihan sebagai utang beban di Accurate Online dengan langkah yang", "Begini cara mencatat piutang karyawan di Accurate Online, mulai dari membuat akun piutang, input transaksi, hingga melihat sisa piutang setiap karyawan dengan mudah dan r", "Pinjaman karyawan ingin dipotong langsung dari gaji bulanan? Pelajari cara membuat potongan cicilan karyawan dan mencatat pembayarannya otomatis di Accurate Online.", "Cara menghapus transaksi pencatatan beban secara massal di Accurate Online agar pembukuan tetap rapi dan efisien."] },
    'Pencatatan Gaji': { slug: 'pencatatan-gaji', count: 8, ids: ["bb-11", "bb-12", "bb-13", "bb-14", "bb-15", "bb-16", "bb-17", "bb-18"], titles: ["Cara mencatat beban gaji karyawan", "Cara menghitung dan mencatat PPh 21 karyawan", "Cara mencatat THR atau bonus karyawan yang dikenakan PPh 21", "Cara mencatat dan menghitung PPh 21 karyawan baru", "Cara mencatat gaji agar masuk ke SPT PPh 21", "Menghitung PPh 21 karyawan tetap di bulan Desember", "Cara mengatasi error periode pencatatan PPh", "Cara mengatasi error kelebihan PPh saat mencatat gaji"], descs: ["Begini cara mudah pencatatan gaji karyawan di Accurate Online, dari input data karyawan sampai review jurnal gaji otomatis.", "Begini cara mudah mencatat beban gaji karyawan beserta PPh 21 di Accurate Online. Otomatis, sesuai aturan PP No. 58 Tahun 2023!", "Bingung menghitung pajak THR dan bonus karyawan? Simak cara menghitung PPh 21 THR dan bonus secara otomatis di Accurate Online.", "Bingung mengatur pajak untuk karyawan baru? Simak cara input data karyawan agar PPh 21 dihitung otomatis dan sesuai periode kerja di Accurate Online.", "Begini cara mencatat gaji agar otomatis PPh 21 dan masuk laporan SPT PPh 21 di Accurate Online—mudah, rapi, dan sesuai aturan pajak!", "Cari cara menghitung pajak gaji karyawan bulan Desember? Ikuti panduan lengkap di Accurate Online agar perhitungan PPh 21 lebih cepat dan akurat.", "Muncul pesan error Periode Pencatatan PPh lebih kecil dari periode mulai penghitungan PPh saat simpan gaji? Pelajari penyebab dan cara mengatasinya di Accurate Online.", "Muncul error kelebihan PPh saat membuat pencatatan gaji di Accurate Online? Pelajari penyebabnya dan cara mengatasi agar transaksi gaji bisa diproses tanpa kendala."] },
    'Jurnal Umum': { slug: 'jurnal-umum', count: 5, ids: ["bb-19", "bb-20", "bb-21", "bb-22", "bb-23"], titles: ["Cara membuat jurnal umum", "Cara mencatat transaksi mata uang asing", "Cara mencatat pembagian dividen ke pemegang saham", "Cara import jurnal umum dari excel ke Accurate Online", "Cara menghapus jurnal umum secara massal"], descs: ["Bingung cara input jurnal manual di Accurate Online? Ikuti panduan lengkap untuk mencatat transaksi debit dan kredit dengan mudah dan cepat.", "Butuh mencatat transaksi dari pelanggan atau vendor luar negeri? Pelajari cara membuat jurnal transaksi mata uang asing di Accurate Online.", "Ingin membagikan laba perusahaan kepada pemegang saham? Ikuti cara pencatatan dividen dan proses pembayarannya di Accurate Online.", "Import transaksi jurnal umum ke Accurate Online kini lebih cepat menggunakan file Excel. Pelajari cara upload data, menggunakan template impor, dan mengatasi data gagal i", "Tidak perlu menghapus jurnal satu per satu. Pelajari cara menghapus banyak jurnal umum sekaligus di Accurate Online dengan fitur hapus massal."] },
    'Monitor Anggaran': { slug: 'monitor-anggaran', count: 1, ids: ["bb-24"], titles: ["Cara cek penggunaan anggaran perusahaan"], descs: ["Pelajari cara monitoring anggaran di Accurate Online dengan mudah untuk memantau realisasi anggaran dan meningkatkan efisiensi pengelolaan keuangan bisnis Anda."] },
    'Transfer Anggaran': { slug: 'transfer-anggaran', count: 1, ids: ["bb-25"], titles: ["Cara mengalihkan budget ke anggaran lain"], descs: ["Butuh memindahkan budget ke akun atau anggaran lain? Ikuti cara mengalihkan anggaran di Accurate Online dengan fitur transfer anggaran"] },
    'Anggaran': { slug: 'anggaran', count: 2, ids: ["bb-26", "bb-27"], titles: ["Cara membuat dan menghapus anggaran", "Cara mengatasi error akun perkiraan digunakan di anggaran"], descs: ["Pelajari cara membuat, mengimpor, dan menghapus anggaran (budget) di Accurate Online. Kelola rencana pendapatan dan biaya perusahaan dengan lebih mudah dan terstruktur.", "Akun perkiraan tidak bisa dihapus di Accurate Online? Pelajari cara menemukan dan menghapus penggunaan akun tersebut pada data anggaran agar dapat dihapus kembali."] },
    'Histori Akun': { slug: 'histori-akun', count: 1, ids: ["bb-28"], titles: ["Cara melihat riwayat transaksi akun perkiraan"], descs: ["Ingin melihat transaksi yang pernah tercatat pada suatu akun? Pelajari cara mengecek riwayat transaksi akun di Accurate Online dengan mudah."] },
    'Log Aktivitas Jurnal': { slug: 'log-aktivitas-jurnal', count: 1, ids: ["bb-29"], titles: ["Cara melihat riwayat perubahan jurnal"], descs: ["Cari tahu siapa yang mengubah, mengedit, atau menghapus jurnal di Accurate Online melalui fitur riwayat aktivitas jurnal."] },
    'Pinjaman Karyawan': { slug: 'pinjaman-karyawan', count: 2, ids: ["bb-30", "bb-31"], titles: ["Cara memberikan pinjaman ke karyawan dan mencatatnya", "Cara mencatat angsuran pinjaman karyawan melalui potongan gaji"], descs: ["Ingin memberikan pinjaman kepada karyawan? Pelajari cara mencatat pinjaman, mengatur cicilan, dan memantau pembayarannya di Accurate Online.", "Ingin cicilan pinjaman karyawan terpotong otomatis dari gaji? Pelajari cara mengaturnya di Accurate Online dengan mudah."] }
  };
    const isFolder = currentModule !== 'Buku Besar';
    const folder = isFolder ? info[currentModule] : null;

    return (
      <div className="page-index">
        <h1 className="page-title">{currentModule}</h1>
        <p className="page-subtitle">
          {isFolder
            ? `Panduan ${currentModule} pada modul Buku Besar CashFlow Online`
            : 'Kumpulan panduan akun, jurnal, beban, gaji, dan anggaran CashFlow Online'}
        </p>

        <div className="articles-grid">
          {isFolder && folder
            ? folder.ids.map((id, i) => (
                <div key={id} className="card" onClick={() => setActiveTab(id)}>
                  <div className="card-header-icon">
                    <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
                    <h3>{folder.titles[i]}</h3>
                  </div>
                  <p>{folder.descs[i]}</p>
                </div>
              ))
            : Object.entries(info).map(([name, d]) => (
                <div key={name} className="folder-card" onClick={() => handleSelectModule(name)}>
                  <div className="folder-card-header">
                    <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
                    <h3>{name}</h3>
                  </div>
                  <p className="folder-card-meta">{d.count} panduan</p>
                </div>
              ))}
        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule('Perusahaan')}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« Perusahaan</strong>
          </div>
          <div className="doc-nav-card next" onClick={() => handleSelectModule('Kas & Bank')}>
            <span className="doc-nav-label">Next</span>
            <strong className="doc-nav-title">Kas & Bank »</strong>
          </div>
        </div>
      </div>
    );
  }


  if (currentModule === 'Perusahaan' || perusahaanFolders.includes(currentModule)) {
    const info: Record<string, { slug: string; count: number; ids: string[]; titles: string[]; descs: string[] }> = {
    'Mata Uang': { slug: 'mata-uang', count: 1, ids: ["per-01"], titles: ["Cara menambahkan dan menggunakan mata uang asing"], descs: ["Punya transaksi dalam USD, EUR, SGD, atau mata uang asing lainnya? Pelajari cara menambahkan, mengatur, dan menggunakan mata uang asing di Accurate Online ini"] },
    'Cabang': { slug: 'cabang', count: 3, ids: ["per-02", "per-03", "per-04"], titles: ["Cara mengaktifkan dan menggunakan fitur cabang", "Cara mengatasi cabang tidak bisa dihapus", "Cara menambahkan NITKU cabang"], descs: ["Punya lebih dari satu toko atau cabang? Pelajari cara mengaktifkan fitur Multi Branch di Accurate Online, menambah cabang baru, mengatur akses pengguna, dan membuat lapor", "Muncul pesan Tidak Dapat Menghapus Cabang Karena Telah Digunakan di Kontak saat menghapus cabang di Accurate Online? Cari tahu penyebabnya dan mengatasinya di sini.", "Kolom NITKU tidak muncul pada data cabang Accurate Online? Ketahui penyebabnya dan ikuti langkah mudah untuk mengaktifkan fitur pajak serta menambahkan NITKU cabang perus"] },
    'Pajak': { slug: 'pajak', count: 1, ids: ["per-05"], titles: ["Cara menambahkan pajak baru"], descs: ["Bingung cara menambahkan pajak di Accurate Online? Ikuti panduan lengkapnya di sini untuk membuat data pajak baru, mengatur akun pajak, dan memastikan transaksi bisnis te"] },
    'Syarat Pembayaran': { slug: 'syarat-pembayaran', count: 1, ids: ["per-06"], titles: ["Fungsi dan manfaat fitur syarat pembayaran"], descs: ["Ingin pembayaran pelanggan lebih tertib dan jatuh tempo tidak terlewat? Kenali fitur Syarat Pembayaran di Accurate Online ini"] },
    'Pengiriman': { slug: 'pengiriman', count: 2, ids: ["per-07", "per-08"], titles: ["Fungsi dan cara menggunakan fitur pengiriman", "Cara import data pengiriman dari excel ke Accurate Online"], descs: ["Masih kesulitan mengelola pengiriman barang? Pelajari fungsi dan manfaat fitur Pengiriman di Accurate Online untuk memantau status pengiriman, mengurangi risiko salah kir", "Punya banyak data pengiriman yang ingin diinput sekaligus? Pelajari cara import data pengiriman dari file Excel atau CSV ke Accurate Online agar proses input lebih cepat,"] },
    'FOB': { slug: 'FOB', count: 1, ids: ["per-09"], titles: ["Mengenal fungsi, manfaat, dan cara kerja fitur FOB"], descs: ["Yuk, atur detail pengiriman dan tanggung jawab ekspor-impor otomatis dengan fitur FOB Accurate Online. Bisnis makin aman dan transparan!"] },
    'Gaji dan Tunjangan': { slug: 'gaji-dan-tunjangan', count: 3, ids: ["per-10", "per-11", "per-12"], titles: ["Cara menambahkan gaji dan tunjangan karyawan", "Cara mengatasi pesan error: akun beban gaji/tunjangan harus diisi", "Cara mengatasi error saat menghapus akun perkiraan"], descs: ["Belum tahu cara membuat gaji dan tunjangan karyawan di Accurate Online? Ikuti tutorial lengkapnya di sini!", "Muncul pesan Akun Beban Gaji/Tunjangan Harus Diisi saat menyimpan pencatatan gaji? Ketahui penyebabnya dan cara mengatasinya di sini.", "Tidak bisa menghapus akun perkiraan di Accurate Online karena masih digunakan pada Gaji atau Tunjangan? Pelajari penyebabnya dan ikuti langkah mudah untuk mengganti akun "] },
    'Karyawan': { slug: 'karyawan', count: 5, ids: ["per-13", "per-14", "per-15", "per-16", "per-17"], titles: ["Menambahkan data karyawan untuk payroll dan PPh 21", "Cara menambahkan sales atau tenaga penjual", "Cara menghitung pajak PPh 21 karyawan harian atau kontrak", "Cara mengimpor data karyawan dari excel", "Cara mencatat karyawan resign dan hitung PPh 21 terakhirnya"], descs: ["Ingin membuat data karyawan di Accurate Online? Ikuti panduan lengkap untuk mengisi data identitas, jabatan, NPWP, status PTKP, hingga rekening bank agar proses payroll d", "Belum menemukan nama sales saat membuat transaksi penjualan? Pelajari cara menambahkan dan mengaktifkannya di sini.", "Punya karyawan harian, kontrak, atau tenaga lepas? Pelajari cara menghitung dan mencatat PPh 21 secara otomatis di Accurate Online agar penggajian dan pelaporan pajak leb", "Punya banyak data karyawan di Excel? Pelajari cara impor data karyawan ke Accurate Online sekaligus menggunakan file Excel atau CSV di sini!", "Karyawan resign di tengah tahun? Pelajari cara mencatat pengunduran diri karyawan dan menghitung PPh 21 bulan terakhir secara otomatis di Accurate Online agar pajak tetap"] },
    'Transaksi Berulang': { slug: 'transaksi-berulang', count: 2, ids: ["per-18", "per-19"], titles: ["Cara mencatat biaya bulanan secara otomatis", "Cara menjalankan banyak transaksi berulang sekaligus"], descs: ["Sering input pembayaran yang sama setiap bulan? Pelajari cara membuat transaksi biaya bulanan secara rutin di Accurate Online untuk mencatat biaya rutin, sewa, cicilan, d", "Sering input pembayaran yang sama setiap bulan? Pelajari cara membuat transaksi otomatis bulanan di Accurate Online untuk mencatat biaya rutin, sewa, cicilan, dan langgan"] },
    'Proses Akhir Bulan': { slug: 'proses-akhir-bulan', count: 3, ids: ["per-20", "per-21", "per-22"], titles: ["Cara tutup buku bulanan", "Cara mencegah proses akhir bulan gagal karena stok minus", "Cara melakukan penyusutan aset tetap"], descs: ["Lakukan tutup buku bulanan lebih cepat dan akurat. Pelajari cara menggunakan fitur Proses Akhir Bulan di Accurate Online dengan membaca tutorial ini", "Proses akhir bulan gagal karena stok minus? Pelajari cara mengaktifkan fitur pencegahan stok minus di Accurate Online agar tutup buku lebih akurat, aman, dan bebas koreks", "Catat penyusutan aset tetap lewat Proses Akhir Bulan di Accurate Online, lalu cek jurnal penyusutannya. Panduan praktis untuk menjaga nilai buku aset."] },
    'Kontak': { slug: 'kontak', count: 1, ids: ["per-23"], titles: ["Mengenal fitur kontak dan Manfaatnya untuk Bisnis"], descs: ["Punya banyak pelanggan dan supplier? Pelajari cara mengelola data kontak bisnis di Accurate Online agar informasi pelanggan, supplier, dan riwayat transaksi tersimpan rap"] },
    'Transaksi Favorit': { slug: 'transaksi-favorit', count: 2, ids: ["per-24", "per-25"], titles: ["Cara menyimpan template transaksi", "Cara menghapus transaksi favorit"], descs: ["Sering membuat transaksi dengan format yang sama? Simpan sebagai template transaksi di Accurate Online agar tidak perlu input ulang akun, barang, atau detail transaksi se", "Daftar Transaksi Favorit sudah terlalu banyak atau tidak terpakai? Ini cara menghapus Transaksi Favorit di Accurate Online dengan aman tanpa menghapus data transaksi asli"] },
    'Approval': { slug: 'approval', count: 2, ids: ["per-26", "per-27"], titles: ["Mengenal fungsi fitur persetujuan (approval)", "Cara menyetujui banyak transaksi sekaligus"], descs: ["Ingin transaksi pembelian, pembayaran, atau pengeluaran tidak bisa diproses tanpa izin atasan? Pelajari fungsi fitur Approval di Accurate Online pada tutorial ini.", "Approval transaksi menumpuk dan tidak ingin menyetujuinya satu per satu? Pelajari cara approve banyak transaksi sekaligus di Accurate Online agar proses persetujuan lebih"] },
    'Kalender': { slug: 'kalender', count: 1, ids: ["per-28"], titles: ["Cara menggunakan fitur kalender"], descs: ["Gunakan fitur Kalender di Accurate Online untuk lihat jadwal transaksi, pantau jatuh tempo, dan atur kegiatan dengan lebih teratur."] },
    'Log Aktivitas': { slug: 'log-aktivitas', count: 1, ids: ["per-29"], titles: ["Cara melihat riwayat perubahan data dan transaksinya"], descs: ["Ingin tahu siapa yang mengubah, menghapus, atau membuat transaksi di Accurate Online? Pelajari cara melihat log aktivitas pengguna dan riwayat perubahan data secara lengk"] },
    'Departemen dan Proyek': { slug: 'departemen-proyek', count: 1, ids: ["per-30"], titles: ["Cara membuat departemen dan proyek"], descs: ["Ingin memisahkan biaya dan transaksi berdasarkan divisi atau proyek? Pelajari cara membuat Departemen dan Proyek di Accurate Online agar laporan keuangan lebih rapi dan m"] }
  };
    const isFolder = currentModule !== 'Perusahaan';
    const folder = isFolder ? info[currentModule] : null;

    return (
      <div className="page-index">
        <h1 className="page-title">{currentModule}</h1>
        <p className="page-subtitle">
          {isFolder
            ? `Panduan ${currentModule} pada modul Perusahaan CashFlow Online`
            : 'Kumpulan panduan pengelolaan data perusahaan CashFlow Online'}
        </p>

        <div className="articles-grid">
          {isFolder && folder
            ? folder.ids.map((id, i) => (
                <div key={id} className="card" onClick={() => setActiveTab(id)}>
                  <div className="card-header-icon">
                    <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
                    <h3>{folder.titles[i]}</h3>
                  </div>
                  <p>{folder.descs[i]}</p>
                </div>
              ))
            : [
                ...Object.entries(info).filter(([name]) => name !== 'Departemen dan Proyek').map(([name, d]) => (
                  <div key={name} className="folder-card" onClick={() => handleSelectModule(name)}>
                    <div className="folder-card-header">
                      <span className="theme-doc-card-icon" role="img" aria-label="folder">🗃</span>
                      <h3>{name}</h3>
                    </div>
                    <p className="folder-card-meta">{d.count} panduan</p>
                  </div>
                )),
                <div key="departemen" className="card" onClick={() => setActiveTab('per-30')}>
                  <div className="card-header-icon">
                    <span className="theme-doc-card-icon" style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
                    <h3>{info['Departemen dan Proyek'].titles[0]}</h3>
                  </div>
                  <p>{info['Departemen dan Proyek'].descs[0]}</p>
                </div>,
              ]}
        </div>

        <div className="doc-nav-grid">
          <div className="doc-nav-card prev" onClick={() => handleSelectModule('Perusahaan')}>
            <span className="doc-nav-label">Previous</span>
            <strong className="doc-nav-title">« Perusahaan</strong>
          </div>
        </div>
      </div>
    );
  }

  // 9. FALLBACK: modul tanpa panduan tetap menampilkan daftar sub-modul


  const subItems = plannedSubModules[currentModule] || [];
  return (
    <div className="page-index">
      <h1 className="page-title">{currentModule}</h1>
      <p className="page-subtitle">
        {subItems.length > 0
          ? 'Panduan CashFlow untuk modul ini belum tersedia.'
          : `Dokumentasi ${currentModule} di CashFlow Online`}
      </p>

      {subItems.length > 0 && (
        <div className="articles-grid">
          {subItems.map((sub) => (
            <div
              key={sub}
              className="folder-card"
              style={{ opacity: 0.6, cursor: 'not-allowed' }}
              aria-disabled="true"
            >
              <div className="folder-card-header">
                <span className="theme-doc-card-icon" role="img" aria-label="folder">🚧</span>
                <h3>{sub}</h3>
              </div>
              <p className="folder-card-meta">Segera hadir</p>
            </div>
          ))}
        </div>
      )}

      {subItems.length === 0 && (
        <div className="empty-state-box" style={{ background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '12px', padding: '40px 24px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1e293b', marginBottom: '8px' }}>Dokumentasi Modul {currentModule}</h3>
          <p style={{ color: '#64748b', fontSize: '14px', maxWidth: '520px', margin: '0 auto 20px' }}>
            Modul <strong>{currentModule}</strong> belum memiliki panduan. Saat ini yang tersedia: Pembelian dan Penjualan.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button 
              style={{ padding: '8px 18px', background: '#0284c7', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}
              onClick={() => handleSelectModule('CashFlow Online')}
            >
              Kembali ke Beranda Dokumen
            </button>
            <button 
              style={{ padding: '8px 18px', background: '#fff', color: '#0284c7', border: '1px solid #0284c7', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}
              onClick={() => handleSelectModule('Pembelian')}
            >
              Lihat Modul Pembelian
            </button>
          </div>
        </div>
      )}

      <div className="doc-nav-grid" style={{ marginTop: '32px' }}>
        <div className="doc-nav-card prev" onClick={() => handleSelectModule('CashFlow Online')}>
          <span className="doc-nav-label">Previous</span>
          <strong className="doc-nav-title">« CashFlow Online</strong>
        </div>
        <div className="doc-nav-card next" onClick={() => handleSelectModule('Fitur CashFlow Online')}>
          <span className="doc-nav-label">Next</span>
          <strong className="doc-nav-title">Fitur CashFlow Online »</strong>
        </div>
      </div>
    </div>
  );
};
