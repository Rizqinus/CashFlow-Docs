import { ArticleData } from '../../../types/article';

export const ps012Data: ArticleData = {
  id: "ps-012",
  title: "Penyebab dan cara mengatasi selisih biaya pekerjaan pesanan",
  category: "Persediaan · Pekerjaan Pesanan",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Pekerjaan Pesanan di Accurate Online muncul selisih biaya? Pelajari penyebab umum seperti perubahan harga bahan baku dan cara sistem menghitungnya secara otomatis.",
  note: "Periksa saldo awal, status transaksi, dan metode penilaian persediaan sebelum mengulangi proses.",
  steps: [
    {
      num: 1,
      title: "Buka menu terkait",
      desc: "Buka modul Pekerjaan Pesanan pada dokumentasi Persediaan CashFlow Online.",
      caption: "Menu tujuan tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Isi data yang dibutuhkan",
      desc: "Lengkapi kolom sesuai panduan: Pekerjaan Pesanan di Accurate Online muncul selisih biaya? Pelajari penyebab umum seperti perubahan harga bahan baku dan cara sist.",
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
