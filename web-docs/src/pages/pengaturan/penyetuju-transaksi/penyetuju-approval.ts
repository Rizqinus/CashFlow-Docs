import { ArticleData } from '../../../types/article';

export const penyetujuApprovalData: ArticleData = {
  id: 'setuju-approval',
  title: 'Cara Mengatur Approval Transaksi',
  category: 'Pengaturan · Penyetuju Transaksi',
  readTime: '5 Menit',
  author: 'Product Specialist',
  role: 'Finance Consultant',
  publishDate: '24 November 2026',
  updateDate: '24 November 2026',
  summary: 'Wajibkan transaksi pembelian, penjualan, atau keuangan disetujui lebih dulu oleh penyetuju tertentu.',
  note: 'Tentukan penyetuju sebelum mengaktifkan approval agar transaksi tidak tertahan tanpa penanggung jawab.',
  steps: [
    {
      num: 1,
      title: 'Buka Penyetuju Transaksi',
      desc: 'Pengaturan → Penyetuju Transaksi. Daftar jenis transaksi yang bisa disetujui tampil.',
      caption: 'Halaman Penyetuju Transaksi tampil.',
      image: '/images/pembelian/cashflow_manual_langkah_1.png'
    },
    {
      num: 2,
      title: 'Pilih jenis transaksi',
      desc: 'Centang dokumen yang harus melalui approval, misalnya Faktur Pembelian, Pembayaran, atau Kas & Bank.',
      caption: 'Jenis transaksi dipilih.',
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: 'Tentukan penyetuju',
      desc: 'Pilih pengguna atau grup yang berhak menyetujui, lalu atur batas nominal bila diperlukan.',
      caption: 'Penyetuju ditetapkan.',
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: 'Simpan dan uji alur',
      desc: 'Klik Simpan, lalu buat transaksi uji dengan akun operator untuk memastikan dokumen masuk antrean persetujuan.',
      caption: 'Transaksi menunggu persetujuan.',
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    }
  ]
};
