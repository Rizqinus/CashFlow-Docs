import { ArticleData } from '../../../types/article';

export const kb09Data: ArticleData = {
  id: "kb-09",
  title: "Mengisi departemen atau proyek yang kosong di pembayaran",
  category: "Kas & Bank · Pembayaran",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Masih ada kolom departemen atau proyek yang kosong di transaksi pembayaran? Pelajari cara mengisi hanya kolom yang belum terisi tanpa mengubah data yang sudah ada di Accurate Online.",
  note: "Periksa saldo, tanggal, dan transaksi yang belum dicocokkan sebelum mengulangi proses.",
  steps: [
    {
      num: 1,
      title: "Buka menu terkait",
      desc: "Buka modul Pembayaran pada dokumentasi Kas & Bank CashFlow Online.",
      caption: "Menu tujuan tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Isi data yang dibutuhkan",
      desc: "Lengkapi kolom sesuai panduan: Masih ada kolom departemen atau proyek yang kosong di transaksi pembayaran? Pelajari cara mengisi hanya kolom yang belum terisi ta.",
      caption: "Data terisi.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Periksa hasil",
      desc: "Pastikan akun kas/bank, nominal, dan tanggal sudah sesuai.",
      caption: "Transaksi valid.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan verifikasi",
      desc: "Klik Simpan lalu cek mutasi atau saldo pada buku kas/bank.",
      caption: "Perubahan berlaku.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
