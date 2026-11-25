import { ArticleData } from '../../../types/article';

export const aksesGrupMenuTidakTampilData: ArticleData = {
  id: "ag-menu-tidak-tampil",
  title: "Cara Mengatasi Menu Tidak Tampil di User Operator",
  category: "Pengaturan · Akses Grup",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Perbaiki menu yang tidak muncul saat operator login dengan menyesuaikan hak akses grupnya.",
  note: "Menu yang disembunyikan tidak hilang datanya, hanya tidak ditampilkan untuk grup tersebut.",
  steps: [
    {
      num: 1,
      title: "Cek grup pengguna",
      desc: "Pastikan akun operator masuk ke grup yang tepat pada menu Pengguna.",
      caption: "Grup akun teridentifikasi.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Periksa hak akses",
      desc: "Buka Akses Grup → grup tersebut → tab Hak Akses, lalu lihat menu yang dicentang.",
      caption: "Daftar izin terlihat.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Aktifkan menu",
      desc: "Centang menu yang ingin ditampilkan, misalnya Pembelian atau Kas & Bank.",
      caption: "Izin menu aktif.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan muat ulang",
      desc: "Klik Simpan, lalu logout dan login kembali sebagai operator.",
      caption: "Menu tampil sesuai izin.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
