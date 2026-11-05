import { ArticleData } from '../../../types/article';

export const invoiceSupplierSebelumBarangDatangData: ArticleData = {
  id: 'invoice-supplier-sebelum-barang-datang',
  title: "Cara Mencatat Invoice Supplier Sebelum Barang Datang",
  category: "Faktur Pembelian",
  readTime: "3.5 Menit",
  summary: "Pencatatan tagihan faktur vendor di awal dengan pengakuan utang dagang sebelum dokumen penerimaan fisik dibuat.",
  steps: [
        {
          num: 1,
          title: "Akses Menu Faktur Pembelian",
          desc: "Buka navigasi Pembelian lalu pilih modul Faktur Pembelian pada menu utama CashFlow Online.",
          screenshotNote: "Navigasi menu Pembelian dan modul Faktur Pembelian"
        },
        {
          num: 2,
          title: "Pengisian Formulir / Parameter",
          desc: "Lengkapi data rekanan, nomor transaksi, serta parameter pendukung transaksi.",
          screenshotNote: "Tampilan formulir transaksi dan rincian parameter"
        },
        {
          num: 3,
          title: "Simpan Transaksi",
          desc: "Periksa kembali ringkasan jurnal dan nilai total sebelum mengklik tombol Simpan.",
          screenshotNote: "Konfirmasi penyimpanan dan status transaksi selesai"
        }
      ]
};
