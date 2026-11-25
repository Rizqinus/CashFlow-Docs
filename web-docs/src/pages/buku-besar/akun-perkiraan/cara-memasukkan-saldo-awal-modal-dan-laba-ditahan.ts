import { ArticleData } from '../../../types/article';

export const bb05Data: ArticleData = {
  id: "bb-05",
  title: "Cara memasukkan saldo awal modal dan laba ditahan",
  category: "Buku Besar · Akun Perkiraan",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Pelajari cara input saldo awal modal dan laba ditahan di Accurate Online lewat tab Saldo akun perkiraan agar nilai ekuitas perusahaan tercatat benar.",
  note: "Gambar pada panduan ini memakai placeholder UI pembelian. Langkah mengikuti alur referensi Accurate Online.",
  steps: [
    {
      num: 1,
      title: "Buka menu terkait",
      desc: "Buka modul Akun Perkiraan pada dokumentasi Buku Besar CashFlow Online.",
      caption: "Menu tujuan tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Isi data yang dibutuhkan",
      desc: "Lengkapi kolom sesuai panduan: Pelajari cara input saldo awal modal dan laba ditahan di Accurate Online lewat tab Saldo akun perkiraan agar nilai ekuitas perusah.",
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
