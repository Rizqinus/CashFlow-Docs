import { ArticleData } from '../../../types/article';

export const aksesGrupHargaStandarData: ArticleData = {
  id: "ag-harga-standar",
  title: "Cara Membatasi Operator Melihat Harga Standar",
  category: "Pengaturan · Akses Grup",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Sembunyikan harga standar dari operator pada formulir Formula Produksi dan Perintah Kerja.",
  note: "Operator tetap bisa memilih barang; hanya kolom harga standar yang disembunyikan.",
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
      title: "Cari izin harga",
      desc: "Pada tab Hak Akses, cari opsi Lihat Harga Standar pada modul Manufaktur.",
      caption: "Opsi harga terlihat.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Nonaktifkan izin",
      desc: "Hapus centang opsi Lihat Harga Standar.",
      caption: "Harga disembunyikan.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan uji",
      desc: "Klik Simpan lalu buka Formula Produksi dengan akun operator.",
      caption: "Kolom harga tidak tampil.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
