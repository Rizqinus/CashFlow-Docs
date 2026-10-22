import React from 'react';
import { ArticleTemplate } from './ArticleTemplate';

interface Props {
  onBack: () => void;
}

export const ArticlePOBatal: React.FC<Props> = ({ onBack }) => {
  return (
    <ArticleTemplate
      title="Cara Membatalkan Pesanan Pembelian"
      category="Pesanan Pembelian"
      readTime="2 Menit"
      onBack={onBack}
      summary="Jika pemasok kehabisan stok atau transaksi dibatalkan oleh kedua belah pihak, pesanan pembelian yang terlanjur dibuat dapat ditutup agar tidak menggantung di laporan antrean PO."
      steps={[
        {
          num: 1,
          title: "Buka Daftar Pesanan Pembelian",
          desc: "Masuk ke menu Pembelian ➔ Pesanan Pembelian, lalu buka daftar transaksi (ikon tabel hijau).",
          screenshotNote: "Daftar transaksi pesanan pembelian dengan filter status"
        },
        {
          num: 2,
          title: "Pilih Dokumen PO yang Akan Dibatalkan",
          desc: "Cari nomor PO yang ingin dibatalkan, kemudian klik dua kali untuk membuka dokumen transaksi.",
          screenshotNote: "Membuka formulir detail transaksi pesanan pembelian terkait"
        },
        {
          num: 3,
          title: "Centang Opsi Tutup Pesanan",
          desc: "Pada bagian kanan atas form transaksi, centang kotak pilihan 'Tutup Pesanan' (Closed) dan berikan catatan alasan pembatalan jika diperlukan.",
          screenshotNote: "Opsi centang Tutup Pesanan pada formulir PO"
        },
        {
          num: 4,
          title: "Simpan Perubahan Status Dokumen",
          desc: "Klik tombol Simpan. Dokumen PO akan otomatis berstatus 'Ditutup' dan tidak bisa ditarik ke Penerimaan Barang maupun Faktur.",
          screenshotNote: "Status PO berubah menjadi Ditutup dan tidak aktif"
        }
      ]}
    />
  );
};
