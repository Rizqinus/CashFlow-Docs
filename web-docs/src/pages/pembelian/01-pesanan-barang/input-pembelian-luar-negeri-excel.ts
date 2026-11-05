import { ArticleData } from '../../../types/article';

export const inputPembelianLuarNegeriExcelData: ArticleData = {
  id: 'input-pembelian-luar-negeri-excel',
  title: "Cara Memasukkan Data Pembelian Luar Negeri dari Excel",
  category: "Pesanan Pembelian",
  readTime: "3 Menit",
  summary: "Prosedur import transaksi pembelian valuta asing (multi-currency) dan kurs konversi pajak luar negeri secara bulk.",
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
