import { ArticleData } from '../../../types/article';

export const mf020Data: ArticleData = {
  id: "mf-020",
  title: "Cara impor bahan baku perintah kerja dari excel",
  category: "Manufaktur · Pengambilan Bahan Baku",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Masukkan daftar bahan baku dari Excel ke Accurate Online tanpa input satu per satu. Cocok untuk produksi dengan banyak material.",
  note: "Gambar pada panduan ini memakai placeholder UI pembelian. Langkah mengikuti alur referensi Accurate Online.",
  steps: [
    {
      num: 1,
      title: "Buka menu terkait",
      desc: "Buka modul Pengambilan Bahan Baku pada dokumentasi Manufaktur CashFlow Online.",
      caption: "Menu tujuan tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Isi data yang dibutuhkan",
      desc: "Lengkapi kolom sesuai panduan: Masukkan daftar bahan baku dari Excel ke Accurate Online tanpa input satu per satu. Cocok untuk produksi dengan banyak material..",
      caption: "Data terisi.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Periksa hasil",
      desc: "Pastikan bahan baku, jumlah, tahapan, dan biaya produksi sudah sesuai.",
      caption: "Transaksi valid.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan verifikasi",
      desc: "Klik Simpan lalu cek hasil pada perintah kerja atau laporan produksi.",
      caption: "Perubahan berlaku.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
