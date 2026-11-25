import { ArticleData } from '../../types/article';

export const dasborMonitoringHppData: ArticleData = {
  id: "dash-monitoring-hpp",
  title: "Cara Melihat HPP dan Margin Keuntungan Barang di Dashboard CashFlow Online",
  category: "Dashboard",
  readTime: "3 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "23 November 2026",
  updateDate: "23 November 2026",
  summary: "Widget Monitoring HPP menampilkan harga beli, harga jual, dan persentase HPP untuk membantu analisis margin.",
  note: "Pastikan transaksi pembelian dan penjualan sudah dicatat agar perhitungan HPP akurat.",
  steps: [
    {
      num: 1,
      title: "Pastikan transaksi tercatat",
      desc: "Sebelum melihat HPP, catat transaksi terkait: Pesanan Pembelian atau Faktur Pembelian, Faktur Penjualan, dan Pengiriman Pesanan.",
      caption: "Tanpa transaksi pembelian dan penjualan, nilai HPP belum dihitung sistem.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Tambah widget Monitoring HPP",
      desc: "Masuk ke Dashboard, klik + Widget, lalu cari dan pilih Monitoring HPP.",
      caption: "Widget Monitoring HPP tampil di dashboard.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Buka laporan Monitoring HPP",
      desc: "Buka Daftar Laporan, pilih kategori Penjualan, lalu klik Monitoring HPP.",
      caption: "Halaman laporan HPP terbuka.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Tentukan parameter laporan",
      desc: "Atur periode tanggal dan cabang yang ingin ditampilkan, lalu klik Tampilkan.",
      caption: "Data barang sesuai filter tampil.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
    {
      num: 5,
      title: "Baca informasi HPP",
      desc: "Periksa Nama Barang, Harga Jual, Satuan Jual, Harga Beli, Satuan Beli, dan Persentase HPP.",
      caption: "Margin keuntungan tiap barang dapat dievaluasi."
    }
  ]
};
