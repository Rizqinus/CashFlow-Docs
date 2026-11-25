import { ArticleData } from '../../../types/article';

export const rp006Data: ArticleData = {
  id: 'rp-006',
  title: "Cara Mengembalikan Biaya yang Sudah Ditagihkan Supplier",
  category: "Retur Pembelian",
  readTime: "4 Menit",
  summary: "Biaya dari Faktur Pembelian ternyata tidak sesuai? Retur biaya bisa dicatat memakai barang non persediaan agar jurnal tetap rapi.",

  steps: [
    {
      num: 1,
      title: "Buka Faktur dengan Biaya",
      desc: "Pilih faktur pembelian yang memiliki rincian biaya, misalnya ongkir atau jasa.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Faktur pembelian dengan rincian biaya"
    },
    {
      num: 2,
      title: "Pilih Barang Non Persediaan",
      desc: "Pada form retur, tambahkan barang bertipe Non Persediaan yang mewakili biaya tersebut.",
      image: "/images/pembelian/cashflow_po_tabel_terisi.png",
      screenshotNote: "Pilihan barang non persediaan"
    },
    {
      num: 3,
      title: "Isi Nilai Biaya",
      desc: "Masukkan jumlah biaya yang dikembalikan supplier dan akun biaya yang akan dikoreksi.",
      image: "/images/pembelian/cashflow_po_tabel_terisi.png",
      screenshotNote: "Rincian nilai dan akun biaya"
    },
    {
      num: 4,
      title: "Simpan dan Cek Jurnal",
      desc: "Simpan retur, lalu pastikan akun biaya berkurang dan hutang supplier menyesuaikan.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Pratinjau jurnal koreksi biaya"
    }
  ],
  note: "Gunakan barang non persediaan khusus (misalnya Biaya Retur) agar tidak mengacaukan stok barang dagangan."
};