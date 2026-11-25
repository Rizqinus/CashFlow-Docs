import { ArticleData } from '../../../types/article';

export const articlePO: ArticleData = {
  id: 'art2',
  title: 'Cara Menerima Barang dari Pesanan Pembelian yang Sudah Dibuat',
  category: 'Penerimaan Barang',
  readTime: '3 Menit',
  author: 'Product Specialist',
  role: 'ERP Specialist',
  publishDate: '21 April 2025',
  updateDate: '17 Juli 2026',
  summary: 'Pernah order barang dari pemasok dan bingung menyesuaikan antara pesanan dan barang yang diterima? Gunakan fitur Penerimaan Barang dari Pesanan di CashFlow untuk menyambungkan secara langsung pesanan pembelian dengan barang masuk agar data otomatis terisi tanpa perlu input ulang.',
  steps: [
    {
      num: 1,
      title: 'Buka formulir Penerimaan Barang',
      desc: 'Silakan buka modul Pembelian, lalu klik Penerimaan Barang.',
      image: '/images/pembelian/cashflow_penerimaan_langkah_1.png',
      caption: 'Gambar 1: Membuka formulir Penerimaan Barang dan memilih pemasok'
    },
    {
      num: 2,
      title: 'Mengisi informasi penting',
      desc: 'Lengkapi informasi Terima Dari, Tanggal dan Barang yang diterima. Lanjutkan dengan klik tombol Ambil, dan pilih Pesanan.',
      image: '/images/pembelian/cashflow_penerimaan_langkah_2.png',
      caption: 'Gambar 2: Memilih opsi pengambilan data dari Pesanan Pembelian'
    },
    {
      num: 3,
      title: 'Pilih Pesanan Pembelian dan Klik Lanjut',
      desc: 'Pilih Pesanan Pembelian yang akan dimasukkan ke dalam Penerimaan Barang, lalu klik Lanjut.',
      caption: 'Memilih transaksi PO dan klik Lanjut'
    },
    {
      num: 4,
      title: 'Simpan Dokumen',
      desc: 'Klik tombol simpan 💾 jika sudah selesai untuk memperbarui status pesanan menjadi Terproses.',
      caption: 'Menyimpan dokumen penerimaan barang'
    }
  ]
};
