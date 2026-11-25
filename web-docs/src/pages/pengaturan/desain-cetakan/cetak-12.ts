import { ArticleData } from '../../../types/article';

export const cetak12Data: ArticleData = {
  id: "cetak-12",
  title: "Cara mengatasi error ada elemen yang berada di luar band",
  category: "Pengaturan · Desain Cetakan",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "mengatasi error ada elemen yang berada di luar band pada desain cetakan CashFlow Online.",
  note: "Error umum terjadi karena elemen keluar dari area band. Geser elemen ke dalam band sebelum disimpan.",
  steps: [
    {
      num: 1,
      title: "Buka Desain Cetakan",
      desc: "Pengaturan → Desain Cetakan → pilih template Faktur Penjualan.",
      caption: "Template Faktur Penjualan tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Tambahkan variabel yang sesuai",
      desc: "Tarik elemen atau masukkan variabel variabel yang sesuai ke band yang sesuai pada template.",
      caption: "variabel yang sesuai masuk ke template.",
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
