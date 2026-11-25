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
      desc: 'Silakan buka modul Pembelian, lalu klik Penerimaan Barang.',
      image: '/images/pembelian/cashflow_manual_langkah_1.png',
      caption: 'Gambar 1: Membuka formulir Penerimaan Barang dari menu Pembelian'
    },
    {
      num: 2,
      title: 'Mengisi informasi penting',
      desc: 'Lengkapi informasi Terima Dari (Supplier), Tanggal dan Barang yang diterima pada formulir.',
      image: '/images/pembelian/cashflow_manual_langkah_2.png',
      caption: 'Gambar 2: Mengisi informasi Terima Dari, Tanggal, dan memilih item barang'
    },
    {
      num: 3,
      title: 'Mengisi informasi detail barang yang akan diterima',
      desc: 'Setelah itu, silakan mengisi informasi detail barang yang akan diterima (kuantitas dan gudang penyimpanan), lalu klik Tambahkan.',
      image: '/images/pembelian/cashflow_manual_langkah_3.png',
      caption: 'Gambar 3: Memeriksa rincian kuantitas/detail barang dan klik Tambahkan'
    },
    {
      num: 4,
      title: 'Simpan Dokumen',
      desc: 'Klik tombol simpan 💾 jika sudah selesai untuk membukukan penambahan stok.',
      caption: 'Langkah terakhir: Menyimpan transaksi Penerimaan Barang'
    }
  ]
};
