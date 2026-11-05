import { ArticleData } from '../../../types/article';

export const orderDariPesananPelangganData: ArticleData = {
  id: 'order-dari-pesanan-pelanggan',
  title: "Cara Order Barang ke Supplier dari Pesanan Pelanggan",
  category: "Pesanan Pembelian",
  readTime: "3 Menit",
  summary: "Alur pemesanan barang otomatis ke supplier berdasarkan pesanan penjualan (Sales Order) pelanggan yang membutuhkan pemenuhan stok khusus atau dropship.",
  steps: [
        {
          num: 1,
          title: "Akses Menu Pesanan Pembelian",
          desc: "Buka navigasi Pembelian lalu pilih modul Pesanan Pembelian pada menu utama CashFlow Online.",
          screenshotNote: "Navigasi menu Pembelian dan modul Pesanan Pembelian"
        },
        {
          num: 2,
          title: "Pengisian Formulir / Parameter",
          desc: "Lengkapi data rekanan, nomor transaksi, serta parameter pendukung transaksi.",
          screenshotNote: "Tampilan formulir transaksi dan rincian parameter"
        },
        {
          num: 3,
          title: "Simpan Transaksi",
          desc: "Periksa kembali ringkasan jurnal dan nilai total sebelum mengklik tombol Simpan.",
          screenshotNote: "Konfirmasi penyimpanan dan status transaksi selesai"
        }
      ]
};
