import { ArticleData } from '../../../types/article';

export const aksesGrupPemindahanBarangData: ArticleData = {
  id: "ag-pemindahan-barang",
  title: "Cara Mengatasi Error Pemindahan Barang",
  category: "Pengaturan · Akses Grup",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Atasi pesan Pemindahan Barang Harus Melalui Permintaan Barang dengan mengaktifkan izin pada Akses Grup.",
  note: "Izin ini hanya untuk operator. Pastikan kebijakan gudang tetap tercatat bila izin langsung diberikan.",
  steps: [
    {
      num: 1,
      title: "Kenali error",
      desc: "Error muncul karena grup operator belum memiliki izin pemindahan barang langsung.",
      caption: "Penyebab dipahami.",
      image: '/images/pembelian/error_nol_penyebab_po_kosong.png'
    },
    {
      num: 2,
      title: "Buka Akses Grup",
      desc: "Pengaturan → Akses Grup → grup Operator → tab Hak Akses.",
      caption: "Halaman izin tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Aktifkan izin",
      desc: "Centang izin Pemindahan Barang Tanpa Permintaan pada modul Persediaan.",
      caption: "Izin aktif.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan coba lagi",
      desc: "Klik Simpan lalu ulangi pemindahan barang dengan akun operator.",
      caption: "Pemindahan berhasil.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
