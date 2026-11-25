import React, { useState } from 'react';
import { Home } from 'lucide-react';
import './App.css';

// Modular Components
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { ArticleTemplate } from './components/ArticleTemplate';
import { ArticleData } from './types/article';

// Modular Pages
import { ModuleIndex } from './pages/ModuleIndex';

// Sub-Modul 05: Retur Pembelian (.ts)
import { rp001Data } from './pages/pembelian/retur-pembelian/01-fitur-dan-fungsi';
import { rp002Data } from './pages/pembelian/retur-pembelian/02-retur-dari-faktur';
import { rp003Data } from './pages/pembelian/retur-pembelian/03-retur-sebagian';
import { rp004Data } from './pages/pembelian/retur-pembelian/04-retur-setelah-lunas';
import { rp005Data } from './pages/pembelian/retur-pembelian/05-retur-faktur-dimuka';
import { rp006Data } from './pages/pembelian/retur-pembelian/06-retur-biaya-faktur';
import { rp007Data } from './pages/pembelian/retur-pembelian/07-retur-jasa';

// Sub-Modul 01: Pesanan Barang (.ts)
import { caraMembatalkanPesananData } from './pages/pembelian/pesanan-barang/cara-membatalkan-pesanan';
import { caraMencatatDpKeSupplierData } from './pages/pembelian/pesanan-barang/cara-mencatat-dp-ke-supplier';
import { caraOrderBarangKeSupplierData } from './pages/pembelian/pesanan-barang/cara-order-barang-ke-supplier';
import { hapusBanyakPesananSekaligusData } from './pages/pembelian/pesanan-barang/hapus-banyak-pesanan-sekaligus';
import { inputPembelianDariExcelData } from './pages/pembelian/pesanan-barang/input-pembelian-dari-excel';
import { inputPembelianLuarNegeriExcelData } from './pages/pembelian/pesanan-barang/input-pembelian-luar-negeri-excel';
import { orderDariPesananPelangganData } from './pages/pembelian/pesanan-barang/order-dari-pesanan-pelanggan';
import { pesananDariPermintaanBarangData } from './pages/pembelian/pesanan-barang/pesanan-dari-permintaan-barang';

// Sub-Modul 02: Penerimaan Barang (.ts)
import { articleManual } from './pages/pembelian/penerimaan-barang/cara-membuat-penerimaan-barang';
import { articleErrorZero } from './pages/pembelian/penerimaan-barang/error-pengeluaran-nol-aset-tetap';
import { articlePO } from './pages/pembelian/penerimaan-barang/penerimaan-barang-dari-pesanan';

// Sub-Modul 03: Faktur Pembelian (.ts)
import { bebanPembelianKeCostPersediaanData } from './pages/pembelian/faktur-pembelian/beban-pembelian-ke-cost-persediaan';
import { biayaOngkirForwarderKeHppData } from './pages/pembelian/faktur-pembelian/biaya-ongkir-forwarder-ke-hpp';
import { caraMembuatFakturPembelianData } from './pages/pembelian/faktur-pembelian/cara-membuat-faktur-pembelian';
import { diskonTidakMunculDiJurnalData } from './pages/pembelian/faktur-pembelian/diskon-tidak-muncul-di-jurnal';
import { errorAkunPembulatanBelumDiisiData } from './pages/pembelian/faktur-pembelian/error-akun-pembulatan-belum-diisi';
import { errorTidakDapatMemperbaruiBiayaData } from './pages/pembelian/faktur-pembelian/error-tidak-dapat-memperbarui-biaya';
import { invoiceDariBarangSudahDiterimaData } from './pages/pembelian/faktur-pembelian/invoice-dari-barang-sudah-diterima';
import { invoiceSupplierSebelumBarangDatangData } from './pages/pembelian/faktur-pembelian/invoice-supplier-sebelum-barang-datang';
import { kurangiTagihanPotonganSupplierData } from './pages/pembelian/faktur-pembelian/kurangi-tagihan-potongan-supplier';
import { pajakJasaRenovasiPeroranganData } from './pages/pembelian/faktur-pembelian/pajak-jasa-renovasi-perorangan';
import { potongFakturDenganUangMukaData } from './pages/pembelian/faktur-pembelian/potong-faktur-dengan-uang-muka';
import { prosesPoMenjadiTagihanSupplierData } from './pages/pembelian/faktur-pembelian/proses-po-menjadi-tagihan-supplier';
import { tagihanSupplierSebelumBarangDiterimaData } from './pages/pembelian/faktur-pembelian/tagihan-supplier-sebelum-barang-diterima';
import { uploadFakturPembelianDariExcelData } from './pages/pembelian/faktur-pembelian/upload-faktur-pembelian-dari-excel';
import { caraMencatatPembelianDilunasiPihakLainData } from './pages/pembelian/lainnya/cara-mencatat-pembelian-dilunasi-pihak-lain';
import { caraMencatatKelebihanPembayaranPembelianData } from './pages/pembelian/lainnya/cara-mencatat-kelebihan-pembayaran-pembelian';

// Penjualan: Sub-Modul 01: Penawaran Penjualan
import { caraMembuatPenawaranHargaData } from './pages/penjualan/penawaran-penjualan/cara-membuat-penawaran-harga';
import { penawaranPenjualanPkpDanBiayaData } from './pages/penjualan/penawaran-penjualan/penawaran-penjualan-pkp-dan-biaya';
import { caraImporPenawaranPenjualanExcelKeAccurateOnlineData } from './pages/penjualan/penawaran-penjualan/cara-impor-penawaran-penjualan-excel-ke-accurate-online';

// Penjualan: Sub-Modul 02: Pesanan Penjualan
import { caraMembuatPesananPenjualanData } from './pages/penjualan/pesanan-penjualan/cara-membuat-pesanan-penjualan';
import { pesananPenjualanDenganDownPaymentData } from './pages/penjualan/pesanan-penjualan/pesanan-penjualan-dengan-down-payment';
import { pesananPenjualanDariPenawaranData } from './pages/penjualan/pesanan-penjualan/pesanan-penjualan-dari-penawaran';

// Dashboard: 11 panduan widget
import { dasborArusKasData } from './pages/dashboard/dasbor-arus-kas';
import { dasborBebanData } from './pages/dashboard/dasbor-beban';
import { dasborFakturTerlewatData } from './pages/dashboard/dasbor-faktur-terlewat';
import { dasborKasBankData } from './pages/dashboard/dasbor-kas-bank';
import { dasborLabaRugiData } from './pages/dashboard/dasbor-laba-rugi';
import { dasborPiutangData } from './pages/dashboard/dasbor-piutang';
import { dasborPenjualanData } from './pages/dashboard/dasbor-penjualan';
import { dasborPermintaanBarangData } from './pages/dashboard/dasbor-permintaan-barang';
import { dasborPesananPenjualanData } from './pages/dashboard/dasbor-pesanan-penjualan';
import { dasborMonitoringHppData } from './pages/dashboard/dasbor-monitoring-hpp';
import { dasborLabaCabangData } from './pages/dashboard/dasbor-laba-cabang';

// Pengaturan: Preferensi
import { preferensiBukaData } from './pages/pengaturan/preferensi/preferensi-buka';
import { preferensiDataPerusahaanData } from './pages/pengaturan/preferensi/preferensi-data-perusahaan';
import { preferensiFiturData } from './pages/pengaturan/preferensi/preferensi-fitur';
import { preferensiPajakData } from './pages/pengaturan/preferensi/preferensi-pajak';
import { preferensiPenjualanData } from './pages/pengaturan/preferensi/preferensi-penjualan';
import { preferensiPembelianData } from './pages/pengaturan/preferensi/preferensi-pembelian';
import { preferensiAksesData } from './pages/pengaturan/preferensi/preferensi-akses';
import { preferensiPersetujuanData } from './pages/pengaturan/preferensi/preferensi-persetujuan';
import { preferensiAtributData } from './pages/pengaturan/preferensi/preferensi-atribut';
import { preferensiAkunDefaultData } from './pages/pengaturan/preferensi/preferensi-akun-default';
import { preferensiLainLainData } from './pages/pengaturan/preferensi/preferensi-lain-lain';
import { preferensiEfakturCabangData } from './pages/pengaturan/preferensi/preferensi-efaktur-cabang';
import { preferensiPoAutocloseData } from './pages/pengaturan/preferensi/preferensi-po-autoclose';
import { preferensiPelangganPpnData } from './pages/pengaturan/preferensi/preferensi-pelanggan-ppn';
import { preferensiErrorSelisihData } from './pages/pengaturan/preferensi/preferensi-error-selisih';
import { preferensiKategoriKeuanganData } from './pages/pengaturan/preferensi/preferensi-kategori-keuangan';
import { preferensiErrorTanggalData } from './pages/pengaturan/preferensi/preferensi-error-tanggal';

