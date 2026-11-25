import { ArticleData } from '../../../types/article';

export const pn078Data: ArticleData = {
  id: "pn-078",
  title: "Cara impor pelanggan dengan banyak akun piutang",
  category: "Penjualan · Pelanggan",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Begini cara import data pelanggan dengan lebih dari satu akun piutang melalui Excel di Accurate Online untuk mempermudah migrasi dan pengelolaan piutang.",
  note: "Gambar pada panduan ini memakai placeholder UI pembelian. Langkah mengikuti alur referensi Accurate Online.",
  steps: [
    {
      num: 1,
      title: "Buka menu terkait",
      desc: "Buka modul Pelanggan pada dokumentasi Penjualan CashFlow Online.",
      caption: "Menu tujuan tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Isi data yang dibutuhkan",
      desc: "Lengkapi kolom sesuai panduan: Begini cara import data pelanggan dengan lebih dari satu akun piutang melalui Excel di Accurate Online untuk mempermudah migrasi d.",
      caption: "Data terisi.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Periksa hasil",
      desc: "Pastikan pelanggan, barang, nominal, dan pajak sudah sesuai.",
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
