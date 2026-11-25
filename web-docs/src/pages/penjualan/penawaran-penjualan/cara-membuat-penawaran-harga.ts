import { ArticleData } from '../../../types/article';

export const caraMembuatPenawaranHargaData: ArticleData = {
  id: 'cara-membuat-penawaran-harga',
  title: 'Cara Membuat Penawaran Harga (Quotation)',
  category: 'Penawaran Penjualan',
  readTime: '5 Menit',
  summary:
    'Kalau setelah menonton video masih ada beberapa bagian yang membingungkan, tenang saja. Kamu bisa lanjut membaca artikel ini sampai selesai karena seluruh tutorialnya akan dibahas secara detail, runtut, dan mudah dipahami bahkan untuk pengguna baru sekalipun.',
  steps: [
    {
      num: 1,
      title: 'Akses Menu Penawaran Penjualan',
      desc: 'Login ke akun CashFlow Online Anda. Buka modul Penjualan pada navigasi utama, lalu klik menu Penawaran Penjualan untuk memulai membuat dokumen quotation baru.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Navigasi modul Penjualan dan menu Penawaran Penjualan',
    },
    {
      num: 2,
      title: 'Klik Tombol Tambah Penawaran Baru',
      desc: 'Pada halaman daftar Penawaran Penjualan, klik tombol "+ Tambah" atau "Buat Penawaran Baru" di sudut kanan atas untuk membuka formulir penawaran kosong.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Tombol Tambah/Buat Penawaran Baru pada halaman daftar',
    },
    {
      num: 3,
      title: 'Isi Data Pelanggan dan Tanggal',
      desc: 'Lengkapi informasi dasar penawaran:\n• Pelanggan: Pilih nama pelanggan atau calon pembeli yang akan menerima penawaran.\n• Tanggal: Tentukan tanggal dibuatnya dokumen penawaran.\n• Nomor #: Nomor urut formulir akan terisi otomatis oleh sistem. Anda bisa mengubahnya secara manual dengan mengklik ikon pensil di sebelah nomor.\n• Berlaku Hingga: Isi tanggal masa berlaku penawaran ini (opsional).',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Formulir pengisian data pelanggan, tanggal, dan nomor penawaran',
    },
    {
      num: 4,
      title: 'Tambahkan Barang dan Jasa yang Ditawarkan',
      desc: 'Pada bagian tabel Rincian Barang, cari dan pilih produk atau jasa yang ingin ditawarkan kepada pelanggan:\n• Klik kolom Cari/Pilih Barang & Jasa untuk memilih item dari daftar.\n• Isi Kuantitas (jumlah barang yang ditawarkan).\n• Periksa Harga Satuan — sistem akan mengisi otomatis dari harga jual barang yang terdaftar, namun bisa diubah.\n• Tambahkan Diskon (%) jika ada potongan harga khusus.\n• Ulangi untuk setiap barang/jasa yang ingin dimasukkan ke dalam penawaran.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Tabel rincian barang, kuantitas, harga satuan, dan diskon',
    },
    {
      num: 5,
      title: 'Atur Pajak (PPN) dan Biaya Tambahan (Opsional)',
      desc: 'Jika transaksi dikenakan pajak (misalnya PPN 11%):\n• Centang opsi Pajak (PPN) pada kolom pajak di setiap baris barang/jasa.\n• Buka tab Info Lainnya untuk mencentang "Total Termasuk Pajak" jika harga yang diberikan sudah merupakan harga nett (sudah termasuk pajak).\n\nJika ada biaya tambahan (seperti ongkos kirim atau biaya lain):\n• Buka tab Biaya Lainnya, lalu pilih akun perkiraan dan masukkan nominal biaya tambahan tersebut.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Pengaturan pajak PPN dan biaya tambahan pada tab Info Lainnya',
    },
    {
      num: 6,
      title: 'Tambahkan Catatan atau Syarat & Ketentuan (Opsional)',
      desc: 'Gunakan kolom Catatan atau Pesan untuk menambahkan:\n• Syarat pembayaran (misalnya: "Pembayaran dilakukan dalam 30 hari setelah dokumen diterima").\n• Catatan khusus untuk pelanggan.\n• Instruksi tambahan terkait pengiriman atau spesifikasi produk.\n\nCatatan ini akan tercetak pada dokumen penawaran yang dikirimkan ke pelanggan.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Kolom catatan, pesan, dan syarat & ketentuan penawaran',
    },
    {
      num: 7,
      title: 'Simpan Dokumen Penawaran',
      desc: 'Periksa kembali seluruh informasi penawaran yang telah diisi — mulai dari nama pelanggan, daftar barang/jasa, harga, pajak, dan total akhir. Jika sudah sesuai, klik tombol Simpan untuk menyimpan dokumen penawaran ke sistem CashFlow Online.\n\nSetelah disimpan, dokumen Penawaran Penjualan ini dapat:\n• Dicetak langsung sebagai dokumen resmi.\n• Dikirimkan via email ke pelanggan.\n• Diedit jika perlu revisi.\n• Diproses menjadi Pesanan Penjualan (Sales Order) atau Faktur Penjualan ketika pelanggan menyetujui penawaran.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Tombol Simpan dan ringkasan total penawaran harga',
    },
  ],
};