// Pengaturan: Akses Grup
import { aksesGrupHakAksesData } from './pages/pengaturan/akses-grup/akses-grup-hak-akses';
import { aksesGrupBatasAnggaranData } from './pages/pengaturan/akses-grup/akses-grup-batas-anggaran';
import { aksesGrupMenuTidakTampilData } from './pages/pengaturan/akses-grup/akses-grup-menu-tidak-tampil';
import { aksesGrupDibatasiData } from './pages/pengaturan/akses-grup/akses-grup-dibatasi';
import { aksesGrupBayarBebanData } from './pages/pengaturan/akses-grup/akses-grup-bayar-beban';
import { aksesGrupPenangguhanData } from './pages/pengaturan/akses-grup/akses-grup-penangguhan';
import { aksesGrupPemindahanBarangData } from './pages/pengaturan/akses-grup/akses-grup-pemindahan-barang';
import { aksesGrupHargaStandarData } from './pages/pengaturan/akses-grup/akses-grup-harga-standar';
import { aksesGrupMinJualBeliData } from './pages/pengaturan/akses-grup/akses-grup-min-jual-beli';
import { aksesGrupCheckinData } from './pages/pengaturan/akses-grup/akses-grup-checkin';
import { aksesGrupBahanBakuData } from './pages/pengaturan/akses-grup/akses-grup-bahan-baku';
import { penggunaTambahKaryawanData } from './pages/pengaturan/pengguna/pengguna-tambah-karyawan';
import { penomoranOtomatisData } from './pages/pengaturan/penomoran/penomoran-otomatis';
import { penomoranBulanRomawiData } from './pages/pengaturan/penomoran/penomoran-bulan-romawi';
import { penomoranCounterData } from './pages/pengaturan/penomoran/penomoran-counter';
import { cetak01Data } from './pages/pengaturan/desain-cetakan/cetak-01';
import { cetak02Data } from './pages/pengaturan/desain-cetakan/cetak-02';
import { cetak03Data } from './pages/pengaturan/desain-cetakan/cetak-03';
import { cetak04Data } from './pages/pengaturan/desain-cetakan/cetak-04';
import { cetak05Data } from './pages/pengaturan/desain-cetakan/cetak-05';
import { cetak06Data } from './pages/pengaturan/desain-cetakan/cetak-06';
import { cetak07Data } from './pages/pengaturan/desain-cetakan/cetak-07';
import { cetak08Data } from './pages/pengaturan/desain-cetakan/cetak-08';
import { cetak09Data } from './pages/pengaturan/desain-cetakan/cetak-09';
import { cetak10Data } from './pages/pengaturan/desain-cetakan/cetak-10';
import { cetak11Data } from './pages/pengaturan/desain-cetakan/cetak-11';
import { cetak12Data } from './pages/pengaturan/desain-cetakan/cetak-12';
import { cetak13Data } from './pages/pengaturan/desain-cetakan/cetak-13';
import { cetak14Data } from './pages/pengaturan/desain-cetakan/cetak-14';
import { cetak15Data } from './pages/pengaturan/desain-cetakan/cetak-15';
import { cetak16Data } from './pages/pengaturan/desain-cetakan/cetak-16';
import { cetak17Data } from './pages/pengaturan/desain-cetakan/cetak-17';
import { cetak18Data } from './pages/pengaturan/desain-cetakan/cetak-18';
import { cetak19Data } from './pages/pengaturan/desain-cetakan/cetak-19';
import { cetak20Data } from './pages/pengaturan/desain-cetakan/cetak-20';
import { cetak21Data } from './pages/pengaturan/desain-cetakan/cetak-21';
import { cetak22Data } from './pages/pengaturan/desain-cetakan/cetak-22';
import { cetak23Data } from './pages/pengaturan/desain-cetakan/cetak-23';
import { cetak24Data } from './pages/pengaturan/desain-cetakan/cetak-24';
import { cetak25Data } from './pages/pengaturan/desain-cetakan/cetak-25';
import { cetak26Data } from './pages/pengaturan/desain-cetakan/cetak-26';
import { cetak27Data } from './pages/pengaturan/desain-cetakan/cetak-27';
import { cetak28Data } from './pages/pengaturan/desain-cetakan/cetak-28';
import { cetak29Data } from './pages/pengaturan/desain-cetakan/cetak-29';
import { cetak30Data } from './pages/pengaturan/desain-cetakan/cetak-30';
import { cetak31Data } from './pages/pengaturan/desain-cetakan/cetak-31';
import { cetak32Data } from './pages/pengaturan/desain-cetakan/cetak-32';
import { cetak33Data } from './pages/pengaturan/desain-cetakan/cetak-33';
import { cetak34Data } from './pages/pengaturan/desain-cetakan/cetak-34';
import { cetak35Data } from './pages/pengaturan/desain-cetakan/cetak-35';
import { cetak36Data } from './pages/pengaturan/desain-cetakan/cetak-36';
import { cetak37Data } from './pages/pengaturan/desain-cetakan/cetak-37';
import { cetak38Data } from './pages/pengaturan/desain-cetakan/cetak-38';
import { cetak39Data } from './pages/pengaturan/desain-cetakan/cetak-39';
import { cetak40Data } from './pages/pengaturan/desain-cetakan/cetak-40';
import { penyetujuApprovalData } from './pages/pengaturan/penyetuju-transaksi/penyetuju-approval';
import { per01Data } from './pages/perusahaan/mata-uang/cara-menambahkan-dan-menggunakan-mata-uang-asing';
import { per02Data } from './pages/perusahaan/cabang/cara-mengaktifkan-dan-menggunakan-fitur-cabang';
import { per03Data } from './pages/perusahaan/cabang/cara-mengatasi-cabang-tidak-bisa-dihapus';
import { per04Data } from './pages/perusahaan/cabang/cara-menambahkan-nitku-cabang';
import { per05Data } from './pages/perusahaan/pajak/cara-menambahkan-pajak-baru';
import { per06Data } from './pages/perusahaan/syarat-pembayaran/fungsi-dan-manfaat-fitur-syarat-pembayaran';
import { per07Data } from './pages/perusahaan/pengiriman/fungsi-dan-cara-menggunakan-fitur-pengiriman';
import { per08Data } from './pages/perusahaan/pengiriman/cara-import-data-pengiriman-dari-excel-ke-accurate-online';
import { per09Data } from './pages/perusahaan/fob/mengenal-fungsi-manfaat-dan-cara-kerja-fitur-fob';
import { per10Data } from './pages/perusahaan/gaji-dan-tunjangan/cara-menambahkan-gaji-dan-tunjangan-karyawan';
import { per11Data } from './pages/perusahaan/gaji-dan-tunjangan/cara-mengatasi-pesan-error-akun-beban-gaji-tunjangan-harus-diisi';
import { per12Data } from './pages/perusahaan/gaji-dan-tunjangan/cara-mengatasi-error-saat-menghapus-akun-perkiraan';
import { per13Data } from './pages/perusahaan/karyawan/menambahkan-data-karyawan-untuk-payroll-dan-pph-21';
import { per14Data } from './pages/perusahaan/karyawan/cara-menambahkan-sales-atau-tenaga-penjual';
import { per15Data } from './pages/perusahaan/karyawan/cara-menghitung-pajak-pph-21-karyawan-harian-atau-kontrak';
import { per16Data } from './pages/perusahaan/karyawan/cara-mengimpor-data-karyawan-dari-excel';
import { per17Data } from './pages/perusahaan/karyawan/cara-mencatat-karyawan-resign-dan-hitung-pph-21-terakhirnya';
import { per18Data } from './pages/perusahaan/transaksi-berulang/cara-mencatat-biaya-bulanan-secara-otomatis';
import { per19Data } from './pages/perusahaan/transaksi-berulang/cara-menjalankan-banyak-transaksi-berulang-sekaligus';
import { per20Data } from './pages/perusahaan/proses-akhir-bulan/cara-tutup-buku-bulanan';
import { per21Data } from './pages/perusahaan/proses-akhir-bulan/cara-mencegah-proses-akhir-bulan-gagal-karena-stok-minus';
import { per22Data } from './pages/perusahaan/proses-akhir-bulan/cara-melakukan-penyusutan-aset-tetap';
import { per23Data } from './pages/perusahaan/kontak/mengenal-fitur-kontak-dan-manfaatnya-untuk-bisnis';
import { per24Data } from './pages/perusahaan/transaksi-favorit/cara-menyimpan-template-transaksi';
import { per25Data } from './pages/perusahaan/transaksi-favorit/cara-menghapus-transaksi-favorit';
import { per26Data } from './pages/perusahaan/approval/mengenal-fungsi-fitur-persetujuan-approval';
import { per27Data } from './pages/perusahaan/approval/cara-menyetujui-banyak-transaksi-sekaligus';
import { per28Data } from './pages/perusahaan/kalender/cara-menggunakan-fitur-kalender';
import { per29Data } from './pages/perusahaan/log-aktivitas/cara-melihat-riwayat-perubahan-data-dan-transaksinya';
import { per30Data } from './pages/perusahaan/departemen-proyek/cara-membuat-departemen-dan-proyek';
import { bb01Data } from './pages/buku-besar/akun-perkiraan/cara-membuat-mengubah-dan-menghapus-akun-perkiraan';
import { bb02Data } from './pages/buku-besar/akun-perkiraan/cara-membuat-akun-mata-uang-asing';
import { bb03Data } from './pages/buku-besar/akun-perkiraan/solusi-error-tidak-bisa-membuat-akun-perkiraan';
import { bb04Data } from './pages/buku-besar/akun-perkiraan/cara-membuat-equitas-saldo-awal-menjadi-0-nol';
import { bb05Data } from './pages/buku-besar/akun-perkiraan/cara-memasukkan-saldo-awal-modal-dan-laba-ditahan';
import { bb06Data } from './pages/buku-besar/pencatatan-beban/cara-mencatat-biaya-atau-pengeluaran-perusahaan';
import { bb07Data } from './pages/buku-besar/pencatatan-beban/cara-mencatat-tagihan-yang-belum-dibayar';
import { bb08Data } from './pages/buku-besar/pencatatan-beban/cara-mencatat-piutang-karyawan';
import { bb09Data } from './pages/buku-besar/pencatatan-beban/cara-memotong-cicilan-pinjaman-karyawan-dari-gaji';
import { bb10Data } from './pages/buku-besar/pencatatan-beban/cara-menghapus-pencatatan-beban-secara-massal';
import { bb11Data } from './pages/buku-besar/pencatatan-gaji/cara-mencatat-beban-gaji-karyawan';
import { bb12Data } from './pages/buku-besar/pencatatan-gaji/cara-menghitung-dan-mencatat-pph-21-karyawan';
import { bb13Data } from './pages/buku-besar/pencatatan-gaji/cara-mencatat-thr-atau-bonus-karyawan-yang-dikenakan-pph-21';
import { bb14Data } from './pages/buku-besar/pencatatan-gaji/cara-mencatat-dan-menghitung-pph-21-karyawan-baru';
import { bb15Data } from './pages/buku-besar/pencatatan-gaji/cara-mencatat-gaji-agar-masuk-ke-spt-pph-21';
import { bb16Data } from './pages/buku-besar/pencatatan-gaji/menghitung-pph-21-karyawan-tetap-di-bulan-desember';
import { bb17Data } from './pages/buku-besar/pencatatan-gaji/cara-mengatasi-error-periode-pencatatan-pph';
import { bb18Data } from './pages/buku-besar/pencatatan-gaji/cara-mengatasi-error-kelebihan-pph-saat-mencatat-gaji';
import { bb19Data } from './pages/buku-besar/jurnal-umum/cara-membuat-jurnal-umum';
import { bb20Data } from './pages/buku-besar/jurnal-umum/cara-mencatat-transaksi-mata-uang-asing';
import { bb21Data } from './pages/buku-besar/jurnal-umum/cara-mencatat-pembagian-dividen-ke-pemegang-saham';
import { bb22Data } from './pages/buku-besar/jurnal-umum/cara-import-jurnal-umum-dari-excel-ke-accurate-online';
import { bb23Data } from './pages/buku-besar/jurnal-umum/cara-menghapus-jurnal-umum-secara-massal';
import { bb24Data } from './pages/buku-besar/monitor-anggaran/cara-cek-penggunaan-anggaran-perusahaan';
import { bb25Data } from './pages/buku-besar/transfer-anggaran/cara-mengalihkan-budget-ke-anggaran-lain';
import { bb26Data } from './pages/buku-besar/anggaran/cara-membuat-dan-menghapus-anggaran';
import { bb27Data } from './pages/buku-besar/anggaran/cara-mengatasi-error-akun-perkiraan-digunakan-di-anggaran';
import { bb28Data } from './pages/buku-besar/histori-akun/cara-melihat-riwayat-transaksi-akun-perkiraan';
import { bb29Data } from './pages/buku-besar/log-aktivitas-jurnal/cara-melihat-riwayat-perubahan-jurnal';
import { bb30Data } from './pages/buku-besar/pinjaman-karyawan/cara-memberikan-pinjaman-ke-karyawan-dan-mencatatnya';
import { bb31Data } from './pages/buku-besar/pinjaman-karyawan/cara-mencatat-angsuran-pinjaman-karyawan-melalui-potongan-gaji';
import { kb01Data } from './pages/kas-bank/pembayaran/fungsi-dan-manfaat-fitur-pembayaran';
import { kb02Data } from './pages/kas-bank/pembayaran/cara-membayar-gaji-yang-sudah-dicatat';
import { kb03Data } from './pages/kas-bank/pembayaran/cara-mencatat-pembayaran-dalam-mata-uang-asing';
import { kb04Data } from './pages/kas-bank/pembayaran/cara-impor-pembayaran-transaksi-dari-excel';
import { kb05Data } from './pages/kas-bank/pembayaran/cara-mencatat-biaya-dibayar-di-muka';
import { kb06Data } from './pages/kas-bank/pembayaran/cara-mencatat-biaya-dibayar-di-muka-dengan-jurnal-umum';
import { kb07Data } from './pages/kas-bank/pembayaran/cara-mencatat-cicilan-pinjaman-bank';
import { kb08Data } from './pages/kas-bank/pembayaran/cara-mengisi-ntpn-saat-mencatat-pembayaran-pph';
import { kb09Data } from './pages/kas-bank/pembayaran/mengisi-departemen-atau-proyek-yang-kosong-di-pembayaran';
import { kb10Data } from './pages/kas-bank/pembayaran/cara-mencatat-pembayaran-operasional-perusahaan';
import { kb11Data } from './pages/kas-bank/pembayaran/cara-mengimpor-pembayaran-operasional-dari-excel';
import { kb12Data } from './pages/kas-bank/penerimaan/cara-mencatat-uang-masuk-ke-kas-atau-bank';
import { kb13Data } from './pages/kas-bank/penerimaan/cara-mencatat-uang-masuk-dalam-mata-uang-asing';
import { kb14Data } from './pages/kas-bank/penerimaan/cara-import-transaksi-kas-masuk-dari-excel';
import { kb15Data } from './pages/kas-bank/penerimaan/cara-mencatat-pinjaman-pinjaman-bank';
import { kb16Data } from './pages/kas-bank/transfer-bank/cara-mencatat-transfer-antar-rekening-bank';
import { kb17Data } from './pages/kas-bank/transfer-bank/cara-mencatat-biaya-transfer-bank';
import { kb18Data } from './pages/kas-bank/smartlink-ebanking/cara-menghubungkan-internet-banking';
import { kb19Data } from './pages/kas-bank/smartlink-ebanking/cara-mengimpor-mutasi-bank-dengan-format-excel';
import { kb20Data } from './pages/kas-bank/smartlink-ebanking/cara-menghubungkan-klikbca-bisnis';
import { kb21Data } from './pages/kas-bank/rekening-koran/cara-mengimpor-mutasi-bank-ke-accurate-online';
import { kb22Data } from './pages/kas-bank/rekening-koran/cara-menghapus-mutasi-rekening-koran';
import { kb23Data } from './pages/kas-bank/histori-bank/cara-melihat-mutasi-bank';
import { kb24Data } from './pages/kas-bank/rekonsiliasi-bank/cara-mencocokkan-mutasi-bank-dengan-transaksi-accurate';
import { kb25Data } from './pages/kas-bank/rekonsiliasi-bank/cara-mencocokkan-banyak-transaksi-bank-sekaligus';
import { kb26Data } from './pages/kas-bank/rekonsiliasi-bank/cara-menghapus-banyak-mutasi-bank-sekaligus';
import { kb27Data } from './pages/kas-bank/rekonsiliasi-bank/cara-mencocokkan-beberapa-mutasi-bank-ke-satu-transaksi';
import { kb28Data } from './pages/kas-bank/rekonsiliasi-bank/mengatasi-saldo-bank-tidak-sama-dengan-accurate';
import { kb29Data } from './pages/kas-bank/smartlink-virtual-account/cara-setting-virtual-account';
import { kb30Data } from './pages/kas-bank/smartlink-virtual-account/cara-menerima-pembayaran-lewat-virtual-account-bca';
import { kb31Data } from './pages/kas-bank/smartlink-epayment/mengenal-menerima-pembayaran-online-secara-otomatis';
import { kb32Data } from './pages/kas-bank/pencairan-pinjaman/cara-mencairkan-pinjaman-karyawan';
import { kb33Data } from './pages/kas-bank/pembayaran-angsuran/cara-mencatat-pembayaran-cicilan-pinjaman-karyawan';
import { kb34Data } from './pages/kas-bank/pelunasan-pinjaman/cara-mencatat-pelunasan-pinjaman';
import { pn001Data } from './pages/penjualan/generated/cara-menutup-pesanan-penjualan-sales-order';
import { pn002Data } from './pages/penjualan/generated/cara-impor-pesanan-penjualan-valas-dari-excel';
import { pn003Data } from './pages/penjualan/generated/cara-mengimpor-transaksi-pesanan-penjualan';
import { pn004Data } from './pages/penjualan/generated/cara-membuat-pengiriman-pesanan';
import { pn005Data } from './pages/penjualan/generated/membuat-pengiriman-pesanan-dari-penawaran-penjualan';
import { pn006Data } from './pages/penjualan/generated/cara-membuat-pengiriman-pesanan-dari-sales-order';
import { pn007Data } from './pages/penjualan/generated/membuat-pengiriman-pesanan-dari-faktur-penjualan-dimuka';
import { pn008Data } from './pages/penjualan/generated/menghapus-transaksi-pengiriman-pesanan-secara-massal';
import { pn009Data } from './pages/penjualan/generated/solusi-error-pengiriman-barang-dari-pesanan-penjualan';
import { pn010Data } from './pages/penjualan/generated/cara-mencatat-uang-muka-penjualan-dp-pelanggan';
import { pn011Data } from './pages/penjualan/generated/cara-memotong-faktur-dengan-dp-pelanggan';
import { pn012Data } from './pages/penjualan/generated/cara-mencatat-uang-muka-dp-dibayar-dengan-barang';
import { pn013Data } from './pages/penjualan/generated/cara-mencatat-saldo-awal-uang-muka-pelanggan';
import { pn014Data } from './pages/penjualan/generated/cara-membuat-faktur-penjualan-invoice';
import { pn015Data } from './pages/penjualan/generated/cara-menghapus-faktur-penjualan';
import { pn016Data } from './pages/penjualan/generated/cara-membuat-faktur-penjualan-dari-penawaran';
import { pn017Data } from './pages/penjualan/generated/cara-membuat-faktur-penjualan-dari-pengiriman-barang';
import { pn018Data } from './pages/penjualan/generated/cara-mengubah-pesanan-menjadi-invoice';
import { pn019Data } from './pages/penjualan/generated/cara-memotong-invoice-dengan-uang-muka-dp';
import { pn020Data } from './pages/penjualan/generated/cara-membuat-faktur-penjualan-sebelum-barang-dikirim';
import { pn021Data } from './pages/penjualan/generated/menghitung-ppn-harga-sudah-termasuk-pajak-diskon-faktur';
import { pn022Data } from './pages/penjualan/generated/cara-mencetak-banyak-faktur-penjualan-sekaligus';
import { pn023Data } from './pages/penjualan/generated/melihat-transaksi-accurate-pos-yang-belum-masuk';
import { pn024Data } from './pages/penjualan/generated/cara-mengambil-data-faktur-pembelian-ke-faktur-penjualan';
import { pn025Data } from './pages/penjualan/generated/cara-accurate-online-membagi-diskon-faktur-ke-setiap-barang';
import { pn026Data } from './pages/penjualan/generated/cara-menghitung-ppn-transaksi-mata-uang-asing';
import { pn027Data } from './pages/penjualan/generated/cara-menambahkan-status-lunas-di-invoice';
import { pn028Data } from './pages/penjualan/generated/mengatasi-hpp-tidak-muncul-pada-faktur-penjualan';
import { pn029Data } from './pages/penjualan/generated/cara-mencatat-pembayaran-cicilan-pelanggan';
import { pn030Data } from './pages/penjualan/generated/cara-membatasi-diskon-penjualan-dengan-approval';
import { pn031Data } from './pages/penjualan/generated/arti-kolom-umur-hr-pada-faktur-penjualan';
import { pn032Data } from './pages/penjualan/generated/cara-mengatasi-error-harga-jual-di-bawah-harga-beli';
import { pn033Data } from './pages/penjualan/generated/cara-melihat-faktur-dimuka-yang-belum-dikirim';
import { pn034Data } from './pages/penjualan/generated/cara-mengirim-tagihan-ke-whatsapp-pelanggan';
import { pn035Data } from './pages/penjualan/generated/cara-mengatur-ppn-keluaran-dari-tab-biaya-lainnya';
import { pn036Data } from './pages/penjualan/generated/cara-memasukkan-pencairan-dana-tiktok-shop';
import { pn037Data } from './pages/penjualan/generated/cara-memasukkan-pencairan-dana-tokopedia';
import { pn038Data } from './pages/penjualan/generated/cara-mengimpor-faktur-penjualan-dari-data-pengiriman-pesanan-barang';
import { pn039Data } from './pages/penjualan/generated/cara-mencatat-pembayaran-dari-pelanggan';
import { pn040Data } from './pages/penjualan/generated/cara-mencatat-pembayaran-invoice-pelanggan';
import { pn041Data } from './pages/penjualan/generated/mencatat-pembayaran-pelanggan-dengan-potongan-biaya';
import { pn042Data } from './pages/penjualan/generated/cara-menghapus-pembayaran-dari-pelanggan';
import { pn043Data } from './pages/penjualan/generated/cara-mencatat-piutang-pelanggan-yang-tidak-bisa-ditagih';
import { pn044Data } from './pages/penjualan/generated/cara-mencatat-overpay-pelanggan';
import { pn045Data } from './pages/penjualan/generated/cara-mencatat-biaya-admin-bank';
import { pn046Data } from './pages/penjualan/generated/cara-uengembalikan-uang-retur-penjualan-yang-sudah-lunas';
import { pn047Data } from './pages/penjualan/generated/cara-membatalkan-pembayaran-karena-cek-atau-giro-ditolak';
import { pn048Data } from './pages/penjualan/generated/mencatat-kelebihan-pembayaran-pelanggan-ke-akun-lain';
import { pn049Data } from './pages/penjualan/generated/cara-import-pembayaran-va-bca-ke-penerimaan-penjualan';
import { pn050Data } from './pages/penjualan/generated/cara-impor-penerimaan-penjualan-dari-excel';
import { pn051Data } from './pages/penjualan/generated/mengenal-fitur-retur-penjualan';
import { pn052Data } from './pages/penjualan/generated/cara-mencatat-retur-barang-ditukar-barang-lain';
import { pn053Data } from './pages/penjualan/generated/cara-retur-barang-dari-faktur-yang-sudah-lunas';
import { pn054Data } from './pages/penjualan/generated/cara-membuat-retur-penjualan-tanpa-faktur';
import { pn055Data } from './pages/penjualan/generated/cara-mengembalikan-uang-pelanggan-setelah-retur-barang';
import { pn056Data } from './pages/penjualan/generated/retur-penjualan-untuk-mengurangi-faktur-belum-lunas';
import { pn057Data } from './pages/penjualan/generated/membuat-retur-penjualan-dari-faktur-penjualan-dimuka';
import { pn058Data } from './pages/penjualan/generated/cara-mengembalikan-dp-pelanggan';
import { pn059Data } from './pages/penjualan/generated/cara-mengembalikan-dp-pelanggan-yang-sudah-lunas';
import { pn060Data } from './pages/penjualan/generated/cara-mengembalikan-sebagian-barang-penjualan';
import { pn061Data } from './pages/penjualan/generated/cara-mencatat-retur-penjualan-jasa';
import { pn062Data } from './pages/penjualan/generated/cara-retur-penjualan-saat-barang-tidak-dikembalikan';
import { pn063Data } from './pages/penjualan/generated/cara-mengatasi-error-nomor-seri-tidak-ditemukan-di-faktur';
import { pn064Data } from './pages/penjualan/generated/cara-mengatur-biaya-barang-retur-penjualan';
import { pn065Data } from './pages/penjualan/generated/cara-retur-penjualan-tanpa-faktur';
import { pn066Data } from './pages/penjualan/generated/cara-mengatur-nilai-barang-retur-penjualan';
import { pn067Data } from './pages/penjualan/generated/cara-mencatat-penagihan-piutang-dengan-tukar-faktur';
import { pn068Data } from './pages/penjualan/generated/cara-mencatat-klaim-garansi-pelanggan';
import { pn069Data } from './pages/penjualan/generated/cara-mengirim-barang-pengganti-klaim-garansi';
import { pn070Data } from './pages/penjualan/generated/cara-mengatasi-pesan-error-akun-persediaan-klaim';
import { pn071Data } from './pages/penjualan/generated/cara-membuat-pengepakan-barang';
import { pn072Data } from './pages/penjualan/generated/cara-mengelompokkan-data-pelanggan';
import { pn073Data } from './pages/penjualan/generated/cara-membuat-kategori-penjualan';
import { pn074Data } from './pages/penjualan/generated/cara-membuat-data-pelanggan-baru';
import { pn075Data } from './pages/penjualan/generated/nama-sales-saldo-awal';
import { pn076Data } from './pages/penjualan/generated/cara-mengisi-saldo-awal-piutang-multi-mata-uang';
import { pn077Data } from './pages/penjualan/generated/cara-mengisi-nama-sales-di-saldo-awal-piutang';
import { pn078Data } from './pages/penjualan/generated/cara-impor-pelanggan-dengan-banyak-akun-piutang';
import { pn079Data } from './pages/penjualan/generated/cara-mengimpor-alamat-pengiriman-pelanggan-dari-excel';
import { pn080Data } from './pages/penjualan/generated/cara-impor-data-pelanggan-dari-excel';
import { pn081Data } from './pages/penjualan/generated/cara-mengubah-harga-jual-dan-diskon-produk';
import { pn082Data } from './pages/penjualan/generated/cara-mengubah-harga-dan-diskon-produk-secara-massal';
import { pn083Data } from './pages/penjualan/generated/mengatasi-error-diskon-barang-dimasukkan-lebih-dari-satu-kali';
import { pn084Data } from './pages/penjualan/generated/cara-menghapus-promo-yang-sudah-tidak-berlaku';
import { pn085Data } from './pages/penjualan/generated/membuat-komisi-sales-berdasarkan-penjualannya';
import { pn086Data } from './pages/penjualan/generated/cara-membagi-komisi-beberapa-sales';
import { pn087Data } from './pages/penjualan/generated/cara-menghitung-bonus-sales-per-faktur';
import { pn088Data } from './pages/penjualan/generated/cara-menghitung-komisi-sales-berdasarkan-target-penjualannya';
import { pn089Data } from './pages/penjualan/generated/mengenal-fitur-target-penjualan-dan-mengaktifkannya';
import { pn090Data } from './pages/penjualan/generated/cara-membuat-target-penjualan-produk';
import { pn091Data } from './pages/penjualan/generated/cara-membuat-target-penjualan-untuk-tim-sales';
import { pn092Data } from './pages/penjualan/generated/mengenal-fitur-smartlink-e-commerce';
import { pn093Data } from './pages/penjualan/generated/cara-setting-smartlink-tokopedia';
import { pn094Data } from './pages/penjualan/generated/cara-setting-smartlink-shopee';
import { pn095Data } from './pages/penjualan/generated/cara-setting-smartlink-lazada';
import { pn096Data } from './pages/penjualan/generated/cara-setting-smartlink-blibli';
import { pn097Data } from './pages/penjualan/generated/cara-setting-smartlink-tiktok-shop';
import { pn098Data } from './pages/penjualan/generated/cara-mengetahui-sales-sudah-mengunjungi-pelanggan';
import { pn099Data } from './pages/penjualan/generated/cara-instal-aplikasi-trade-portal-accurate-online';
import { pn100Data } from './pages/penjualan/generated/cara-login-ke-trade-portal-setelah-menerima-undangan-agen';
import { pn101Data } from './pages/penjualan/generated/cara-membuat-katalog-produk-di-trade-portal';
import { pn102Data } from './pages/penjualan/generated/cara-membuat-etalase-trade-portal';
import { pn103Data } from './pages/penjualan/generated/cara-membuat-koleksi-produk-di-trade-portal';
import { pn104Data } from './pages/penjualan/generated/cara-mengundang-agen-atau-reseller';
import { pn105Data } from './pages/penjualan/generated/cara-pesan-barang-di-trade-portal';
import { pn106Data } from './pages/penjualan/generated/cara-membuat-pesanan-tempo';
import { pn107Data } from './pages/penjualan/generated/cara-memproses-pesanan-dari-trade-portal';
import { pn108Data } from './pages/penjualan/generated/cara-membayar-dan-membatalkan-pesanan';
import { pn109Data } from './pages/penjualan/generated/cara-membatalkan-pesanan-yang-sudah-masuk';
import { pn110Data } from './pages/penjualan/generated/cara-membuat-pengiriman-pesanan-dari-trade-portal';
import { pn111Data } from './pages/penjualan/generated/cara-mencatat-penjualan-gift-voucher';
import { pn112Data } from './pages/penjualan/generated/cara-membuat-harga-grosir-berdasarkan-kuantitas-penjualan';
import { pn113Data } from './pages/penjualan/generated/cara-mencatat-uang-muka-yang-dikenakan-pph-23';
import { pn114Data } from './pages/penjualan/generated/cara-mencatat-pelunasan-faktur-dengan-mata-uang-yang-berbeda';
import { pn115Data } from './pages/penjualan/generated/cara-membuat-diskon-bertingkat';
import { pn116Data } from './pages/penjualan/generated/cara-menggunakan-retur-faktur-lunas-untuk-potong-faktur-lain';
import { pn117Data } from './pages/penjualan/generated/cara-mengatur-tanggal-kadaluarsa-e-payment-xendit';
import { pn118Data } from './pages/penjualan/generated/cara-memisahkan-laporan-penjualan-per-marketplace';
import { pn119Data } from './pages/penjualan/generated/cara-mengatasi-notifikasi-harga-tidak-wajar';
import { pn120Data } from './pages/penjualan/generated/cara-mencatat-pengembalian-overpay-dengan-potongan-admin';
import { ps001Data } from './pages/persediaan/generated/cara-membuat-permintaan-barang-antar-gudang';
import { ps002Data } from './pages/persediaan/generated/cara-membuat-permintaan-kirim-barang-antar-gudang';
import { ps003Data } from './pages/persediaan/generated/cara-menampilkan-perkiraan-harga-barang';
import { ps004Data } from './pages/persediaan/generated/cara-menghapus-banyak-permintaan-barang-sekaligus';
import { ps005Data } from './pages/persediaan/generated/cara-memindahkan-stok-antar-gudang';
import { ps006Data } from './pages/persediaan/generated/cara-impor-pemindahan-barang-antar-gudang-dari-excel';
import { ps007Data } from './pages/persediaan/generated/cara-memindahkan-stok-barang-rusak-ke-gudang-khusus';
import { ps008Data } from './pages/persediaan/generated/cara-mengubah-nilai-persediaan-tanpa-mengubah-stok';
import { ps009Data } from './pages/persediaan/generated/cara-mengatasi-error-akun-penyesuaian-persediaan';
import { ps010Data } from './pages/persediaan/generated/cara-mencatat-proses-produksi-barang';
import { ps011Data } from './pages/persediaan/generated/solusi-error-alokasi-biaya-penyelesaian-pesanan';
import { ps012Data } from './pages/persediaan/generated/penyebab-dan-cara-mengatasi-selisih-biaya-pekerjaan-pesanan';
import { ps013Data } from './pages/persediaan/generated/cara-mengatasi-error-akun-biaya-sama-dengan-akun-persediaan';
import { ps014Data } from './pages/persediaan/generated/cara-menginput-stok-hasil-stok-opname';
import { ps015Data } from './pages/persediaan/generated/cara-menghapus-transaksi-stok-opname';
import { ps016Data } from './pages/persediaan/generated/cara-mengimpor-hasil-stok-opname-dari-excel';
import { ps017Data } from './pages/persediaan/generated/penyebab-stok-opname-tidak-sama-dengan-barang-dan-jasa';
import { ps018Data } from './pages/persediaan/generated/cara-menambah-stok-bahan-baku-tanpa-pembelian';
import { ps019Data } from './pages/persediaan/generated/cara-retur-bahan-baku-saat-produksi-berlebih-atau-tidak-terpakai';
import { ps020Data } from './pages/persediaan/generated/pengertian-fitur-barang-dan-jasa';
import { ps021Data } from './pages/persediaan/generated/mengatasi-pesan-error-satuan-pembelian-diluar-unit-barang';
import { ps022Data } from './pages/persediaan/generated/cara-mengatur-harga-jual-otomatis-per-satuan';
import { ps023Data } from './pages/persediaan/generated/cara-mencari-data-dengan-dua-kata-kunci';
import { ps024Data } from './pages/persediaan/generated/cara-mengimpor-barang-grup-di-accurate-online-dari-excel';
import { ps025Data } from './pages/persediaan/generated/cara-membuat-barang-varian';
import { ps026Data } from './pages/persediaan/generated/impor-barang-dengan-saldo-awal-per-gudang-dan-cost-berbeda';
import { ps027Data } from './pages/persediaan/generated/cara-mengimpor-nomor-seri-atau-batch-barang-dari-excel';
import { ps028Data } from './pages/persediaan/generated/cara-mengatasi-error-tidak-dapat-menonaktifkan-nomor-seri';
import { ps029Data } from './pages/persediaan/generated/cara-mengganti-barang-saat-stok-habis';
import { ps030Data } from './pages/persediaan/generated/cara-impor-data-barang-jasa-dari-excel';
import { ps031Data } from './pages/persediaan/generated/cara-membuat-gudang-baru';
import { ps032Data } from './pages/persediaan/generated/cara-membuat-gudang-barang-rusak';
import { ps033Data } from './pages/persediaan/generated/cara-mencatat-barang-rusak-atau-hilang-saat-kirim-antar-gudang';
import { ps034Data } from './pages/persediaan/generated/cara-kerja-pemilihan-gudang-secara-otomatis';
import { ps035Data } from './pages/persediaan/generated/cara-membuat-satuan-dan-multi-satuan-barang';
import { ps036Data } from './pages/persediaan/generated/cara-mengelompokkan-barang-dengan-fitur-kategori-barang';
import { ps037Data } from './pages/persediaan/generated/cara-menginput-banyak-kategori-barang-dari-excel';
import { ps038Data } from './pages/persediaan/generated/cara-menambahkan-brand-produk';
import { ps039Data } from './pages/persediaan/generated/cara-menginput-merek-atau-brand-pada-produk';
import { ps040Data } from './pages/persediaan/generated/cara-membuat-pemenuhan-pesanan';
import { ps041Data } from './pages/persediaan/generated/cara-mencatat-pengiriman-barang-ke-pelanggan';
import { ps042Data } from './pages/persediaan/generated/cara-cek-stok-barang-di-setiap-gudang';
import { ps043Data } from './pages/persediaan/generated/cara-mengisi-nomor-seri-barang';
import { ps044Data } from './pages/persediaan/generated/cara-membuat-penyelesaian-pesanan-dari-produksi';
import { ps045Data } from './pages/persediaan/generated/cara-menambah-stok-barang-jadi-dari-produksi';
import { ps046Data } from './pages/persediaan/generated/cara-menyelesaikan-pekerjaan-pesanan-ke-akun';
import { ps047Data } from './pages/persediaan/generated/cara-mencatat-penyelesaian-pesanan-multi-produk';
import { ps048Data } from './pages/persediaan/generated/cara-mengimpor-penyelesaian-pesanan';
import { ps049Data } from './pages/persediaan/generated/cara-mengatasi-error-bahan-baku';
import { ps050Data } from './pages/persediaan/generated/cara-menghitung-dan-menyesuaikan-stok-barang';
import { ps051Data } from './pages/persediaan/generated/mengatasi-error-tidak-bisa-hapus-perintah-stok-opname';
import { ps052Data } from './pages/persediaan/generated/cara-mengatasi-error-selisih-stok';
import { ps053Data } from './pages/persediaan/generated/penyebab-selisih-stok-opname';
import { ps054Data } from './pages/persediaan/generated/cara-mengatur-stok-minimum-barang';
import { ps055Data } from './pages/persediaan/generated/cara-membuat-pesanan-pembelian-dari-stok-minimum';
import { ps056Data } from './pages/persediaan/generated/cara-membuat-permintaan-barang-dari-stok-minimum';
import { ps057Data } from './pages/persediaan/generated/cara-menjadikan-aset-tetap-sebagai-stok-barang';
import { ps058Data } from './pages/persediaan/generated/cara-membeli-barang-saat-stok-mau-habis';
import { ps059Data } from './pages/persediaan/generated/cara-mencatat-produksi-vendor-atau-maklun';
import { ps060Data } from './pages/persediaan/generated/cara-mencatat-barang-sampel-dari-gudang';
import { ps061Data } from './pages/persediaan/generated/cara-menghitung-fifo-dan-average-di-accurate-online';
import { ps062Data } from './pages/persediaan/generated/cara-mencatat-barang-yang-hilang-saat-pengiriman';
import { ps063Data } from './pages/persediaan/generated/cara-menghitung-stok-yang-minus-dengan-metode-average';
import { ps064Data } from './pages/persediaan/generated/cara-menginput-saldo-awal-delivery-order';
import { ps065Data } from './pages/persediaan/generated/solusi-error-tidak-dapat-menghapus-penyesuaian-persediaan';
import { ps066Data } from './pages/persediaan/generated/cara-mengatasi-perintah-stok-opname-tidak-muncul';
import { ps067Data } from './pages/persediaan/generated/cara-mengatasi-error-pekerjaan-pesanan-tidak-dapat-diubah';
import { at001Data } from './pages/asset-tetap/generated/cara-mencatat-aset-perusahaan';
import { at002Data } from './pages/asset-tetap/generated/cara-mengimpor-aset-tetap-dari-excel';
import { at003Data } from './pages/asset-tetap/generated/cara-mencatat-pembelian-aset-tetap-melalui-pembayaran';
import { at004Data } from './pages/asset-tetap/generated/cara-mencatat-pembelian-aset-perusahaan-yang-belum-dibayar';
import { at005Data } from './pages/asset-tetap/generated/cara-mencatat-pembelian-aset-tetap-secara-tunai';
import { at006Data } from './pages/asset-tetap/generated/cara-menghapus-aset-tetap-006';
import { at007Data } from './pages/asset-tetap/generated/cara-mencatat-pembelian-aset-tetap-dengan-biaya-tambahan';
import { at008Data } from './pages/asset-tetap/generated/cara-mengatasi-penyusutan-aset-yang-tidak-jalan';
import { at009Data } from './pages/asset-tetap/generated/cara-mengelompokkan-aset-tetap';
import { at010Data } from './pages/asset-tetap/generated/cara-membuat-kategori-aset-tetap-pajak';
import { at011Data } from './pages/asset-tetap/generated/cara-melihat-laporan-penyusutan-aset-pajak';
import { at012Data } from './pages/asset-tetap/generated/fungsi-dan-manfaat-fitur-perubahan-aset-tetap';
import { at013Data } from './pages/asset-tetap/generated/cara-mengubah-data-aset-tetap';
import { at014Data } from './pages/asset-tetap/generated/cara-mengoreksi-nilai-aset-tetap';
import { at015Data } from './pages/asset-tetap/generated/cara-menghapus-aset-tetap-015';
import { at016Data } from './pages/asset-tetap/generated/cara-mengaktifkan-kembali-aset-tetap';
import { at017Data } from './pages/asset-tetap/generated/cara-memindahkan-aset-tetap';
import { at018Data } from './pages/asset-tetap/generated/cara-melihat-aset-tetap-berdasarkan-lokasi';
import { at019Data } from './pages/asset-tetap/generated/cara-mengubah-persediaan-menjadi-aset-tetap';
import { at020Data } from './pages/asset-tetap/generated/cara-mencatat-sewa-gedung-dibayar-dimuka';
import { at021Data } from './pages/asset-tetap/generated/cara-biaya-membangun-gedung-menjadi-aset';
import { mf001Data } from './pages/manufaktur/generated/cara-mengaktifkan-fitur-manufaktur';
import { mf002Data } from './pages/manufaktur/generated/cara-menentukan-hpp-produksi';
import { mf003Data } from './pages/manufaktur/generated/cara-mengaktifkan-produksi-tanpa-bahan-baku';
import { mf004Data } from './pages/manufaktur/generated/cara-upload-daftar-harga-bahan-baku';
import { mf005Data } from './pages/manufaktur/generated/cara-menentukan-bahan-baku-produksi';
import { mf006Data } from './pages/manufaktur/generated/cara-mencatat-produksi-dengan-multi-tahapan';
import { mf007Data } from './pages/manufaktur/generated/cara-mengatasi-error-harga-standar-harus-lebih-besar-dari-0';
import { mf008Data } from './pages/manufaktur/generated/cara-mengatasi-error-kualitas-produk-kedua';
import { mf009Data } from './pages/manufaktur/generated/cara-menyusun-rencana-produksi';
import { mf010Data } from './pages/manufaktur/generated/cara-produksi-barang-sesuai-pesanan-customer';
import { mf011Data } from './pages/manufaktur/generated/cara-mencatat-produksi-barang';
import { mf012Data } from './pages/manufaktur/generated/cara-mengatur-proses-produksi-bertahap';
import { mf013Data } from './pages/manufaktur/generated/cara-menghitung-progress-produksi';
import { mf014Data } from './pages/manufaktur/generated/cara-melihat-proses-akhir-bulan-pada-laporan-produksi';
import { mf015Data } from './pages/manufaktur/generated/cara-membuat-perintah-kerja-dari-rencana-produksi';
import { mf016Data } from './pages/manufaktur/generated/cara-menutup-perintah-kerja-yang-belum-selesai';
import { mf017Data } from './pages/manufaktur/generated/cara-mencatat-pengambilan-bahan-baku';
import { mf018Data } from './pages/manufaktur/generated/cara-mengeluarkan-bahan-baku-untuk-produksi';
import { mf019Data } from './pages/manufaktur/generated/mengatasi-error-perintah-kerja-belum-pengambilan-bahan-baku';
import { mf020Data } from './pages/manufaktur/generated/cara-impor-bahan-baku-perintah-kerja-dari-excel';
import { mf021Data } from './pages/manufaktur/generated/cara-membatasi-pengambilan-bahan-baku';
import { mf022Data } from './pages/manufaktur/generated/cara-mengatasi-error-akun-biaya-sama-dengan-akun-persediaan';
import { mf023Data } from './pages/manufaktur/generated/cara-membuat-persiapan-bahan-baku';
import { mf024Data } from './pages/manufaktur/generated/cara-mencatat-proses-produksi';
import { mf025Data } from './pages/manufaktur/generated/cara-mencatat-hasil-produksi';
import { mf026Data } from './pages/manufaktur/generated/cara-membatasi-user-proses-produksi';
import { mf027Data } from './pages/manufaktur/generated/cara-memasukkan-biaya-produksi';
import { mf028Data } from './pages/manufaktur/generated/cara-mengatasi-error-alokasi-biaya-produksi-sudah-ada';
import { mf029Data } from './pages/manufaktur/generated/cara-melihat-jadwal-produksi';
import { mf030Data } from './pages/manufaktur/generated/cara-mengecek-ketersediaan-bahan-baku-produksi';
import { mf031Data } from './pages/manufaktur/generated/cara-membuat-pesanan-pembelian-bahan-baku';
import { mf032Data } from './pages/manufaktur/generated/cara-cek-progres-produksi';
import { mf033Data } from './pages/manufaktur/generated/cara-melihat-riwayat-produksi-barang';
import { mf034Data } from './pages/manufaktur/generated/cara-membuat-proses-produksi-bertahap';
import { mf035Data } from './pages/manufaktur/generated/cara-menambahkan-penanggung-jawab-produksi';
import { mf036Data } from './pages/manufaktur/generated/cara-mencatat-biaya-produksi-dari-vendor';
import { mf037Data } from './pages/manufaktur/generated/cara-menghitung-nilai-variance-biaya-produksi';
import { mf038Data } from './pages/manufaktur/generated/cara-menghitung-selisih-biaya-produksi';
import { mf039Data } from './pages/manufaktur/generated/menghitung-variance-yang-tidak-dialokasikan-ke-produk';
import { mf040Data } from './pages/manufaktur/generated/cara-membaca-laporan-hpp-produksi';
import { kt001Data } from './pages/kontraktor/generated/cara-membuat-rencana-anggaran';
import { kt002Data } from './pages/kontraktor/generated/cara-menggunakan-fitur-bahan-baku-terpakai';
import { kt003Data } from './pages/kontraktor/generated/cara-membuat-survey-proyek';
import { kt004Data } from './pages/kontraktor/generated/cara-membuat-penyelesaian-proyek';
import { kt005Data } from './pages/kontraktor/generated/cara-melihat-monitoring-kontraktor';
import { kt006Data } from './pages/kontraktor/generated/cara-melihat-timeline-kontraktor';
import { kt007Data } from './pages/kontraktor/generated/cara-mencatat-alokasi-bahan-proyek';
import { kt008Data } from './pages/kontraktor/generated/cara-membuat-proyek-kontraktor';
import { kt009Data } from './pages/kontraktor/generated/cara-install-dan-setup-proyek-kontraktor';
import { kt010Data } from './pages/kontraktor/generated/cara-melihat-laporan-proyek-kontraktor';
import { kt011Data } from './pages/kontraktor/generated/cara-membuat-formula-pekerjaan-dan-biaya-proyek';
import { st001Data } from './pages/smartlink-tax/generated/cara-lapor-ppn-dari-accurate';
import { st002Data } from './pages/smartlink-tax/generated/cara-beralih-ke-e-faktur-ctas';
import { st003Data } from './pages/smartlink-tax/generated/cara-kirim-faktur-pajak-ke-customer';
import { lp001Data } from './pages/laporan/generated/cara-melihat-laporan';
import { lp002Data } from './pages/laporan/generated/cara-membuat-laporan-penjualan-per-kategori';
import { lp003Data } from './pages/laporan/generated/cara-menyimpan-format-laporan';
import { lp004Data } from './pages/laporan/generated/cara-cek-sisa-pinjaman-karyawan';
import { lp005Data } from './pages/laporan/generated/cara-melihat-laba-bersih-setelah-pajak';
import { lp006Data } from './pages/laporan/generated/cara-melihat-barang-yang-belum-diproses-di-delivery-order';
import { lp007Data } from './pages/laporan/generated/cara-cek-pesanan-pelanggan-yang-belum-diproses';
import { lp008Data } from './pages/laporan/generated/cara-mengatasi-selisih-penjualan-laba-rugi';
import { lp009Data } from './pages/laporan/generated/cara-menampilkan-tanggal-jatuh-tempo';
import { lp010Data } from './pages/laporan/generated/cara-melihat-daftar-utang-dan-piutang-yang-belum-lunas';
import { lp011Data } from './pages/laporan/generated/cara-melihat-kekayaan-bersih-perusahaan';
import { lp012Data } from './pages/laporan/generated/cara-melihat-total-transaksi-penjualan';
import { lp013Data } from './pages/laporan/generated/cara-melihat-keuntungan-tiap-barang';
import { lp014Data } from './pages/laporan/generated/cara-melihat-asal-nilai-laba-tahun-ini';
import { lp015Data } from './pages/laporan/generated/cara-melihat-sisa-pesanan-pembelian-belum-diterima';
import { lp016Data } from './pages/laporan/generated/cara-melihat-perubahan-stok-barang-setelah-koreksi';
import { lp017Data } from './pages/laporan/generated/cara-mengatasi-laporan-pdf-terpotong';
import { lp018Data } from './pages/laporan/generated/cara-melihat-piutang-yang-sudah-jatuh-tempo';
import { lp019Data } from './pages/laporan/generated/pengaruh-stok-minus-terhadap-persediaan-dan-bpp';
import { lp020Data } from './pages/laporan/generated/cara-mengetahui-lama-pembayaran-pelanggan';
import { lp021Data } from './pages/laporan/generated/cara-melihat-penjualan-terbesar';
import { lp022Data } from './pages/laporan/generated/cara-memberikan-nomor-urut-di-laporan';
import { lp023Data } from './pages/laporan/generated/cara-melihat-stok-barang-box-dan-pcs';
import { lp024Data } from './pages/laporan/generated/penyebab-total-laporan-laba-rugi-proyek-berbeda';
import { lp025Data } from './pages/laporan/generated/cara-melihat-jeda-pembayaran-faktur-pembelian';
import { lp026Data } from './pages/laporan/generated/cara-melihat-tagihan-pelanggan-per-departemen';
import { lp027Data } from './pages/laporan/generated/cara-melihat-keuntungan-setiap-produk';
import { lp028Data } from './pages/laporan/generated/cara-mengatasi-pesan-error-skrip-kolom-tidak-valid';
import { lp029Data } from './pages/laporan/generated/cara-membuat-kolom-tanda-tangan-di-laporan';
import { lp030Data } from './pages/laporan/generated/cara-mengubah-format-laporan-keuangan';
import { lp031Data } from './pages/laporan/generated/cara-melihat-harga-bersih-penjualan';
import { lp032Data } from './pages/laporan/generated/cara-melihat-total-nilai-stok-per-kategori-barang';
import { lp033Data } from './pages/laporan/generated/cara-mengubah-kts-belum-terproses-menjadi-0';
import { lp034Data } from './pages/laporan/generated/cara-cek-piutang-pelanggan';
import { lp035Data } from './pages/laporan/generated/cara-melihat-permintaan-barang-belum-diproses-per-kategori';
import { lp036Data } from './pages/laporan/generated/cara-cek-barang-yang-dibeli-dari-setiap-supplier';
import { lp037Data } from './pages/laporan/generated/cara-membuat-format-tanggal-laporan-menjadi-dd-mm-yyyy';
import { lp038Data } from './pages/laporan/generated/cara-membuat-laporan-spt-masa-ppn';
import { lp039Data } from './pages/laporan/generated/cara-membuat-formulir-1721-i-bulanan';
import { lp040Data } from './pages/laporan/generated/cara-membuat-bukti-potong-pajak-karyawan-1721-a1';
import { lp041Data } from './pages/laporan/generated/cara-membuat-spt-pph-21';
import { lp042Data } from './pages/laporan/generated/cara-membuat-bukti-potong-pajak-karyawan';
import { lp043Data } from './pages/laporan/generated/cara-ekspor-data-pph-23-ke-epph-2326-dan-epph-1771';
import { lp044Data } from './pages/laporan/generated/cara-membuat-bukti-potong-pajak-pph-23';
import { lp045Data } from './pages/laporan/generated/cara-cetak-bukti-potong-pph-15-dan-spt-pph-15';

