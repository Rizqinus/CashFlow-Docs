import { ArticleData } from '../../../types/article';

export const aksesGrupMinJualBeliData: ArticleData = {
  id: "ag-min-jual-beli",
  title: "Cara Memberikan Hak Akses Minimum Jual/Beli",
  category: "Pengaturan · Akses Grup",
  readTime: "5 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Berikan izin khusus agar operator dapat menjual atau membeli barang di bawah syarat minimum.",
  note: "Tanpa izin ini, transaksi di bawah minimum jual atau beli akan ditolak sistem.",
  steps: [
    {
      num: 1,
      title: "Buka grup operator",
      desc: "Pengaturan → Akses Grup → grup yang akan diberi izin.",
      caption: "Pengaturan grup tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Cari izin minimum",
      desc: "Pada tab Hak Akses, cari opsi Jual/Below Minimum dan Beli/Below Minimum.",
      caption: "Opsi minimum terlihat.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Aktifkan izin",
      desc: "Centang izin tersebut untuk modul Penjualan dan Pembelian.",
      caption: "Izin minimum aktif.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan uji",
      desc: "Klik Simpan lalu buat transaksi di bawah minimum dengan akun operator.",
      caption: "Transaksi berhasil.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
