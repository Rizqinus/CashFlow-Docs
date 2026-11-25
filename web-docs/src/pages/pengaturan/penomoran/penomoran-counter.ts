import { ArticleData } from '../../../types/article';

export const penomoranCounterData: ArticleData = {
  id: "nomor-counter",
  title: "Cara Melanjutkan Nomor Transaksi yang Sudah Berjalan",
  category: "Pengaturan · Penomoran",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Lanjutkan nomor faktur atau transaksi dari sistem lama agar tidak kembali ke 00001.",
  note: "Nomor berikutnya yang diisi akan dipakai untuk dokumen baru setelah pengaturan disimpan.",
  steps: [
    {
      num: 1,
      title: "Buka Penomoran",
      desc: "Pengaturan → Penomoran → pilih jenis transaksi.",
      caption: "Pengaturan nomor tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Cek nomor terakhir",
      desc: "Lihat nomor terakhir pada sistem lama yang akan dilanjutkan.",
      caption: "Nomor acuan diketahui.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Isi nomor berikutnya",
      desc: "Masukkan angka berikutnya pada kolom Counter atau Nomor Berikutnya.",
      caption: "Counter diperbarui.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan uji",
      desc: "Klik Simpan lalu buat transaksi baru untuk memastikan urutan berlanjut.",
      caption: "Nomor lanjut sesuai sistem lama.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
