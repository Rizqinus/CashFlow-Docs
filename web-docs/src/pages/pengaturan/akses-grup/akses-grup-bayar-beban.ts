import { ArticleData } from '../../../types/article';

export const aksesGrupBayarBebanData: ArticleData = {
  id: "ag-error-bayar-beban",
  title: "Solusi Error Pembayaran Beban Tidak Diizinkan",
  category: "Pengaturan · Akses Grup",
  readTime: "4 Menit",
  author: "Product Specialist",
  role: "Finance Consultant",
  publishDate: "24 November 2026",
  updateDate: "24 November 2026",
  summary: "Atasi pesan Anda Tidak Diijinkan Membuat Pembayaran Tanpa Melalui Utang Beban dengan memberi izin yang tepat.",
  note: "Tanpa izin ini, operator hanya bisa membayar beban melalui dokumen Utang Beban.",
  steps: [
    {
      num: 1,
      title: "Kenali error",
      desc: "Error muncul karena grup operator tidak memiliki izin pembayaran beban langsung.",
      caption: "Penyebab dipahami.",
      image: '/images/pembelian/error_nol_penyebab_po_kosong.png'
    },
    {
      num: 2,
      title: "Buka Akses Grup",
      desc: "Pengaturan → Akses Grup → grup operator → tab Hak Akses.",
      caption: "Halaman izin tampil.",
      image: '/images/pembelian/cashflow_manual_langkah_2.png'
    },
    {
      num: 3,
      title: "Aktifkan izin pembayaran",
      desc: "Centang izin Pembayaran pada modul Kas & Bank atau Buku Besar.",
      caption: "Izin pembayaran aktif.",
      image: '/images/pembelian/cashflow_manual_langkah_3.png'
    },
    {
      num: 4,
      title: "Simpan dan coba lagi",
      desc: "Klik Simpan, lalu ulangi pembayaran beban dengan akun operator.",
      caption: "Pembayaran berhasil.",
      image: '/images/pembelian/cashflow_po_langkah_6.png'
    },
  ]
};
