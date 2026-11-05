import { ArticleData } from '../../../types/article';

export const articlePO: ArticleData = {
  id: 'art2',
  title: 'Cara Membuat Penerimaan Barang yang Berasal dari Pesanan Pembelian',
  category: 'Penerimaan Barang',
  readTime: '3 Menit',
  author: 'Senior Solution Architect',
  role: 'ERP Specialist',
  publishDate: '24 Oktober 2026',
  updateDate: '02 November 2026',
  summary: 'Alur penerimaan barang masuk berdasarkan referensi dokumen Pesanan Pembelian (Purchase Order) yang sudah disetujui sebelumnya.',
  steps: [
    {
      num: 1,
      title: 'Buka formulir Penerimaan Barang dan Pilih Supplier',
      desc: 'Masuk ke menu Pembelian ➔ Penerimaan Barang. Pilih nama Supplier yang sesuai dengan supplier penerbit PO.',
      image: '/images/pembelian/cashflow_penerimaan_langkah_1.png',
      caption: 'Gambar 1: Membuka formulir Penerimaan Barang dan memilih pemasok'
    },
    {
      num: 2,
      title: 'Klik tombol Ambil ➔ Pilih Pesanan Pembelian',
      desc: 'Pada sisi kanan form, klik dropdown tombol Ambil lalu klik pilihan Pesanan Pembelian.',
      image: '/images/pembelian/cashflow_penerimaan_langkah_2.png',
      caption: 'Gambar 2: Memilih opsi pengambilan data dari Pesanan Pembelian'
    },
    {
      num: 3,
      title: 'Pilih Nomor Transaksi PO dan Klik Lanjut',
      desc: 'Pilih nomor dokumen PO yang barangnya sedang diterima, centang item barang yang datang, lalu klik tombol Lanjut.',
      screenshotNote: 'Dialog pemilihan nomor PO dan checklist item barang yang diterima'
    },
    {
      num: 4,
      title: 'Simpan Dokumen',
      desc: 'Sistem akan otomatis mengisi kuantitas dan rincian barang. Klik Simpan untuk memperbarui status pesanan menjadi Terproses.',
      screenshotNote: 'Tombol Simpan form penerimaan barang'
    }
  ]
};
