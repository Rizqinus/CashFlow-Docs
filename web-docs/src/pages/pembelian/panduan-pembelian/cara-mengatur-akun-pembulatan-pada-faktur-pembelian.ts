import { ArticleData } from '../../../types/article';

export const artBeliPembulatanData: ArticleData = {
  "id": "art-beli-pembulatan",
  "title": "Cara mengatur akun pembulatan pada faktur pembelian",
  "category": "Panduan Pembelian",
  "readTime": "4 Menit",
  "summary": "Atur akun penampung selisih pembulatan agar faktur bisa disimpan.",
  "steps": [
    {
      "num": 1,
      "title": "Buka Preferensi Pembelian",
      "desc": "Masuk ke Pengaturan, lalu buka preferensi Pembelian dan cari pengaturan akun pembulatan.",
      "image": "/images/pembelian/cashflow_po_menu_navigasi.png",
      "screenshotNote": "Buka Preferensi Pembelian"
    },
    {
      "num": 2,
      "title": "Isi Akun Pembulatan",
      "desc": "Pilih akun perkiraan yang dipakai menampung selisih pembulatan faktur.",
      "image": "/images/pembelian/cashflow_po_menu_navigasi.png",
      "screenshotNote": "Isi Akun Pembulatan"
    },
    {
      "num": 3,
      "title": "Buat Faktur dengan Selisih",
      "desc": "Buat faktur pembelian yang memiliki selisih desimal antara total dan nilai jurnal.",
      "image": "/images/pembelian/cashflow_po_menu_navigasi.png",
      "screenshotNote": "Buat Faktur dengan Selisih"
    },
    {
      "num": 4,
      "title": "Simpan dan Cek Jurnal",
      "desc": "Simpan faktur, lalu periksa jurnal pembulatan agar nilai tetap seimbang.",
      "image": "/images/pembelian/cashflow_po_menu_navigasi.png",
      "screenshotNote": "Simpan dan Cek Jurnal"
    }
  ]
};
