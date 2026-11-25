import { ArticleData } from '../../../types/article';

export const rp001Data: ArticleData = {
  id: 'rp-001',
  title: "Fitur Retur Pembelian CashFlow Online dan Fungsinya",
  category: "Retur Pembelian",
  readTime: "4 Menit",
  summary: "Fitur Retur Pembelian mencatat pengembalian barang ke supplier dari faktur pembelian. Stok, hutang, dan jurnal otomatis menyesuaikan tanpa input manual.",

  steps: [
    {
      num: 1,
      title: "Mengakses Fitur Retur Pembelian",
      desc: "Buka modul Pembelian, lalu pilih menu Retur Pembelian pada navigasi utama CashFlow Online.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Navigasi modul Pembelian dan menu Retur Pembelian"
    },
    {
      num: 2,
      title: "Memahami Fungsi Utamanya",
      desc: "Retur Pembelian dipakai saat barang rusak, tidak sesuai pesanan, atau jumlahnya berlebih. Transaksi ini mengurangi nilai hutang supplier dan mengembalikan stok ke gudang.",
      image: "/images/pembelian/cashflow_po_tabel_terisi.png",
      screenshotNote: "Tampilan daftar transaksi Retur Pembelian"
    },
    {
      num: 3,
      title: "Memilih Sumber Transaksi",
      desc: "Retur dapat dibuat dari Faktur Pembelian, Faktur Pajak, atau secara mandiri. Pilih sumber yang sesuai agar jurnal dan pajak tetap konsisten.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Pilihan sumber pembuatan retur"
    },
    {
      num: 4,
      title: "Meninjau Dampak Jurnal",
      desc: "Sebelum simpan, cek draf jurnal: stok bertambah, hutang berkurang, dan akun retur pembelian terisi otomatis sesuai pengaturan.",
      image: "/images/pembelian/cashflow_po_tabel_terisi.png",
      screenshotNote: "Pratinjau jurnal otomatis retur pembelian"
    }
  ],
  note: "Retur Pembelian berbeda dengan Pembayaran Pembelian. Retur mengurangi hutang karena barang dikembalikan, bukan karena uang dibayarkan."
};