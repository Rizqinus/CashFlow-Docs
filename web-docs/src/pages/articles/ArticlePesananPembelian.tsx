import React from 'react';
import { ArticleTemplate } from './ArticleTemplate';

interface Props {
  onBack: () => void;
}

export const ArticlePesananPembelian: React.FC<Props> = ({ onBack }) => {
  return (
    <ArticleTemplate
      title="Cara Order Barang ke Supplier dan Mencatatnya di CashFlow Online"
      category="Pesanan Pembelian"
      readTime="3 Menit"
      onBack={onBack}
      summary="Pesanan Pembelian (Purchase Order / PO) adalah dokumen pemesanan formal yang dibuat untuk memesan barang/jasa kepada pemasok sebelum barang dikirim dan sebelum faktur diterbitkan."
      steps={[
        {
          num: 1,
          title: "Buka Menu Pesanan Pembelian",
          desc: "Masuk ke navigasi utama menu Pembelian lalu pilih modul Pesanan Pembelian untuk membuka formulir pesanan baru.",
          screenshotNote: "Akses menu Pembelian dan pilih tombol modul Pesanan Pembelian",
          image: "/images/pembelian/cashflow_po_langkah_1.png"
        },
        {
          num: 2,
          title: "Pilih Pemasok dan Informasi Pengiriman",
          desc: "Tentukan nama pemasok dari daftar yang tersedia, lengkapi mata uang, tanggal transaksi pemesanan, serta nomor order.",
          screenshotNote: "Form input header PO: field Supplier, Mata Uang, Tanggal, dan No Order",
          image: "/images/pembelian/cashflow_po_langkah_2.png"
        },
        {
          num: 3,
          title: "Pilih Barang yang Dipesan",
          desc: "Ketik nama barang atau barcode pada kolom pencarian 'Scan / Cari Barang...' lalu pilih item produk dari daftar yang tampil.",
          screenshotNote: "Kolom pencarian barang dan dropdown daftar produk yang akan dipesan",
          image: "/images/pembelian/cashflow_po_langkah_3.png"
        },
        {
          num: 4,
          title: "Atur Kuantitas dan Tambahkan Barang",
          desc: "Pada modal pop-up 'Tambah Barang', tentukan kuantitas pesanan serta periksa harga satuan, lalu klik tombol 'Tambahkan' untuk memasukkan item ke daftar transaksi.",
          screenshotNote: "Modal input kuantitas barang dan tombol konfirmasi Tambahkan",
          image: "/images/pembelian/cashflow_po_langkah_4.png"
        },
        {
          num: 5,
          title: "Tambahkan Informasi Tambahan",
          desc: "Kemudian pada tab Info Lainnya (1), silakan isi detail sesuai kebutuhan seperti Cabang, Syarat Pembayaran (2), dan alamat perusahaan Kamu.",
          screenshotNote: "Tab Info Lainnya dan kolom detail syarat pembayaran",
          image: "/images/pembelian/cashflow_po_langkah_5.png"
        },
        {
          num: 6,
          title: "Simpan Pesanan Pembelian",
          desc: "Jika informasi semua sudah lengkap, silakan simpan dengan klik tombol Simpan pada pojok kanan atas formulir.",
          screenshotNote: "Tombol Simpan untuk menerbitkan dokumen pesanan pembelian",
          image: "/images/pembelian/cashflow_po_langkah_6.png"
        }
      ]}
    />
  );
};
