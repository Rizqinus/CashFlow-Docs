import { ArticleData } from '../../../types/article';

export const biayaOngkirForwarderKeHppData: ArticleData = {
  id: 'biaya-ongkir-forwarder-ke-hpp',
  title: "Cara Mencatat Biaya Ongkir, Forwarder, dll. ke HPP Barang",
  category: "Faktur Pembelian",
  readTime: "4 Menit",
  summary: "Panduan mencatat faktur tagihan jasa forwarder atau ekspedisi yang terpisah dari pemasok barang utama, namun biayanya dialokasikan menambah HPP barang yang sudah diterima di CashFlow Online.",
  steps: [
    {
      num: 1,
      title: "Buat Faktur Pembelian untuk Vendor Forwarder/Ekspedisi",
      desc: "Masuk ke modul Pembelian ➔ Faktur Pembelian, pilih vendor forwarder/ekspedisi sebagai Pemasok, dan masukkan nomor faktur tagihan jasa.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Formulir Faktur Pembelian atas nama vendor jasa ekspedisi/forwarder"
    },
    {
      num: 2,
      title: "Input Biaya Ongkir di Tab Biaya Lainnya",
      desc: "Buka tab Biaya Lainnya, pilih akun Beban Angkut Pembelian atau biaya terkait, lalu masukkan nilai nominal biaya ongkir/handling.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Pengisian akun biaya dan nilai ongkir pada tab Biaya Lainnya"
    },
    {
      num: 3,
      title: "Centang Alokasikan ke Barang dan Pilih Nomor Penerimaan",
      desc: "Centang kotak 'Alokasikan ke Barang', lalu tentukan dokumen rujukan (pilih nomor Penerimaan Barang yang membawa produk impor/terkirim).",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Opsi Alokasikan ke Barang dan pemilihan nomor surat penerimaan barang"
    },
    {
      num: 4,
      title: "Simpan Transaksi untuk Distribusi HPP Otomatis",
      desc: "Klik Simpan. CashFlow Online akan menjurnal hutang ke vendor ekspedisi dan secara otomatis mendistribusikan biaya ke nilai HPP barang pada laporan persediaan.",
      image: "/images/pembelian/cashflow_po_menu_navigasi.png",
      screenshotNote: "Penyimpanan faktur forwarder dan konfirmasi update HPP persediaan"
    }
  ]
};