const articleDataMap: Record<string, ArticleData> = {
  // 01 Pesanan
  'po-create': caraOrderBarangKeSupplierData,
  'po-dp': caraMencatatDpKeSupplierData,
  'po-cancel': caraMembatalkanPesananData,
  'po-so': orderDariPesananPelangganData,
  'po-excel': inputPembelianDariExcelData,
  'po-import': inputPembelianDariExcelData,
  'po-valas': inputPembelianLuarNegeriExcelData,
  'po-pr': pesananDariPermintaanBarangData,
  'po-delete-batch': hapusBanyakPesananSekaligusData,
  'po-delete': hapusBanyakPesananSekaligusData,

  // 02 Penerimaan
  'art1': articleManual,
  'art2': articlePO,
  'art3': articleErrorZero,

  // 03 Faktur
  'faktur-create': caraMembuatFakturPembelianData,
  'faktur-po': prosesPoMenjadiTagihanSupplierData,
  'faktur-sebelum-datang': invoiceSupplierSebelumBarangDatangData,
  'faktur-beban-cost': bebanPembelianKeCostPersediaanData,
  'faktur-cost-persediaan': bebanPembelianKeCostPersediaanData,
  'faktur-terima': invoiceDariBarangSudahDiterimaData,
  'faktur-tagihan-sebelum-terima': tagihanSupplierSebelumBarangDiterimaData,
  'faktur-dimuka': tagihanSupplierSebelumBarangDiterimaData,
  'faktur-error-update-cost': errorTidakDapatMemperbaruiBiayaData,
  'faktur-error-biaya': errorTidakDapatMemperbaruiBiayaData,
  'faktur-pajak-renovasi': pajakJasaRenovasiPeroranganData,
  'faktur-ongkir-hpp': biayaOngkirForwarderKeHppData,
  'faktur-diskon-jurnal': diskonTidakMunculDiJurnalData,
  'faktur-upload-excel': uploadFakturPembelianDariExcelData,
  'faktur-potong-dp': potongFakturDenganUangMukaData,
  'faktur-akun-pembulatan': errorAkunPembulatanBelumDiisiData,
  'faktur-error-pembulatan': errorAkunPembulatanBelumDiisiData,
  'faktur-kurangi-tagihan': kurangiTagihanPotonganSupplierData,
  'faktur-potongan-supplier': kurangiTagihanPotonganSupplierData,

  // 04 Lainnya / Pembayaran
  'art-beli-lain': caraMencatatPembelianDilunasiPihakLainData,
  'art-beli-lebih': caraMencatatKelebihanPembayaranPembelianData,
  'art-beli-pembulatan': errorAkunPembulatanBelumDiisiData,

  // 05 Retur Pembelian
  'rp-001': rp001Data,
  'rp-002': rp002Data,
  'rp-003': rp003Data,
  'rp-004': rp004Data,
  'rp-005': rp005Data,
  'rp-006': rp006Data,
  'rp-007': rp007Data,

  // Penjualan: 01 Penawaran Penjualan
  'penawaran-create': caraMembuatPenawaranHargaData,
  'penawaran-pkp-biaya': penawaranPenjualanPkpDanBiayaData,
  'impor-penawaran-penjualan-excel-ke-accurate': caraImporPenawaranPenjualanExcelKeAccurateOnlineData,

  // Penjualan: 02 Pesanan Penjualan
  'so-create': caraMembuatPesananPenjualanData,
  'pesanan-penjualan-create': caraMembuatPesananPenjualanData,
  'so-dp': pesananPenjualanDenganDownPaymentData,
  'pesanan-penjualan-dp': pesananPenjualanDenganDownPaymentData,
  'so-dari-penawaran': pesananPenjualanDariPenawaranData,
  'pesanan-penjualan-dari-penawaran': pesananPenjualanDariPenawaranData,

  // Dashboard
  'dash-arus-kas': dasborArusKasData,
  'dash-beban': dasborBebanData,
  'dash-faktur-terlewat': dasborFakturTerlewatData,
  'dash-kas-bank': dasborKasBankData,
  'dash-laba-rugi': dasborLabaRugiData,
  'dash-piutang': dasborPiutangData,
  'dash-penjualan': dasborPenjualanData,
  'dash-permintaan-barang': dasborPermintaanBarangData,
  'dash-pesanan-penjualan': dasborPesananPenjualanData,
  'dash-monitoring-hpp': dasborMonitoringHppData,
  'dash-laba-cabang': dasborLabaCabangData,

  // Pengaturan: Preferensi
  'pref-buka': preferensiBukaData,
  'pref-perusahaan': preferensiDataPerusahaanData,
  'pref-fitur': preferensiFiturData,
  'pref-pajak': preferensiPajakData,
  'pref-penjualan': preferensiPenjualanData,
  'pref-pembelian': preferensiPembelianData,
  'pref-akses': preferensiAksesData,
  'pref-persetujuan': preferensiPersetujuanData,
  'pref-atribut': preferensiAtributData,
  'pref-akun-default': preferensiAkunDefaultData,
  'pref-lain': preferensiLainLainData,
  'pref-efaktur-cabang': preferensiEfakturCabangData,
  'pref-po-autoclose': preferensiPoAutocloseData,
  'pref-pelanggan-ppn': preferensiPelangganPpnData,
  'pref-error-selisih': preferensiErrorSelisihData,
  'pref-kategori-keuangan': preferensiKategoriKeuanganData,
  'pref-error-tanggal': preferensiErrorTanggalData,

  // Akses Grup
  'ag-hak-akses': aksesGrupHakAksesData,
  'ag-batas-anggaran': aksesGrupBatasAnggaranData,
  'ag-menu-tidak-tampil': aksesGrupMenuTidakTampilData,
  'ag-akses-dibatasi': aksesGrupDibatasiData,
  'ag-error-bayar-beban': aksesGrupBayarBebanData,
  'ag-penangguhan': aksesGrupPenangguhanData,
  'ag-pemindahan-barang': aksesGrupPemindahanBarangData,
  'ag-harga-standar': aksesGrupHargaStandarData,
  'ag-min-jual-beli': aksesGrupMinJualBeliData,
  'ag-checkin': aksesGrupCheckinData,
  'ag-bahan-baku': aksesGrupBahanBakuData,

  // Pengguna & Penomoran
  'user-tambah': penggunaTambahKaryawanData,
  'nomor-otomatis': penomoranOtomatisData,
  'nomor-romawi': penomoranBulanRomawiData,
  'nomor-counter': penomoranCounterData,
  'cetak-01': cetak01Data,
  'cetak-02': cetak02Data,
  'cetak-03': cetak03Data,
  'cetak-04': cetak04Data,
  'cetak-05': cetak05Data,
  'cetak-06': cetak06Data,
  'cetak-07': cetak07Data,
  'cetak-08': cetak08Data,
  'cetak-09': cetak09Data,
  'cetak-10': cetak10Data,
  'cetak-11': cetak11Data,
  'cetak-12': cetak12Data,
  'cetak-13': cetak13Data,
  'cetak-14': cetak14Data,
  'cetak-15': cetak15Data,
  'cetak-16': cetak16Data,
  'cetak-17': cetak17Data,
  'cetak-18': cetak18Data,
  'cetak-19': cetak19Data,
  'cetak-20': cetak20Data,
  'cetak-21': cetak21Data,
  'cetak-22': cetak22Data,
  'cetak-23': cetak23Data,
  'cetak-24': cetak24Data,
  'cetak-25': cetak25Data,
  'cetak-26': cetak26Data,
  'cetak-27': cetak27Data,
  'cetak-28': cetak28Data,
  'cetak-29': cetak29Data,
  'cetak-30': cetak30Data,
  'cetak-31': cetak31Data,
  'cetak-32': cetak32Data,
  'cetak-33': cetak33Data,
  'cetak-34': cetak34Data,
  'cetak-35': cetak35Data,
  'cetak-36': cetak36Data,
  'cetak-37': cetak37Data,
  'cetak-38': cetak38Data,
  'cetak-39': cetak39Data,
  'cetak-40': cetak40Data,
  'setuju-approval': penyetujuApprovalData,
  'per-01': per01Data,
  'per-02': per02Data,
  'per-03': per03Data,
  'per-04': per04Data,
  'per-05': per05Data,
  'per-06': per06Data,
  'per-07': per07Data,
  'per-08': per08Data,
  'per-09': per09Data,
  'per-10': per10Data,
  'per-11': per11Data,
  'per-12': per12Data,
  'per-13': per13Data,
  'per-14': per14Data,
  'per-15': per15Data,
  'per-16': per16Data,
  'per-17': per17Data,
  'per-18': per18Data,
  'per-19': per19Data,
  'per-20': per20Data,
  'per-21': per21Data,
  'per-22': per22Data,
  'per-23': per23Data,
  'per-24': per24Data,
  'per-25': per25Data,
  'per-26': per26Data,
  'per-27': per27Data,
  'per-28': per28Data,
  'per-29': per29Data,
  'per-30': per30Data,
  'bb-01': bb01Data,
  'bb-02': bb02Data,
  'bb-03': bb03Data,
  'bb-04': bb04Data,
  'bb-05': bb05Data,
  'bb-06': bb06Data,
  'bb-07': bb07Data,
  'bb-08': bb08Data,
  'bb-09': bb09Data,
  'bb-10': bb10Data,
  'bb-11': bb11Data,
  'bb-12': bb12Data,
  'bb-13': bb13Data,
  'bb-14': bb14Data,
  'bb-15': bb15Data,
  'bb-16': bb16Data,
  'bb-17': bb17Data,
  'bb-18': bb18Data,
  'bb-19': bb19Data,
  'bb-20': bb20Data,
  'bb-21': bb21Data,
  'bb-22': bb22Data,
  'bb-23': bb23Data,
  'bb-24': bb24Data,
  'bb-25': bb25Data,
  'bb-26': bb26Data,
  'bb-27': bb27Data,
  'bb-28': bb28Data,
  'bb-29': bb29Data,
  'bb-30': bb30Data,
  'bb-31': bb31Data,
  'kb-01': kb01Data,
  'kb-02': kb02Data,
  'kb-03': kb03Data,
  'kb-04': kb04Data,
  'kb-05': kb05Data,
  'kb-06': kb06Data,
  'kb-07': kb07Data,
  'kb-08': kb08Data,
  'kb-09': kb09Data,
  'kb-10': kb10Data,
  'kb-11': kb11Data,
  'kb-12': kb12Data,
  'kb-13': kb13Data,
  'kb-14': kb14Data,
  'kb-15': kb15Data,
  'kb-16': kb16Data,
  'kb-17': kb17Data,
  'kb-18': kb18Data,
  'kb-19': kb19Data,
  'kb-20': kb20Data,
  'kb-21': kb21Data,
  'kb-22': kb22Data,
  'kb-23': kb23Data,
  'kb-24': kb24Data,
  'kb-25': kb25Data,
  'kb-26': kb26Data,
  'kb-27': kb27Data,
  'kb-28': kb28Data,
  'kb-29': kb29Data,
  'kb-30': kb30Data,
  'kb-31': kb31Data,
  'kb-32': kb32Data,
  'kb-33': kb33Data,
  'kb-34': kb34Data,
  'pn-001': pn001Data,
  'pn-002': pn002Data,
  'pn-003': pn003Data,
  'pn-004': pn004Data,
  'pn-005': pn005Data,
  'pn-006': pn006Data,
  'pn-007': pn007Data,
  'pn-008': pn008Data,
  'pn-009': pn009Data,
  'pn-010': pn010Data,
  'pn-011': pn011Data,
  'pn-012': pn012Data,
  'pn-013': pn013Data,
  'pn-014': pn014Data,
  'pn-015': pn015Data,
  'pn-016': pn016Data,
  'pn-017': pn017Data,
  'pn-018': pn018Data,
  'pn-019': pn019Data,
  'pn-020': pn020Data,
  'pn-021': pn021Data,
  'pn-022': pn022Data,
  'pn-023': pn023Data,
  'pn-024': pn024Data,
  'pn-025': pn025Data,
  'pn-026': pn026Data,
  'pn-027': pn027Data,
  'pn-028': pn028Data,
  'pn-029': pn029Data,
  'pn-030': pn030Data,
  'pn-031': pn031Data,
  'pn-032': pn032Data,
  'pn-033': pn033Data,
  'pn-034': pn034Data,
  'pn-035': pn035Data,
  'pn-036': pn036Data,
  'pn-037': pn037Data,
  'pn-038': pn038Data,
  'pn-039': pn039Data,
  'pn-040': pn040Data,
  'pn-041': pn041Data,
  'pn-042': pn042Data,
  'pn-043': pn043Data,
  'pn-044': pn044Data,
  'pn-045': pn045Data,
  'pn-046': pn046Data,
  'pn-047': pn047Data,
  'pn-048': pn048Data,
  'pn-049': pn049Data,
  'pn-050': pn050Data,
  'pn-051': pn051Data,
  'pn-052': pn052Data,
  'pn-053': pn053Data,
  'pn-054': pn054Data,
  'pn-055': pn055Data,
  'pn-056': pn056Data,
  'pn-057': pn057Data,
  'pn-058': pn058Data,
  'pn-059': pn059Data,
  'pn-060': pn060Data,
  'pn-061': pn061Data,
  'pn-062': pn062Data,
  'pn-063': pn063Data,
  'pn-064': pn064Data,
  'pn-065': pn065Data,
  'pn-066': pn066Data,
  'pn-067': pn067Data,
  'pn-068': pn068Data,
  'pn-069': pn069Data,
  'pn-070': pn070Data,
  'pn-071': pn071Data,
  'pn-072': pn072Data,
  'pn-073': pn073Data,
  'pn-074': pn074Data,
  'pn-075': pn075Data,
  'pn-076': pn076Data,
  'pn-077': pn077Data,
  'pn-078': pn078Data,
  'pn-079': pn079Data,
  'pn-080': pn080Data,
  'pn-081': pn081Data,
  'pn-082': pn082Data,
  'pn-083': pn083Data,
  'pn-084': pn084Data,
  'pn-085': pn085Data,
  'pn-086': pn086Data,
  'pn-087': pn087Data,
  'pn-088': pn088Data,
  'pn-089': pn089Data,
  'pn-090': pn090Data,
  'pn-091': pn091Data,
  'pn-092': pn092Data,
  'pn-093': pn093Data,
  'pn-094': pn094Data,
  'pn-095': pn095Data,
  'pn-096': pn096Data,
  'pn-097': pn097Data,
  'pn-098': pn098Data,
  'pn-099': pn099Data,
  'pn-100': pn100Data,
  'pn-101': pn101Data,
  'pn-102': pn102Data,
  'pn-103': pn103Data,
  'pn-104': pn104Data,
  'pn-105': pn105Data,
  'pn-106': pn106Data,
  'pn-107': pn107Data,
  'pn-108': pn108Data,
  'pn-109': pn109Data,
  'pn-110': pn110Data,
  'pn-111': pn111Data,
  'pn-112': pn112Data,
  'pn-113': pn113Data,
  'pn-114': pn114Data,
  'pn-115': pn115Data,
  'pn-116': pn116Data,
  'pn-117': pn117Data,
  'pn-118': pn118Data,
  'pn-119': pn119Data,
  'pn-120': pn120Data,
  'ps-001': ps001Data,
  'ps-002': ps002Data,
  'ps-003': ps003Data,
  'ps-004': ps004Data,
  'ps-005': ps005Data,
  'ps-006': ps006Data,
  'ps-007': ps007Data,
  'ps-008': ps008Data,
  'ps-009': ps009Data,
  'ps-010': ps010Data,
  'ps-011': ps011Data,
  'ps-012': ps012Data,
  'ps-013': ps013Data,
  'ps-014': ps014Data,
  'ps-015': ps015Data,
  'ps-016': ps016Data,
  'ps-017': ps017Data,
  'ps-018': ps018Data,
  'ps-019': ps019Data,
  'ps-020': ps020Data,
  'ps-021': ps021Data,
  'ps-022': ps022Data,
  'ps-023': ps023Data,
  'ps-024': ps024Data,
  'ps-025': ps025Data,
  'ps-026': ps026Data,
  'ps-027': ps027Data,
  'ps-028': ps028Data,
  'ps-029': ps029Data,
  'ps-030': ps030Data,
  'ps-031': ps031Data,
  'ps-032': ps032Data,
  'ps-033': ps033Data,
  'ps-034': ps034Data,
  'ps-035': ps035Data,
  'ps-036': ps036Data,
  'ps-037': ps037Data,
  'ps-038': ps038Data,
  'ps-039': ps039Data,
  'ps-040': ps040Data,
  'ps-041': ps041Data,
  'ps-042': ps042Data,
  'ps-043': ps043Data,
  'ps-044': ps044Data,
  'ps-045': ps045Data,
  'ps-046': ps046Data,
  'ps-047': ps047Data,
  'ps-048': ps048Data,
  'ps-049': ps049Data,
  'ps-050': ps050Data,
  'ps-051': ps051Data,
  'ps-052': ps052Data,
  'ps-053': ps053Data,
  'ps-054': ps054Data,
  'ps-055': ps055Data,
  'ps-056': ps056Data,
  'ps-057': ps057Data,
  'ps-058': ps058Data,
  'ps-059': ps059Data,
  'ps-060': ps060Data,
  'ps-061': ps061Data,
  'ps-062': ps062Data,
  'ps-063': ps063Data,
  'ps-064': ps064Data,
  'ps-065': ps065Data,
  'ps-066': ps066Data,
  'ps-067': ps067Data,
  'at-001': at001Data,
  'at-002': at002Data,
  'at-003': at003Data,
  'at-004': at004Data,
  'at-005': at005Data,
  'at-006': at006Data,
  'at-007': at007Data,
  'at-008': at008Data,
  'at-009': at009Data,
  'at-010': at010Data,
  'at-011': at011Data,
  'at-012': at012Data,
  'at-013': at013Data,
  'at-014': at014Data,
  'at-015': at015Data,
  'at-016': at016Data,
  'at-017': at017Data,
  'at-018': at018Data,
  'at-019': at019Data,
  'at-020': at020Data,
  'at-021': at021Data,
  'mf-001': mf001Data,
  'mf-002': mf002Data,
  'mf-003': mf003Data,
  'mf-004': mf004Data,
  'mf-005': mf005Data,
  'mf-006': mf006Data,
  'mf-007': mf007Data,
  'mf-008': mf008Data,
  'mf-009': mf009Data,
  'mf-010': mf010Data,
  'mf-011': mf011Data,
  'mf-012': mf012Data,
  'mf-013': mf013Data,
  'mf-014': mf014Data,
  'mf-015': mf015Data,
  'mf-016': mf016Data,
  'mf-017': mf017Data,
  'mf-018': mf018Data,
  'mf-019': mf019Data,
  'mf-020': mf020Data,
  'mf-021': mf021Data,
  'mf-022': mf022Data,
  'mf-023': mf023Data,
  'mf-024': mf024Data,
  'mf-025': mf025Data,
  'mf-026': mf026Data,
  'mf-027': mf027Data,
  'mf-028': mf028Data,
  'mf-029': mf029Data,
  'mf-030': mf030Data,
  'mf-031': mf031Data,
  'mf-032': mf032Data,
  'mf-033': mf033Data,
  'mf-034': mf034Data,
  'mf-035': mf035Data,
  'mf-036': mf036Data,
  'mf-037': mf037Data,
  'mf-038': mf038Data,
  'mf-039': mf039Data,
  'mf-040': mf040Data,
  'kt-001': kt001Data,
  'kt-002': kt002Data,
  'kt-003': kt003Data,
  'kt-004': kt004Data,
  'kt-005': kt005Data,
  'kt-006': kt006Data,
  'kt-007': kt007Data,
  'kt-008': kt008Data,
  'kt-009': kt009Data,
  'kt-010': kt010Data,
  'kt-011': kt011Data,
  'st-001': st001Data,
  'st-002': st002Data,
  'st-003': st003Data,
  'lp-001': lp001Data,
  'lp-002': lp002Data,
  'lp-003': lp003Data,
  'lp-004': lp004Data,
  'lp-005': lp005Data,
  'lp-006': lp006Data,
  'lp-007': lp007Data,
  'lp-008': lp008Data,
  'lp-009': lp009Data,
  'lp-010': lp010Data,
  'lp-011': lp011Data,
  'lp-012': lp012Data,
  'lp-013': lp013Data,
  'lp-014': lp014Data,
  'lp-015': lp015Data,
  'lp-016': lp016Data,
  'lp-017': lp017Data,
  'lp-018': lp018Data,
  'lp-019': lp019Data,
  'lp-020': lp020Data,
  'lp-021': lp021Data,
  'lp-022': lp022Data,
  'lp-023': lp023Data,
  'lp-024': lp024Data,
  'lp-025': lp025Data,
  'lp-026': lp026Data,
  'lp-027': lp027Data,
  'lp-028': lp028Data,
  'lp-029': lp029Data,
  'lp-030': lp030Data,
  'lp-031': lp031Data,
  'lp-032': lp032Data,
  'lp-033': lp033Data,
  'lp-034': lp034Data,
  'lp-035': lp035Data,
  'lp-036': lp036Data,
  'lp-037': lp037Data,
  'lp-038': lp038Data,
  'lp-039': lp039Data,
  'lp-040': lp040Data,
  'lp-041': lp041Data,
  'lp-042': lp042Data,
  'lp-043': lp043Data,
  'lp-044': lp044Data,
  'lp-045': lp045Data,
};

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('index');
  const [currentModule, setCurrentModule] = useState('CashFlow Online');
  const [searchQuery, setSearchQuery] = useState('');
  const [showProdukDropdown, setShowProdukDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem('cashflow_docs_theme') === 'dark';
  });

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      localStorage.setItem('cashflow_docs_theme', next ? 'dark' : 'light');
      return next;
    });
  };

  // Accordion state
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    fitur: true,
    pembelian: true,
    pesanan: true,
    penerimaan: true,
    faktur: true,
    memulai: false,
    store: false,
    dashboard: false,
    pengaturan: false,
    perusahaan: false,
    bukubesar: false,
    kasbank: false,
    penjualan: false,
    penawaranPenjualan: false,
    pesananPenjualan: false,
    persediaan: false,
    assetTetap: false,
    manufaktur: false,
    kontraktor: false,
    smartlinkTax: false,
    laporan: false,
    insight: false,
  });

  const toggleCategory = (cat: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [cat]: !prev[cat]
    }));
  };

  const handleSelectModule = (modName: string) => {
    setCurrentModule(modName);
    setActiveTab('index');
  };

  // Dynamic breadcrumbs mirroring Accurate Online
  const getBreadcrumbs = () => {
    const crumbs: { label: string; action?: () => void }[] = [
      { label: 'Home', action: () => { setCurrentModule('CashFlow Online'); setActiveTab('index'); } },
      { label: 'CashFlow Online', action: () => { setCurrentModule('CashFlow Online'); setActiveTab('index'); } }
    ];

    if (currentModule === 'Memulai CashFlow Online' || currentModule === 'Pendaftaran Akun' || currentModule === 'Setup Awal Perusahaan' || currentModule === 'Area Penagihan' || currentModule === 'Navigasi Umum') {
      crumbs.push({ label: 'Memulai CashFlow Online', action: () => { setCurrentModule('Memulai CashFlow Online'); setActiveTab('index'); } });
      if (currentModule !== 'Memulai CashFlow Online') {
        crumbs.push({ label: currentModule });
      }
    } else if (currentModule === 'CashFlow Store' || currentModule === 'Aplikasi Kasir POS' || currentModule === 'Integrasi Bank & Payment' || currentModule === 'Integrasi E-Commerce') {
      crumbs.push({ label: 'CashFlow Store', action: () => { setCurrentModule('CashFlow Store'); setActiveTab('index'); } });
      if (currentModule !== 'CashFlow Store') {
        crumbs.push({ label: currentModule });
      }
    } else if (currentModule === 'CashFlow Insight') {
      crumbs.push({ label: 'CashFlow Insight' });
    } else if (currentModule !== 'CashFlow Online') {
      crumbs.push({ label: 'Fitur CashFlow Online', action: () => { setCurrentModule('Fitur CashFlow Online'); setActiveTab('index'); } });
      
      const pembelianModules = ['Pembelian', 'Permintaan Pembelian', 'Pesanan Pembelian', 'Penerimaan Barang', 'Uang Muka Pembelian', 'Faktur Pembelian', 'Pembayaran Pembelian', 'Retur Pembelian', 'Harga Pemasok', 'Klaim Pemasok', 'Kategori Pemasok', 'Pemasok', 'Perintah Pembayaran', 'Transfer Pemasok'];
      const penjualanModules = ['Penjualan', 'Penawaran Penjualan', 'Pesanan Penjualan', 'Pengiriman Pesanan', 'Uang Muka Penjualan', 'Faktur Penjualan', 'Penerimaan Penjualan', 'Retur Penjualan', 'Tukar Faktur', 'Klaim Pelanggan', 'Pengepakan Barang', 'Kategori Pelanggan', 'Kategori Penjualan', 'Pelanggan', 'Penyesuaian Harga atau Diskon', 'Komisi Penjualan', 'Target Penjualan', 'SmartLink E-Commerce', 'Checkin', 'Trade Portal (Beta)'];
      const persediaanModules = ['Persediaan', 'Permintaan Barang', 'Pemindahan Barang', 'Penyesuaian Persediaan', 'Pekerjaan Pesanan', 'Hasil Stok Opname', 'Penambahan Bahan Baku', 'Barang dan Jasa', 'Gudang', 'Satuan barang', 'Kategori Barang', 'Merek Barang', 'Pemenuhan Pesanan', 'Barang Per Gudang', 'Pengisian Nomor Seri', 'Penyelesaian Pesanan', 'Perintah Stok Opname', 'Barang Stok Minimum'];
      const assetModules = ['Asset Tetap', 'Aset Tetap', 'Kategori Aset Tetap', 'Kategori Aset Tetap Pajak', 'Perubahan Aset Tetap', 'Disposisi Aset Tetap', 'Pindah Aset Tetap', 'Aset Per Lokasi'];
      const manufakturModules = ['Manufaktur', 'Onboarding Manufaktur', 'Standar Biaya Produksi', 'Formula Produksi', 'Rencana Produksi', 'Perintah Kerja', 'Pengambilan Bahan Baku', 'Persiapan Bahan Baku', 'Tahapan Proses', 'Penyelesaian Barang Jadi', 'Alokasi Biaya Produksi', 'Jadwal Produksi', 'Pemenuhan Bahan Baku', 'Monitor Perintah Kerja', 'Histori Perintah Kerja', 'Tahapan Produksi', 'Penanggung Jawab', 'Subkon Biaya Produksi', 'Perhitungan Nilai Variance'];
      const kontraktorModules = ['Proyek Kontraktor', 'Rencana Anggaran', 'Bahan Baku Terpakai', 'Survey Proyek', 'Penyelesaian Proyek', 'Monitoring Kontraktor', 'Timeline Kontraktor', 'Alokasi Bahan Proyek'];
      const taxModules = ['Smartlink Tax', 'E-Faktur Legacy', 'E-Faktur CTAS', 'E-mail Faktur Pajak'];
      const laporanModules = ['Laporan', 'Daftar Laporan', 'SPT Masa PPN / PPN Bm', 'Formulir 1721', 'Formulir 1721 A1', 'Formulir SPT PPh PS.21', 'Bukti Potong PPh PS.21', 'ePPh 2326 dan ePPh 1771', 'SPT PPh Ps. 23', 'SPT PPh Ps. 15'];
      const dashboardModules = ['Dashboard', 'Cara melihat arus kas (cash flow) di dashboard', 'Cara melihat beban perusahaan di dashboard', 'Cara melihat faktur yang belum dibayar di dashboard', 'Cara melihat saldo kas & bank di dashboard', 'Cara melihat laba rugi bisnis di dashboard', 'Cara melihat pelanggan yang masih berutang di dashboard', 'Cara melihat aktivitas penjualan di dashboard', 'Cara memantau permintaan barang antar cabang di dashboard', 'Cara melihat pesanan penjualan di dashboard', 'Cara melihat HPP dan margin keuntungan barang di dashboard', 'Cara melihat laba setiap cabang dari dashboard'];
      const pengaturanModules = ['Pengaturan', 'Preferensi', 'Akses Grup', 'Pengguna', 'Penomoran', 'Desain Cetakan', 'Penyetuju Transaksi'];
      const perusahaanModules = ['Perusahaan', 'Mata Uang', 'Cabang', 'Pajak', 'Syarat Pembayaran', 'Pengiriman', 'FOB', 'Gaji dan Tunjangan', 'Karyawan', 'Transaksi Berulang', 'Proses Akhir Bulan', 'Kontak', 'Transaksi Favorit', 'Approval', 'Kalender', 'Log Aktivitas', 'Cara membuat departemen dan proyek'];
      const bukubesarModules = ['Buku Besar', 'Akun Perkiraan', 'Pencatatan Beban', 'Pencatatan Gaji', 'Jurnal Umum', 'Monitor Anggaran', 'Transfer Anggaran', 'Anggaran', 'Histori Akun', 'Log Aktivitas Jurnal', 'Pinjaman Karyawan'];
      const kasbankModules = ['Kas & Bank', 'Pembayaran', 'Penerimaan', 'Transfer Bank', 'Smartlink E-Banking', 'Rekening Koran', 'Histori Bank', 'Rekonsiliasi Bank', 'Smartlink Virtual Account', 'Smartlink E-Payment', 'Pencairan Pinjaman', 'Pembayaran Angsuran', 'Pelunasan Pinjaman'];

      if (pembelianModules.includes(currentModule)) {
        crumbs.push({ label: 'Pembelian', action: () => { setCurrentModule('Pembelian'); setActiveTab('index'); } });
        if (currentModule !== 'Pembelian') {
          crumbs.push({ label: currentModule, action: () => { setCurrentModule(currentModule); setActiveTab('index'); } });
        }
      } else if (penjualanModules.includes(currentModule)) {
        crumbs.push({ label: 'Penjualan', action: () => { setCurrentModule('Penjualan'); setActiveTab('index'); } });
        if (currentModule !== 'Penjualan') {
          crumbs.push({ label: currentModule, action: () => { setCurrentModule(currentModule); setActiveTab('index'); } });
        }
      } else if (persediaanModules.includes(currentModule)) {
        crumbs.push({ label: 'Persediaan', action: () => { setCurrentModule('Persediaan'); setActiveTab('index'); } });
        if (currentModule !== 'Persediaan') {
          crumbs.push({ label: currentModule, action: () => { setCurrentModule(currentModule); setActiveTab('index'); } });
        }
      } else if (assetModules.includes(currentModule)) {
        crumbs.push({ label: 'Asset Tetap', action: () => { setCurrentModule('Asset Tetap'); setActiveTab('index'); } });
        if (currentModule !== 'Asset Tetap') {
          crumbs.push({ label: currentModule, action: () => { setCurrentModule(currentModule); setActiveTab('index'); } });
        }
      } else if (manufakturModules.includes(currentModule)) {
        crumbs.push({ label: 'Manufaktur', action: () => { setCurrentModule('Manufaktur'); setActiveTab('index'); } });
        if (currentModule !== 'Manufaktur') {
          crumbs.push({ label: currentModule, action: () => { setCurrentModule(currentModule); setActiveTab('index'); } });
        }
      } else if (kontraktorModules.includes(currentModule)) {
        crumbs.push({ label: 'Proyek Kontraktor', action: () => { setCurrentModule('Proyek Kontraktor'); setActiveTab('index'); } });
        if (currentModule !== 'Proyek Kontraktor') {
          crumbs.push({ label: currentModule, action: () => { setCurrentModule(currentModule); setActiveTab('index'); } });
        }
      } else if (taxModules.includes(currentModule)) {
        crumbs.push({ label: 'Smartlink Tax', action: () => { setCurrentModule('Smartlink Tax'); setActiveTab('index'); } });
        if (currentModule !== 'Smartlink Tax') {
          crumbs.push({ label: currentModule, action: () => { setCurrentModule(currentModule); setActiveTab('index'); } });
        }
      } else if (laporanModules.includes(currentModule)) {
        crumbs.push({ label: 'Laporan', action: () => { setCurrentModule('Laporan'); setActiveTab('index'); } });
        if (currentModule !== 'Laporan') {
          crumbs.push({ label: currentModule, action: () => { setCurrentModule(currentModule); setActiveTab('index'); } });
        }
      } else if (dashboardModules.includes(currentModule)) {
        crumbs.push({ label: 'Dashboard', action: () => { setCurrentModule('Dashboard'); setActiveTab('index'); } });
        if (currentModule !== 'Dashboard') {
          crumbs.push({ label: currentModule, action: () => { setCurrentModule(currentModule); setActiveTab('index'); } });
        }
      } else if (pengaturanModules.includes(currentModule)) {
        crumbs.push({ label: 'Pengaturan', action: () => { setCurrentModule('Pengaturan'); setActiveTab('index'); } });
        if (currentModule !== 'Pengaturan') {
          crumbs.push({ label: currentModule, action: () => { setCurrentModule(currentModule); setActiveTab('index'); } });
        }
      } else if (perusahaanModules.includes(currentModule)) {
        crumbs.push({ label: 'Perusahaan', action: () => { setCurrentModule('Perusahaan'); setActiveTab('index'); } });
        if (currentModule !== 'Perusahaan') {
          crumbs.push({ label: currentModule, action: () => { setCurrentModule(currentModule); setActiveTab('index'); } });
        }
      } else if (bukubesarModules.includes(currentModule)) {
        crumbs.push({ label: 'Buku Besar', action: () => { setCurrentModule('Buku Besar'); setActiveTab('index'); } });
        if (currentModule !== 'Buku Besar') {
          crumbs.push({ label: currentModule, action: () => { setCurrentModule(currentModule); setActiveTab('index'); } });
        }
      } else if (kasbankModules.includes(currentModule)) {
        crumbs.push({ label: 'Kas & Bank', action: () => { setCurrentModule('Kas & Bank'); setActiveTab('index'); } });
        if (currentModule !== 'Kas & Bank') {
          crumbs.push({ label: currentModule, action: () => { setCurrentModule(currentModule); setActiveTab('index'); } });
        }
      } else {
        crumbs.push({ label: currentModule });
      }
    }

    if (activeTab !== 'index' && activeTab !== 'placeholder' && articleDataMap[activeTab]) {
      crumbs.push({ label: articleDataMap[activeTab].title });
    }

    return crumbs;
  };

  return (
    <div className={`layout-root ${isDark ? 'dark-theme' : ''}`}>
      {/* 1. TOP HEADER / NAVBAR */}
      <Navbar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showProdukDropdown={showProdukDropdown}
        setShowProdukDropdown={setShowProdukDropdown}
        onHomeClick={() => { setCurrentModule('CashFlow Online'); setActiveTab('index'); setIsMobileMenuOpen(false); }}
        isDark={isDark}
        toggleTheme={toggleTheme}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* MOBILE SIDEBAR OVERLAY */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-sidebar-backdrop" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* 2. MAIN LAYOUT (SIDEBAR + CONTENT + TOC) */}
      <div className="layout-body">
        {/* SIDEBAR NAVIGATION */}
        <div className={`sidebar-wrapper ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Sidebar 
            currentModule={currentModule}
            activeTab={activeTab}
            openCategories={openCategories}
            toggleCategory={toggleCategory}
            handleSelectModule={(mod) => {
              handleSelectModule(mod);
              setIsMobileMenuOpen(false);
            }}
            setActiveTab={(tab) => {
              setActiveTab(tab as any);
              setIsMobileMenuOpen(false);
            }}
            setCurrentModule={setCurrentModule}
          />
        </div>

        {/* CONTENT AREA */}
        <main className="content-container">
          {/* Breadcrumbs */}
          <div className="breadcrumbs">
            <Home size={15} className="home-icon" onClick={() => { setCurrentModule('CashFlow Online'); setActiveTab('index'); }} />
            {getBreadcrumbs().slice(1).map((crumb, idx, arr) => {
              const isLast = idx === arr.length - 1;
              return (
                <React.Fragment key={idx}>
                  <span className="sep">›</span>
                  {isLast ? (
                    <span className="bc-current">{crumb.label}</span>
                  ) : crumb.action ? (
                    <span className="crumb-link" style={{ cursor: 'pointer', color: '#64748b' }} onClick={crumb.action}>{crumb.label}</span>
                  ) : (
                    <span>{crumb.label}</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* VIEW ROUTING */}
          {activeTab === 'placeholder' && (
            <div className="page-index">
              <h1 className="page-title">{currentModule}</h1>
              <p className="page-subtitle">Modul dokumentasi resmi untuk {currentModule} di CashFlow Online.</p>

              <div className="empty-state-box">
                <img src="/assets/empty-box.png" alt="Empty" className="empty-img" />
                <h3>Dokumentasi Sedang Disusun</h3>
                <p>Panduan langkah demi langkah untuk modul <strong>{currentModule}</strong> sedang dalam proses integrasi.</p>
                <button className="pag-btn" onClick={() => handleSelectModule('Pembelian')}>
                  Kembali ke Modul Pembelian ➔
                </button>
              </div>
            </div>
          )}

          {activeTab === 'index' && (
            <ModuleIndex 
              currentModule={currentModule}
              setActiveTab={(tab) => setActiveTab(tab as any)}
              handleSelectModule={handleSelectModule}
            />
          )}

          {/* RENDER DYNAMIC ARTICLE TEMPLATE */}
          {articleDataMap[activeTab] && (
            <ArticleTemplate 
              article={articleDataMap[activeTab]}
              onBack={() => setActiveTab('index')}
            />
          )}

          {/* FALLBACK FOR UNMAPPED TABS */}
          {activeTab !== 'index' && activeTab !== 'placeholder' && !articleDataMap[activeTab] && (
            <div className="page-index">
              <h1 className="page-title">{currentModule}</h1>
              <p className="page-subtitle">Modul dokumentasi resmi untuk {currentModule} di CashFlow Online.</p>

              <div className="empty-state-box">
                <img src="/assets/empty-box.png" alt="Empty" className="empty-img" />
                <h3>Dokumentasi Sedang Disusun</h3>
                <p>Panduan langkah demi langkah untuk artikel ini sedang dalam proses penyusunan.</p>
                <button className="pag-btn" onClick={() => setActiveTab('index')}>
                  Kembali ke Daftar Artikel ➔
                </button>
              </div>
            </div>
          )}
        </main>

        {/* RIGHT SIDEBAR: TABLE OF CONTENTS (TOC) - Strictly on Article Pages */}
        {activeTab !== 'index' && activeTab !== 'placeholder' && articleDataMap[activeTab] && (
          <aside className="toc-sidebar">
            <div className="toc-title">DAFTAR ISI</div>
            <ul className="toc-list">
              {articleDataMap[activeTab].steps.map((st) => (
                <li key={st.num} className="toc-item active">
                  <a href={`#step-${st.num}`}>{st.num}. {st.title}</a>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>

      {/* 3. FOOTER */}
      <Footer />
    </div>
  );
}
