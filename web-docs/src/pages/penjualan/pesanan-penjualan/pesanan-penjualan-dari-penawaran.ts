import { ArticleData } from '../../../types/article';

export const pesananPenjualanDariPenawaranData: ArticleData = {
  id: 'pesanan-penjualan-dari-penawaran-penjualan',
  title: 'Cara Membuat Pesanan Penjualan dari Penawaran Penjualan',
  category: 'Pesanan Penjualan',
  readTime: '3 Menit',
  author: 'Nibras Ratna Fauziah, A.Md.AK, CAP',
  role: 'Product Enablement Consultant',
  publishDate: '31 Oktober 2025',
  updateDate: '10 November 2026',
  summary:
    'Ingin proses penjualanmu makin efisien tanpa input data dua kali? CashFlow Online punya fitur integrasi yang lancar dari Penawaran Penjualan langsung ke Pesanan Penjualan!\n\nDengan alur ini, setiap penawaran yang sudah disetujui pelanggan bisa langsung diubah jadi pesanan penjualan, jadi risiko salah input dan data ganda bisa dihindari.\n\nProses jual beli kamu juga akan jadi lebih cepat, rapi, dan customer pun makin percaya karena administrasi bisnis kamu profesional!\n\nNah, berikut ini langkah-langkah membuat pesanan penjualan yang berasal dari penawaran penjualan:',
  steps: [
    {
      num: 1,
      title: 'Buka menu pesanan penjualan',
      desc: 'Buka menu Penjualan lalu klik Pesanan Penjualan di CashFlow Online.\n\nPastikan sebelumnya kamu sudah membuat transaksi Penawaran Penjualan yang akan diambil. Jika belum ada, buat terlebih dahulu melalui menu Penjualan ➔ Penawaran Penjualan ➔ Tambah.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Menu Penjualan ➔ Pesanan Penjualan di navigasi utama CashFlow Online',
    },
    {
      num: 2,
      title: 'Lengkapi informasi pesanan',
      desc: 'Tentukan nama pelanggan pada kolom Dipesan Oleh dan sesuaikan Tanggal pesanan.\n\nPastikan nama pelanggan yang dipilih sama dengan yang tercantum pada Penawaran Penjualan yang akan ditarik, agar sistem dapat menampilkan daftar penawaran yang relevan.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Pengisian kolom Dipesan Oleh (nama pelanggan) dan Tanggal pesanan penjualan',
    },
    {
      num: 3,
      title: 'Pilih nomor penawaran & barang',
      desc: 'Klik tombol Ambil, lalu pilih opsi Penawaran.\n\nDari daftar penawaran yang muncul, pilih Nomor Penawaran Penjualan yang sesuai. Centang barang atau jasa yang telah disetujui oleh pelanggan — jika pelanggan hanya menyepakati sebagian item, cukup centang item yang disetujui saja. Klik Lanjut untuk menarik data secara otomatis.\n\nSeluruh rincian barang, harga satuan, diskon, dan pajak dari penawaran akan langsung terisi ke formulir Pesanan Penjualan tanpa perlu input ulang.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Modal pemilihan nomor penawaran — centang item yang disetujui lalu klik Lanjut',
    },
    {
      num: 4,
      title: 'Simpan transaksi pesanan penjualan',
      desc: 'Periksa kembali seluruh rincian data yang sudah otomatis tertarik — pastikan nama barang/jasa, kuantitas, harga, diskon, dan pajak sudah sesuai dengan kesepakatan pelanggan. Lakukan penyesuaian jika diperlukan.\n\nJika sudah benar, klik tombol Simpan untuk menyelesaikan proses pembuatan Pesanan Penjualan.\n\nSetelah tersimpan, dokumen Pesanan Penjualan siap untuk diproses ke tahap selanjutnya:\n• Pengiriman Pesanan (Delivery Order / Surat Jalan)\n• Uang Muka Penjualan (jika diperlukan DP dari pelanggan)\n• Faktur Penjualan (tagihan final ke pelanggan)',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Tombol Simpan — Pesanan Penjualan siap diproses ke Pengiriman, DP, atau Faktur',
    },
  ],
};
