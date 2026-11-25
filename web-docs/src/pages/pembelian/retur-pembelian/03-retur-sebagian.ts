import { ArticleData } from '../../../types/article';

export const rp003Data: ArticleData = {
  id: 'rp-003',
  title: "Cara Membuat Retur Pembelian Sebagian",
  category: "Retur Pembelian",
  readTime: "4 Menit",
  summary: "Tidak semua barang perlu dikembalikan. Ikuti langkah ini untuk meretur sebagian barang dari faktur pembelian tanpa mengubah transaksi asal.",

  steps: [
    {
      num: 1,
      title: "Buka Detail Faktur",
      desc: "Buka Pembelian › Faktur Pembelian dan pilih faktur yang ingin diretur sebagian.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Daftar faktur pembelian"
    },
    {
      num: 2,
      title: "Pilih Barang Tertentu",
      desc: "Klik Retur, lalu hapus barang yang tidak dikembalikan dari daftar. Biarkan hanya barang yang benar-benar diretur.",
      image: "/images/pembelian/cashflow_po_tabel_terisi.png",
      screenshotNote: "Rincian barang yang akan diretur"
    },
    {
      num: 3,
      title: "Atur Kuantitas",
      desc: "Ubah kolom jumlah sesuai kuantitas yang dikembalikan. Sistem menghitung ulang nilai retur dan pajaknya secara otomatis.",
      image: "/images/pembelian/cashflow_po_tabel_terisi.png",
      screenshotNote: "Kolom kuantitas dan total retur"
    },
    {
      num: 4,
      title: "Simpan Transaksi",
      desc: "Periksa total retur, lalu klik Simpan. Faktur asal tetap utuh dengan nilai yang sudah dikurangi sebagian.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Pratinjau total sebelum simpan"
    }
  ],
  note: "Retur sebagian tidak membatalkan faktur. Jika seluruh barang diretur, gunakan Retur Penuh agar status faktur berubah menjadi diretur."
};