import { ArticleData } from '../../../types/article';

export const penggunaTambahKaryawanData: ArticleData = {
  id: "user-tambah",
  title: "Cara Menambahkan Karyawan Baru ke Accurate Online",
  category: "Pengaturan · Pengguna",
  readTime: "5 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Tambahkan karyawan baru sebagai Administrator atau Operator agar bisa mengakses Data Usaha.",
  note: "Email karyawan harus aktif karena dipakai untuk akun dan pengiriman undangan masuk.",
  steps: [
    {
      num: 1,
      title: "Buka menu Pengguna",
      desc: "Pengaturan → Pengguna.",
      caption: "Daftar pengguna tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: "Klik Tambah Pengguna",
      desc: "Isi nama karyawan, email, dan kata sandi awal.",
      caption: "Form pengguna terisi.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Pilih peran",
      desc: "Tentukan peran Administrator atau Operator, lalu pilih grup aksesnya.",
      caption: "Peran dan grup ditetapkan.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan uji",
      desc: "Klik Simpan, lalu login dengan akun tersebut untuk memastikan akses sesuai peran.",
      caption: "Karyawan dapat mengakses data usaha.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
