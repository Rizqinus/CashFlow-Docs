import { ArticleData } from '../../../types/article';

export const tagihanSupplierSebelumBarangDiterimaData: ArticleData = {
  id: 'tagihan-supplier-sebelum-barang-diterima',
  title: "Cara Mencatat Tagihan Supplier Sebelum Barang Diterima",
  category: "Faktur Pembelian",
  readTime: "3.5 Menit",
  summary: "Mekanisme penagihan uang muka dan tagihan supplier sebelum barang diterima di gudang penyimpanan.",
  steps: [
        {
          num: 1,
          title: "Akses Menu Faktur Pembelian",
          desc: "Buka navigasi Pembelian lalu pilih modul Faktur Pembelian pada menu utama CashFlow Online.",
          screenshotNote: "Navigasi menu Pembelian dan modul Faktur Pembelian"
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
