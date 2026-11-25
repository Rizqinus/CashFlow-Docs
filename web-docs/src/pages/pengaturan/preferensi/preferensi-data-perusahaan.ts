import { ArticleData } from '../../../types/article';

export const preferensiDataPerusahaanData: ArticleData = {
  id: "pref-perusahaan",
  title: "Cara Mengisi Data Perusahaan di Preferensi CashFlow Online",
  category: "Pengaturan · Preferensi",
  readTime: "5 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Lengkapi nama usaha, alamat, mata uang, periode akuntansi, dan informasi kontak perusahaan.",
  note: "Data perusahaan tercetak pada dokumen dan laporan. Pastikan penulisan sama dengan dokumen resmi.",
  steps: [
    {
      num: 1,
      title: "Buka tab Perusahaan",
      desc: "Pengaturan → Preferensi → tab Perusahaan.",
      caption: "Form data perusahaan tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Isi identitas usaha",
      desc: "Masukkan nama usaha, alamat lengkap, nomor telepon, email, dan situs web.",
      caption: "Identitas usaha terisi.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Tentukan mata uang dan periode",
      desc: "Pilih mata uang dasar serta bulan awal periode akuntansi perusahaan.",
      caption: "Periode pembukuan ditetapkan.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan",
      desc: "Klik Simpan, lalu buka salah satu faktur untuk memastikan kop dokumen memakai data baru.",
      caption: "Data perusahaan tersimpan.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
