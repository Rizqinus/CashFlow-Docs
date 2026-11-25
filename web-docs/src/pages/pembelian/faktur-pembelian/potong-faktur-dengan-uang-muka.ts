import { ArticleData } from '../../../types/article';

export const potongFakturDenganUangMukaData: ArticleData = {
  id: 'potong-faktur-dengan-uang-muka',
  title: "Cara Memotong Faktur Pembelian dengan Uang Muka",
  category: "Faktur Pembelian",
  readTime: "3.5 Menit",
  summary: "Panduan mengalokasikan saldo Down Payment (DP) yang telah dibayar sebelumnya untuk memotong total nilai tagihan pada Faktur Pembelian di CashFlow Online.",
  steps: [
    {
      num: 1,
      title: "Mengakses Formulir Faktur Pembelian",
      desc: "Buka modul Pembelian lalu pilih menu Faktur Pembelian pada navigasi utama CashFlow Online.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Navigasi modul Pembelian dan menu Faktur Pembelian"
    },
    {
      num: 2,
      title: "Pilih Pemasok dan Masukkan Barang atau Tarik Penerimaan/Pesanan",
      desc: "Pilih nama pemasok yang memiliki riwayat uang muka. Masukkan rincian barang yang dibeli atau gunakan tombol Ambil untuk menarik data dari Pesanan Pembelian / Penerimaan Barang.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Pemilihan pemasok dan penarikan data barang"
    },
    {
      num: 3,
      title: "Tarik Uang Muka via Tombol Ambil -> Uang Muka",
      desc: "Klik tombol Ambil di kanan atas tabel rincian barang, pilih opsi Uang Muka, lalu centang nomor faktur uang muka (DP) yang akan dialokasikan dan klik Lanjut.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Opsi Ambil -> Uang Muka dan pemilihan nomor DP yang tersedia"
    },
    {
      num: 4,
      title: "Periksa Potongan Nilai Tagihan dan Simpan",
      desc: "Sistem otomatis menambahkan baris Uang Muka bernilai minus yang memotong total tagihan. Pastikan sisa tagihan benar, lalu klik Simpan.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Total faktur terpotong uang muka dan tombol simpan"
    }
  ]
};
