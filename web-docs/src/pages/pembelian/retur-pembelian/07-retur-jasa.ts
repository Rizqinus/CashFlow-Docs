import { ArticleData } from '../../../types/article';

export const rp007Data: ArticleData = {
  id: 'rp-007',
  title: "Cara Retur Pembelian Jasa",
  category: "Retur Pembelian",
  readTime: "4 Menit",
  summary: "Retur juga berlaku untuk transaksi jasa dari pemasok. Berikut cara mencatatnya, baik pembayaran masih belum lunas maupun sudah dibayar.",

  steps: [
    {
      num: 1,
      title: "Buka Faktur Jasa",
      desc: "Buka Pembelian › Faktur Pembelian dan pilih faktur yang berisi jasa, bukan barang persediaan.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Daftar faktur pembelian jasa"
    },
    {
      num: 2,
      title: "Buat Retur Jasa",
      desc: "Klik Retur, lalu pilih rincian jasa yang akan dikembalikan atau dikoreksi nilainya.",
      image: "/images/pembelian/cashflow_po_tabel_terisi.png",
      screenshotNote: "Form retur untuk rincian jasa"
    },
    {
      num: 3,
      title: "Sesuaikan Status Pembayaran",
      desc: "Jika belum lunas, hutang supplier langsung berkurang. Jika sudah lunas, sistem mencatat piutang supplier atas dana yang harus dikembalikan.",
      image: "/images/pembelian/cashflow_po_tabel_terisi.png",
      screenshotNote: "Status pembayaran dan piutang supplier"
    },
    {
      num: 4,
      title: "Simpan dan Verifikasi",
      desc: "Simpan transaksi, lalu cek jurnal. Akun beban jasa harus berkurang sesuai nilai retur.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Pratinjau jurnal retur jasa"
    }
  ],
  note: "Retur jasa tidak mengubah stok. Pastikan akun beban yang dikoreksi sama dengan akun saat faktur jasa dicatat."
};