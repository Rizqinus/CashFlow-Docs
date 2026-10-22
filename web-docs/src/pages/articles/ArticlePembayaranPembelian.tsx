import React from 'react';
import { ArticleTemplate } from './ArticleTemplate';

interface Props {
  onBack: () => void;
}

export const ArticlePembayaranPembelian: React.FC<Props> = ({ onBack }) => {
  return (
    <ArticleTemplate
      title="Cara Membuat Pembayaran Pembelian (Pelunasan Hutang)"
      category="Pembayaran Pembelian"
      readTime="2.5 Menit"
      onBack={onBack}
      summary="Pembayaran Pembelian digunakan untuk mencatat pengeluaran kas atau bank guna melunasi faktur pembelian yang sudah jatuh tempo kepada pihak pemasok."
      steps={[
        {
          num: 1,
          title: "Buka Menu Pembayaran Pembelian",
          desc: "Masuk ke menu Pembelian ➔ Pembayaran Pembelian, kemudian klik Tambah Transaksi Baru.",
          screenshotNote: "Navigasi modul Pembayaran Pembelian dan daftar antrean pelunasan"
        },
        {
          num: 2,
          title: "Pilih Pemasok dan Akun Kas/Bank Pengeluaran",
          desc: "Pilih nama pemasok yang ingin dibayar dan tentukan akun kas atau rekening bank yang digunakan untuk melakukan transfer/pembayaran.",
          screenshotNote: "Dropdown pilihan pemasok dan dropdown akun kas/bank sumber dana"
        },
        {
          num: 3,
          title: "Pilih Faktur yang Akan Dilunasi",
          desc: "Tandai faktur-faktur yang jatuh tempo, tentukan nominal pelunasan (lunas penuh atau sebagian/parsial).",
          screenshotNote: "Tabel daftar faktur belum lunas dan kolom alokasi nominal pembayaran"
        },
        {
          num: 4,
          title: "Simpan dan Cetak Bukti Pengeluaran Kas/Bank",
          desc: "Pastikan total pembayaran sesuai, lalu klik tombol Simpan. Cetak bukti transfer/pengeluaran jika diperlukan tanda terima fisik.",
          screenshotNote: "Notifikasi pembayaran berhasil dan tombol cetak bukti kas keluar"
        }
      ]}
    />
  );
};
