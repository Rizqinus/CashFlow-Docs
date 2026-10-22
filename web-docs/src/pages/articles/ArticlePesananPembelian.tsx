import React from 'react';
import { ArticleTemplate } from './ArticleTemplate';

interface Props {
  onBack: () => void;
}

export const ArticlePesananPembelian: React.FC<Props> = ({ onBack }) => {
  return (
    <ArticleTemplate
      title="Cara Membuat Pesanan Pembelian (Purchase Order)"
      category="Pesanan Pembelian"
      readTime="3 Menit"
      onBack={onBack}
      summary="Pesanan Pembelian (Purchase Order / PO) adalah dokumen pemesanan formal yang dibuat untuk memesan barang/jasa kepada pemasok sebelum barang dikirim dan sebelum faktur diterbitkan."
      steps={[
        {
          num: 1,
          title: "Buka Menu Pesanan Pembelian",
          desc: "Masuk ke navigasi utama menu Pembelian lalu pilih modul Pesanan Pembelian. Klik tombol 'Tambah Baru' (+) pada pojok atas layar.",
          screenshotNote: "Tangkapan layar halaman utama daftar Pesanan Pembelian dan tombol Tambah Baru"
        },
        {
          num: 2,
          title: "Pilih Pemasok dan Informasi Pengiriman",
          desc: "Tentukan nama pemasok dari daftar yang tersedia, lengkapi tanggal transaksi pemesanan, tanggal estimasi pengiriman, serta syarat pembayaran (TOP).",
          screenshotNote: "Form input header PO: field Pemasok, Tanggal Pesanan, dan Syarat Pembayaran"
        },
        {
          num: 3,
          title: "Pilih Barang dan Tentukan Kuantitas Pesanan",
          desc: "Cari nama barang atau barcode barang yang dipesan. Tentukan kuantitas pesanan, satuan barang, dan periksa harga satuan yang disepakati.",
          screenshotNote: "Modal pencarian barang dan input kuantitas serta harga satuan"
        },
        {
          num: 4,
          title: "Simpan Transaksi Pesanan Pembelian",
          desc: "Periksa kembali ringkasan Subtotal, PPN/Pajak, dan Biaya Kirim jika ada. Jika data sudah benar, klik tombol 'Simpan' untuk menerbitkan nomor PO.",
          screenshotNote: "Tombol Simpan form PO dan status dokumen berhasil disimpan"
        }
      ]}
    />
  );
};
