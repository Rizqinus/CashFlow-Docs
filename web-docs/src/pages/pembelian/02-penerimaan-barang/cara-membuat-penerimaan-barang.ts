import { ArticleData } from '../../../types/article';

export const articleManual: ArticleData = {
  id: 'art1',
  title: 'Cara Mencatat Barang yang Masuk dari Supplier di CashFlow',
  category: 'Penerimaan Barang',
  readTime: '3 Menit',
  author: 'Product Specialist',
  role: 'Inventory Consultant',
  publishDate: '24 Oktober 2026',
  updateDate: '02 November 2026',
  summary: 'Panduan operasional pencatatan surat jalan fisik barang masuk dari supplier secara langsung tanpa dokumen pesanan pembelian (Non-PO receipt) pada sistem persediaan CashFlow Online.',
  steps: [
    {
      num: 1,
      title: 'Buka formulir Penerimaan Barang',
      desc: 'Masuk ke menu navigasi Pembelian ➔ klik sub-menu Penerimaan Barang.',
      image: '/images/pembelian/cashflow_manual_langkah_1.png',
      caption: 'Gambar 1: Mengakses modul Pembelian dan membuka fitur Penerimaan Pesanan (1)'
    },
    {
      num: 2,
      title: 'Isi informasi Supplier dan Cari Barang',
      desc: 'Pilih nama pemasok pada kolom Supplier (1), tentukan tanggal terima, lalu pada kolom Scan / Cari Barang pilih item barang fisik yang masuk (2).',
      image: '/images/pembelian/cashflow_manual_langkah_2.png',
      caption: 'Gambar 2: Mengisi header dokumen (1) dan memilih item barang pada kolom pencarian (2)'
    },
    {
      num: 3,
      title: 'Tentukan Kuantitas dan Tambahkan Barang',
      desc: 'Pada modal pop-up yang muncul, tentukan kuantitas barang yang diterima secara fisik, lalu klik tombol Tambahkan.',
      image: '/images/pembelian/cashflow_manual_langkah_3.png',
      caption: 'Gambar 3: Memeriksa kuantitas/harga barang dan mengonfirmasi tombol Tambahkan'
    },
    {
      num: 4,
      title: 'Simpan Transaksi',
      desc: 'Periksa kembali daftar barang yang telah dimasukkan, lalu klik tombol Simpan di pojok kanan atas formulir untuk membukukan penambahan stok.',
      screenshotNote: 'Tombol simpan di pojok kanan atas form Penerimaan Barang'
    }
  ]
};
