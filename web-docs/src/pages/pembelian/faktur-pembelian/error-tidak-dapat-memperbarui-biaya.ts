import { ArticleData } from '../../../types/article';

export const errorTidakDapatMemperbaruiBiayaData: ArticleData = {
  id: 'error-tidak-dapat-memperbarui-biaya',
  title: "Cara Mengatasi Error Tidak Dapat Memperbarui Biaya",
  category: "Faktur Pembelian",
  readTime: "3.5 Menit",
  summary: "Solusi penanganan pesan error sistem saat pengalokasian biaya ke barang yang sudah terdistribusi atau closed period di CashFlow Online.",
  steps: [
    {
      num: 1,
      title: "Pahami Penyebab Munculnya Pesan Error",
      desc: "Error ini muncul saat Anda mengedit Faktur Pembelian atau mengalokasikan biaya pembelian ke barang yang kuantitas fisiknya sudah habis terjual, sudah ditransfer antar-gudang, atau berada pada periode buku yang telah ditutup.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Notifikasi error tidak dapat memperbarui biaya pada faktur pembelian"
    },
    {
      num: 2,
      title: "Periksa Mutasi Barang Terkait di Kartu Stok",
      desc: "Buka menu Persediaan ➔ Laporan Mutasi Barang / Kartu Stok untuk memeriksa apakah tanggal faktur biaya lebih baru dibanding transaksi pengeluaran barang (Faktur Penjualan / Pengiriman Barang).",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Laporan riwayat mutasi barang dan tanggal transaksi persediaan"
    },
    {
      num: 3,
      title: "Sesuaikan Tanggal Faktur Biaya atau Buat Penyesuaian Persediaan",
      desc: "Ubah tanggal Faktur Pembelian biaya menjadi tanggal sebelum barang tersebut dikeluarkan, atau jika barang sudah habis terjual, catat biaya tersebut langsung ke akun Beban Operasional / Beban Pokok Penjualan tanpa mencentang Alokasikan ke Barang.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Penyesuaian tanggal transaksi faktur biaya dan opsi alokasi barang"
    },
    {
      num: 4,
      title: "Simpan Ulang Transaksi Faktur",
      desc: "Setelah tanggal atau metode pengakuan biaya disesuaikan, klik kembali tombol Simpan. Transaksi akan berhasil disimpan tanpa kendala.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Konfirmasi penyimpanan ulang faktur setelah penyesuaian parameter"
    }
  ]
};
