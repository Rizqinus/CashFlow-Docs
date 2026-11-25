import { ArticleData } from '../../../types/article';

export const mf002Data: ArticleData = {
  id: "mf-002",
  title: "Cara menentukan HPP produksi",
  category: "Manufaktur · Standar Biaya Produksi",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Ingin tahu estimasi biaya produksi sebelum proses produksi dimulai? Gunakan fitur Standar Biaya Produksi di Accurate Online dan hitung HPP lebih akurat.",
  note: "Gambar pada panduan ini memakai placeholder UI pembelian. Langkah mengikuti alur referensi Accurate Online.",
  steps: [
    {
      num: 1,
      title: "Buka menu terkait",
      desc: "Buka modul Standar Biaya Produksi pada dokumentasi Manufaktur CashFlow Online.",
      caption: "Menu tujuan tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Isi data yang dibutuhkan",
      desc: "Lengkapi kolom sesuai panduan: Ingin tahu estimasi biaya produksi sebelum proses produksi dimulai? Gunakan fitur Standar Biaya Produksi di Accurate Online dan hi.",
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
