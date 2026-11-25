import { ArticleData } from '../../../types/article';

export const preferensiPembelianData: ArticleData = {
  id: "pref-pembelian",
  title: "Cara Mengatur Transaksi Pembelian di Preferensi",
  category: "Pengaturan · Preferensi",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Atur retur pembelian, uang muka, akun pembebanan, dan perlakuan PPN pemasok.",
  note: "Pengaturan pembelian memengaruhi perhitungan HPP dan saldo hutang usaha.",
  steps: [
    {
      num: 1,
      title: "Buka tab Pembelian",
      desc: "Pengaturan → Preferensi → tab Pembelian.",
      caption: "Form preferensi pembelian tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Atur retur dan uang muka",
      desc: "Pilih akun retur pembelian dan tentukan apakah uang muka wajib diisi sebelum faktur.",
      caption: "Kebijakan pembelian ditetapkan.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Tentukan akun dan PPN",
      desc: "Pilih akun pembelian default, akun biaya kirim, serta opsi Pemasok Termasuk PPN.",
      caption: "Akun pembelian terhubung.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan",
      desc: "Klik Simpan lalu buat pesanan pembelian untuk memverifikasi nilai default.",
      caption: "Preferensi pembelian berlaku.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
