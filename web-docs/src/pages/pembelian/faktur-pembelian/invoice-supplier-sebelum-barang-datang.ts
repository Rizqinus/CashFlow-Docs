import { ArticleData } from '../../../types/article';

export const invoiceSupplierSebelumBarangDatangData: ArticleData = {
  id: 'invoice-supplier-sebelum-barang-datang',
  title: "Cara Mencatat Invoice Supplier Sebelum Barang Datang",
  category: "Faktur Pembelian",
  readTime: "3.5 Menit",
  summary: "Panduan mencatat invoice tagihan supplier di awal dengan pengakuan utang dagang sebelum dokumen penerimaan fisik dibuat di CashFlow Online.",
  steps: [
    {
      num: 1,
      title: "Buat Faktur Pembelian Berdasarkan Pesanan (PO)",
      desc: "Buka menu Pembelian ➔ Faktur Pembelian, pilih nama pemasok, klik tombol Ambil lalu pilih Pesanan untuk menarik nomor PO yang ditagihkan.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Formulir Faktur Pembelian dan pengambilan data PO"
    },
    {
      num: 2,
      title: "Input Nomor Faktur Supplier dan Simpan",
      desc: "Masukkan nomor faktur tagihan supplier pada tab Info Lainnya, kemudian simpan transaksi faktur untuk mengakui timbulnya hutang usaha.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Pengisian nomor invoice fisik supplier dan simpan faktur"
    },
    {
      num: 3,
      title: "Tarik Faktur pada Formulir Penerimaan Barang",
      desc: "Setelah kiriman barang sampai di gudang, buka menu Penerimaan Barang, pilih pemasok, klik tombol Ambil lalu pilih opsi Faktur.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Form Penerimaan Barang dengan opsi Ambil -> Faktur"
    },
    {
      num: 4,
      title: "Verifikasi Jumlah Fisik dan Simpan Penerimaan",
      desc: "Cocokkan kuantitas barang fisik dengan faktur, lalu simpan. Sistem otomatis mengalokasikan stok masuk ke nilai persediaan tanpa menduplikasi hutang.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Verifikasi kuantitas fisik barang dan simpan penerimaan barang"
    }
  ]
};
