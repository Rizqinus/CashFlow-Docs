import React from 'react';
import { ArticleTemplate } from './ArticleTemplate';

interface Props {
  onBack: () => void;
}

export const ArticlePOUangMuka: React.FC<Props> = ({ onBack }) => {
  return (
    <ArticleTemplate
      title="Cara Membuat Pesanan Pembelian Dengan Uang Muka"
      category="Pesanan Pembelian"
      readTime="3 Menit"
      onBack={onBack}
      summary="Pernah pesan barang ke pemasok dan diminta bayar DP (Uang Muka) dulu? Di CashFlow Online, kamu bisa catat uang muka pembelian yang didahului pesanan agar pembayaran awal langsung tersambung ke nomor PO tanpa input berulang."
      steps={[
        {
          num: 1,
          title: "Buka Modul Pembelian dan Pilih Uang Muka Pembelian",
          desc: "Masuk ke navigasi modul Pembelian, kemudian pilih menu Uang Muka Pembelian.",
          screenshotNote: "Navigasi modul Pembelian dan menu Uang Muka Pembelian"
        },
        {
          num: 2,
          title: "Pilih Pemasok dan Cari Nomor Pesanan (PO)",
          desc: "Tentukan nama pemasok dan tanggal transaksi. Pada bagian kolom Nomor Pesanan / No. PO, klik untuk mencari pesanan pembelian yang akan dibayarkan uang mukanya.",
          screenshotNote: "Pencarian nomor PO rujukan pada formulir uang muka pembelian"
        },
        {
          num: 3,
          title: "Tentukan Nilai Uang Muka dan No. Faktur DP",
          desc: "Isi nominal uang muka (DP) yang disepakati. Masuk ke tab Info Lainnya (i), lalu ketikkan nomor faktur fisik uang muka dari pihak pemasok.",
          screenshotNote: "Form pengisian nominal DP dan nomor faktur tagihan uang muka"
        },
        {
          num: 4,
          title: "Proses Pembayaran Kas/Bank dan Simpan Transaksi",
          desc: "Klik tombol Proses ➔ Pembayaran. Lengkapi informasi akun bank pengeluaran, klik tombol Hitung Nilai Pembayaran, lalu klik Simpan.",
          screenshotNote: "Form pembayaran kas/bank untuk pelunasan uang muka PO"
        }
      ]}
    />
  );
};
