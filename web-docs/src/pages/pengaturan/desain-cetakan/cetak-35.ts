import { ArticleData } from '../../../types/article';

export const cetak35Data: ArticleData = {
  id: "cetak-35",
  title: "Cara menampilkan pph 23 pada desain cetakan faktur pembelian",
  category: "Pengaturan · Desain Cetakan",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "menampilkan pph 23 pada desain cetakan faktur pembelian pada desain cetakan CashFlow Online.",
  note: "Perubahan desain cetakan berlaku untuk dokumen baru. Uji lewat Preview sebelum dipakai cetak permanen.",
  steps: [
    {
      num: 1,
      title: "Buka Desain Cetakan",
      desc: "Pengaturan → Desain Cetakan → pilih template Faktur Pembelian.",
      caption: "Template Faktur Pembelian tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Tambahkan PPh 23",
      desc: "Tarik elemen atau masukkan variabel PPh 23 ke band yang sesuai pada template.",
      caption: "PPh 23 masuk ke template.",
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
