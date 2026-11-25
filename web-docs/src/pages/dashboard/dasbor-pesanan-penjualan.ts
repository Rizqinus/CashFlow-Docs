import { ArticleData } from '../../types/article';

export const dasborPesananPenjualanData: ArticleData = {
  id: "dash-pesanan-penjualan",
  title: "Cara Melihat Pesanan Penjualan di Dashboard CashFlow Online",
  category: "Dashboard",
  readTime: "3 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "23 November 2026",
  updateDate: "23 November 2026",
  summary: "Pantau order pelanggan yang belum diproses atau belum dikirim langsung dari dashboard.",
  steps: [
    {
      num: 1,
      title: "Tambahkan widget",
      desc: "Buka menu Dashboard, lalu klik tombol + Widget.",
      caption: "Daftar widget tersedia tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Cari Pesanan Penjualan",
      desc: "Ketik kata kunci Pesanan Penjualan pada kolom pencarian, lalu pilih widget tersebut.",
      caption: "Widget Pesanan Penjualan tampil pada dashboard.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Lihat jumlah order",
      desc: "Periksa informasi jumlah pesanan yang masih menunggu proses atau pengiriman.",
      caption: "Order yang belum diproses terlihat sekilas.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Atur dan simpan",
      desc: "Klik ikon titik tiga, pilih Ubah, atur Judul Widget dan Cabang, lalu klik Simpan.",
      caption: "Pantau proses penjualan tanpa membuka laporan satu per satu.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    }
  ]
};
