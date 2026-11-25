import { ArticleData } from '../../../types/article';

export const pajakJasaRenovasiPeroranganData: ArticleData = {
  id: 'pajak-jasa-renovasi-perorangan',
  title: "Cara Menghitung Pajak Jasa Renovasi Perorangan",
  category: "Faktur Pembelian",
  readTime: "4 Menit",
  summary: "Panduan pemotongan PPh atas tagihan faktur pembelian jasa renovasi atau pertukangan dari penyedia perorangan (non-badan) di CashFlow Online.",
  steps: [
    {
      num: 1,
      title: "Pastikan Akun Beban dan Tarif Pajak PPh Telah Diatur",
      desc: "Pastikan data pemasok perorangan telah memiliki status non-PKP/NPWP dan akun beban jasa renovasi serta tarif pemotongan pajak (PPh 21/PPh Final) telah tersedia.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Data pemasok perorangan dan pengaturan akun beban jasa"
    },
    {
      num: 2,
      title: "Buat Faktur Pembelian dan Pilih Item Jasa",
      desc: "Masuk ke modul Pembelian ➔ Faktur Pembelian, pilih nama rekanan perorangan, lalu tambahkan item Jasa Renovasi beserta nilai tagihannya.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Formulir Faktur Pembelian dan pengisian item jasa renovasi"
    },
    {
      num: 3,
      title: "Terapkan Pemotongan Pajak pada Kolom Pajak",
      desc: "Pilih kode pajak pemotongan PPh yang sesuai pada baris jasa agar sistem otomatis menghitung nilai potongan pajak dan mengurangi total kas yang harus dibayar.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Kalkulasi pemotongan PPh pada rincian nilai transaksi"
    },
    {
      num: 4,
      title: "Periksa Jurnal Pemotongan dan Simpan Faktur",
      desc: "Pastikan hutang usaha dan hutang pajak pemotongan (PPh) terbentuk dengan benar di pratinjau jurnal, kemudian klik tombol Simpan.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Konfirmasi pratinjau jurnal pemotongan PPh dan tombol Simpan"
    }
  ]
};
