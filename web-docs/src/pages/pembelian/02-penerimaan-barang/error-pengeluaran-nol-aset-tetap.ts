import { ArticleData } from '../../../types/article';

export const articleErrorZero: ArticleData = {
  id: 'art3',
  title: 'Cara Mengatasi Error Jumlah Pengeluaran Tidak Boleh Nol',
  category: 'Penerimaan Barang',
  readTime: '3 Menit',
  author: 'Nibras Ratna Fauziah, A.Md.A.K, CAP',
  role: 'Product Enablement Consultant',
  publishDate: '24 Februari 2026',
  updateDate: '17 Juli 2026',
  summary: 'Saat memproses transaksi Penerimaan Barang dari pesanan pembelian aset tetap di CashFlow Online, terkadang muncul pesan error: “Jumlah Pengeluaran Tidak Boleh Nol”. Pesan ini biasanya muncul ketika nilai atau harga pembelian pada transaksi Pesanan Pembelian Aset belum diisi atau masih bernilai nol (0). Karena sistem membutuhkan nilai nominal untuk membentuk jurnal dan pengakuan aset, transaksi tidak dapat disimpan jika total pengeluaran masih nol.',
  note: 'Error ini juga dapat terjadi apabila Anda langsung memproses Pesanan Pembelian dengan nilai nol (0) ke Faktur Pembelian tanpa terlebih dahulu mengisi harga atau nilai aset. Pastikan setiap transaksi pembelian aset memiliki nilai nominal sebelum diproses ke tahap penerimaan atau penagihan.',
  steps: [
    {
      num: 1,
      title: 'Klik Edit pada Notifikasi Error',
      desc: 'Saat pesan error muncul, klik tombol Edit pada notifikasi tersebut. Langkah ini akan membawa Anda kembali ke transaksi terkait agar dapat dilakukan pengecekan dan perbaikan data.',
      image: '/images/pembelian/error_nol_klik_edit.png',
      caption: 'Gambar 1: Kotak dialog notifikasi error — klik tombol Edit di sudut kanan bawah pop-up'
    },
    {
      num: 2,
      title: 'Buka Menu Pesanan Pembelian Aset',
      desc: 'Selanjutnya, akses kembali transaksi pesanan pembelian yang menjadi sumber masalah. Masuk ke menu Pembelian pada sidebar kiri, lalu pilih Pesanan Pembelian.',
      image: '/images/pembelian/error_nol_menu_pesanan.png',
      caption: 'Gambar 2: Navigasi menu Pembelian ➔ Pesanan Pembelian'
    },
    {
      num: 3,
      title: 'Pilih Transaksi Pesanan Aset yang Dimaksud',
      desc: 'Setelah masuk ke daftar Pesanan Pembelian, cari dan pilih transaksi pesanan pembelian aset yang akan diproses penerimaannya (contoh: nomor PO.2026.02.00001 atas nama Pemasok Aset dengan total 0).',
      image: '/images/pembelian/error_nol_daftar_po_nol.png',
      caption: 'Gambar 3: Memilih dokumen PO aset yang bernilai Total 0 (Menunggu diproses)'
    },
    {
      num: 4,
      title: 'Isi Nilai atau Harga pada Rincian Barang',
      desc: 'Setelah formulir transaksi terbuka, klik bagian tab Rincian Barang. Masukkan nilai atau harga aset yang dimaksud (contoh: Rp 5.000.000), klik Lanjut, lalu simpan kembali transaksi Pesanan Pembelian tersebut.',
      image: '/images/pembelian/error_nol_penyebab_po_kosong.png',
      caption: 'Gambar 4: Kolom @Harga pada modal Rincian Barang sebelum diisi nilai perolehan aset'
    },
    {
      num: 5,
      title: 'Simpan Kembali Penerimaan Barang atau Faktur',
      desc: 'Setelah nilai pada Pesanan Pembelian sudah diperbaiki, kembali ke transaksi Penerimaan Barang atau Faktur Pembelian yang sebelumnya mengalami error, lalu klik Simpan kembali.',
      image: '/images/pembelian/error_nol_rincian_po_diisi.png',
      caption: 'Gambar 5: Nilai @Harga telah diisi sebesar 5.000.000 pada dokumen PO sehingga transaksi penerimaan dapat disimpan normal'
    }
  ]
};
