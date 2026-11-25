import { ArticleData } from '../../../types/article';

export const aksesGrupBahanBakuData: ArticleData = {
  id: "ag-bahan-baku",
  title: "Cara Membatasi Pengambilan Bahan Baku",
  category: "Pengaturan · Akses Grup",
  readTime: "5 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Cegah operator mengambil bahan baku melebihi jumlah pada Perintah Kerja.",
  note: "Pembatasan ini membantu mencegah selisih stok dan kesalahan produksi.",
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
      title: "Cari izin bahan baku",
      desc: "Pada tab Hak Akses, cari opsi Ambil Bahan Baku Melebihi Perintah Kerja.",
      caption: "Opsi bahan baku terlihat.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Nonaktifkan izin",
      desc: "Hapus centang izin tersebut pada modul Manufaktur.",
      caption: "Pengambilan dibatasi.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan uji",
      desc: "Klik Simpan lalu coba ambil bahan baku melebihi Perintah Kerja.",
      caption: "Pengambilan ditolak.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
