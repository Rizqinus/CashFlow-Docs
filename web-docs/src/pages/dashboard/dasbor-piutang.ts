import { ArticleData } from '../../types/article';

export const dasborPiutangData: ArticleData = {
  id: "dash-piutang",
  title: "Cara Melihat Pelanggan yang Masih Berutang di Dashboard CashFlow Online",
  category: "Dashboard",
  readTime: "3 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "23 November 2026",
  updateDate: "23 November 2026",
  summary: "Widget Pelanggan Berutang menampilkan daftar piutang pelanggan agar penagihan lebih terstruktur.",
  steps: [
    {
      num: 1,
      title: "Tambahkan widget",
      desc: "Di laman Dashboard, klik tombol Tambah Widget atau ikon +.",
      caption: "Formulir penambahan widget terbuka.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Pilih Pelanggan Berutang",
      desc: "Pilih Widget Pelanggan yang Berutang dari daftar widget yang tersedia.",
      caption: "Daftar pelanggan dengan kewajiban pembayaran tampil di dashboard.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Sesuaikan widget",
      desc: "Klik ikon titik tiga di pojok kanan atas widget, lalu atur Judul, Cabang, dan Maksimal Data.",
      caption: "Jumlah data piutang yang tampil dapat dibatasi sesuai kebutuhan.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan",
      desc: "Klik Simpan setelah pengaturan selesai.",
      caption: "Prioritas penagihan lebih mudah ditentukan dari dashboard.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    }
  ]
};
