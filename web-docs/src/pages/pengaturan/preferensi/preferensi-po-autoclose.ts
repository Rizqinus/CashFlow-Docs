import { ArticleData } from '../../../types/article';

export const preferensiPoAutocloseData: ArticleData = {
  id: "pref-po-autoclose",
  title: "Cara Mengatur PO Agar Otomatis Ditutup Jika Tidak Diproses",
  category: "Pengaturan · Preferensi",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Buat pesanan pembelian tertutup otomatis setelah jangka waktu tertentu agar sisa PO tidak menumpuk.",
  note: "PO yang tertutup otomatis tidak bisa diproses lagi. Pastikan tenggat cukup panjang sebelum diaktifkan.",
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
      title: "Aktifkan penutupan otomatis",
      desc: "Centang opsi Tutup PO Otomatis lalu tentukan jumlah hari tenggat pemrosesan.",
      caption: "Opsi aktif dengan tenggat.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Tentukan perlakuan sisa",
      desc: "Pilih apakah sisa kuantitas dibatalkan atau tetap bisa diproses lewat jalur khusus.",
      caption: "Perlakuan sisa ditetapkan.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan pantau",
      desc: "Klik Simpan lalu pantau daftar PO untuk memastikan status tertutup berjalan sesuai tenggat.",
      caption: "PO tertutup otomatis.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
