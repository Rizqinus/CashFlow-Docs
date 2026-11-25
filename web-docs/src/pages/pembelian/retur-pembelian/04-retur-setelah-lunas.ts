import { ArticleData } from '../../../types/article';

export const rp004Data: ArticleData = {
  id: 'rp-004',
  title: "Cara Retur Barang ke Supplier Setelah Pembayaran Lunas",
  category: "Retur Pembelian",
  readTime: "4 Menit",
  summary: "Supplier sudah dibayar tetapi barang rusak? Catat retur dan pengembalian dana supplier dengan benar agar kas dan hutang tetap sesuai.",

  steps: [
    {
      num: 1,
      title: "Buka Faktur yang Sudah Lunas",
      desc: "Buka Pembelian › Faktur Pembelian, lalu cari faktur dengan status Lunas.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Daftar faktur berstatus lunas"
    },
    {
      num: 2,
      title: "Buat Retur dari Faktur",
      desc: "Klik Retur dan isi barang yang dikembalikan. CashFlow akan mencatat pengembalian dana sebagai piutang supplier.",
      image: "/images/pembelian/cashflow_po_tabel_terisi.png",
      screenshotNote: "Form retur untuk faktur lunas"
    },
    {
      num: 3,
      title: "Tentukan Akun Pengembalian",
      desc: "Pilih akun kas/bank atau akun piutang supplier yang akan digunakan saat dana dikembalikan.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Pengaturan akun pengembalian dana"
    },
    {
      num: 4,
      title: "Simpan dan Terima Dana",
      desc: "Simpan retur. Saat dana diterima dari supplier, catat penerimaan kas agar piutang supplier terselesaikan.",
      image: "/images/pembelian/cashflow_po_tabel_terisi.png",
      screenshotNote: "Pencatatan penerimaan dana retur"
    }
  ],
  note: "Pastikan akun piutang supplier sudah tersedia di Daftar Akun sebelum membuat retur untuk faktur lunas."
};