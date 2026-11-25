import { ArticleData } from '../../../types/article';

export const errorAkunPembulatanBelumDiisiData: ArticleData = {
  id: 'error-akun-pembulatan-belum-diisi',
  title: "Cara Mengatasi Error Akun Pembulatan Belum Diisi",
  category: "Faktur Pembelian",
  readTime: "3 Menit",
  summary: "Panduan mengatasi notifikasi error 'Akun Pembulatan di Preferensi Bagian Pembelian Belum Diisi' saat menyimpan Faktur Pembelian di CashFlow Online.",
  steps: [
    {
      num: 1,
      title: "Pahami Penyebab Munculnya Error Pembulatan",
      desc: "Error ini terjadi ketika transaksi Faktur Pembelian menghasilkan selisih desimal pembulatan pajak/nilai total, namun akun perkiraan penampung pembulatan pada pengaturan sistem masih kosong.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Notifikasi error akun pembulatan di preferensi pembelian belum diisi"
    },
    {
      num: 2,
      title: "Buka Menu Pengaturan dan Pilih Preferensi",
      desc: "Buka menu Pengaturan pada bilah navigasi utama CashFlow Online, kemudian pilih sub-menu Preferensi.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Navigasi modul Pengaturan dan menu Preferensi"
    },
    {
      num: 3,
      title: "Atur Akun Pembulatan pada Tab Akun Perkiraan",
      desc: "Klik tab Akun Perkiraan lalu buka bagian Pembelian. Pada kolom Pembulatan, pilih akun penampung yang sesuai (misalnya: Beban Pembulatan atau Beban Lain-lain), lalu klik Simpan pada formulir Preferensi.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Pemilihan akun penampung pembulatan pada preferensi bagian pembelian"
    },
    {
      num: 4,
      title: "Simpan Kembali Dokumen Faktur Pembelian",
      desc: "Kembali ke formulir Faktur Pembelian yang sempat tertunda, lalu klik tombol Simpan. Transaksi akan langsung berhasil tersimpan dan terjurnal rapi.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Penyimpanan ulang faktur pembelian berhasil tanpa pesan error"
    }
  ]
};
