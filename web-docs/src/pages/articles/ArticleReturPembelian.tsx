import React from 'react';
import { ArticleTemplate } from './ArticleTemplate';

interface Props {
  onBack: () => void;
}

export const ArticleReturPembelian: React.FC<Props> = ({ onBack }) => {
  return (
    <ArticleTemplate
      title="Cara Membuat Retur Pembelian (Pengembalian Barang)"
      category="Retur Pembelian"
      readTime="3 Menit"
      onBack={onBack}
      summary="Retur Pembelian mencatat pengembalian barang yang cacat/rusak atau tidak sesuai spesifikasi pesanan kepada pihak pemasok."
      steps={[
        {
          num: 1,
          title: "Buka Menu Retur Pembelian",
          desc: "Navigasi ke menu Pembelian ➔ Retur Pembelian dan klik tombol 'Buat Retur Baru'.",
          screenshotNote: "Menu Retur Pembelian dan daftar riwayat pengembalian barang"
        },
        {
          num: 2,
          title: "Tentukan Pemasok dan Faktur/Penerimaan Asal",
          desc: "Pilih pemasok terkait dan pilih dokumen asal pengembalian (berdasarkan Penerimaan Barang atau Faktur Pembelian).",
          screenshotNote: "Pilihan dokumen rujukan retur pembelian"
        },
        {
          num: 3,
          title: "Pilih Item Barang dan Kuantitas yang Diretur",
          desc: "Pilih barang yang rusak, masukkan jumlah kuantitas yang dikembalikan ke pemasok beserta alasan pengembalian.",
          screenshotNote: "Form input kuantitas retur dan kolom alasan pengembalian"
        },
        {
          num: 4,
          title: "Validasi dan Simpan Dokumen Retur",
          desc: "Periksa kembali kuantitas retur agar stok gudang dan hutang terpangkas secara akurat, lalu klik 'Simpan'.",
          screenshotNote: "Tombol simpan retur pembelian dan status pemotongan hutang usaha"
        }
      ]}
    />
  );
};
