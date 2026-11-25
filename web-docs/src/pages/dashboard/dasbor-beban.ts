import { ArticleData } from '../../types/article';

export const dasborBebanData: ArticleData = {
  id: "dash-beban",
  title: "Cara Melihat Beban Perusahaan di Dashboard CashFlow Online",
  category: "Dashboard",
  readTime: "3 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "23 November 2026",
  updateDate: "23 November 2026",
  summary: "Pantau ringkasan beban bisnis dan bandingkan pengeluaran antar cabang dari dashboard CashFlow Online.",
  steps: [
    {
      num: 1,
      title: "Buka Dashboard dan tambah widget",
      desc: "Masuk ke tab Dashboard, lalu klik tombol + Widget atau ikon tambah pada area dashboard.",
      caption: "Area widget siap menerima widget baru.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Pilih Widget Beban",
      desc: "Cari Widget Beban pada daftar yang tersedia, lalu pilih untuk menambahkannya.",
      caption: "Widget Beban otomatis tampil di dashboard.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Ubah pengaturan widget",
      desc: "Klik ikon titik tiga (⋮) di pojok kanan atas widget, lalu pilih Ubah.",
      caption: "Pengaturan widget Beban terbuka.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Atur tampilan dan simpan",
      desc: "Sesuaikan Judul, Cabang, Maksimal Data, dan Rentang Waktu, lalu klik Simpan.",
      caption: "Ringkasan beban per cabang dan periode tampil sesuai pengaturan.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    }
  ]
};
