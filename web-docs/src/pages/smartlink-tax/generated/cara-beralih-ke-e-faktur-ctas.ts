import { ArticleData } from '../../../types/article';

export const st002Data: ArticleData = {
  id: "st-002",
  title: "Cara beralih ke e-faktur CTAS",
  category: "Smartlink Tax · E-Faktur CTAS",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Sedang migrasi ke Coretax DJP? Ikuti panduan e-Faktur CTAS di Accurate Online agar proses upload Faktur Pajak berjalan lebih mudah.",
  note: "Gambar pada panduan ini memakai placeholder UI pembelian. Langkah mengikuti alur referensi Accurate Online.",
  steps: [
    {
      num: 1,
      title: "Buka menu terkait",
      desc: "Buka modul E-Faktur CTAS pada dokumentasi Smartlink Tax CashFlow Online.",
      caption: "Menu tujuan tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Isi data yang dibutuhkan",
      desc: "Lengkapi kolom sesuai panduan: Sedang migrasi ke Coretax DJP? Ikuti panduan e-Faktur CTAS di Accurate Online agar proses upload Faktur Pajak berjalan lebih mudah.",
      caption: "Data terisi.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Periksa hasil",
      desc: "Pastikan nomor faktur, tanggal, dan data pajak sudah sesuai.",
      caption: "Transaksi valid.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan verifikasi",
      desc: "Klik Simpan lalu cek hasil faktur pajak pada daftar transaksi.",
      caption: "Perubahan berlaku.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
