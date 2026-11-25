import { ArticleData } from '../../../types/article';

export const kurangiTagihanPotonganSupplierData: ArticleData = {
  id: 'kurangi-tagihan-potongan-supplier',
  title: "Mengurangi Tagihan Pembelian Karena Potongan Supplier",
  category: "Faktur Pembelian",
  readTime: "3.5 Menit",
  summary: "Panduan mencatat potongan harga khusus atau diskon bertingkat dari supplier yang mengurangi total nilai tagihan faktur pembelian di CashFlow Online.",
  steps: [
    {
      num: 1,
      title: "Mengakses Formulir Faktur Pembelian",
      desc: "Buka menu Pembelian lalu pilih Faktur Pembelian pada sistem navigasi CashFlow Online.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Navigasi modul Pembelian dan menu Faktur Pembelian"
    },
    {
      num: 2,
      title: "Input Potongan per Baris Barang (Diskon Baris)",
      desc: "Jika potongan diberikan untuk barang tertentu, klik baris barang terkait pada tabel Rincian Barang, lalu masukkan persentase diskon atau nominal potongan pada kolom Diskon.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Form detail item barang dan kolom pengisian diskon per baris"
    },
    {
      num: 3,
      title: "Input Potongan Global Faktur (Diskon Faktur)",
      desc: "Jika potongan berlaku untuk keseluruhan total tagihan, masukkan nominal potongan langsung pada kolom Diskon di bagian bawah tabel ringkasan faktur.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Bagian footer ringkasan transaksi dan kolom diskon global faktur"
    },
    {
      num: 4,
      title: "Periksa Total Bersih dan Simpan",
      desc: "Pastikan total tagihan akhir telah terpotong sesuai memo kesepakatan diskon pemasok, lalu klik Simpan untuk memperbarui nilai hutang usaha.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Verifikasi total bersih tagihan dan klik tombol Simpan"
    }
  ]
};
