import { ArticleData } from '../../../types/article';

export const pn019Data: ArticleData = {
  id: "pn-019",
  title: "Cara memotong invoice dengan uang muka (DP)",
  category: "Penjualan · Faktur Penjualan",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Gunakan uang muka pelanggan untuk mengurangi nilai tagihan pada faktur penjualan di Accurate Online tanpa perlu perhitungan manual.",
  note: "Gambar pada panduan ini memakai placeholder UI pembelian. Langkah mengikuti alur referensi Accurate Online.",
  steps: [
    {
      num: 1,
      title: "Buka menu terkait",
      desc: "Buka modul Faktur Penjualan pada dokumentasi Penjualan CashFlow Online.",
      caption: "Menu tujuan tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Isi data yang dibutuhkan",
      desc: "Lengkapi kolom sesuai panduan: Gunakan uang muka pelanggan untuk mengurangi nilai tagihan pada faktur penjualan di Accurate Online tanpa perlu perhitungan manual.",
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
