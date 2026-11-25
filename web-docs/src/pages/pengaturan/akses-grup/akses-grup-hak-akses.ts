import { ArticleData } from '../../../types/article';

export const aksesGrupHakAksesData: ArticleData = {
  id: "ag-hak-akses",
  title: "Cara Mengatur Hak Akses Pengguna",
  category: "Pengaturan · Akses Grup",
  readTime: "5 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Atur hak akses pengguna berdasarkan divisi, jabatan, atau tim agar tiap orang hanya membuka fitur sesuai tugasnya.",
  note: "Perubahan hak akses langsung berlaku. Uji dengan akun operator sebelum diterapkan ke seluruh tim.",
  steps: [
    {
      num: 1,
      title: "Buka Akses Grup",
      desc: "Pengaturan → Akses Grup.",
      caption: "Daftar grup pengguna tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Pilih atau buat grup",
      desc: "Klik grup yang ada atau buat grup baru sesuai divisi, jabatan, atau tim kerja.",
      caption: "Grup siap diatur.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Centang modul yang diizinkan",
      desc: "Pilih menu yang boleh diakses grup tersebut, lalu tentukan nivel aksesnya.",
      caption: "Hak akses terisi.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan",
      desc: "Klik Simpan, lalu login memakai akun anggota grup untuk memastikan menu muncul sesuai izin.",
      caption: "Hak akses aktif.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
