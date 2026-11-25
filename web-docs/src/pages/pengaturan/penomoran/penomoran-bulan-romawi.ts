import { ArticleData } from '../../../types/article';

export const penomoranBulanRomawiData: ArticleData = {
  id: "nomor-romawi",
  title: "Cara Membuat Nomor Faktur dengan Format Bulan Romawi",
  category: "Pengaturan · Penomoran",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Gunakan bulan Romawi pada nomor faktur agar invoice lebih rapi dan mudah dibedakan tiap periode.",
  note: "Ganti tahun pada format setiap awal tahun agar urutan nomor tidak bertabrakan.",
  steps: [
    {
      num: 1,
      title: "Buka Penomoran",
      desc: "Pengaturan → Penomoran → Faktur Penjualan.",
      caption: "Pengaturan nomor faktur tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Aktifkan format Romawi",
      desc: "Pilih opsi Bulan dengan format Romawi pada komponen nomor.",
      caption: "Format Romawi aktif.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Susun urutan komponen",
      desc: "Atur urutan: awalan, nomor urut, bulan Romawi, dan tahun.",
      caption: "Urutan format ditetapkan.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan uji",
      desc: "Klik Simpan lalu buat faktur baru untuk melihat hasil format.",
      caption: "Faktur memakai bulan Romawi.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
