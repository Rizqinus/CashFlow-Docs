import { ArticleData } from '../../../types/article';

export const preferensiAksesData: ArticleData = {
  id: "pref-akses",
  title: "Cara Mengatur Pembatasan Akses dan Transaksi",
  category: "Pengaturan · Preferensi",
  readTime: "5 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Batasi akses modul per grup pengguna dan tentukan batas nilai transaksi yang boleh dibuat.",
  note: "Pembatasan akses hanya berlaku untuk pengguna non-owner. Uji dengan akun uji sebelum diterapkan.",
  steps: [
    {
      num: 1,
      title: "Buka pengaturan akses",
      desc: "Pengaturan → Preferensi → tab Hak Akses atau lanjut ke menu Akses Grup.",
      caption: "Daftar grup pengguna tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Pilih grup",
      desc: "Klik grup yang akan dibatasi lalu tentukan modul yang boleh diakses.",
      caption: "Hak per grup terisi.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Tetapkan batas transaksi",
      desc: "Isi nilai maksimal transaksi dan pilih apakah pengguna boleh mengubah harga atau diskon.",
      caption: "Batas transaksi ditetapkan.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan uji",
      desc: "Klik Simpan, lalu login dengan akun grup tersebut untuk memastikan menu terkunci.",
      caption: "Pembatasan akses aktif.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
