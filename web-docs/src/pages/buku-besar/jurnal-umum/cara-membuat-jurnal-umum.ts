import { ArticleData } from '../../../types/article';

export const bb19Data: ArticleData = {
  id: "bb-19",
  title: "Cara membuat jurnal umum",
  category: "Buku Besar · Jurnal Umum",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Bingung cara input jurnal manual di Accurate Online? Ikuti panduan lengkap untuk mencatat transaksi debit dan kredit dengan mudah dan cepat.",
  note: "Gambar pada panduan ini memakai placeholder UI pembelian. Langkah mengikuti alur referensi Accurate Online.",
  steps: [
    {
      num: 1,
      title: "Buka menu terkait",
      desc: "Buka modul Jurnal Umum pada dokumentasi Buku Besar CashFlow Online.",
      caption: "Menu tujuan tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Isi data yang dibutuhkan",
      desc: "Lengkapi kolom sesuai panduan: Bingung cara input jurnal manual di Accurate Online? Ikuti panduan lengkap untuk mencatat transaksi debit dan kredit dengan mudah .",
      caption: "Data terisi.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Periksa hasil",
      desc: "Pastikan akun, nominal, dan periode sudah sesuai sebelum disimpan.",
      caption: "Jurnal valid.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan verifikasi",
      desc: "Klik Simpan lalu cek hasil pada buku besar atau daftar transaksi.",
      caption: "Perubahan berlaku.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
