import { ArticleData } from '../../../types/article';

export const preferensiBukaData: ArticleData = {
  id: "pref-buka",
  title: "Cara Membuka dan Mengatur Preferensi CashFlow Online",
  category: "Pengaturan · Preferensi",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Buka menu Preferensi dan pahami fungsi setiap tab: Perusahaan, Pajak, Penjualan, Pembelian, dan Approval.",
  note: "Preferensi bersifat global per database perusahaan. Perubahan langsung berlaku untuk semua pengguna.",
  steps: [
    {
      num: 1,
      title: "Buka menu Pengaturan",
      desc: "Klik ikon roda gigi pada sidebar kiri, lalu pilih Pengaturan.",
      caption: "Halaman Pengaturan terbuka.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Pilih Preferensi",
      desc: "Klik sub-menu Preferensi untuk menampilkan daftar tab pengaturan.",
      caption: "Tab preferensi tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Kenali setiap tab",
      desc: "Tab Perusahaan untuk identitas usaha, Pajak untuk NPWP dan PPN, Penjualan dan Pembelian untuk nilai default transaksi, Approval untuk persetujuan dokumen.",
      caption: "Struktur tab dipahami.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan per tab",
      desc: "Ubah nilai pada tab yang diinginkan lalu klik Simpan. Ulangi untuk tab lain bila perlu.",
      caption: "Preferensi tersimpan per tab.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
