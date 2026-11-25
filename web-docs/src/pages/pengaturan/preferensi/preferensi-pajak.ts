import { ArticleData } from '../../../types/article';

export const preferensiPajakData: ArticleData = {
  id: "pref-pajak",
  title: "Cara Mengisi NPWP dan Data Pajak Perusahaan",
  category: "Pengaturan · Preferensi",
  readTime: "5 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Isi NPWP, NITKU, KLU, alamat pajak, serta pengaturan PPN dan e-Faktur perusahaan.",
  note: "Data pajak harus sesuai dokumen resmi agar faktur pajak tidak ditolak saat validasi e-Faktur.",
  steps: [
    {
      num: 1,
      title: "Buka tab Pajak",
      desc: "Pengaturan → Preferensi → tab Pajak.",
      caption: "Form data pajak tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Isi identitas pajak",
      desc: "Masukkan NPWP, NITKU, KLU, dan alamat pajak sesuai surat keterangan terdaftar.",
      caption: "Identitas pajak terisi.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Atur PPN dan e-Faktur",
      desc: "Tentukan tarif PPN default, akun pajak keluaran-masukan, dan kredensial e-Faktur bila dipakai.",
      caption: "Pengaturan PPN siap.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan uji",
      desc: "Klik Simpan lalu buat satu faktur pajak untuk memastikan perhitungan sesuai.",
      caption: "Data pajak tersimpan.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
