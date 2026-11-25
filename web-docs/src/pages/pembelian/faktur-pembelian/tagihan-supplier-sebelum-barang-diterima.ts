import { ArticleData } from '../../../types/article';

export const tagihanSupplierSebelumBarangDiterimaData: ArticleData = {
  id: 'tagihan-supplier-sebelum-barang-diterima',
  title: "Cara Mencatat Tagihan Supplier Sebelum Barang Diterima",
  category: "Faktur Pembelian",
  readTime: "3.5 Menit",
  summary: "Panduan mencatat faktur pembelian ketika tagihan supplier sudah datang lebih dahulu sebelum fisik barang sampai di gudang pada CashFlow Online.",
  steps: [
    {
      num: 1,
      title: "Buat Faktur Pembelian dan Masukkan Data Tagihan",
      desc: "Masuk ke menu Pembelian ➔ Faktur Pembelian, pilih Pemasok, isi tanggal dan nomor faktur dari supplier, lalu masukkan barang atau tarik dari Pesanan Pembelian (PO).",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Formulir Faktur Pembelian dengan penarikan data PO awal"
    },
    {
      num: 2,
      title: "Simpan Faktur Pembelian untuk Mengakui Hutang",
      desc: "Simpan faktur. CashFlow Online akan menjurnal akun Hutang Usaha dan akun perantara 'Barang Belum Diterima' tanpa langsung menambah stok fisik gudang.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Penyimpanan faktur dan jurnal akun perantara barang belum diterima"
    },
    {
      num: 3,
      title: "Catat Penerimaan Barang Saat Fisik Tiba di Gudang",
      desc: "Ketika barang fisik akhirnya tiba di gudang, buka modul Pembelian ➔ Penerimaan Barang, pilih pemasok yang sama, klik tombol Ambil lalu pilih opsi Faktur.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Modul Penerimaan Barang dan penarikan data dari Faktur yang sudah terbit"
    },
    {
      num: 4,
      title: "Pilih Nomor Faktur dan Simpan Penerimaan Barang",
      desc: "Centang nomor Faktur Pembelian tadi, periksa kuantitas fisik barang yang diterima, lalu klik Simpan untuk menambah kuantitas stok gudang secara resmi.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Verifikasi item barang masuk gudang dan simpan penerimaan barang"
    }
  ]
};
