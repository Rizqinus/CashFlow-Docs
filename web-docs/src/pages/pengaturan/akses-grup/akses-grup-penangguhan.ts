import { ArticleData } from '../../../types/article';

export const aksesGrupPenangguhanData: ArticleData = {
  id: "ag-penangguhan",
  title: "Cara Membatasi Operator Melakukan Penangguhan",
  category: "Pengaturan · Akses Grup",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Cegah operator melakukan penangguhan pendapatan dan beban lewat pengaturan hak akses.",
  note: "Pembatasan ini tidak memengaruhi transaksi yang sudah ditangguhkan sebelumnya.",
  steps: [
    {
      num: 1,
      title: "Buka grup operator",
      desc: "Pengaturan → Akses Grup → grup Operator.",
      caption: "Pengaturan grup tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Cari izin penangguhan",
      desc: "Pada tab Hak Akses, cari opsi Penangguhan pada modul Penjualan dan Pembelian.",
      caption: "Opsi penangguhan terlihat.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Nonaktifkan izin",
      desc: "Hapus centang izin Tambah/Edit Penangguhan untuk pendapatan dan beban.",
      caption: "Izin dinonaktifkan.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan uji",
      desc: "Klik Simpan lalu coba buat penangguhan dengan akun operator.",
      caption: "Penangguhan ditolak.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
