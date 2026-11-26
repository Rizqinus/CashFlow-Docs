export interface PembelianArticleMeta {
  id: string;
  title: string;
  desc: string;
}

export interface PembelianModuleMeta {
  name: string;
  articles: PembelianArticleMeta[];
}

export const pembelianModules: PembelianModuleMeta[] = [
  {
    "name": "Pesanan Pembelian",
    "articles": [
      {
        "id": "po-create",
        "title": "Cara Order Barang ke Supplier (Pesanan Pembelian)",
        "desc": ""
      },
      {
        "id": "po-dp",
        "title": "Cara Mencatat Uang Muka (DP) Pembelian ke Supplier",
        "desc": ""
      },
      {
        "id": "po-cancel",
        "title": "Cara Membatalkan Pesanan Pembelian",
        "desc": ""
      },
      {
        "id": "po-so",
        "title": "Cara Order Barang dari Pesanan Penjualan",
        "desc": ""
      },
      {
        "id": "po-excel",
        "title": "Cara Input Banyak Data Pembelian dari Excel",
        "desc": ""
      },
      {
        "id": "po-valas",
        "title": "Cara Memasukkan Data Pembelian Valas Luar Negeri",
        "desc": ""
      },
      {
        "id": "po-pr",
        "title": "Membuat Pesanan Pembelian dari Permintaan Barang",
        "desc": ""
      },
      {
        "id": "po-delete-batch",
        "title": "Cara Menghapus Banyak Pesanan Pembelian Sekaligus",
        "desc": ""
      }
    ]
  },
  {
    "name": "Penerimaan Barang",
    "articles": [
      {
        "id": "art1",
        "title": "Cara mencatat barang masuk dari supplier",
        "desc": ""
      },
      {
        "id": "art2",
        "title": "Cara Menerima Barang dari Pesanan Pembelian yang Sudah Dibuat",
        "desc": ""
      },
      {
        "id": "art3",
        "title": "Cara Mengatasi Pesan Error: Jumlah Pengeluaran Tidak Boleh Nol",
        "desc": ""
      }
    ]
  },
  {
    "name": "Uang Muka Pembelian",
    "articles": [
      {
        "id": "um-001",
        "title": "Cara mencatat DP pembelian ke supplier",
        "desc": "Buat dan bayar uang muka pembelian agar saldo DP dan utang supplier tercatat rapi."
      },
      {
        "id": "um-002",
        "title": "Cara membuat uang muka pembelian partial",
        "desc": "Catat DP yang dipakai bertahap saat barang datang sebagian."
      },
      {
        "id": "um-003",
        "title": "Cara bayar DP supplier dari pesanan pembelian",
        "desc": "Bayar uang muka langsung dari PO tanpa input transaksi ganda."
      },
      {
        "id": "um-004",
        "title": "Cara mencatat uang muka pembelian berupa barang",
        "desc": "Catat DP yang dibayar dengan barang, bukan uang tunai."
      },
      {
        "id": "um-005",
        "title": "Cara menginput DP pembelian lama di CashFlow",
        "desc": "Pindahkan saldo DP yang sudah ada sebelum migrasi."
      }
    ]
  },
  {
    "name": "Faktur Pembelian",
    "articles": [
      {
        "id": "faktur-create",
        "title": "Cara Membuat Faktur Pembelian",
        "desc": ""
      },
      {
        "id": "faktur-po",
        "title": "Proses Pesanan Pembelian Menjadi Tagihan Supplier",
        "desc": ""
      },
      {
        "id": "faktur-terima",
        "title": "Invoice Dari Barang yang Sudah Diterima",
        "desc": ""
      },
      {
        "id": "faktur-sebelum-datang",
        "title": "Invoice Supplier Sebelum Barang Datang",
        "desc": ""
      },
      {
        "id": "faktur-tagihan-sebelum-terima",
        "title": "Tagihan Supplier Sebelum Barang Diterima",
        "desc": ""
      },
      {
        "id": "faktur-beban-cost",
        "title": "Alokasi Beban Pembelian ke Cost Persediaan",
        "desc": ""
      },
      {
        "id": "faktur-ongkir-hpp",
        "title": "Alokasi Biaya Ongkir Forwarder ke HPP",
        "desc": ""
      },
      {
        "id": "faktur-potong-dp",
        "title": "Potong Faktur Pembelian dengan Uang Muka",
        "desc": ""
      },
      {
        "id": "faktur-kurangi-tagihan",
        "title": "Kurangi Tagihan dengan Potongan Supplier",
        "desc": ""
      },
      {
        "id": "faktur-upload-excel",
        "title": "Upload Faktur Pembelian dari File Excel",
        "desc": ""
      },
      {
        "id": "faktur-pajak-renovasi",
        "title": "Pajak Jasa Renovasi Perorangan pada Faktur Pembelian",
        "desc": ""
      },
      {
        "id": "faktur-diskon-jurnal",
        "title": "Solusi Diskon Tidak Muncul di Jurnal Faktur Pembelian",
        "desc": ""
      },
      {
        "id": "faktur-akun-pembulatan",
        "title": "Mengatasi Error Akun Pembulatan Belum Diisi",
        "desc": ""
      },
      {
        "id": "faktur-error-update-cost",
        "title": "Mengatasi Error Tidak Dapat Memperbarui Biaya Persediaan",
        "desc": ""
      }
    ]
  },
  {
    "name": "Pembayaran Pembelian",
    "articles": [
      {
        "id": "pb-001",
        "title": "Cara mencatat pembayaran pembelian ke supplier",
        "desc": "Kurangi utang supplier otomatis saat tagihan dibayar."
      },
      {
        "id": "pb-002",
        "title": "Cara membuat pembayaran pembelian sebagian",
        "desc": "Catat cicilan pembayaran tanpa menutup seluruh faktur."
      },
      {
        "id": "pb-003",
        "title": "Cara input diskon supplier saat bayar utang",
        "desc": "Catat potongan supplier saat pelunasan faktur."
      },
      {
        "id": "pb-004",
        "title": "Cara mengatasi kelebihan transfer ke supplier",
        "desc": "Rapikan selisih lebih bayar akibat transfer melebihi tagihan."
      }
    ]
  },
  {
    "name": "Retur Pembelian",
    "articles": [
      {
        "id": "rp-001",
        "title": "Fitur Retur Pembelian CashFlow Online dan Fungsinya",
        "desc": ""
      },
      {
        "id": "rp-002",
        "title": "Cara Mencatat Pengembalian Barang ke Supplier dari Faktur",
        "desc": ""
      },
      {
        "id": "rp-003",
        "title": "Cara Membuat Retur Pembelian Sebagian",
        "desc": ""
      },
      {
        "id": "rp-004",
        "title": "Cara Retur Barang ke Supplier Setelah Pembayaran Lunas",
        "desc": ""
      },
      {
        "id": "rp-005",
        "title": "Cara Mencatat Retur Pembelian untuk Faktur Dimuka",
        "desc": ""
      },
      {
        "id": "rp-006",
        "title": "Cara Mengembalikan Biaya yang Sudah Ditagihkan Supplier",
        "desc": ""
      },
      {
        "id": "rp-007",
        "title": "Cara Retur Pembelian Jasa",
        "desc": ""
      }
    ]
  },
  {
    "name": "Harga Pemasok",
    "articles": [
      {
        "id": "hp-001",
        "title": "Cara membuat harga pemasok",
        "desc": "Simpan harga beli per supplier agar input pembelian lebih cepat."
      }
    ]
  },
  {
    "name": "Klaim Pemasok",
    "articles": [
      {
        "id": "kp-001",
        "title": "Mengenal fitur klaim pemasok",
        "desc": "Fungsi klaim untuk barang rusak, kurang, atau salah kirim."
      },
      {
        "id": "kp-002",
        "title": "Cara membuat klaim pemasok (kirim barang ke supplier)",
        "desc": "Catat retur klaim agar stok dan jurnal otomatis terbentuk."
      },
      {
        "id": "kp-003",
        "title": "Cara mencatat barang pengganti hasil klaim supplier",
        "desc": "Terima barang pengganti tanpa mengacaukan stok dan utang."
      }
    ]
  },
  {
    "name": "Kategori Pemasok",
    "articles": [
      {
        "id": "ktp-001",
        "title": "Cara mengelompokkan supplier",
        "desc": "Kelompokkan pemasok berdasarkan jenis produk atau wilayah."
      },
      {
        "id": "ktp-002",
        "title": "Cara membagi supplier dalam beberapa kelompok",
        "desc": "Buat subkategori agar data pemasok mudah difilter."
      }
    ]
  },
  {
    "name": "Pemasok",
    "articles": [
      {
        "id": "pms-001",
        "title": "Cara menambahkan supplier baru",
        "desc": "Lengkapi data pemasok, kontak, dan akun utang."
      },
      {
        "id": "pms-002",
        "title": "Cara import supplier dari Excel",
        "desc": "Impor banyak pemasok sekaligus dengan template."
      },
      {
        "id": "pms-003",
        "title": "Cara menggunakan lebih dari satu akun utang untuk pemasok",
        "desc": "Atur akun utang berbeda per pemasok."
      },
      {
        "id": "pms-004",
        "title": "Solusi nilai PPh 21 lebih tinggi dari tarif seharusnya",
        "desc": "Perbaiki tarif PPh 21 dengan melengkapi NPWP pemasok."
      }
    ]
  },
  {
    "name": "Perintah Pembayaran",
    "articles": [
      {
        "id": "pp-001",
        "title": "Cara membuat perintah pembayaran ke pemasok",
        "desc": "Jadwalkan dan pantau tagihan pemasok hingga transfer selesai."
      }
    ]
  },
  {
    "name": "Transfer Pemasok",
    "articles": [
      {
        "id": "tp-001",
        "title": "Mengenal fitur transfer pemasok",
        "desc": "Kelola pembayaran pemasok lebih cepat dan akurat."
      },
      {
        "id": "tp-002",
        "title": "Cara membuat transfer pemasok dari perintah pembayaran",
        "desc": "Transfer otomatis dari perintah pembayaran tanpa input ulang."
      },
      {
        "id": "tp-003",
        "title": "Cara transfer ke pemasok tanpa perintah pembayaran",
        "desc": "Catat transfer langsung untuk pembayaran cepat."
      }
    ]
  },
  {
    "name": "Lainnya",
    "articles": [
      {
        "id": "art-beli-lain",
        "title": "Cara Mencatat Pembelian yang Dilunasi Pihak Lain",
        "desc": "Panduan pencatatan transaksi pembelian yang pembayarannya dilakukan oleh pihak ketiga."
      },
      {
        "id": "art-beli-lebih",
        "title": "Cara Mencatat Kelebihan Pembayaran Pembelian",
        "desc": "Solusi mencatat selisih lebih bayar ke supplier agar saldo dan jurnal tetap seimbang."
      },
      {
        "id": "art-beli-pembulatan",
        "title": "Cara mengatur akun pembulatan pada faktur pembelian",
        "desc": "Atur akun penampung selisih pembulatan agar faktur bisa disimpan."
      },
      {
        "id": "art-beli-alokasi-biaya",
        "title": "Cara hitung alokasi biaya tambahan ke harga pokok",
        "desc": "Bebankan ongkir, asuransi, dan biaya lain ke HPP barang."
      },
      {
        "id": "art-beli-ppn-valas",
        "title": "Cara bayar PPN pembelian barang dari luar negeri",
        "desc": "Catat pembayaran hutang PPN valas atas impor barang."
      }
    ]
  }
];

export const pembelianExtraModules = pembelianModules.filter(
  (m) => !['Pesanan Pembelian','Penerimaan Barang','Faktur Pembelian','Retur Pembelian','Lainnya'].includes(m.name)
);
