import { ArticleData } from '../../../types/article';

export const inputPembelianDariExcelData: ArticleData = {
  id: 'input-pembelian-dari-excel',
  title: "Cara Input Banyak Data Pembelian Sekaligus dari Excel",
  category: "Pesanan Pembelian",
  readTime: "4 Menit",
  summary: "Pelajari cara memasukkan banyak data pesanan pembelian sekaligus dari file Excel atau CSV ke CashFlow Online dengan cepat dan praktis.",
  steps: [
    {
      num: 1,
      title: "Mengakses Menu Pesanan Pembelian",
      desc: "Masuk ke modul Pembelian pada bilah navigasi utama CashFlow Online, kemudian klik menu Pesanan Pembelian.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Navigasi modul Pembelian dan menu Pesanan Pembelian"
    },
    {
      num: 2,
      title: "Buka Daftar Pesanan Pembelian dan Pilih Impor",
      desc: "Buka tab Daftar Pesanan Pembelian (ikon tabel), klik menu tombol Impor Data, lalu pilih opsi Impor Dari File.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Menu Impor Data pada daftar transaksi Pesanan Pembelian"
    },
    {
      num: 3,
      title: "Unduh Format File Template",
      desc: "Pada jendela impor yang muncul, klik tautan unduh template file Excel yang telah disediakan sebagai acuan format pengisian data transaksi.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Tautan unduh format file template Excel"
    },
    {
      num: 4,
      title: "Lengkapi Seluruh Data Pesanan Pembelian",
      desc: "Buka file spreadsheet yang telah diunduh, lengkapi seluruh baris data pemasok, nomor PO, tanggal, kode barang, kuantitas, harga, dan syarat pembayaran sesuai database CashFlow Online.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Pengisian template data pesanan pembelian di Excel"
    },
    {
      num: 5,
      title: "Unggah File dan Jalankan Mulai Impor",
      desc: "Kembali ke jendela impor di CashFlow Online, klik Ambil File untuk memilih spreadsheet yang sudah diisi, lalu klik Mulai Impor dan tunggu pemrosesan selesai.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Pemberian file dan klik Mulai Impor"
    },
    {
      num: 6,
      title: "Periksa Laporan Status Hasil Impor",
      desc: "Sistem akan menampilkan jumlah data yang berhasil diimpor serta data gagal (jika ada). Jika terdapat kegagalan, klik Unduh Data Gagal untuk melihat keterangan kesalahan dan perbaiki sebelum mengimpor ulang.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Laporan status verifikasi data berhasil dan data gagal"
    }
  ]
};
