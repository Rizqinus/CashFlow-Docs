import { ArticleData } from '../../../types/article';

export const preferensiPenjualanData: ArticleData = {
  id: "pref-penjualan",
  title: "Cara Mengatur Transaksi Penjualan di Preferensi",
  category: "Pengaturan · Preferensi",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Atur retur penjualan, nilai barang retur, akun pembebanan, dan perlakuan PPN pelanggan.",
  note: "Nilai default penjualan mengisi otomatis dokumen baru, tetapi masih bisa diubah per transaksi.",
  steps: [
    {
      num: 1,
      title: "Buka tab Penjualan",
      desc: "Pengaturan → Preferensi → tab Penjualan.",
      caption: "Form preferensi penjualan tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Atur retur penjualan",
      desc: "Pilih akun retur penjualan dan tentukan nilai barang retur memakai harga jual atau harga pokok.",
      caption: "Kebijakan retur ditetapkan.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Tentukan akun dan PPN",
      desc: "Pilih akun penjualan default serta opsi Pelanggan Termasuk PPN bila harga sudah memuat pajak.",
      caption: "Akun dan PPN terhubung.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan",
      desc: "Klik Simpan lalu buat faktur penjualan untuk memverifikasi nilai default.",
      caption: "Preferensi penjualan berlaku.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
