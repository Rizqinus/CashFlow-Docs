import { ArticleData } from '../../../types/article';

export const preferensiErrorSelisihData: ArticleData = {
  id: "pref-error-selisih",
  title: "Cara Mengatasi Error Akun Selisih Pembelian Belum Tertagih",
  category: "Pengaturan · Preferensi",
  readTime: "5 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Atasi pesan Default Akun Selisih Pembelian Belum Tertagih Belum Didefinisikan saat membuat penerimaan barang.",
  note: "Pastikan akun selisih sudah dibuat di daftar akun perkiraan sebelum diisi di Preferensi.",
  steps: [
    {
      num: 1,
      title: "Kenali penyebab error",
      desc: "Error muncul karena akun selisih pembelian belum ditentukan pada Preferensi.",
      caption: "Penyebab dipahami.",
      image: '/images/pembelian/error_nol_penyebab_po_kosong.png'
    },
    {
      num: 2,
      title: "Buat akun selisih",
      desc: "Buka Akun Perkiraan, tambah akun Selisih Pembelian dengan tipe akun yang sesuai.",
      caption: "Akun selisih tersedia.",
      image: '/images/pembelian/error_nol_klik_edit.png'
    },
    {
      num: 3,
      title: "Isi di Preferensi",
      desc: "Pengaturan → Preferensi → tab Pembelian, pilih akun selisih tersebut pada kolom Akun Selisih Pembelian.",
      caption: "Akun selisih terpasang.",
      image: '/images/pembelian/error_nol_rincian_po_diisi.png'
    },
    {
      num: 4,
      title: "Simpan dan coba lagi",
      desc: "Klik Simpan lalu buat penerimaan barang kembali.",
      caption: "Error hilang, penerimaan tersimpan.",
      image: '/images/pembelian/error_nol_penerimaan_popup.png'
    },
  ]
};
