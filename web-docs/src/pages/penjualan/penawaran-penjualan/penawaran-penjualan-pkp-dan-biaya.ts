import { ArticleData } from '../../../types/article';

export const penawaranPenjualanPkpDanBiayaData: ArticleData = {
  id: 'penawaran-penjualan-pkp-dan-biaya',
  title: 'Cara Membuat Penawaran Harga (Quotation) dengan PPN dan Biaya Tambahan Lain',
  category: 'Penawaran Penjualan',
  readTime: '5 Menit',
  summary:
    'Pelajari cara membuat Penawaran Penjualan (Quotation) untuk pelanggan berstatus PKP (Pengusaha Kena Pajak) lengkap dengan pengaturan PPN otomatis dan penambahan biaya tambahan seperti ongkos kirim atau biaya administrasi di CashFlow Online.',
  steps: [
    {
      num: 1,
      title: 'Akses Menu Penawaran Penjualan',
      desc: 'Login ke akun CashFlow Online Anda. Buka modul Penjualan pada navigasi utama, lalu klik menu Penawaran Penjualan untuk membuka daftar penawaran yang ada.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Navigasi modul Penjualan dan menu Penawaran Penjualan',
    },
    {
      num: 2,
      title: 'Lengkapi Data Pelanggan PKP',
      desc: 'Klik tombol "+ Tambah" untuk membuat penawaran baru, kemudian:\n• Pilih nama pelanggan pada kolom Pelanggan — pastikan pelanggan tersebut sudah dikonfigurasi berstatus PKP (Pengusaha Kena Pajak) di data master pelanggan.\n• Sesuaikan Tanggal penawaran.\n• Nomor # akan terisi otomatis oleh sistem (bisa diubah manual dengan klik ikon pensil).\n• Isi kolom Berlaku Hingga jika ada masa berlaku penawaran.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Formulir data pelanggan PKP, tanggal, dan nomor penawaran',
    },
    {
      num: 3,
      title: 'Input Barang dan Jasa yang Ditawarkan',
      desc: 'Pada bagian tabel Rincian Barang, tambahkan item yang akan ditawarkan:\n• Klik kolom Cari/Pilih Barang & Jasa untuk memilih produk atau jasa dari daftar.\n• Isi Kuantitas sesuai jumlah yang ditawarkan.\n• Periksa Harga Satuan — sistem akan mengisi otomatis dari harga jual barang yang terdaftar, namun dapat diubah sesuai negosiasi.\n• Tambahkan Diskon (%) jika ada potongan harga khusus untuk pelanggan ini.\n• Ulangi untuk setiap barang/jasa yang ingin dimasukkan ke dalam penawaran.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Tabel rincian barang, kuantitas, harga satuan, dan diskon per item',
    },
    {
      num: 4,
      title: 'Aktifkan PPN pada Detail Barang & Jasa',
      desc: 'Karena pelanggan berstatus PKP, pastikan pajak PPN sudah diaktifkan:\n• Pada setiap baris barang/jasa di tabel rincian, periksa kolom Pajak.\n• Centang atau pilih opsi PPN (misalnya PPN 11%) pada masing-masing baris item.\n• Sistem akan secara otomatis menghitung nilai PPN dan menambahkannya ke total penawaran.\n\n💡 Jika sebagian besar barang Anda kena PPN, Anda bisa mengatur default pajak di pengaturan barang/jasa agar kolom ini terisi otomatis setiap kali barang dipilih.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Kolom pajak PPN dicentang pada setiap baris item barang/jasa',
    },
    {
      num: 5,
      title: 'Atur "Total Termasuk Pajak" di Tab Info Lainnya',
      desc: 'Buka tab Info Lainnya pada bagian bawah formulir untuk mengatur apakah harga yang dimasukkan sudah termasuk pajak atau belum:\n• Jika harga satuan yang Anda input adalah harga NETT (sudah termasuk PPN) → centang opsi "Total Termasuk Pajak". Sistem akan menghitung dan memisahkan nilai PPN dari harga satuan yang diinput.\n• Jika harga satuan yang Anda input adalah harga BELUM termasuk PPN → biarkan opsi ini tidak dicentang. Sistem akan menambahkan PPN di atas harga satuan.\n\nPastikan pengaturan ini sesuai dengan kesepakatan harga bersama pelanggan.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Tab Info Lainnya dengan opsi centang Total Termasuk Pajak',
    },
    {
      num: 6,
      title: 'Tambahkan Biaya Tambahan di Tab Biaya Lainnya',
      desc: 'Jika dalam penawaran terdapat biaya tambahan di luar harga barang/jasa (misalnya ongkos kirim, biaya instalasi, biaya administrasi, dsb.), buka tab Biaya Lainnya:\n• Klik tab Biaya Lainnya pada bagian bawah formulir.\n• Pada kolom Akun, pilih akun perkiraan yang sesuai untuk mencatat biaya tambahan tersebut (misalnya akun "Pendapatan Pengiriman" atau "Biaya Lain-Lain").\n• Pada kolom Nominal, masukkan besaran biaya tambahan yang dibebankan kepada pelanggan.\n• Tambahkan baris baru jika ada lebih dari satu jenis biaya tambahan.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Tab Biaya Lainnya dengan kolom akun dan nominal biaya tambahan',
    },
    {
      num: 7,
      title: 'Input Nominal Biaya Tambahan',
      desc: 'Setelah memilih akun perkiraan, masukkan nominal biaya tambahan pada kolom yang tersedia:\n• Pastikan nominal sudah benar sesuai biaya aktual yang akan dibebankan ke pelanggan.\n• Jika biaya tambahan juga dikenakan PPN, centang kolom pajak pada baris biaya tersebut.\n• Total akhir penawaran akan dihitung ulang secara otomatis mencakup nilai barang/jasa, PPN, dan seluruh biaya tambahan.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Pengisian nominal biaya tambahan pada tab Biaya Lainnya',
    },
    {
      num: 8,
      title: 'Periksa Total dan Simpan Penawaran',
      desc: 'Sebelum menyimpan, periksa kembali keseluruhan penawaran:\n• Subtotal barang/jasa sudah sesuai.\n• Nilai PPN terhitung dengan benar.\n• Biaya tambahan sudah masuk dan tertera di total.\n• Total akhir penawaran sudah mencerminkan semua komponen harga.\n\nJika sudah sesuai, klik tombol Simpan. Nilai total penawaran penjualan akan dikalkulasikan secara otomatis oleh sistem.\n\nSetelah disimpan, dokumen ini dapat:\n• Dicetak atau dikirim via email ke pelanggan PKP.\n• Direvisi jika ada perubahan harga atau item.\n• Dikonversi menjadi Pesanan Penjualan (SO) atau Faktur Penjualan saat pelanggan menyetujui.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Ringkasan total penawaran: subtotal + PPN + biaya tambahan, dan tombol Simpan',
    },
  ],
};
