import { ArticleData } from '../../../types/article';

export const aksesGrupDibatasiData: ArticleData = {
  id: "ag-akses-dibatasi",
  title: "Cara Mengatasi Akses Operator yang Dibatasi",
  category: "Pengaturan · Akses Grup",
  readTime: "5 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Atasi pesan Administrator sementara membatasi akses Anda untuk membuka database ini.",
  note: "Hanya administrator yang dapat membuka kembali pembatasan akses operator.",
  steps: [
    {
      num: 1,
      title: "Kenali pesan",
      desc: "Pesan muncul karena administrator sedang membatasi akses grup operator.",
      caption: "Penyebab dipahami.",
      image: '/images/pembelian/error_nol_penyebab_po_kosong.png'
    },
    {
      num: 2,
      title: "Masuk sebagai administrator",
      desc: "Login memakai akun administrator yang memiliki hak penuh.",
      caption: "Akun admin aktif.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 3,
      title: "Cek preferensi dan Akses Grup",
      desc: "Buka Pengaturan → Preferensi → Akses Grup, lalu lihat pembatasan yang aktif.",
      caption: "Pembatasan terlihat.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 4,
      title: "Lepaskan pembatasan",
      desc: "Nonaktifkan opsi pembatasan atau ubah nivel akses, lalu Simpan.",
      caption: "Operator dapat mengakses kembali.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
