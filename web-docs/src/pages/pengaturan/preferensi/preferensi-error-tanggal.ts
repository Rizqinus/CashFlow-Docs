import { ArticleData } from '../../../types/article';

export const preferensiErrorTanggalData: ArticleData = {
  id: "pref-error-tanggal",
  title: "Penyebab dan Cara Mengatasi Error Tanggal Transaksi",
  category: "Pengaturan · Preferensi",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Atasi error Tanggal transaksi tidak dapat lebih kecil dari tanggal mulai data perusahaan saat menyimpan dokumen.",
  note: "Mengubah tanggal mulai data perusahaan berdampak pada seluruh periode pembukuan. Lakukan dengan hati-hati.",
  steps: [
    {
      num: 1,
      title: "Kenali penyebab error",
      desc: "Tanggal dokumen lebih awal dari tanggal mulai data perusahaan pada preferensi.",
      caption: "Penyebab dipahami.",
      image: '/images/pembelian/error_nol_penyebab_po_kosong.png'
    },
    {
      num: 2,
      title: "Cek tanggal mulai data",
      desc: "Pengaturan → Preferensi → tab Perusahaan, lihat kolom Tanggal Mulai Data.",
      caption: "Tanggal mulai terlihat.",
      image: '/images/pembelian/error_nol_daftar_po_nol.png'
    },
    {
      num: 3,
      title: "Sesuaikan tanggal",
      desc: "Ubah tanggal mulai ke tanggal yang lebih awal, atau ubah tanggal dokumen ke rentang yang diizinkan.",
      caption: "Rentang tanggal valid.",
      image: '/images/pembelian/error_nol_klik_edit.png'
    },
    {
      num: 4,
      title: "Simpan dan coba lagi",
      desc: "Klik Simpan lalu simpan kembali transaksi yang gagal.",
      caption: "Transaksi tersimpan.",
      image: '/images/pembelian/error_nol_penerimaan_popup.png'
    },
  ]
};
