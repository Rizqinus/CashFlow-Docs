import { ArticleData } from '../../../types/article';

export const pn112Data: ArticleData = {
  id: "pn-112",
  title: "Cara membuat harga grosir berdasarkan kuantitas penjualan",
  category: "Penjualan · Artikel Tambahan",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Atur harga grosir otomatis di Accurate Online berdasarkan jumlah pembelian pelanggan. Pelajari cara setting harga bertingkat tanpa ubah harga manual saat transaksi.",
  note: "Gambar pada panduan ini memakai placeholder UI pembelian. Langkah mengikuti alur referensi Accurate Online.",
  steps: [
    {
      num: 1,
      title: "Buka menu terkait",
      desc: "Buka dokumentasi Penjualan CashFlow Online, lalu cari panduan ini.",
      caption: "Menu tujuan tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Isi data yang dibutuhkan",
      desc: "Lengkapi kolom sesuai panduan: Atur harga grosir otomatis di Accurate Online berdasarkan jumlah pembelian pelanggan. Pelajari cara setting harga bertingkat tanpa.",
      caption: "Data terisi.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Periksa hasil",
      desc: "Pastikan data pelanggan, barang, dan pajak sudah sesuai.",
      caption: "Transaksi valid.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan verifikasi",
      desc: "Klik Simpan lalu cek hasil pada daftar transaksi penjualan.",
      caption: "Perubahan berlaku.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
