import { ArticleData } from '../../../types/article';

export const um001Data: ArticleData = {
  "id": "um-001",
  "title": "Cara mencatat DP pembelian ke supplier",
  "category": "Uang Muka Pembelian",
  "readTime": "4 Menit",
  "summary": "Buat dan bayar uang muka pembelian agar saldo DP dan utang supplier tercatat rapi.",
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
