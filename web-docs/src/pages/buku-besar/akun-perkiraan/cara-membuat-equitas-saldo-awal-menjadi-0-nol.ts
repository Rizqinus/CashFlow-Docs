import { ArticleData } from '../../../types/article';

export const bb04Data: ArticleData = {
  id: "bb-04",
  title: "Cara membuat equitas saldo awal menjadi 0 (nol)",
  category: "Buku Besar · Akun Perkiraan",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Saldo Equitas Saldo Awal belum nol? Pindahkan saldonya ke akun bertipe Modal di Accurate Online agar neraca per tanggal mulai data balance.",
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
      desc: "Lengkapi kolom sesuai panduan: Saldo Equitas Saldo Awal belum nol? Pindahkan saldonya ke akun bertipe Modal di Accurate Online agar neraca per tanggal mulai data.",
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
