import { ArticleData } from '../../types/article';

export const dasborFakturTerlewatData: ArticleData = {
  id: "dash-faktur-terlewat",
  title: "Cara Melihat Faktur yang Belum Dibayar di Dashboard CashFlow Online",
  category: "Dashboard",
  readTime: "3 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "23 November 2026",
  updateDate: "23 November 2026",
  summary: "Gunakan Widget Faktur Terlambat untuk memantau faktur jatuh tempo dan menentukan prioritas penagihan.",
  steps: [
    {
      num: 1,
      title: "Tambah widget dari Dashboard",
      desc: "Buka tab Dashboard lalu klik tombol + Widget pada halaman dashboard.",
      caption: "Daftar widget tersedia akan tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Pilih Widget Faktur Terlambat",
      desc: "Cari Faktur Terlambat pada daftar widget, lalu pilih widget tersebut.",
      caption: "Widget menampilkan daftar faktur yang belum dibayar.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Periksa pengelompokan keterlambatan",
      desc: "Lihat faktur yang dikelompokkan berdasarkan jumlah hari keterlambatan.",
      caption: "Faktur dengan keterlambatan terbesar lebih mudah diprioritaskan.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Atur widget dan simpan",
      desc: "Klik ikon titik tiga (⋮), pilih Ubah, lalu atur Judul dan Cabang sebelum klik Simpan.",
      caption: "Daftar faktur terlewat siap dipantau langsung dari dashboard.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    }
  ]
};
