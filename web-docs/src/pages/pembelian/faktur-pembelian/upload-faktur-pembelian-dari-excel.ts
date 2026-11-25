import { ArticleData } from '../../../types/article';

export const uploadFakturPembelianDariExcelData: ArticleData = {
  id: 'upload-faktur-pembelian-dari-excel',
  title: "Cara Upload Faktur Pembelian dari Excel",
  category: "Faktur Pembelian",
  readTime: "4 Menit",
  summary: "Panduan praktis mengimpor banyak dokumen faktur pembelian sekaligus dari file Excel ke dalam sistem CashFlow Online.",
  steps: [
    {
      num: 1,
      title: "Mengakses Menu Faktur Pembelian",
      desc: "Buka modul Pembelian pada navigasi CashFlow Online, kemudian klik menu Faktur Pembelian.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Navigasi modul Pembelian dan menu Faktur Pembelian"
    },
    {
      num: 2,
      title: "Buka Daftar Faktur dan Menu Impor Data",
      desc: "Klik tombol Daftar (ikon daftar/list) di sebelah kiri atas formulir Faktur Pembelian, lalu klik tombol Impor Data dan pilih opsi Impor Dari File.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Daftar Faktur Pembelian dan menu Impor Dari File"
    },
    {
      num: 3,
      title: "Unduh Template dan Siapkan Data Excel",
      desc: "Klik tautan Contoh File untuk mengunduh template spreadsheet resmi. Isi kolom Pemasok, Nomor Faktur, Tanggal, Kode Barang/Jasa, Kuantitas, dan Harga Satuan.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Unduh template Excel faktur pembelian dan pengisian data"
    },
    {
      num: 4,
      title: "Unggah File dan Jalankan Mulai Impor",
      desc: "Pilih file Excel yang telah dilengkapi, klik tombol Mulai Impor, lalu periksa laporan hasil impor untuk memastikan seluruh faktur berhasil terunggah tanpa error.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Proses unggah file Excel faktur dan laporan hasil impor"
    }
  ]
};
