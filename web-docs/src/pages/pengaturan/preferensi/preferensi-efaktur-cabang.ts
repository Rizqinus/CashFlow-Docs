import { ArticleData } from '../../../types/article';

export const preferensiEfakturCabangData: ArticleData = {
  id: "pref-efaktur-cabang",
  title: "Cara Menampilkan Nama Cabang Saat Export E-Faktur",
  category: "Pengaturan · Preferensi",
  readTime: "3 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Tampilkan nama cabang pada kolom referensi saat export atau import e-Faktur untuk perusahaan multi cabang.",
  note: "Fitur ini hanya relevan bila perusahaan memakai lebih dari satu cabang pada database yang sama.",
  steps: [
    {
      num: 1,
      title: "Buka Preferensi Pajak",
      desc: "Pengaturan → Preferensi → tab Pajak.",
      caption: "Form pajak tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Aktifkan nama cabang",
      desc: "Centang opsi Tampilkan Nama Cabang pada Referensi E-Faktur.",
      caption: "Opsi aktif.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Pilih format referensi",
      desc: "Tentukan urutan penulisan nama cabang dan nomor dokumen.",
      caption: "Format referensi dipilih.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan export",
      desc: "Klik Simpan, lalu export e-Faktur dan periksa kolom referensi berisi nama cabang.",
      caption: "Nama cabang muncul di file export.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
