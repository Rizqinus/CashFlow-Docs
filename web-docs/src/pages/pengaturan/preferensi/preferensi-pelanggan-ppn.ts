import { ArticleData } from '../../../types/article';

export const preferensiPelangganPpnData: ArticleData = {
  id: "pref-pelanggan-ppn",
  title: "Mengatur Pelanggan Baru agar Otomatis Termasuk PPN",
  category: "Pengaturan · Preferensi",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Buat pelanggan baru selalu berstatus termasuk pajak agar pengetikan penjualan tidak perlu mencentang PPN terus.",
  note: "Pengaturan hanya berlaku untuk pelanggan baru. Pelanggan lama tetap diubah satu per satu bila diperlukan.",
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
      title: "Aktifkan opsi PPN",
      desc: "Centang opsi Pelanggan Baru Termasuk PPN pada bagian Pajak.",
      caption: "Opsi aktif.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Tentukan akun pajak",
      desc: "Pilih akun pajak keluaran yang dipakai untuk transaksi pelanggan baru.",
      caption: "Akun pajak terhubung.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan uji",
      desc: "Klik Simpan, buat pelanggan baru, lalu cek status pajaknya.",
      caption: "Pelanggan baru otomatis termasuk PPN.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
