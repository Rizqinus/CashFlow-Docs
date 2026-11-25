import { ArticleData } from '../../../types/article';

export const ps004Data: ArticleData = {
  id: "ps-004",
  title: "Cara menghapus banyak permintaan barang sekaligus",
  category: "Persediaan · Permintaan Barang",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "unya banyak transaksi Permintaan Barang yang salah atau tidak terpakai? Pelajari cara menghapusnya sekaligus di Accurate Online tanpa perlu hapus satu per satu.",
  note: "Gambar pada panduan ini memakai placeholder UI pembelian. Langkah mengikuti alur referensi Accurate Online.",
  steps: [
    {
      num: 1,
      title: "Buka menu terkait",
      desc: "Buka modul Permintaan Barang pada dokumentasi Persediaan CashFlow Online.",
      caption: "Menu tujuan tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Isi data yang dibutuhkan",
      desc: "Lengkapi kolom sesuai panduan: unya banyak transaksi Permintaan Barang yang salah atau tidak terpakai? Pelajari cara menghapusnya sekaligus di Accurate Online ta.",
      caption: "Data terisi.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Periksa hasil",
      desc: "Pastikan barang, gudang, jumlah, dan nilai persediaan sudah sesuai.",
      caption: "Transaksi valid.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan verifikasi",
      desc: "Klik Simpan lalu cek hasil pada kartu stok atau transaksi persediaan.",
      caption: "Perubahan berlaku.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
