import { ArticleData } from '../../../types/article';

export const caraMencatatDpKeSupplierData: ArticleData = {
  id: 'cara-mencatat-dp-ke-supplier',
  title: "Cara Mencatat DP Barang ke Supplier",
  category: "Pesanan Pembelian",
  readTime: "4 Menit",
  summary: "Panduan praktis membuat pesanan pembelian dengan uang muka (DP) ke pemasok dan memproses pembayarannya di CashFlow Online.",
  steps: [
    {
      num: 1,
      title: "Mengakses Fitur Pesanan Pembelian",
      desc: "Buka modul Pembelian pada bilah navigasi utama CashFlow Online, kemudian klik menu Pesanan Pembelian.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Navigasi modul Pembelian dan menu Pesanan Pembelian"
    },
    {
      num: 2,
      title: "Lengkapi Informasi Pesanan dan Klik Proses Uang Muka",
      desc: "Isikan Nama Pemasok, Tanggal, pilih Barang & Jasa yang dipesan, serta informasi tambahan yang dibutuhkan. Jika rincian pesanan sudah lengkap, klik tombol Proses di kanan atas formulir lalu pilih Uang Muka.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Form pesanan pembelian dan menu Proses -> Uang Muka"
    },
    {
      num: 3,
      title: "Masukkan Nilai Uang Muka (DP)",
      desc: "Sistem akan menampilkan formulir Uang Muka Pembelian. Masukkan nominal nilai DP yang disepakati. Selanjutnya, klik tombol Proses lalu pilih opsi Pembayaran.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Formulir Uang Muka Pembelian dan menu Proses -> Pembayaran"
    },
    {
      num: 4,
      title: "Proses Pembayaran Uang Muka dan Simpan Transaksi",
      desc: "Pada formulir Pembayaran Pembelian, pilih Bank pengeluaran, masukkan Tanggal Bayar, klik tombol Hitung Nilai Pembayaran (ikon reload bulat), lalu klik tombol Simpan untuk menyelesaikan pengakuan kas keluar uang muka.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Form Pembayaran Pembelian, tombol hitung, dan simpan transaksi"
    }
  ]
};
