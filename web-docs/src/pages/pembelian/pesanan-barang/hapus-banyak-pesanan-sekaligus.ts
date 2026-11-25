import { ArticleData } from '../../../types/article';

export const hapusBanyakPesananSekaligusData: ArticleData = {
  id: 'hapus-banyak-pesanan-sekaligus',
  title: "Cara Menghapus Banyak Pesanan Pembelian Sekaligus",
  category: "Pesanan Pembelian",
  readTime: "3 Menit",
  summary: "Panduan praktis menghapus massal transaksi dokumen pesanan pembelian yang keliru atau dibatalkan di CashFlow Online.",
  steps: [
    {
      num: 1,
      title: "Akses Fitur Pesanan Pembelian",
      desc: "Masuk ke menu modul Pembelian pada navigasi utama CashFlow Online, kemudian klik menu Pesanan Pembelian.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Navigasi modul Pembelian dan menu Pesanan Pembelian"
    },
    {
      num: 2,
      title: "Buka Daftar dan Aktifkan Opsi Pemilihan Massal",
      desc: "Buka tab Daftar Pesanan Pembelian (ikon tabel hijau di samping Data Baru). Klik tombol Pengaturan (ikon roda gigi), lalu centang opsi [Pilih] agar kotak centang seleksi massal muncul di kolom tabel.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Pengaturan kolom daftar untuk memunculkan kotak centang Pilih"
    },
    {
      num: 3,
      title: "Tandai Dokumen PO dan Pilih Tindakan Hapus",
      desc: "Centang setiap transaksi pesanan pembelian yang ingin dihapus (atau centang kotak paling atas untuk memilih semua baris). Klik tombol Dipilih di bagian atas daftar, lalu pilih opsi Hapus.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Memilih transaksi dan klik tombol Dipilih -> Hapus"
    },
    {
      num: 4,
      title: "Konfirmasi dan Verifikasi Hasil Penghapusan",
      desc: "Klik Ya pada dialog konfirmasi penghapusan. Sistem akan memproses dan menampilkan rekap jumlah data yang berhasil dihapus. Catatan: Transaksi yang sudah berstatus Terproses ke Penerimaan/Faktur tidak dapat dihapus massal.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Dialog konfirmasi dan laporan hasil penghapusan data massal"
    }
  ]
};
