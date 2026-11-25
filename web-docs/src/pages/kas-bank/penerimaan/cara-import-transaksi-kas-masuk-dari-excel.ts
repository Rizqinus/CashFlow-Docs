import { ArticleData } from '../../../types/article';

export const kb14Data: ArticleData = {
  id: "kb-14",
  title: "Cara import transaksi kas masuk dari excel",
  category: "Kas & Bank · Penerimaan",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "BInput ratusan transaksi penerimaan kas dan bank hanya dalam beberapa menit dengan fitur import Excel di Accurate Online.",
  note: "Gambar pada panduan ini memakai placeholder UI pembelian. Langkah mengikuti alur referensi Accurate Online.",
  steps: [
    {
      num: 1,
      title: "Buka menu terkait",
      desc: "Buka modul Penerimaan pada dokumentasi Kas & Bank CashFlow Online.",
      caption: "Menu tujuan tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Isi data yang dibutuhkan",
      desc: "Lengkapi kolom sesuai panduan: BInput ratusan transaksi penerimaan kas dan bank hanya dalam beberapa menit dengan fitur import Excel di Accurate Online..",
      caption: "Data terisi.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Periksa hasil",
      desc: "Pastikan akun kas/bank, nominal, dan tanggal sudah sesuai.",
      caption: "Transaksi valid.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan verifikasi",
      desc: "Klik Simpan lalu cek mutasi atau saldo pada buku kas/bank.",
      caption: "Perubahan berlaku.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
