import { ArticleData } from '../../types/article';

export const dasborPenjualanData: ArticleData = {
  id: "dash-penjualan",
  title: "Cara Melihat Aktivitas Penjualan di Dashboard CashFlow Online",
  category: "Dashboard",
  readTime: "3 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "23 November 2026",
  updateDate: "23 November 2026",
  summary: "Widget Penjualan menampilkan transaksi terbaru dan performa cabang tanpa membuka laporan manual.",
  steps: [
    {
      num: 1,
      title: "Buka Dashboard",
      desc: "Masuk ke tab Dashboard, lalu klik tombol + Widget pada area dashboard.",
      caption: "Daftar widget tersedia tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Pilih Widget Penjualan",
      desc: "Cari Widget Penjualan, lalu pilih hingga widget tersebut muncul di dashboard.",
      caption: "Aktivitas penjualan langsung tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Buka pengaturan",
      desc: "Klik ikon titik tiga di pojok kanan atas widget untuk melakukan penyesuaian data.",
      caption: "Menu pengaturan widget terbuka.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Atur informasi dan simpan",
      desc: "Ubah Judul Widget, pilih Cabang, tentukan Maksimal Data dan Rentang Waktu, lalu klik Simpan.",
      caption: "Performa penjualan per cabang dan periode siap dipantau.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    }
  ]
};
