import { ArticleData } from '../../../types/article';

export const lp018Data: ArticleData = {
  id: "lp-018",
  title: "Cara melihat piutang yang sudah jatuh tempo",
  category: "Laporan · Daftar Laporan",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Cara menampilkan umur piutang berdasarkan jatuh tempo Tukar Faktur pada laporan Faktur Belum Lunas di Accurate Online.",
  note: "Gambar pada panduan ini memakai placeholder UI pembelian. Langkah mengikuti alur referensi Accurate Online.",
  steps: [
    {
      num: 1,
      title: "Buka menu terkait",
      desc: "Buka modul Daftar Laporan pada dokumentasi Laporan CashFlow Online.",
      caption: "Menu tujuan tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Isi data yang dibutuhkan",
      desc: "Lengkapi kolom sesuai panduan: Cara menampilkan umur piutang berdasarkan jatuh tempo Tukar Faktur pada laporan Faktur Belum Lunas di Accurate Online..",
      caption: "Data terisi.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Periksa hasil",
      desc: "Pastikan periode, akun, dan angka laporan sudah sesuai.",
      caption: "Transaksi valid.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan verifikasi",
      desc: "Klik Simpan lalu cek hasil pada laporan yang bersangkutan.",
      caption: "Perubahan berlaku.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
