import { ArticleData } from '../../../types/article';

export const caraMencatatKelebihanPembayaranPembelianData: ArticleData = {
  id: 'art-beli-lebih',
  title: 'Cara mencatat kelebihan pembayaran pembelian',
  category: 'Pembelian',
  readTime: '3 Menit',
  summary: 'Panduan mengelola dana lebih bayar pada transaksi pembelian sebagai saldo deposit pemasok atau uang muka pesanan berikutnya.',
  steps: [
    {
      num: 1,
      title: 'Buka Menu Pembayaran Pembelian',
      desc: 'Masuk ke menu Pembelian ➔ Pembayaran Pembelian untuk memeriksa nilai faktur dan jumlah nominal yang dibayarkan.',
      screenshotNote: 'Formulir Pembayaran Pembelian CashFlow Online'
    },
    {
      num: 2,
      title: 'Input Nilai Pembayaran Melebihi Total Faktur',
      desc: 'Masukkan nilai nominal pembayaran pada kolom Nilai Pembayaran sesuai bukti transfer bank yang melebihi tagihan faktur.',
      screenshotNote: 'Pengisian nilai pembayaran lebih pada formulir'
    },
    {
      num: 3,
      title: 'Alokasikan Selisih Lebih ke Akun Deposit Pemasok',
      desc: 'Sistem akan mendeteksi selisih lebih bayar. Pilih opsi Simpan sebagai Saldo Deposit Pemasok untuk digunakan pada faktur mendatang.',
      screenshotNote: 'Konfirmasi alokasi kelebihan bayar ke deposit pemasok'
    }
  ]
};
