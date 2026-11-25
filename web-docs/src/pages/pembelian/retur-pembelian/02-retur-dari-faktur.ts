import { ArticleData } from '../../../types/article';

export const rp002Data: ArticleData = {
  id: 'rp-002',
  title: "Cara Mencatat Pengembalian Barang ke Supplier dari Faktur",
  category: "Retur Pembelian",
  readTime: "4 Menit",
  summary: "Barang yang diterima ternyata rusak atau tidak sesuai? Catat pengembalian langsung dari Faktur Pembelian agar stok dan hutang supplier otomatis diperbarui.",

  steps: [
    {
      num: 1,
      title: "Buka Faktur Pembelian Asal",
      desc: "Masuk ke Pembelian › Faktur Pembelian, lalu cari dan buka faktur yang barangnya akan diretur.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Daftar faktur pembelian yang tersedia"
    },
    {
      num: 2,
      title: "Klik Tombol Retur",
      desc: "Pada detail faktur, pilih Retur. Sistem akan menyiapkan form retur dengan data supplier dan rincian barang dari faktur tersebut.",
      image: "/images/pembelian/cashflow_po_tabel_terisi.png",
      screenshotNote: "Form retur terisi otomatis dari faktur"
    },
    {
      num: 3,
      title: "Isi Barang dan Alasan",
      desc: "Tentukan barang yang dikembalikan, kuantitas, harga, serta alasan retur. Pastikan jumlah tidak melebihi barang yang ada di faktur asal.",
      image: "/images/pembelian/cashflow_po_tabel_terisi.png",
      screenshotNote: "Rincian barang, kuantitas, dan alasan retur"
    },
    {
      num: 4,
      title: "Simpan dan Cek Jurnal",
      desc: "Klik Simpan. Sistem mengurangi hutang supplier dan menambah stok kembali. Periksa jurnal retur sebelum menutup transaksi.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Tombol simpan dan pratinjau jurnal"
    }
  ],
  note: "Jika faktur sudah lunas, retur tetap bisa dibuat; selisihnya akan tercatat sebagai piutang supplier atau dikompensasikan ke transaksi berikutnya."
};