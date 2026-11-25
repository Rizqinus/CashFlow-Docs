import { ArticleData } from '../../../types/article';

export const preferensiLainLainData: ArticleData = {
  id: "pref-lain",
  title: "Cara Mengatur Format Angka, Umur Piutang, dan Lain-lain",
  category: "Pengaturan · Preferensi",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Atur format angka dan tanggal, umur piutang, umur persediaan, komisi penjual, serta email transaksi di tab Lain-Lain.",
  note: "Perubahan format angka hanya memengaruhi tampilan dan cetakan, bukan nilai tersimpan.",
  steps: [
    {
      num: 1,
      title: "Buka tab Lain-Lain",
      desc: "Pengaturan → Preferensi → tab Lain-Lain.",
      caption: "Form preferensi umum tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Atur format angka dan tanggal",
      desc: "Pilih pemisah desimal, pemisah ribuan, serta format tanggal yang dipakai dokumen.",
      caption: "Format tampilan ditetapkan.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Tentukan umur piutang dan persediaan",
      desc: "Isi jumlah hari untuk pengelompokan umur piutang, umur persediaan, dan komisi penjual.",
      caption: "Rentang umur terisi.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan",
      desc: "Klik Simpan lalu buka laporan umur piutang untuk memastikan pengelompokan sesuai.",
      caption: "Preferensi lain-lain tersimpan.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
