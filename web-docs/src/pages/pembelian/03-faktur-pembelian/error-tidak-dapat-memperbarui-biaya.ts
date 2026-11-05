import { ArticleData } from '../../../types/article';

export const errorTidakDapatMemperbaruiBiayaData: ArticleData = {
  id: 'error-tidak-dapat-memperbarui-biaya',
  title: "Cara Mengatasi Error Tidak Dapat Memperbarui Biaya",
  category: "Faktur Pembelian",
  readTime: "3.5 Menit",
  summary: "Solusi penanganan pesan error sistem saat pengalokasian biaya ke barang yang sudah terdistribusi atau closed period.",
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
