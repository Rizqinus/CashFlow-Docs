import { ArticleData } from '../../../types/article';

export const hapusBanyakPesananSekaligusData: ArticleData = {
  id: 'hapus-banyak-pesanan-sekaligus',
  title: "Cara Menghapus Banyak Pesanan Pembelian Sekaligus",
  category: "Pesanan Pembelian",
  readTime: "3 Menit",
  summary: "Metode eliminasi atau pembatalan massal dokumen pesanan pembelian berstatus draft atau belum diproses.",
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
