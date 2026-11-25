import { ArticleData } from '../../../types/article';

export const aksesGrupCheckinData: ArticleData = {
  id: "ag-checkin",
  title: "Cara Membatasi Akses Check In Penjual pada Operator",
  category: "Pengaturan · Akses Grup",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Sembunyikan data Check In Penjual dari operator melalui pengaturan Akses Grup.",
  note: "Data tetap tersimpan dan bisa dilihat administrator bila dibutuhkan.",
  steps: [
    {
      num: 1,
      title: "Buka grup operator",
      desc: "Pengaturan → Akses Grup → grup Operator.",
      caption: "Pengaturan grup tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Cari izin check in",
      desc: "Pada tab Hak Akses, cari opsi Check In Penjual pada modul Penjualan.",
      caption: "Opsi check in terlihat.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Nonaktifkan izin",
      desc: "Hapus centang izin Lihat Check In Penjual.",
      caption: "Akses check in ditutup.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan uji",
      desc: "Klik Simpan lalu buka menu penjualan dengan akun operator.",
      caption: "Data check in tidak tampil.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
