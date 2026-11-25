import { ArticleData } from '../../../types/article';

export const kt004Data: ArticleData = {
  id: "kt-004",
  title: "Cara membuat penyelesaian proyek",
  category: "Proyek Kontraktor · Penyelesaian Proyek",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Proyek kontraktor sudah rampung? Catat Penyelesaian Proyek di Accurate Online, termasuk sisa barang yang kembali ke gudang, dengan cara berikut.",
  note: "Gambar pada panduan ini memakai placeholder UI pembelian. Langkah mengikuti alur referensi Accurate Online.",
  steps: [
    {
      num: 1,
      title: "Buka menu terkait",
      desc: "Buka modul Penyelesaian Proyek pada dokumentasi Proyek Kontraktor CashFlow Online.",
      caption: "Menu tujuan tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Isi data yang dibutuhkan",
      desc: "Lengkapi kolom sesuai panduan: Proyek kontraktor sudah rampung? Catat Penyelesaian Proyek di Accurate Online, termasuk sisa barang yang kembali ke gudang, dengan.",
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
