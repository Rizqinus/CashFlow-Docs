import { ArticleData } from '../../../types/article';

export const inputPembelianLuarNegeriExcelData: ArticleData = {
  id: 'input-pembelian-luar-negeri-excel',
  title: "Cara Memasukkan Data Pembelian Luar Negeri dari Excel",
  category: "Pesanan Pembelian",
  readTime: "4 Menit",
  summary: "Pelajari cara memasukkan pesanan pembelian mata uang asing (valas) beserta nilai kurs secara massal dari Excel ke CashFlow Online.",
  steps: [
    {
      num: 1,
      title: "Mengakses Menu Pesanan Pembelian",
      desc: "Buka menu Pembelian pada navigasi utama CashFlow Online, kemudian klik menu Pesanan Pembelian.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Navigasi modul Pembelian dan menu Pesanan Pembelian"
    },
    {
      num: 2,
      title: "Buka Daftar Pesanan Pembelian dan Pilih Impor File",
      desc: "Buka tab Daftar Pesanan Pembelian, klik tombol Impor Data, lalu pilih opsi Impor Dari File.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Tombol Impor Data pada daftar transaksi"
    },
    {
      num: 3,
      title: "Unduh Template Excel dan Isi Data Valas",
      desc: "Unduh format template Excel resmi yang disediakan. Pada baris data transaksi, isi kolom Mata Uang dengan kode valas pemasok luar negeri (misal: USD, EUR, SGD, JPY) dan isi kolom Kurs Saldo dengan nilai kurs transaksi yang berlaku.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Pengisian kode mata uang asing dan kurs pada template Excel"
    },
    {
      num: 4,
      title: "Unggah File Template dan Mulai Impor",
      desc: "Kembali ke jendela impor CashFlow Online, klik tombol Ambil File untuk mengunggah spreadsheet yang sudah diisi lengkap, lalu klik Mulai Impor.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Form pemilihan file template valas dan eksekusi impor"
    },
    {
      num: 5,
      title: "Konfirmasi dan Verifikasi Hasil Impor",
      desc: "Sistem akan menampilkan jumlah transaksi yang berhasil diimpor beserta daftar kegagalan jika ada data pemasok/kurs yang tidak valid. Klik Unduh Data Gagal jika memerlukan perbaikan.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Laporan hasil impor pesanan pembelian mata uang asing"
    }
  ]
};
