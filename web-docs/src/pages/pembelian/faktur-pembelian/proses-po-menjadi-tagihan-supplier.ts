import { ArticleData } from '../../../types/article';

export const prosesPoMenjadiTagihanSupplierData: ArticleData = {
  id: 'proses-po-menjadi-tagihan-supplier',
  title: "Cara Memproses PO Menjadi Tagihan Supplier (Faktur Pembelian)",
  category: "Faktur Pembelian",
  readTime: "3 Menit",
  summary: "Jika perusahaan membeli jasa atau barang yang langsung ditagihkan tanpa melalui tahap penerimaan gudang fisik, pesanan pembelian (PO) dapat langsung ditarik ke dalam formulir Faktur Pembelian di CashFlow Online.",
  steps: [
    {
      num: 1,
      title: "Buka Menu Faktur Pembelian",
      desc: "Navigasi ke menu Pembelian lalu klik Faktur Pembelian pada navigasi utama CashFlow Online.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Akses menu Faktur Pembelian pada modul Pembelian"
    },
    {
      num: 2,
      title: "Pilih Pemasok dan Ambil Data dari Pesanan",
      desc: "Pilih nama pemasok, klik tombol Ambil di atas tabel rincian barang, lalu pilih opsi Pesanan. Cari dan centang nomor PO yang akan ditagihkan lalu klik Lanjut.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Modal pemilihan nomor PO yang akan dialihkan menjadi faktur"
    },
    {
      num: 3,
      title: "Verifikasi Nilai Transaksi dan Pajak",
      desc: "Periksa kembali kuantitas, nilai diskon, dan tarif PPN apakah sudah sesuai dengan pesanan awal. Buka tab Info Lainnya dan masukkan Nomor Faktur dari supplier.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Tabel rincian faktur dengan kalkulasi subtotal dan pajak PPN"
    },
    {
      num: 4,
      title: "Simpan Transaksi Faktur Pembelian",
      desc: "Klik tombol Simpan untuk memproses faktur tagihan supplier. Status PO terkait akan otomatis terupdate menjadi Terproses.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Konfirmasi penyimpanan faktur tagihan supplier"
    }
  ]
};
