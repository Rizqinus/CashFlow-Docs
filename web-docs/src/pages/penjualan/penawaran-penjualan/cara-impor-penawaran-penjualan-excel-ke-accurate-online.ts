import { ArticleData } from '../../../types/article';

export const caraImporPenawaranPenjualanExcelKeAccurateOnlineData: ArticleData = {
  id: 'impor-penawaran-penjualan-excel-ke-accurate',
  title: 'Cara Impor Penawaran Penjualan dari Excel ke CashFlow Online',
  category: 'Penawaran Penjualan',
  readTime: '6 Menit',
  summary:
    'Jika Anda memiliki banyak transaksi penawaran penjualan (quotation) yang sudah disusun di spreadsheet Excel, Anda tidak perlu menginputnya satu per satu secara manual. CashFlow Online menyediakan fitur impor transaksi dari Excel yang cepat, akurat, dan langsung terintegrasi dengan daftar pelanggan serta master data barang.',
  steps: [
    {
      num: 1,
      title: 'Akses Menu Penawaran Penjualan',
      desc: 'Masuk ke akun CashFlow Online Anda. Buka menu Penjualan pada navigasi samping, lalu klik submenu Penawaran Penjualan untuk masuk ke halaman daftar transaksi penawaran.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Navigasi ke modul Penjualan dan menu Penawaran Penjualan',
    },
    {
      num: 2,
      title: 'Buka Menu Impor dan Unduh Contoh Format Excel',
      desc: 'Pada sudut kanan atas halaman daftar penawaran:\n• Klik tombol Impor atau ikon opsi titik tiga (⋮).\n• Pilih menu "Impor dari Excel".\n• Klik tautan "Unduh Contoh Format File" untuk mengunduh template spreadsheet resmi yang sesuai dengan struktur CashFlow Online.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Menu Impor dari Excel dan tautan Unduh Contoh Format File',
    },
    {
      num: 3,
      title: 'Isi Data Penawaran pada Spreadsheet Excel',
      desc: 'Buka template Excel yang telah diunduh, lalu masukkan data penawaran Anda:\n• Nomor Transaksi: Nomor penawaran penjualan (dapat dikelompokkan per nomor dokumen).\n• Tanggal: Format tanggal dokumen (DD/MM/YYYY).\n• Pelanggan: Nama atau ID pelanggan yang sudah terdaftar.\n• Kode Barang/Jasa: Kode barang yang ditawarkan.\n• Kuantitas, Satuan, dan Harga Satuan: Jumlah dan harga penawaran.\n• Diskon & Pajak (PPN): Persentase diskon atau kode pajak jika ada.\n\nSimpan file dalam format .xlsx atau .xls.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Template Excel data penawaran harga dengan kolom-kolom standar',
    },
    {
      num: 4,
      title: 'Unggah (Upload) File Excel ke Sistem',
      desc: 'Kembali ke dialog Impor di CashFlow Online:\n• Klik tombol "Pilih File" atau seret (drag and drop) file Excel yang sudah diisi ke area upload.\n• Pastikan nama file dan ukuran sesuai ketentuan.\n• Klik tombol "Unggah / Lanjutkan" untuk melanjutkan ke tahap verifikasi pemetaan.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Dialog pemilihan file Excel dan tombol Unggah data',
    },
    {
      num: 5,
      title: 'Lakukan Pemetaan Kolom Data (Field Mapping)',
      desc: 'Sistem akan otomatis mendeteksi header kolom pada spreadsheet Excel Anda:\n• Periksa kecocokan kolom sumber Excel dengan field target di CashFlow Online (seperti Nomor Faktur, Tanggal, Pelanggan, Barang, Kuantitas, dan Harga).\n• Atur opsi perlakuan jika data pelanggan atau barang belum ada di sistem (misal: buat baru otomatis atau lewati baris).\n• Jika pemetaan sudah sesuai, klik tombol "Lanjutkan".',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Halaman pemetaan kolom Excel dengan field target di CashFlow Online',
    },
    {
      num: 6,
      title: 'Jalankan Proses Impor dan Periksa Hasil Validasi',
      desc: 'Klik tombol "Mulai Impor" untuk memproses data. Sistem akan memvalidasi setiap baris transaksi:\n• Jika seluruh baris valid, sistem menampilkan pesan sukses dengan jumlah total penawaran yang berhasil dibuat.\n• Jika terdapat baris error (misal format tanggal keliru atau kode barang tidak ditemukan), sistem memberikan laporan log baris yang gagal beserta alasannya untuk diperbaiki.\n• Dokumen penawaran yang berhasil diimpor langsung masuk ke daftar Penawaran Penjualan dan siap diproses ke alur penjualan berikutnya.',
      image: '/images/pembelian/cashflow_po_menu_navigasi.png',
      screenshotNote: 'Hasil proses impor data penawaran dan konfirmasi jumlah data berhasil',
    },
  ],
};
