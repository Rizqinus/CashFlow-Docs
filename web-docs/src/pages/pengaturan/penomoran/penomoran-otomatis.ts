import { ArticleData } from '../../../types/article';

export const penomoranOtomatisData: ArticleData = {
  id: "nomor-otomatis",
  title: "Cara Membuat Penomoran Transaksi Secara Otomatis",
  category: "Pengaturan · Penomoran",
  readTime: "5 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Buat format nomor transaksi otomatis yang disesuaikan dengan kebutuhan usaha.",
  note: "Nomor otomatis hanya berlaku untuk dokumen baru; dokumen lama tidak diubah.",
  steps: [
    {
      num: 1,
      title: "Buka Penomoran",
      desc: "Pengaturan → Penomoran.",
      caption: "Daftar transaksi dengan penomoran tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Pilih jenis transaksi",
      desc: "Pilih dokumen, misalnya Faktur Penjualan atau Pesanan Pembelian.",
      caption: "Jenis transaksi dipilih.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Susun format nomor",
      desc: "Tentukan awalan, nomor urut, dan akhiran sesuai kebutuhan usaha.",
      caption: "Format nomor tersusun.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan uji",
      desc: "Klik Simpan lalu buat transaksi baru untuk memastikan nomor otomatis muncul.",
      caption: "Penomoran berjalan otomatis.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
