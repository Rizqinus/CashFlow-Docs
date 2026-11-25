import { ArticleData } from '../../../types/article';

export const ps008Data: ArticleData = {
  id: "ps-008",
  title: "Cara mengubah nilai persediaan tanpa mengubah stok",
  category: "Persediaan · Penyesuaian Persediaan",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Catat perubahan harga barang tanpa ubah jumlah stok di Accurate Online. Gunakan fitur penyesuaian untuk perbaikan laporan persediaan.",
  note: "Gambar pada panduan ini memakai placeholder UI pembelian. Langkah mengikuti alur referensi Accurate Online.",
  steps: [
    {
      num: 1,
      title: "Buka menu terkait",
      desc: "Buka modul Penyesuaian Persediaan pada dokumentasi Persediaan CashFlow Online.",
      caption: "Menu tujuan tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Isi data yang dibutuhkan",
      desc: "Lengkapi kolom sesuai panduan: Catat perubahan harga barang tanpa ubah jumlah stok di Accurate Online. Gunakan fitur penyesuaian untuk perbaikan laporan persedia.",
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
