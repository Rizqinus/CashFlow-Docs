import { ArticleData } from '../../../types/article';

export const per24Data: ArticleData = {
  id: "per-24",
  title: "Cara menyimpan template transaksi",
  category: "Perusahaan · Transaksi Favorit",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Sering membuat transaksi dengan format yang sama? Simpan sebagai template transaksi di Accurate Online agar tidak perlu input ulang akun, barang, atau detail transaksi setiap kali membuat transaksi ba",
  note: "Gambar pada panduan ini memakai placeholder UI pembelian. Langkah mengikuti alur referensi Accurate Online.",
  steps: [
    {
      num: 1,
      title: "Buka menu terkait",
      desc: "Buka modul Transaksi Favorit pada dokumentasi Perusahaan CashFlow Online.",
      caption: "Menu tujuan tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Isi data yang dibutuhkan",
      desc: "Lengkapi kolom sesuai panduan: Sering membuat transaksi dengan format yang sama? Simpan sebagai template transaksi di Accurate Online agar tidak perlu input ulan.",
      caption: "Data terisi.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Periksa hasil",
      desc: "Pastikan nilai dan pengaturan sudah sesuai sebelum disimpan.",
      caption: "Pengaturan valid.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan verifikasi",
      desc: "Klik Simpan lalu cek hasil pada daftar atau transaksi terkait.",
      caption: "Perubahan berlaku.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
