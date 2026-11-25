import { ArticleData } from '../../../types/article';

export const preferensiAkunDefaultData: ArticleData = {
  id: "pref-akun-default",
  title: "Cara Mengatur Akun Default Transaksi",
  category: "Pengaturan · Preferensi",
  readTime: "5 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Tetapkan akun default untuk penjualan, pembelian, persediaan, HPP, dan transaksi lain di tab Akun.",
  note: "Akun default memengaruhi jurnal otomatis. Salah akun membuat laporan keuangan tidak seimbang.",
  steps: [
    {
      num: 1,
      title: "Buka tab Akun",
      desc: "Pengaturan → Preferensi → tab Akun.",
      caption: "Form akun default tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Pilih akun penjualan dan pembelian",
      desc: "Tentukan akun pendapatan, piutang, hutang, dan akun pembelian default.",
      caption: "Akun transaksi terisi.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Tentukan akun persediaan dan HPP",
      desc: "Pilih akun persediaan barang dan akun beban pokok penjualan.",
      caption: "Akun persediaan terhubung.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan uji",
      desc: "Klik Simpan lalu buat satu transaksi untuk memastikan jurnal memakai akun yang benar.",
      caption: "Akun default berlaku.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
