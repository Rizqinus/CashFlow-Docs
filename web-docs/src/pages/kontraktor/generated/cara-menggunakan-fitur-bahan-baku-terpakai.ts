import { ArticleData } from '../../../types/article';

export const kt002Data: ArticleData = {
  id: "kt-002",
  title: "Cara menggunakan fitur bahan baku terpakai",
  category: "Proyek Kontraktor · Bahan Baku Terpakai",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Catat pemakaian dan pengembalian bahan baku proyek kontraktor dengan fitur Bahan Baku Terpakai di Accurate Online agar stok gudang selalu sesuai.",
  note: "Gambar pada panduan ini memakai placeholder UI pembelian. Langkah mengikuti alur referensi Accurate Online.",
  steps: [
    {
      num: 1,
      title: "Buka menu terkait",
      desc: "Buka modul Bahan Baku Terpakai pada dokumentasi Proyek Kontraktor CashFlow Online.",
      caption: "Menu tujuan tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Isi data yang dibutuhkan",
      desc: "Lengkapi kolom sesuai panduan: Catat pemakaian dan pengembalian bahan baku proyek kontraktor dengan fitur Bahan Baku Terpakai di Accurate Online agar stok gudang.",
      caption: "Data terisi.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Periksa hasil",
      desc: "Pastikan anggaran, bahan, tahapan, dan biaya proyek sudah sesuai.",
      caption: "Transaksi valid.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan verifikasi",
      desc: "Klik Simpan lalu cek hasil pada proyek atau laporan proyek.",
      caption: "Perubahan berlaku.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
