import { ArticleData } from '../../../types/article';

export const caraMembatalkanPesananData: ArticleData = {
  id: 'cara-membatalkan-pesanan',
  title: "Cara Membatalkan Pesanan Barang ke Supplier",
  category: "Pesanan Pembelian",
  readTime: "3 Menit",
  summary: "Panduan cara membatalkan transaksi pesanan pembelian ke pemasok di CashFlow Online melalui penutupan pesanan (Closed).",
  steps: [
    {
      num: 1,
      title: "Mengakses Fitur Pesanan Pembelian",
      desc: "Buka modul Pembelian pada navigasi utama CashFlow Online, kemudian klik menu Pesanan Pembelian.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Navigasi modul Pembelian dan menu Pesanan Pembelian"
    },
    {
      num: 2,
      title: "Buka Daftar dan Temukan Pesanan yang Ingin Dibatalkan",
      desc: "Klik tab Daftar Pesanan Pembelian (ikon tabel). Cari nomor transaksi PO yang akan dibatalkan menggunakan kolom pencarian (Search) atau gulir daftar, lalu klik nomor transaksi untuk membukanya.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Daftar pesanan pembelian dan pencarian nomor PO terkait"
    },
    {
      num: 3,
      title: "Aktifkan Opsi Tutup Pesanan pada Tab Info Lainnya",
      desc: "Pada formulir transaksi PO yang terbuka, klik tab Info Lainnya, kemudian beri centang pada kotak pilihan 'Ya (Tutup Pesanan)' dan sertakan catatan keterangan alasan pembatalan jika diperlukan.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Centang opsi Tutup Pesanan pada tab Info Lainnya"
    },
    {
      num: 4,
      title: "Simpan Perubahan Dokumen",
      desc: "Klik tombol Simpan. Status pesanan pembelian akan otomatis berubah menjadi Ditutup (Closed) dan tidak dapat ditarik ke transaksi Penerimaan Barang maupun Faktur Pembelian.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Konfirmasi penyimpanan status dokumen PO ditutup"
    }
  ]
};
