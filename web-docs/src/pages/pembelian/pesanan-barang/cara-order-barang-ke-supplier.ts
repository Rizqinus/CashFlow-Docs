import { ArticleData } from '../../../types/article';

export const caraOrderBarangKeSupplierData: ArticleData = {
  id: 'cara-order-barang-ke-supplier',
  title: "Cara Order Barang ke Supplier dan Mencatatnya di CashFlow Online",
  category: "Pesanan Pembelian",
  readTime: "3 Menit",
  summary: "Pesanan Pembelian (Purchase Order / PO) adalah dokumen pemesanan formal yang dibuat untuk memesan barang/jasa kepada pemasok sebelum barang dikirim dan sebelum faktur diterbitkan.",
  steps: [
        {
          num: 1,
          title: "Buka Menu Pesanan Pembelian",
          desc: "Masuk ke navigasi utama menu Pembelian lalu pilih modul Pesanan Pembelian untuk membuka formulir pesanan baru.",
          screenshotNote: "Akses menu Pembelian dan pilih tombol modul Pesanan Pembelian",
          image: "/images/pembelian/cashflow_po_langkah_1.png"
        },
        {
          num: 2,
          title: "Formulir Pesanan Pembelian Baru",
          desc: "Tentukan Pemasok (Supplier), Mata Uang (IDR), Tanggal transaksi pemesanan, dan No Order. Kemudian klik 'Tambah Barang' untuk mengisi daftar barang pesanan.",
          screenshotNote: "Formulir Pesanan - Baru dengan field Supplier, Mata Uang, Tanggal, No Order, dan tabel daftar rincian barang",
          image: "/images/pembelian/cashflow_po_langkah_2.png"
        },
        {
          num: 3,
          title: "Pilih Barang yang Dipesan",
          desc: "Ketik nama barang pada kolom pencarian 'Scan / Cari Barang...' lalu pilih produk dari katalog (misalnya Indomie atau SUPERMI) untuk dimasukkan ke pesanan.",
          screenshotNote: "Dropdown pencarian katalog barang pada kolom Scan / Cari Barang...",
          image: "/images/pembelian/cashflow_po_langkah_3.png"
        },
        {
          num: 4,
          title: "Atur Kuantitas dan Tambahkan Barang",
          desc: "Pada modal pop-up 'Tambah Barang', tentukan Kwantitas pesanan, Satuan (PCS), Harga beli, serta Diskon. Setelah dikonfirmasi, item barang (seperti Indomie dan SUPERMI) akan masuk dan terdaftar rapi pada tabel rincian pesanan.",
          screenshotNote: "Tabel rincian pesanan pembelian yang telah terisi item barang (Indomie dan SUPERMI)",
          image: "/images/pembelian/cashflow_po_tabel_terisi.png"
        },
        {
          num: 5,
          title: "Tambahkan Informasi Tambahan",
          desc: "Pada tab icon 'i' (Informasi Lainnya), lengkapi detail pendukung seperti Cabang (Jakarta), Syarat Pembayaran (CASH), Gudang tujuan (GUDANG A), Info Pengiriman, serta Pengaturan Pajak (PPN 11%).",
          screenshotNote: "Tab Informasi Tambahan mencakup Cabang, Syarat Pembayaran, Gudang, Info Pengiriman, dan Pengaturan Pajak",
          image: "/images/pembelian/cashflow_po_langkah_5.png"
        },
        {
          num: 6,
          title: "Simpan Pesanan Pembelian",
          desc: "Jika informasi semua sudah lengkap, silakan simpan dengan klik tombol Simpan pada pojok kanan atas formulir.",
          screenshotNote: "Tombol Simpan untuk menerbitkan dokumen pesanan pembelian",
          image: "/images/pembelian/cashflow_po_langkah_6.png"
        }
      ]
};
