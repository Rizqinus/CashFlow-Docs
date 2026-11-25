import { ArticleData } from '../../../types/article';

export const aksesGrupBatasAnggaranData: ArticleData = {
  id: "ag-batas-anggaran",
  title: "Cara Mengatur Batas Anggaran untuk Operator",
  category: "Pengaturan · Akses Grup",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Batasi operator agar tidak membuat transaksi melebihi batas anggaran yang sudah ditentukan.",
  note: "Batas anggaran dihitung per transaksi. Transaksi di atas batas akan ditolak saat disimpan.",
  steps: [
    {
      num: 1,
      title: "Buka grup operator",
      desc: "Pengaturan → Akses Grup, lalu pilih grup Operator.",
      caption: "Pengaturan grup tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Buka pembatasan transaksi",
      desc: "Pilih tab Pembatasan, lalu aktifkan opsi batasan anggaran.",
      caption: "Opsi batasan aktif.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Isi nilai batas",
      desc: "Masukkan nominal maksimal transaksi yang boleh dibuat operator.",
      caption: "Nilai batas terisi.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan uji",
      desc: "Klik Simpan lalu coba buat transaksi melebihi batas untuk memastikan ditolak.",
      caption: "Pembatasan berlaku.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
