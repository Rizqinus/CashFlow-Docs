import { ArticleData } from '../../../types/article';

export const diskonTidakMunculDiJurnalData: ArticleData = {
  id: 'diskon-tidak-muncul-di-jurnal',
  title: "Penyebabnya Diskon Pembelian Tidak Muncul di Jurnal",
  category: "Faktur Pembelian",
  readTime: "3.5 Menit",
  summary: "Penjelasan mekanisme perlakuan diskon barang vs diskon termin pada sistem akuntansi CashFlow Online dan mengapa diskon item tidak membentuk akun tersendiri di jurnal.",
  steps: [
    {
      num: 1,
      title: "Pahami Perlakuan Diskon Item (Trade Discount)",
      desc: "Pada standar akuntansi CashFlow Online, diskon per baris item barang langsung memotong nilai perolehan persediaan secara neto, sehingga akun persediaan didebit sebesar harga setelah diskon tanpa baris akun potongan terpisah.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Rincian kolom diskon barang dan nilai neto perolehan persediaan"
    },
    {
      num: 2,
      title: "Periksa Jurnal Faktur Pembelian",
      desc: "Buka dokumen Faktur Pembelian terkait, lalu periksa rincian jurnal transaksi. Anda akan melihat nilai Persediaan didebit sejumlah nilai neto (harga dikurangi diskon) dan Hutang Usaha dikredit sejumlah total tagihan.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Tampilan rincian draf jurnal faktur pembelian dengan pencatatan nilai neto"
    },
    {
      num: 3,
      title: "Gunakan Diskon Pembayaran untuk Akun Potongan Terpisah",
      desc: "Jika Anda ingin mencatat akun 'Potongan Pembelian' tersendiri di buku besar, terapkan diskon pembayaran saat melunasi tagihan melalui formulir Pembayaran Pembelian (bukan sebagai diskon baris barang).",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Formulir Pembayaran Pembelian dan pengakuan akun diskon pelunasan termin"
    }
  ]
};
