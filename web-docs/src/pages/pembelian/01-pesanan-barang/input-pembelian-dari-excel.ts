import { ArticleData } from '../../../types/article';

export const inputPembelianDariExcelData: ArticleData = {
  id: 'input-pembelian-dari-excel',
  title: "Cara Input Banyak Data Pembelian Sekaligus dari Excel",
  category: "Pesanan Pembelian",
  readTime: "3 Menit",
  summary: "Panduan import massal dokumen pesanan pembelian menggunakan template berkas spreadsheet Excel (.xlsx / .csv).",
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
