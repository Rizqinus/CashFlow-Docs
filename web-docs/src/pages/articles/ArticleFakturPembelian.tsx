import React from 'react';
import { ArticleTemplate } from './ArticleTemplate';

interface Props {
  onBack: () => void;
}

export const ArticleFakturPembelian: React.FC<Props> = ({ onBack }) => {
  return (
    <ArticleTemplate
      title="Cara Membuat Faktur Pembelian (Purchase Invoice)"
      category="Faktur Pembelian"
      readTime="3.5 Menit"
      onBack={onBack}
      summary="Faktur Pembelian mencatat tagihan resmi dari pemasok atas barang atau jasa yang telah diterima, sekaligus membentuk hutang usaha (Account Payable) perusahaan dalam laporan keuangan."
      steps={[
        {
          num: 1,
          title: "Akses Menu Faktur Pembelian",
          desc: "Navigasi ke menu Pembelian ➔ Faktur Pembelian. Klik tombol 'Baru' untuk membuka formulir penagihan faktur.",
          screenshotNote: "Halaman modul Faktur Pembelian dan navigasi tombol Baru"
        },
        {
          num: 2,
          title: "Tarik Data dari Penerimaan Barang (Surat Jalan)",
          desc: "Klik tombol 'Ambil Data' lalu pilih 'Penerimaan Barang'. Pilih nomor penerimaan barang yang akan ditagihkan agar barang dan kuantitas terisi otomatis.",
          screenshotNote: "Modal tarik data penerimaan barang ke dalam faktur pembelian"
        },
        {
          num: 3,
          title: "Masukkan No. Faktur Tagihan dari Pemasok",
          desc: "Ketik nomor surat tagihan/faktur fisik dari pemasok pada kolom No. Faktur Pemasok untuk validasi pencatatan hutang.",
          screenshotNote: "Kolom input No. Faktur Pemasok dan tanggal jatuh tempo"
        },
        {
          num: 4,
          title: "Periksa Nilai Jurnal dan Simpan Faktur",
          desc: "Pastikan total tagihan, potongan termin, dan pajak sesuai dengan surat tagihan fisik. Klik 'Simpan' untuk memposting hutang usaha.",
          screenshotNote: "Pratinjau total faktur pembelian dan tombol simpan final"
        }
      ]}
    />
  );
};
