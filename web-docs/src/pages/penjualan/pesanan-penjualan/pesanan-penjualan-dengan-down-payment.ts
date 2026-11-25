import { ArticleData } from '../../../types/article';

export const pesananPenjualanDenganDownPaymentData: ArticleData = {
  id: 'pesanan-penjualan-dengan-down-payment',
  title: 'Cara Membuat Pesanan Penjualan dengan Uang Muka (Down Payment)',
  category: 'Pesanan Penjualan',
  readTime: '7 Menit',
  summary:
    'Pelajari alur lengkap mengelola Pesanan Penjualan (Sales Order) yang disertai Uang Muka (DP) dari pelanggan di CashFlow Online. Mulai dari membuat SO, memproses faktur uang muka, mencatat penerimaan kas DP, hingga sistem otomatis memotong sisa tagihan saat Faktur Penjualan final diterbitkan.',
  steps: [
    {
      num: 1,
      title: 'Buat Pesanan Penjualan (Sales Order)',
      desc: 'Masuk ke modul Penjualan, lalu buka menu Pesanan Penjualan dan klik tombol "+ Tambah" untuk membuat pesanan baru:\n• Dipesan Oleh: Pilih nama pelanggan yang akan membayar uang muka.\n• Tanggal: Isi tanggal transaksi pesanan.\n• No. Pesanan #: Terisi otomatis oleh sistem (bisa diubah sesuai kebutuhan).\n• Rincian Barang: Tambahkan barang/jasa yang dipesan beserta kuantitas, harga satuan, dan pajak (PPN jika berlaku).\n\nSetelah seluruh rincian pesanan diisi dengan lengkap dan benar, klik Simpan untuk menyimpan dokumen Pesanan Penjualan.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Formulir Pesanan Penjualan yang telah diisi lengkap sebelum diproses uang muka',
    },
    {
      num: 2,
      title: 'Proses Pesanan Menjadi Uang Muka',
      desc: 'Setelah dokumen Pesanan Penjualan tersimpan, proses penagihan uang muka kepada pelanggan:\n• Pada formulir Pesanan Penjualan yang sudah disimpan, klik tombol Proses di bagian atas atau bawah formulir.\n• Dari pilihan yang muncul, pilih Uang Muka.\n• CashFlow Online akan secara otomatis membuka formulir Faktur Uang Muka Penjualan baru yang sudah terhubung dengan nomor Pesanan Penjualan tersebut.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Tombol Proses ➔ Uang Muka pada dokumen Pesanan Penjualan yang sudah disimpan',
    },
    {
      num: 3,
      title: 'Isi dan Simpan Faktur Uang Muka Penjualan',
      desc: 'Pada formulir Faktur Uang Muka Penjualan yang sudah terbuka:\n• Periksa Nama Pelanggan dan Referensi Pesanan Penjualan yang sudah terisi otomatis.\n• Tentukan Nilai Uang Muka (DP) yang diminta dari pelanggan. Nilainya bisa berupa:\n  - Nominal tertentu (misal: Rp 5.000.000)\n  - Persentase dari total pesanan (misal: 30% dari nilai SO)\n• Pastikan Tanggal faktur uang muka sudah benar.\n• Jika berlaku PPN atas uang muka, pastikan opsi pajak sudah diatur dengan benar.\n• Klik Simpan untuk menyimpan Faktur Uang Muka Penjualan.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Formulir Faktur Uang Muka Penjualan dengan nilai DP yang diisi pelanggan',
    },
    {
      num: 4,
      title: 'Catat Penerimaan Pembayaran DP dari Pelanggan',
      desc: 'Setelah pelanggan mentransfer atau membayar uang muka, catat penerimaan dana tersebut:\n• Dari Faktur Uang Muka Penjualan yang sudah disimpan, klik tombol Proses lalu pilih Penerimaan Penjualan (Sales Receipt).\n  Atau buka menu Penjualan ➔ Penerimaan Penjualan ➔ Tambah Baru.\n• Pilih Kas atau Bank tempat dana DP pelanggan diterima (misalnya: Rekening BCA, Kas Kasir, dsb.).\n• Centang baris Faktur Uang Muka Penjualan yang sesuai untuk melunasi atau mencatat pembayaran DP tersebut.\n• Masukkan jumlah yang diterima, lalu klik Simpan.\n\nSaldo piutang uang muka pelanggan kini akan tercatat secara otomatis di buku besar.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Formulir Penerimaan Penjualan untuk mencatat pembayaran DP dari pelanggan',
    },
    {
      num: 5,
      title: 'Proses Pengiriman Barang (Surat Jalan/Delivery Order)',
      desc: 'Ketika barang siap dikirimkan ke pelanggan, buat dokumen Surat Jalan dari Pesanan Penjualan:\n• Buka kembali dokumen Pesanan Penjualan awal (yang sudah ada uang mukanya).\n• Klik tombol Proses, lalu pilih Pengiriman Pesanan (Delivery Order / Surat Jalan).\n• Periksa detail barang yang akan dikirim, sesuaikan kuantitas jika pengiriman dilakukan bertahap (parsial).\n• Simpan dokumen Surat Jalan.\n\nLangkah ini bersifat opsional jika bisnis Anda menggunakan alur pengiriman terlebih dahulu sebelum penagihan faktur akhir.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Tombol Proses ➔ Pengiriman Pesanan (Surat Jalan/DO) dari Pesanan Penjualan',
    },
    {
      num: 6,
      title: 'Buat Faktur Penjualan Final (Tagihan Akhir)',
      desc: 'Setelah barang terkirim atau sesuai kesepakatan, terbitkan Faktur Penjualan (tagihan akhir):\n• Dari dokumen Pesanan Penjualan, klik Proses lalu pilih Faktur Penjualan.\n  Atau dari menu Surat Jalan yang sudah dibuat, klik Proses ➔ Faktur Penjualan.\n• Sistem akan secara otomatis menampilkan dan menghitung sisa tagihan pelanggan setelah dikurangi uang muka (DP) yang sudah dibayarkan.\n• Periksa nilai Sisa Tagihan (netto setelah dikurangi DP) yang sudah dikalkulasi otomatis.\n• Simpan Faktur Penjualan.\n\nPelanggan hanya perlu melunasi sisa nilai tagihan — nilai uang muka yang sudah tercatat sebelumnya akan terpotong secara otomatis oleh sistem.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Faktur Penjualan final dengan sisa tagihan yang sudah dipotong nilai DP otomatis',
    },
    {
      num: 7,
      title: 'Catat Pelunasan Sisa Tagihan',
      desc: 'Setelah pelanggan melunasi sisa pembayaran di luar uang muka:\n• Buka menu Penjualan ➔ Penerimaan Penjualan ➔ Tambah Baru.\n• Pilih Kas atau Bank tempat dana pelunasan diterima.\n• Centang baris Faktur Penjualan final yang ingin dilunasi.\n• Masukkan jumlah pelunasan yang diterima, lalu klik Simpan.\n\nSetelah disimpan, status Faktur Penjualan akan berubah menjadi Lunas dan piutang pelanggan tercatat nol di buku besar. Alur lengkap transaksi pesanan dengan uang muka pun selesai.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Penerimaan Penjualan untuk pelunasan sisa tagihan final pelanggan',
    },
  ],
};
