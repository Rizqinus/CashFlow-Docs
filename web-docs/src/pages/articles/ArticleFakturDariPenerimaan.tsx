import React from 'react';
import { ArticleTemplate } from './ArticleTemplate';

interface Props {
  onBack: () => void;
}

export const ArticleFakturDariPenerimaan: React.FC<Props> = ({ onBack }) => {
  return (
    <ArticleTemplate
      title="Cara Membuat Faktur Pembelian Berasal dari Penerimaan Barang"
      category="Faktur Pembelian"
      readTime="3 Menit"
      onBack={onBack}
      summary="Barang sudah sampai di gudang dan sudah dicatat di formulir Penerimaan Barang? Begini cara membuat tagihan faktur pembelian langsung dari nomor tanda terima barang dengan cepat dan akurat."
      steps={[
        {
          num: 1,
          title: "Buka Menu Faktur Pembelian",
          desc: "Masuk ke modul Pembelian ➔ Faktur Pembelian. Klik tombol Data Baru (+).",
          screenshotNote: "Formulir baru Faktur Pembelian"
        },
        {
          num: 2,
          title: "Pilih Pemasok dan Tarik Penerimaan Barang",
          desc: "Tentukan nama pemasok. Klik tombol 'Ambil Data', pilih opsi 'Penerimaan Barang', kemudian centang nomor surat penerimaan barang yang ingin ditagihkan.",
          screenshotNote: "Dropdown Ambil Data ➔ Penerimaan Barang dan modal centang dokumen"
        },
        {
          num: 3,
          title: "Periksa Kuantitas dan Harga Barang Masuk",
          desc: "Daftar barang beserta kuantitas fisik yang masuk akan langsung terisi otomatis. Cocokkan harga satuan dengan invoice resmi dari supplier.",
          screenshotNote: "Tabel rincian barang hasil penarikan surat penerimaan barang"
        },
        {
          num: 4,
          title: "Isi No. Faktur Tagihan Pemasok dan Simpan",
          desc: "Klik tab Info Lainnya (i), isi kolom No. Faktur Pemasok, lalu klik tombol Simpan untuk memposting hutang usaha.",
          screenshotNote: "Tab Info Lainnya pengisian No. Faktur Pemasok dan tombol simpan"
        }
      ]}
    />
  );
};
