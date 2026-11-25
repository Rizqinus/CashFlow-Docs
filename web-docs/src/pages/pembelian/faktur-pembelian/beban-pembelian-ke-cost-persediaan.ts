import { ArticleData } from '../../../types/article';

export const bebanPembelianKeCostPersediaanData: ArticleData = {
  id: 'beban-pembelian-ke-cost-persediaan',
  title: "Cara Mencatat Beban Pembelian ke Cost Nilai Persediaan",
  category: "Faktur Pembelian",
  readTime: "4 Menit",
  summary: "Panduan membebankan biaya tambahan pembelian (seperti ongkir, handling fee, atau asuransi) agar langsung menambah nilai harga pokok (HPP) persediaan barang di CashFlow Online.",
  steps: [
    {
      num: 1,
      title: "Mengakses Menu Faktur Pembelian",
      desc: "Masuk ke menu Pembelian lalu pilih Faktur Pembelian pada navigasi utama CashFlow Online.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Navigasi modul Pembelian dan menu Faktur Pembelian"
    },
    {
      num: 2,
      title: "Lengkapi Pemasok dan Barang yang Dibeli",
      desc: "Pilih nama pemasok, tanggal transaksi, dan masukkan rincian barang yang dibeli (atau tarik dari Penerimaan Barang).",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Formulir faktur pembelian dan tabel rincian barang"
    },
    {
      num: 3,
      title: "Tambahkan Biaya di Tab Biaya Lainnya dan Alokasikan ke Barang",
      desc: "Klik tab Biaya Lainnya (ikon dompet/koin), pilih akun biaya (misal: Ongkos Angkut Pembelian), isi nominalnya, lalu centang opsi 'Alokasikan ke Barang' agar biaya menambah nilai pokok persediaan.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Tab Biaya Lainnya dan centang opsi Alokasikan ke Barang"
    },
    {
      num: 4,
      title: "Periksa Kalkulasi dan Simpan Faktur",
      desc: "Periksa kembali total tagihan dan alokasi cost pada ringkasan, kemudian klik tombol Simpan. Sistem otomatis mengkapitalisasi biaya ke HPP barang di laporan persediaan.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Penyimpanan faktur dan kapitalisasi biaya ke persediaan"
    }
  ]
};
