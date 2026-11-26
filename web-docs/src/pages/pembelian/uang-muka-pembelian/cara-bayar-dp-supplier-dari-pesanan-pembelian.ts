import { ArticleData } from '../../../types/article';

export const um003Data: ArticleData = {
  "id": "um-003",
  "title": "Cara bayar DP supplier dari pesanan pembelian",
  "category": "Uang Muka Pembelian",
  "readTime": "4 Menit",
  "summary": "Bayar uang muka langsung dari PO tanpa input transaksi ganda.",
  "steps": [
    {
      "num": 1,
      "title": "Buka Menu Uang Muka Pembelian",
      "desc": "Masuk ke modul Pembelian, lalu pilih Uang Muka Pembelian.",
      "image": "/images/pembelian/cashflow_po_menu_navigasi.png",
      "screenshotNote": "Buka Menu Uang Muka Pembelian"
    },
    {
      "num": 2,
      "title": "Pilih Pemasok dan Nilai DP",
      "desc": "Tentukan pemasok, tanggal, akun kas/bank, dan nominal uang muka.",
      "image": "/images/pembelian/cashflow_po_menu_navigasi.png",
      "screenshotNote": "Pilih Pemasok dan Nilai DP"
    },
    {
      "num": 3,
      "title": "Hubungkan ke Pesanan atau Faktur",
      "desc": "Gunakan tombol Ambil bila DP berasal dari PO atau akan dipotong dari faktur.",
      "image": "/images/pembelian/cashflow_po_menu_navigasi.png",
      "screenshotNote": "Hubungkan ke Pesanan atau Faktur"
    },
    {
      "num": 4,
      "title": "Simpan dan Periksa Saldo DP",
      "desc": "Simpan transaksi, lalu cek saldo uang muka di kartu pemasok.",
      "image": "/images/pembelian/cashflow_po_menu_navigasi.png",
      "screenshotNote": "Simpan dan Periksa Saldo DP"
    }
  ]
};
