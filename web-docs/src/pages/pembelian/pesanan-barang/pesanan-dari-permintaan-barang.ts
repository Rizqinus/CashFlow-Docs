import { ArticleData } from '../../../types/article';

export const pesananDariPermintaanBarangData: ArticleData = {
  id: 'pesanan-dari-permintaan-barang',
  title: "Membuat Pesanan Pembelian dari Daftar Permintaan Barang",
  category: "Pesanan Pembelian",
  readTime: "4 Menit",
  summary: "Pelajari cara membuat pesanan pembelian secara otomatis dari daftar permintaan barang (Purchase Requisition) di CashFlow Online.",
  steps: [
    {
      num: 1,
      title: "Akses Menu Pesanan Pembelian",
      desc: "Masuk ke menu Pembelian pada navigasi utama CashFlow Online, kemudian pilih modul Pesanan Pembelian.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Navigasi modul Pembelian dan menu Pesanan Pembelian"
    },
    {
      num: 2,
      title: "Buka Daftar Pesanan dan Pilih Impor Permintaan Barang",
      desc: "Masuk ke tab Daftar Pesanan Pembelian, klik tombol Impor Data, lalu pilih opsi Proses dari Permintaan Barang.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Pilihan Impor Data -> Proses dari Permintaan Barang"
    },
    {
      num: 3,
      title: "Pilih Periode dan Centang Nomor Permintaan Barang",
      desc: "Tentukan rentang tanggal dan filter departemen jika diperlukan. Sistem menampilkan daftar transaksi Permintaan Barang yang masih berstatus terbuka (belum diproses PO). Centang nomor permintaan yang akan dipesan.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Daftar seleksi dokumen Permintaan Barang yang tersedia"
    },
    {
      num: 4,
      title: "Tentukan Pemasok dan Verifikasi Rincian Barang",
      desc: "Tentukan nama pemasok yang dituju untuk item-item tersebut, verifikasi kuantitas yang disetujui, dan lengkapi harga beli yang disepakati.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Formulir penetapan pemasok dan harga satuan barang PO"
    },
    {
      num: 5,
      title: "Simpan Pesanan Pembelian",
      desc: "Klik tombol Simpan untuk menerbitkan Pesanan Pembelian. Status dokumen Permintaan Barang terkait akan otomatis terupdate menjadi Terproses.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Konfirmasi penyimpanan Pesanan Pembelian hasil penarikan PR"
    }
  ]
};
