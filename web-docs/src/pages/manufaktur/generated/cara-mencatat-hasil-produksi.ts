import { ArticleData } from '../../../types/article';

export const mf025Data: ArticleData = {
  id: "mf-025",
  title: "Cara mencatat hasil produksi",
  category: "Manufaktur · Penyelesaian Barang Jadi",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Sudah selesai produksi? Begini cara memasukkan hasil produksi ke stok barang di Accurate Online agar persediaan dan laporan keuangan otomatis diperbarui.",
  note: "Gambar pada panduan ini memakai placeholder UI pembelian. Langkah mengikuti alur referensi Accurate Online.",
  steps: [
    {
      num: 1,
      title: "Buka menu terkait",
      desc: "Buka modul Penyelesaian Barang Jadi pada dokumentasi Manufaktur CashFlow Online.",
      caption: "Menu tujuan tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Isi data yang dibutuhkan",
      desc: "Lengkapi kolom sesuai panduan: Sudah selesai produksi? Begini cara memasukkan hasil produksi ke stok barang di Accurate Online agar persediaan dan laporan keuang.",
      caption: "Data terisi.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Periksa hasil",
      desc: "Pastikan bahan baku, jumlah, tahapan, dan biaya produksi sudah sesuai.",
      caption: "Transaksi valid.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan verifikasi",
      desc: "Klik Simpan lalu cek hasil pada perintah kerja atau laporan produksi.",
      caption: "Perubahan berlaku.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
