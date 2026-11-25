import { ArticleData } from '../../../types/article';

export const preferensiKategoriKeuanganData: ArticleData = {
  id: "pref-kategori-keuangan",
  title: "Cara Membuat Laporan Laba Rugi per Proyek atau Kategori",
  category: "Pengaturan · Preferensi",
  readTime: "5 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Gunakan Kategori Keuangan untuk mengelompokkan transaksi dan melihat laba rugi per proyek, cabang, atau kota.",
  note: "Kategori baru hanya muncul pada transaksi yang dibuat setelah kategori tersebut aktif.",
  steps: [
    {
      num: 1,
      title: "Buka Kategori Keuangan",
      desc: "Pengaturan → Preferensi → tab Kategori Keuangan.",
      caption: "Daftar kategori tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Buat kategori",
      desc: "Klik Tambah, isi nama kategori seperti Proyek A atau Cabang Jakarta.",
      caption: "Kategori baru tercatat.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Petakan transaksi",
      desc: "Pada transaksi, isi kolom kategori keuangan sesuai kelompok yang diinginkan.",
      caption: "Transaksi terkelompok.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Lihat laporan",
      desc: "Klik Simpan lalu buka Laporan Laba Rugi dan pilih tampilan per kategori.",
      caption: "Laba rugi per kategori tampil.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
