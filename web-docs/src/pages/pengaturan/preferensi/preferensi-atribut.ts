import { ArticleData } from '../../../types/article';

export const preferensiAtributData: ArticleData = {
  id: "pref-atribut",
  title: "Cara Menambahkan Kolom atau Informasi Tambahan",
  category: "Pengaturan · Preferensi",
  readTime: "5 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Tambahkan atribut tambahan seperti warna, ukuran, dan nomor seri pada barang melalui fitur Atribut Tambahan.",
  note: "Atribut yang sudah dipakai transaksi tidak bisa dihapus, hanya dinonaktifkan agar histori tetap utuh.",
  steps: [
    {
      num: 1,
      title: "Buka Atribut Tambahan",
      desc: "Pengaturan → Preferensi → tab Atribut Tambahan.",
      caption: "Daftar atribut tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Buat atribut baru",
      desc: "Klik Tambah, isi nama atribut seperti Warna atau Ukuran, lalu tentukan tipe datanya.",
      caption: "Atribut baru tercatat.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Tentukan nilai atribut",
      desc: "Tambahkan pilihan nilai yang tersedia untuk atribut tersebut.",
      caption: "Daftar nilai terisi.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan gunakan",
      desc: "Klik Simpan, lalu buka data barang untuk memilih atribut yang sudah dibuat.",
      caption: "Atribut muncul di form barang.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
