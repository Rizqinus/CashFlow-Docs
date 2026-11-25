import { ArticleData } from '../../../types/article';

export const preferensiPersetujuanData: ArticleData = {
  id: "pref-persetujuan",
  title: "Cara Mengaktifkan Persetujuan Transaksi",
  category: "Pengaturan · Preferensi",
  readTime: "5 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Aktifkan alur persetujuan dokumen dan tentukan penyetuju agar transaksi bernilai besar terkontrol.",
  note: "Dokumen yang menunggu persetujuan belum memengaruhi jurnal maupun stok sampai disetujui.",
  steps: [
    {
      num: 1,
      title: "Buka tab Approval",
      desc: "Pengaturan → Preferensi → tab Persetujuan atau menu Penyetuju Transaksi.",
      caption: "Form approval tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Aktifkan persetujuan",
      desc: "Centang dokumen yang wajib disetujui seperti pesanan pembelian dan faktur penjualan.",
      caption: "Dokumen wajib approval ditandai.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Tentukan penyetuju",
      desc: "Pilih pengguna atau grup sebagai penyetuju dan atur batas nilai yang memerlukan persetujuan.",
      caption: "Alur persetujuan terbentuk.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan uji",
      desc: "Klik Simpan lalu buat dokumen uji untuk memastikan status Menunggu Persetujuan muncul.",
      caption: "Persetujuan transaksi aktif.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
