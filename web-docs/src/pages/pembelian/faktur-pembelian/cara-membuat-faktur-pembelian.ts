import { ArticleData } from '../../../types/article';

export const caraMembuatFakturPembelianData: ArticleData = {
  id: 'cara-membuat-faktur-pembelian',
  title: "Cara Membuat Faktur Pembelian (Purchase Invoice)",
  category: "Faktur Pembelian",
  readTime: "4 Menit",
  summary: "Pelajari cara membuat faktur pembelian di CashFlow Online untuk mencatat tagihan supplier dengan cepat, rapi, dan otomatis membentuk hutang usaha (Account Payable).",
  steps: [
    {
      num: 1,
      title: "Mengakses Fitur Faktur Pembelian",
      desc: "Masuk ke modul Pembelian pada navigasi utama CashFlow Online, kemudian klik menu Faktur Pembelian.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Navigasi modul Pembelian dan menu Faktur Pembelian"
    },
    {
      num: 2,
      title: "Lengkapi Pemasok, Tanggal, dan Nomor Faktur",
      desc: "Pilih nama pemasok, tentukan tanggal transaksi serta tanggal jatuh tempo pembayaran. Buka tab Info Lainnya untuk mengisikan nomor faktur fisik dari tagihan supplier.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Formulir data pemasok, tanggal, dan nomor faktur tagihan"
    },
    {
      num: 3,
      title: "Masukkan Rincian Barang atau Jasa",
      desc: "Pada tab Rincian Barang, pilih barang/jasa yang ditagihkan beserta kuantitas, harga satuan, dan tarif pajak (PPN), atau klik Ambil jika berasal dari Penerimaan/Pesanan.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Tabel pengisian rincian barang, harga, dan tarif pajak"
    },
    {
      num: 4,
      title: "Periksa Nilai Jurnal dan Simpan Faktur",
      desc: "Pastikan total tagihan, potongan termin, dan pajak sesuai dengan tagihan fisik. Klik Simpan untuk memposting hutang usaha ke buku besar.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Pratinjau total faktur pembelian dan tombol simpan final"
    }
  ]
};
