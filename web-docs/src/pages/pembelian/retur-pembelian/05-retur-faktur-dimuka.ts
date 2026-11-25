import { ArticleData } from '../../../types/article';

export const rp005Data: ArticleData = {
  id: 'rp-005',
  title: "Cara Mencatat Retur Pembelian untuk Faktur Dimuka",
  category: "Retur Pembelian",
  readTime: "4 Menit",
  summary: "Faktur pembelian dimuka dibuat sebelum barang datang. Jika barang harus diretur, ikuti dua kondisi ini agar pencatatan tetap benar.",

  steps: [
    {
      num: 1,
      title: "Buka Faktur Dimuka",
      desc: "Masuk ke Pembelian › Faktur Pembelian dan filter faktur dengan status Dimuka.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Daftar faktur pembelian dimuka"
    },
    {
      num: 2,
      title: "Kondisi 1 — Belum Diterima",
      desc: "Jika barang belum diterima, batalkan faktur dimuka atau buat retur penuh dari faktur tersebut agar stok tidak bertambah.",
      image: "/images/pembelian/cashflow_po_tabel_terisi.png",
      screenshotNote: "Form pembatalan/retur faktur dimuka"
    },
    {
      num: 3,
      title: "Kondisi 2 — Sudah Diterima",
      desc: "Jika barang sudah diterima, terima barang lebih dulu, lalu buat retur dari faktur yang sudah terealisasi.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Alur penerimaan lalu retur"
    },
    {
      num: 4,
      title: "Cek Jurnal",
      desc: "Periksa jurnal akhir. Pengeluaran barang yang dibatalkan tidak boleh meninggalkan saldo akun persediaan.",
      image: "/images/pembelian/cashflow_po_tabel_terisi.png",
      screenshotNote: "Pratinjau jurnal retur faktur dimuka"
    }
  ],
  note: "Kesalahan umum: meretur faktur dimuka sebelum penerimaan dicatat. Urutan yang benar adalah terima barang, lalu retur."
};