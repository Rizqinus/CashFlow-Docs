import { ArticleData } from '../../../types/article';

export const caraMencatatPembelianDilunasiPihakLainData: ArticleData = {
  id: 'art-beli-lain',
  title: 'Cara Mencatat Pembelian yang Dilunasi Pihak Lain',
  category: 'Pembelian',
  readTime: '3 Menit',
  summary: 'Panduan mencatat pelunasan tagihan faktur pembelian yang dibayarkan oleh pihak ketiga atau rekening perantara.',
  steps: [
    {
      num: 1,
      title: 'Akses Formulir Pembayaran Pembelian',
      desc: 'Buka menu Pembelian lalu pilih modul Pembayaran Pembelian untuk memproses pelunasan faktur yang bersangkutan.',
      screenshotNote: 'Navigasi Pembelian dan modul Pembayaran Pembelian'
    },
    {
      num: 2,
      title: 'Pilih Pemasok dan Faktur yang Akan Dilunasi',
      desc: 'Pilih nama pemasok pada kolom Pemasok, kemudian pada tabel faktur centang nomor faktur yang dibayarkan oleh pihak ketiga.',
      screenshotNote: 'Pemilihan pemasok dan centang daftar faktur tagihan'
    },
    {
      num: 3,
      title: 'Pilih Akun Kas/Bank Perantara atau Hutang Pihak Lain',
      desc: 'Pada kolom Bank/Kas Pembayar, pilih akun penampung seperti Hutang Pihak Ketiga atau Rekening Perantara, lalu simpan transaksi.',
      screenshotNote: 'Pemilihan akun kas/bank perantara dan tombol Simpan'
    }
  ]
};
