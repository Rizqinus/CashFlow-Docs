import { ArticleData } from '../../../types/article';

export const pesananDariPermintaanBarangData: ArticleData = {
  id: 'pesanan-dari-permintaan-barang',
  title: "Membuat Pesanan Pembelian dari Daftar Permintaan Barang",
  category: "Pesanan Pembelian",
  readTime: "3 Menit",
  summary: "Konversi dokumen Permintaan Pembelian (Purchase Requisition) dari departemen internal menjadi Purchase Order resmi ke vendor.",
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
