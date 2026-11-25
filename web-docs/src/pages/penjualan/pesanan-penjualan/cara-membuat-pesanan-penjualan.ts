import { ArticleData } from '../../../types/article';

export const caraMembuatPesananPenjualanData: ArticleData = {
  id: 'cara-membuat-pesanan-penjualan',
  title: 'Cara Membuat Pesanan Penjualan (Sales Order)',
  category: 'Pesanan Penjualan',
  readTime: '5 Menit',
  summary:
    'Pelajari cara membuat dan mengelola dokumen Pesanan Penjualan (Sales Order) di CashFlow Online. Fitur ini berfungsi mencatat dan melacak pesanan dari pelanggan secara rapi, meminimalisir kesalahan harga atau stok, serta dapat dihubungkan langsung dari Penawaran Penjualan hingga tahap Pengiriman Barang dan Faktur.',
  steps: [
    {
      num: 1,
      title: 'Akses Menu Pesanan Penjualan',
      desc: 'Masuk ke akun CashFlow Online Anda. Pada bilah navigasi sebelah kiri, buka modul Penjualan lalu klik menu Pesanan Penjualan untuk masuk ke daftar transaksi pesanan.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Navigasi menu Penjualan ➔ Pesanan Penjualan',
    },
    {
      num: 2,
      title: 'Buka Formulir Pesanan Penjualan Baru',
      desc: 'Pada halaman daftar Pesanan Penjualan, klik tombol "+ Tambah" atau "Buat Baru" untuk membuka lembar kerja formulir Pesanan Penjualan yang baru.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Tombol tambah dokumen formulir Pesanan Penjualan baru',
    },
    {
      num: 3,
      title: 'Lengkapi Data Pelanggan dan Tanggal Pesanan',
      desc: 'Pada bagian Header formulir, lengkapi informasi utama transaksi:\n• Dipesan Oleh: Pilih nama pelanggan yang melakukan pemesanan barang/jasa.\n• Tanggal: Masukkan tanggal transaksi pesanan dibuat.\n• No. Pesanan #: Nomor urut pesanan akan dibuat otomatis oleh sistem (dapat disesuaikan secara manual jika menggunakan penomoran khusus perusahaan).',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Pengisian nama pelanggan (Dipesan Oleh), tanggal, dan nomor pesanan',
    },
    {
      num: 4,
      title: 'Tarik Data dari Penawaran Penjualan (Opsional)',
      desc: 'Jika sebelumnya Anda sudah membuat Penawaran Penjualan (Quotation) untuk pelanggan tersebut dan penawaran sudah disetujui:\n• Klik tombol Ambil di bagian atas formulir.\n• Pilih opsi Penawaran.\n• Cari nomor penawaran pelanggan, centang barang atau jasa yang disepakati, lalu klik Lanjut.\n• Seluruh rincian barang, harga, dan diskon akan langsung terisi secara otomatis tanpa perlu input ulang.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Tombol Ambil ➔ Penawaran untuk menarik data quotation otomatis',
    },
    {
      num: 5,
      title: 'Input Rincian Barang dan Jasa yang Dipesan',
      desc: 'Jika membuat pesanan langsung (tanpa penawaran):\n• Pada tab Rincian Barang, klik kolom Cari/Pilih Barang & Jasa.\n• Tentukan produk atau jasa yang dipesan oleh pelanggan.\n• Masukkan Kuantitas (Qty), periksa Harga Satuan, dan berikan Diskon item jika ada.\n• Pastikan kolom Pajak (PPN) sudah dicentang jika transaksi ini dikenakan pajak pertambahan nilai.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Tab Rincian Barang untuk memilih produk, mengisi kuantitas, harga, dan pajak',
    },
    {
      num: 6,
      title: 'Lengkapi Pengaturan pada Tab Info Lainnya',
      desc: 'Buka tab Info Lainnya untuk melengkapi data pendukung pengiriman dan pembayaran:\n• Syarat Pembayaran: Tentukan termin pembayaran (misal: COD, Net 30, dll.).\n• Tanggal Pengiriman: Tentukan estimasi tanggal barang dikirimkan ke pelanggan.\n• Alamat Pengiriman: Pilih atau ubah alamat tujuan pengiriman barang.\n• Keterangan / Catatan: Tambahkan instruksi khusus untuk tim gudang atau kurir pengiriman.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Tab Info Lainnya untuk syarat pembayaran, alamat kirim, dan catatan pesanan',
    },
    {
      num: 7,
      title: 'Tambahkan Biaya Tambahan di Tab Biaya Lainnya (Opsional)',
      desc: 'Jika terdapat biaya pengiriman (ongkos kirim), asuransi, atau biaya penanganan tambahan yang dibebankan kepada pelanggan:\n• Klik tab Biaya Lainnya.\n• Pilih Akun Perkiraan penampung biaya/pendapatan tersebut.\n• Masukkan nominal biaya tambahan yang berlaku.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Tab Biaya Lainnya untuk menambahkan ongkir atau biaya tambahan lain',
    },
    {
      num: 8,
      title: 'Simpan dan Cetak Dokumen Pesanan Penjualan',
      desc: 'Periksa kembali seluruh ringkasan pesanan mulai dari kuantitas, harga, diskon, PPN, hingga total akhir pesanan.\n• Klik tombol Simpan untuk menyimpan dokumen ke dalam sistem.\n• Klik Cetak untuk mencetak formulir Pesanan Penjualan fisik atau menyimpannya sebagai file PDF.\n\nSetelah tersimpan, dokumen Pesanan Penjualan ini siap diproses ke tahap Pengiriman Pesanan (Surat Jalan/DO), Uang Muka Penjualan (DP), atau langsung dibuatkan Faktur Penjualan.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Tombol Simpan, Cetak, dan ringkasan nilai total Pesanan Penjualan',
    },
  ],
};
