import { ArticleData } from '../../../types/article';

export const orderDariPesananPelangganData: ArticleData = {
  id: 'order-dari-pesanan-pelanggan',
  title: "Cara Order Barang ke Supplier dari Pesanan Pelanggan",
  category: "Pesanan Pembelian",
  readTime: "4 Menit",
  summary: "Pelajari cara membuat pesanan pembelian (PO) ke supplier secara langsung dari dokumen pesanan penjualan pelanggan di CashFlow Online.",
  steps: [
    {
      num: 1,
      title: "Pastikan Pesanan Penjualan Telah Dibuat",
      desc: "Sebelum menerbitkan Pesanan Pembelian, pastikan transaksi Pesanan Penjualan dari pelanggan sudah terinput pada sistem dengan status barang belum tersedia stoknya.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Daftar pesanan penjualan pelanggan yang siap diproses"
    },
    {
      num: 2,
      title: "Buka Menu Pesanan Pembelian",
      desc: "Buka menu Pembelian pada navigasi utama CashFlow Online, lalu klik fitur Pesanan Pembelian untuk membuat dokumen baru.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Formulir baru Pesanan Pembelian"
    },
    {
      num: 3,
      title: "Lengkapi Pemasok dan Ambil Data dari Pesanan Penjualan",
      desc: "Pilih nama pemasok dan tanggal transaksi. Klik tombol Ambil di bagian kanan atas tabel rincian barang, pilih opsi Pesanan Penjualan, lalu centang transaksi nomor SO pelanggan terkait dan klik Lanjut.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Jendela pengambilan data rujukan dari Pesanan Penjualan"
    },
    {
      num: 4,
      title: "Verifikasi Rincian Barang dan Simpan Transaksi",
      desc: "Periksa kembali kuantitas barang, satuan, harga beli, dan alamat pengiriman yang otomatis terisi dari pesanan penjualan, kemudian klik tombol Simpan untuk menyelesaikan PO.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Verifikasi rincian barang hasil penarikan SO dan simpan"
    }
  ]
};
