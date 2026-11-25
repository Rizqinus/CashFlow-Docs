import { ArticleData } from '../../../types/article';

export const preferensiFiturData: ArticleData = {
  id: "pref-fitur",
  title: "Cara Mengaktifkan dan Mengatur Fitur Sesuai Kebutuhan",
  category: "Pengaturan · Preferensi",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Aktifkan modul penjualan, pembelian, persediaan, dan fitur lain sesuai alur bisnis perusahaan.",
  note: "Menonaktifkan modul menyembunyikan menunya, tetapi data transaksi lama tetap tersimpan.",
  steps: [
    {
      num: 1,
      title: "Buka tab Fitur",
      desc: "Pengaturan → Preferensi → tab Fitur atau Umum.",
      caption: "Daftar fitur tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Pilih modul yang dipakai",
      desc: "Centang modul yang dibutuhkan seperti Penjualan, Pembelian, Persediaan, dan Aset Tetap.",
      caption: "Modul aktif ditandai.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Atur opsi lanjutan",
      desc: "Tentukan opsi multi gudang, multi cabang, dan nomor seri bila diperlukan.",
      caption: "Opsi lanjutan disesuaikan.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan muat ulang",
      desc: "Klik Simpan lalu muat ulang aplikasi agar menu baru muncul di sidebar.",
      caption: "Menu mengikuti fitur aktif.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
