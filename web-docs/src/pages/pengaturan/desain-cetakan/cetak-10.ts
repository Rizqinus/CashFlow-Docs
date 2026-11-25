import { ArticleData } from '../../../types/article';

export const cetak10Data: ArticleData = {
  id: "cetak-10",
  title: "Cara menampilkan kolom debit kredit di cetakan pembayaran",
  category: "Pengaturan · Desain Cetakan",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "menampilkan kolom debit kredit di cetakan pembayaran pada desain cetakan CashFlow Online.",
  note: "Perubahan desain cetakan berlaku untuk dokumen baru. Uji lewat Preview sebelum dipakai cetak permanen.",
  steps: [
    {
      num: 1,
      title: "Buka Desain Cetakan",
      desc: "Pengaturan → Desain Cetakan → pilih template Pembayaran.",
      caption: "Template Pembayaran tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Tambahkan Debit",
      desc: "Tarik elemen atau masukkan variabel Debit ke band yang sesuai pada template.",
      caption: "Debit masuk ke template.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Atur posisi dan format",
      desc: "Sesuaikan posisi, font, dan format agar hasil cetak rapi.",
      caption: "Tata letak tersusun.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan uji cetak",
      desc: "Klik Simpan lalu buka Preview untuk memastikan hasil sesuai harapan.",
      caption: "Hasil cetak sesuai.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
