import React from 'react';
import { ArticleTemplate } from './ArticleTemplate';

interface Props {
  onBack: () => void;
}

export const ArticleFakturDariPO: React.FC<Props> = ({ onBack }) => {
  return (
    <ArticleTemplate
      title="Cara Memproses PO Menjadi Tagihan Supplier (Faktur Pembelian)"
      category="Faktur Pembelian"
      readTime="2.5 Menit"
      onBack={onBack}
      summary="Jika perusahaan membeli jasa atau barang yang langsung ditagihkan tanpa melalui tahap penerimaan gudang fisik, pesanan pembelian (PO) dapat langsung ditarik ke dalam formulir Faktur Pembelian."
      steps={[
        {
          num: 1,
          title: "Buka Menu Faktur Pembelian",
          desc: "Navigasi ke menu Pembelian ➔ Faktur Pembelian, lalu buka formulir faktur baru.",
          screenshotNote: "Akses menu Faktur Pembelian pada modul Pembelian"
        },
        {
          num: 2,
          title: "Ambil Data Berdasarkan Pesanan Pembelian",
          desc: "Pilih pemasok, klik tombol 'Ambil Data', lalu pilih 'Pesanan Pembelian'. Pilih nomor PO yang akan ditagihkan.",
          screenshotNote: "Modal pemilihan nomor PO yang akan dialihkan menjadi faktur"
        },
        {
          num: 3,
          title: "Lakukan Verifikasi Nilai Transaksi dan Pajak",
          desc: "Periksa kembali kuantitas, nilai diskon, dan tarif PPN apakah sudah sesuai dengan pesanan awal.",
          screenshotNote: "Tabel rincian faktur dengan kalkulasi subtotal dan pajak PPN"
        },
        {
          num: 4,
          title: "Simpan Transaksi Faktur Pembelian",
          desc: "Isi nomor faktur dari pemasok pada tab Info Lainnya, kemudian klik tombol Simpan.",
          screenshotNote: "Konfirmasi penyimpanan faktur tagihan supplier"
        }
      ]}
    />
  );
};
