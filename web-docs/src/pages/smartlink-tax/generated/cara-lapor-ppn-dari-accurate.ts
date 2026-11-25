import { ArticleData } from '../../../types/article';

export const st001Data: ArticleData = {
  id: "st-001",
  title: "Cara lapor PPN dari Accurate",
  category: "Smartlink Tax · E-Faktur Legacy",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Ingin lapor PPN langsung dari Accurate Online? Pelajari cara menginstal e-Faktur Legacy dan menghubungkannya ke aplikasi PJAP.",
  note: "Gambar pada panduan ini memakai placeholder UI pembelian. Langkah mengikuti alur referensi Accurate Online.",
  steps: [
    {
      num: 1,
      title: "Buka menu terkait",
      desc: "Buka modul E-Faktur Legacy pada dokumentasi Smartlink Tax CashFlow Online.",
      caption: "Menu tujuan tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Isi data yang dibutuhkan",
      desc: "Lengkapi kolom sesuai panduan: Ingin lapor PPN langsung dari Accurate Online? Pelajari cara menginstal e-Faktur Legacy dan menghubungkannya ke aplikasi PJAP..",
      caption: "Data terisi.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Periksa hasil",
      desc: "Pastikan nomor faktur, tanggal, dan data pajak sudah sesuai.",
      caption: "Transaksi valid.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan verifikasi",
      desc: "Klik Simpan lalu cek hasil faktur pajak pada daftar transaksi.",
      caption: "Perubahan berlaku.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
