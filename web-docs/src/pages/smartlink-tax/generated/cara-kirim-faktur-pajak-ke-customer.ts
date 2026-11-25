import { ArticleData } from '../../../types/article';

export const st003Data: ArticleData = {
  id: "st-003",
  title: "Cara kirim faktur pajak ke customer",
  category: "Smartlink Tax · E-mail Faktur Pajak",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Begini cara mengirim Faktur Pajak ke customer lewat email langsung dari Accurate Online dengan proses yang cepat dan praktis",
  note: "Gambar pada panduan ini memakai placeholder UI pembelian. Langkah mengikuti alur referensi Accurate Online.",
  steps: [
    {
      num: 1,
      title: "Buka menu terkait",
      desc: "Buka modul E-mail Faktur Pajak pada dokumentasi Smartlink Tax CashFlow Online.",
      caption: "Menu tujuan tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Isi data yang dibutuhkan",
      desc: "Lengkapi kolom sesuai panduan: Begini cara mengirim Faktur Pajak ke customer lewat email langsung dari Accurate Online dengan proses yang cepat dan praktis.",
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
