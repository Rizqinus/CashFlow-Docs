import { ArticleData } from '../../types/article';

export const dasborKasBankData: ArticleData = {
  id: "dash-kas-bank",
  title: "Cara Melihat Saldo Kas & Bank di Dashboard CashFlow Online",
  category: "Dashboard",
  readTime: "3 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "23 November 2026",
  updateDate: "23 November 2026",
  summary: "Widget Ketersediaan Kas menampilkan posisi saldo kas dan bank tanpa perlu membuka laporan satu per satu.",
  steps: [
    {
      num: 1,
      title: "Buka Dashboard",
      desc: "Masuk ke halaman Dashboard data usaha CashFlow Online.",
      caption: "Halaman utama setelah login menampilkan area widget.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Tambahkan Widget Ketersediaan Kas",
      desc: "Klik + Widget, lalu pilih Ketersediaan Kas dari daftar widget.",
      caption: "Widget Ketersediaan Kas tampil pada dashboard.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Buka menu Ubah",
      desc: "Klik ikon titik tiga vertikal (⋮) di pojok kanan atas widget, lalu pilih Ubah.",
      caption: "Pengaturan tampilan widget terbuka.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Atur data dan simpan",
      desc: "Sesuaikan Judul widget, titik data akun Kas/Bank, dan Rentang Waktu, lalu klik Simpan.",
      caption: "Saldo kas dan bank terpantau secara real-time dari dashboard.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    }
  ]
};
